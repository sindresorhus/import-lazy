import test from 'ava';
import m from './';

const testSkipNode4 = /^v4/.test(process.version) ? test.skip : test;
const lazyReq = m.proxy(require);

testSkipNode4('main', t => {
	const f = lazyReq('./fixtures/foo');
	t.is(f(), 'foo');

	const g = lazyReq('./fixtures/baz');
	t.is(g('j', 's'), 'bazjs');
});

testSkipNode4('lazy', () => {
	lazyReq('./fixtures/fail');
});

testSkipNode4('props', t => {
	const obj = lazyReq('./fixtures/foo.bar.js');
	t.is(obj.foo(), 'foo');
	t.is(obj.bar('j', 's'), 'barjs');
	t.is(obj.baz, 'baz');
});
