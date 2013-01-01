/*
 * jQuery MinMax - v0.1.0
 * Find smallest and largest value in array of numbers or collection of elements.
 * https://github.com/yefremov/jquery-minmax
 *
 * Copyright (c) 2012 Anton Yefremov
 * Free to use and abuse under the MIT license.
 * http://opensource.org/licenses/MIT
 */

(function ( factory ) {
  'use strict';

  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module
    define( ['jquery'], factory );
  } else {
    // Browser globals
    factory( jQuery );
  }
} (function ( $ ) {
  'use strict';

  // Find the smallest number
  function min( array ) {
    return Math.min.apply( null, array );
  }

  // Find the largest number
  function max( array ) {
    return Math.max.apply( null, array );
  }

  // Pass each element through a function producing array containing the return values
  function map( elements, callback ) {
    var values  = [];

    for ( var index = 0, length = elements.length; index < length; index++ ) {
      values[index] = callback.call( elements[index], index, elements[index] );
    }

    return values;
  }

  // Collection methods
  $.extend( $.fn, {
    'min': function ( callback ) {
      return min( map(this, callback) );
    }
  , 'max': function ( callback ) {
      return max( map(this, callback) );
    }
  });

  // Static methods
  $.extend({
    'min': function ( array ) {
      return min( array );
    }
  , 'max': function ( array ) {
      return max( array );
    }
  });
}));
