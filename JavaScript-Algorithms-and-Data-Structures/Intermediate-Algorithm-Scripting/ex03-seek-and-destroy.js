/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
https://devdocs.io/javascript/functions/arguments
*/

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) { // iterate through arr
    for (var j = 0; j < args.length; j++) { // iterate through args
      if (arr[i] === args[j]) { // compare
        delete arr[i]; // delete similarities
      }
    }
  }
  return arr.filter(Boolean); // remove nulls
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
