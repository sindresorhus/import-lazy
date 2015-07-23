'use strict';
var slice = Array.prototype.slice
module.exports = function (fn) {
	return function (id, mod) {
		return function () {
			if (!arguments.length) return mod = lazy(mod, fn, id);
			var obj = {}, args = slice.call(arguments, 0);
			args.forEach(function (prop) {
				Object.defineProperty(obj, prop, {
					get: function () {
						mod = lazy(mod, fn, id);
						if (typeof mod[prop] === 'function') {
							return function () {
								return mod[prop].apply(mod, slice.call(arguments, 0));
							}
						} else {
							return mod[prop];
						}
					}
				});
			});
			return obj;
		};
	};
	function lazy (mod, fn, id) {
		return mod !== undefined ? mod : fn(id);
	}
};
