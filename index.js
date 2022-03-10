function isPalindrome(word) {
  // Write your algorithm here
  let splitString = word.split("");
 let reversedAr = splitString.reverse();
 let final = reversedAr.join("");
 if(word === final){
   return true
 }
 else{
   return false
 }
}

/* 
  Add your pseudocode here
  possible solution: takes the string
  makes a var and = it to a reversed version of the string by making each character an array item and then joining them together
  checks to see if they are the same and returns true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
