var assert = chai.assert;

describe("测试 array 是怎么工作", function(){
	it("应该是一个 empty", function(){
		var arr = [];

		assert.equal(arr.length, 0);
	})
});

describe('获取数据', function(done){
	it('异步请求应该返回一个对象', function(){
		return fetch('https://cms.ppmoney.com/json/57b02395f3aa26a91a218637.json')
				.then(function(res){
					console.log(res);
					return res.json();
				}).then(function(json){
					expect(json).to.be.an('object');
				})
    })
})