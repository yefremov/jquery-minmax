# jQuery MinMax Plugin

Find smallest and largest value in array of numbers or collection of elements.

## Description

This is another jQuery implementation of min/max technique which was mentioned by John Resig some time ago in his [Fast JavaScript Max/Min](http://ejohn.org/blog/fast-javascript-maxmin/) blog post. Since then it has spread around the web, but unfortunately, I couldn't find version that would iterate over the collection and return element based on its largest or smallest property value. That's the purpose of this plugin.

## Usage

```js
// Find smallest in array of numbers
var smallest = $.min([ 12, 2, -12, 5, 9 ]); // -12

// Retrieve collection of columns
var columns = $( '.columns' );

// Find the tallest column height
var maxHeight = columns.max(function () {
  return $( this ).height();
});

// Set equal column height
columns.height( maxHeight );
```

## License

Copyright (c) 2013 Anton Yefremov  
Free to use and abuse under the MIT license.  
[http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
