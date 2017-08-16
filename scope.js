// Fill in the closeLid and openLid functions to set the isCookieJarOpen variable to false or true respectively.
var isCookieJarOpen = null;

function closeLid() {
  isCookieJarOpen = false;
}

function openLid() {
  /* answer here */
  isCookieJarOpen = true;
}


// Fill in the return value for the inner function to return a string, 'Hello World' using only the variables provided
// in both inner and outer functions
function outerFunction() {
  var hello = 'Hello';

  function innerFunction() {
    var world = 'World';
    return hello + " " + world;
  }
  return innerFunction();
}


// This is a function that takes in a 2d-array (or matrix) and returns the sum of all elements
// It's broken due to count variables colliding into each other.  Fix it!
function addMatrixElements(matrix) {

  var result = 0;

  for(var i = 0; i < matrix.length; i++) {
    /* fix counter variables in the second loop */
    for(var y = 0; y < matrix.length; y++) {
      result = result + matrix[i][y];
    }
  }
  return result;
}


// This function is returning the wrong userObject data. It should be returning
// Neo's information and not Morpheus'.  Fix it!
function sendDataToClient() {

  var userObject = {
    handle: 'neo',
    authenticated: false
  };
  var userObject1 = {
    handle: 'morpheus',
    authenticated: false
    };

  function authenticateUser(obj, username) {
    if (userObject.handle === username) {
      userObject.authenticated = true;
      return userObject;
    } else {
      return userObject;
    }
  }
  authenticateUser(userObject, 'neo');
  return userObject;
}










