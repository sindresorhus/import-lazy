import test from 'ava';
import m from '.';

const importLazy = m(require);

test('main', t => {
	const f = importLazy('./fixtures/foo');
	t.is(f(), f());
	t.is(f()(), 'foo');
});

test('lazy', t => {
	// `require()` does not occur unless user tries to access `foo`
	importLazy('./fixtures/fail')('foo');
	t.pass();
});

test('props', t => {
	const obj = importLazy('./fixtures/foo.bar.js')('foo', 'bar', 'baz');
	t.is(obj.foo(), 'foo');
	t.is(obj.foo(), 'foo');
	t.is(obj.bar('j', 's'), 'barjs');
	t.is(obj.baz, 'baz');
});
