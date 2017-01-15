'use strict';
module.exports = fn => {
	return id => {
		let mod;

		return function () {
			if (arguments.length === 0) {
				mod = lazy(mod, fn, id);
				return mod;
			}

			const ret = {};

			[].forEach.call(arguments, prop => {
				Object.defineProperty(ret, prop, {
					get: () => {
						mod = lazy(mod, fn, id);
						if (typeof mod[prop] === 'function') {
							return function () {
								return mod[prop].apply(mod, arguments);
							};
						}

						return mod[prop];
					}
				});
			});

			return ret;
		};
	};

	function lazy(mod, fn, id) {
		return mod === undefined ? fn(id) : mod;
	}
};
