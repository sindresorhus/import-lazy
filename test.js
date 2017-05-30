import test from 'ava';
import m from '.';

const importLazy = m(require);

test('main', t => {
	const f = importLazy('./fixtures/foo');
	t.is(f(), 'foo');

	const g = importLazy('./fixtures/baz');
	t.is(g('j', 's'), 'bazjs');
});

test('lazy', t => {
	importLazy('./fixtures/fail');
	t.pass();
});

test('props', t => {
	const obj = importLazy('./fixtures/foo.bar.js');
	t.is(obj.foo(), 'foo');
	t.is(obj.bar('j', 's'), 'barjs');
	t.is(obj.baz, 'baz');
});
