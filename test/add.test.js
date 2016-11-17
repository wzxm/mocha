var add = require('../src/js/add.js');
var expect = require('chai').expect;

describe('加法函数测试', function() {
	console.log(this);
	var foo = {
        bar: 'baz'
    };
    var Foo = {};

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
    it('expect 断言语法测试', function() {
        expect(add(1, 1)).to.be.equal(2);

        // 相等或不相等
        expect(4 + 5).to.be.equal(9);
        expect(4 + 5).to.be.not.equal(10);
        expect(foo).to.be.deep.equal({ bar: 'baz' });
    })

    it('任何数加 0 应该等于自身', function() {
        expect(add(1, 0)).to.be.equal(1);
    })

    it('布尔值为 true, 或为 false', function() {
        // 布尔值为true
        expect('everthing').to.be.ok;
        expect(false).to.not.be.ok;
    })

    it('include', function() {
        // include
        expect([1, 2, 3]).to.include(2);
        expect('foobar').to.contain('foo');
        expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
    })

    it('typeof', function() {
        // typeof
        expect('test').to.be.a('string');
        expect({ foo: 'bar' }).to.be.an('object');
        // expect(foo).to.be.an.instanceof(Foo);
    })

    it('empty', function() {
        // empty
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
    })

    it('match', function() {
        // match
        expect('foobar').to.match(/^foo/);
    })
})
