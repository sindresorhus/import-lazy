'use strict';

var test = require('ava');
var lazyReq = require('./')(require);

test(function (t) {
	var f = lazyReq('./fixtures/foo');
	t.assert(f() === f());
	t.assert(f()() === 'foo');
});

test(function (t) {
	var obj = lazyReq('./fixtures/foo.bar.js')('foo', 'bar', 'baz');
	t.assert(obj.foo() === 'foo');
	t.assert(obj.foo() === 'foo');
	t.assert(obj.bar('j', 's') === 'barjs');
	t.assert(obj.baz === 'baz');
});
