// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) { // George's part
  // use if condition here 
    if (value < 0) {
        return "Negative number is not allowed as it cannot be calculated"
    }
    
    return Math.sqrt(value);
    // return the square root of the value
}

function calculateSquare(value) {
  return value * value; // multiply value by itself instead of using Math
}

// TODO: FIX reciprocal function


function calculateReciprocal(value) {

  // Hint: Reciprocal is 1/x
  // return the square root of the value

    // Hint: Reciprocal is 1/x
    // return the square root of the value
    return 1/value;


  return 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
  // return the natural log of the value
  if (value === 0) {
    return "Cannot get the natural log of 0";
  }
  return Math.log(value);
}

// TODO: Implement sine function
function sine(value) {

  // return the sine of the value
  return Math.sin(value);

    // return the sine of the value
    //this should work 
    return Math.sin(value); 

}

// TODO: Implement cosine function
function cosine(value) {
  // return the cosine of the value
}

// TODO: Implement tangent function
function tangent(value) {
  // return the tangent of the value
}

module.exports = {
  calculateSquareRoot,
  calculateSquare,
  calculateReciprocal,
};
