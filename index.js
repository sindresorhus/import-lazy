'use strict';
module.exports = function (fn) {
	return function (id) {
		var mod;

		return function () {
			mod = mod !== undefined ? mod : fn(id);

			if (!arguments.length) {
				return mod;
			}

			var ret = {};

			[].forEach.call(arguments, function (prop) {
				Object.defineProperty(ret, prop, {
					get: function () {
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
};
