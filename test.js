import test from 'ava';
import fn from './';

const lazyReq = fn(require);

test('main', t => {
	const f = lazyReq('./fixtures/foo');
	t.is(f(), f());
	t.is(f()(), 'foo');
});

test('lazy', () => {
	// require does not occur unless user tries to access `foo`
	lazyReq('./fixtures/fail')('foo');
});

test('props', t => {
	const obj = lazyReq('./fixtures/foo.bar.js')('foo', 'bar', 'baz');
	t.is(obj.foo(), 'foo');
	t.is(obj.foo(), 'foo');
	t.is(obj.bar('j', 's'), 'barjs');
	t.is(obj.baz, 'baz');
});
