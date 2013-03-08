
# Remove

  Array.remove function based off of John Resig's "[JavaScript Array Remove](http://ejohn.org/blog/javascript-array-remove/)"
## Installation

    $ component install esundahl/remove

## API


  As a mixin:
    
    var Remove = require('remove');
    var array = [1, 2, 3];

    Remove(array);
    array.remove(0, -3);

  As a function:

    var remove = require('remove');
    var array = [1, 2, 3];

    remove(array, 0, -3);
   

## License

  MIT
