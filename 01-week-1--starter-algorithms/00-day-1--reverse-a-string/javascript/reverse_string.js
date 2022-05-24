function reverseString(str) {
  // type your code here
  //easy solution:
  // return str.split('').reverse().join('')
  // not using .reverse()

  let rev = ''
  for (let char of str) rev = char + rev
  return rev
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
