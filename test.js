import test from 'ava';
import importLazy from '.';

const importLazyBound = importLazy(require);

test('main', t => {
	const foo = importLazyBound('./fixtures/foo');
	t.is(foo(), 'foo');

	const baz = importLazyBound('./fixtures/baz');
	t.is(baz('j', 's'), 'bazjs');
});

test('lazy', t => {
	importLazyBound('./fixtures/fail');
	t.pass();
});

test('props', t => {
	const object = importLazyBound('./fixtures/foo.bar.js');
	t.is(object.foo(), 'foo');
	t.is(object.bar('j', 's'), 'barjs');
	t.is(object.baz, 'baz');
});

test('class', t => {
	const Class = importLazyBound('./fixtures/class.js');

	let instance;
	t.notThrows(() => {
		instance = new Class('42');
	});
	t.true(instance instanceof Class);
	t.is(instance.message, '42');
});

test('destructuring makes it eager', t => {
	let invoked = false;

	const fakeRequire = () => {
		invoked = true;
		return {foo: 'bar'};
	};

	const {foo} = importLazy(fakeRequire)('fake-module-name');

	t.is(foo, 'bar');
	t.true(invoked);
});
