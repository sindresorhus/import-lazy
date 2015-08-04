'use strict';
var test = require('ava');
var lazyReq = require('./')(require);

test('main', function (t) {
	var f = lazyReq('./fixtures/foo');
	t.assert(f() === f());
	t.assert(f()() === 'foo');
});

test('lazy', function () {
	// require does not occurr unless user tries to access `foo`
	lazyReq('./fixtures/fail')('foo');
});

test('props', function (t) {
	var obj = lazyReq('./fixtures/foo.bar.js')('foo', 'bar', 'baz');
	t.assert(obj.foo() === 'foo');
	t.assert(obj.foo() === 'foo');
	t.assert(obj.bar('j', 's') === 'barjs');
	t.assert(obj.baz === 'baz');
});
