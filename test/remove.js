

/**
 * Dependencies
 */

var Remove = require('remove')
var isArray = require('yields-isArray')


/**
 * Tests
 */

describe('Remove', function(){

  var array

  beforeEach(function(){
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  })

  it('should act as a normal function', function(){

    var result

    // Function
    Remove(array, 1, 3)
    array.should.eql([1,5,6,7,8,9,10])

    // Mixin
    Remove(array)
    array.remove(0)
    result = [5,6,7,8,9,10]
    Remove(result)
    array.should.eql(result)

  })

  it('should act as a mixin', function(){
    Remove(array)
    array.remove.should.be.a('function')
    isArray(array).should.equal(true)
  })

  it('should remove item from beginning', function(){

    var result

    // Function
    Remove(array, 0)
    array.should.eql([2,3,4,5,6,7,8,9,10])

    // Mixin
    Remove(array)
    array.remove(0)
    result = [3,4,5,6,7,8,9,10]
    Remove(result)
    array.should.eql(result)

  })

  it('should remove item from the end', function(){

    var result

    // Function
    Remove(array, -1)
    array.should.eql([1,2,3,4,5,6,7,8,9])

    // Mixin
    Remove(array)
    array.remove(-1)
    result = [1,2,3,4,5,6,7,8]
    Remove(result)
    array.should.eql(result)

  })

  it('should accept a range', function(){

    var result

    // Function
    Remove(array, 1, -4)
    array.should.eql([1,8,9,10])

    // Mixin
    Remove(array)
    array.remove(1,-2)
    result = [1,10]
    Remove(result)
    array.should.eql(result)

  })

  it('should be chainable', function(){

    var result

    Remove(array)
    array.remove(1).remove(5).remove(-1)
    result = [1,3,4,5,6,8,9]
    Remove(result)
    array.should.eql(result)

  })

  it('should extend Array.prototype', function(){
    Remove(Array.prototype);
    [].remove.should.be.a('function')
  })

});
