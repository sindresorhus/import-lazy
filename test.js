'use strict';
var test = require('ava');
var lazyReq = require('./')(require);

test(function (t) {
	var f = lazyReq('./fixture');
	t.assert(f() === f());
	t.assert(f()() === 'foo');
});
