function isPalindrome(word) {


    var len = word.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }

    return true;
}


   isPalindrome("racecar");

   isPalindrome("robot");


/*
  1. create function to evaluate whether word is a palindrome.
  2. opt for iteration over array methods to achieve this.
  3. assign length of string to variabe, len
  4. divide the string into two parts so that the letters can be compared from both the beginning and end at the same time,
     moving inwards toward the middle of the string. Use Math.floor to ensure that the string returned is less than or
     equal to its length value, which ensure that the comparison works until reaching the middle of the string and ends evaluation.
  5. Use for loop to establish conditions for comparison of letters and iterate through string
  6. return false if any two letters are not matching
  7. return true if all letters match and reach the middle without triggering false



*/

/*
   I created a function, isPalindrome, to evaluate whether passed string name is a palindrome,
  or a word that is spelled the same forwards and backwards. This function
  iterates through the string passed as argument and relies on dividing the string into
  two parts in order to systematically compare each letter from beginning and
  ending indexes to determine whether they are matching or not. If matching, the iterator continues until
  it reaches the middle of the string. If all letters match, the string is evaluated as true, or a palindrome.
  Conversely, if any of the letters fail to match, the function evaluates the string as false, or
  not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tat"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
