# Remove

  Array.remove function based off of John Resig's "[JavaScript Array Remove](http://ejohn.org/blog/javascript-array-remove/)"

## Installation

    $ component install esundahl/remove

## API

  As a function:

```javascript
var remove = require('remove');
var array = [1, 2, 3, 4];

remove(array, 0, -2); // array = [2, 4]
```


  As a mixin:

```javascript
var Remove = require('remove');
var array = [1, 2, 3, 4];

Remove(array);
array.remove(0, -2); // array = [2, 4]
```

  
  As Array.prototype mixin:

```javascript
var Remove = require('remove');
Remove(Array.prototype);
[1, 2, 3, 4].remove(0, -2); // array = [2, 4]
```


```javascript
// Remove the second item from the array
array.remove(1);
  
// Remove the second-to-last item from the array
array.remove(-2);
  
// Remove the second and third items from the array
array.remove(1,2);
  
// Remove the last and second-to-last items from the array
array.remove(-2,-1);
```

## License

  MIT
