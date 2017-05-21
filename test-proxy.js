import test from 'ava';
import m from '.';

const testSkipNode4 = process.version.startsWith('v4') ? test.skip : test;
const importLazy = m.proxy(require);

testSkipNode4('main', t => {
	const f = importLazy('./fixtures/foo');
	t.is(f(), 'foo');

	const g = importLazy('./fixtures/baz');
	t.is(g('j', 's'), 'bazjs');
});

testSkipNode4('lazy', t => {
	importLazy('./fixtures/fail');
	t.pass();
});

testSkipNode4('props', t => {
	const obj = importLazy('./fixtures/foo.bar.js');
	t.is(obj.foo(), 'foo');
	t.is(obj.bar('j', 's'), 'barjs');
	t.is(obj.baz, 'baz');
});
