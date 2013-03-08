

/**
 * Dependencies
 */

var Remove = require('remove')


/**
 * Tests
 */

describe('Remove', function(){

  var array

  beforeEach(function(){
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Remove(array)
  })

  it('should act as a normal function', function(){
    Remove(array, 1, 2, -10, -9)
    array.should.include(1, 4, 5, 6, 7, 8)
    array.should.not.include(2, 3, 10, 9)
  })

  it('should act as a mixin', function(){
    array.remove.should.be.a('function')
  })

  it('should remove item from beginning', function(){
    array.remove(1)
    array.should.include(1, 3, 4, 5, 6, 7, 8, 9, 10)
    array.should.not.include(2)
  })

  it('should remove item from the end', function(){
    array.remove(-1)
    array.should.include(1, 3, 4, 5, 6, 7, 8, 9)
    array.should.not.include(10)
  })

  it('should remove multiple items', function(){
    array.remove(2, 4, -1 -2)
    array.should.include(1, 2, 4, 6, 7, 8)
    array.should.not.include(3, 5, 9, 10)
  })

});
