var assert = chai.assert; // 断言风格
var expect = chai.expect; // 断言风格

describe('增加Class', function() {
  it('应该增加 class 到 element 对象', function() {
    var element = { className: '' };
 
    addClass(element, 'test-class');
    assert.equal(element.className, 'test-class');

    var numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);

    addClass(element, 'new-class');
    var classes = element.className.split(' ');
    assert.equal(classes[1], 'new-class');
  });
 
  it('should not add a class which already exists');
});