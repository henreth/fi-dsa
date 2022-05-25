function romanNumeral(string) {
  let symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    // if symbol 1 has a value that is less than symbol 2
    // that means it is supposed to lower their total value
    // ie: IX -> 9 (I: 1, X:10)
      symbols[s[i]] < symbols[s[i + 1]] ? count -= symbols[s[i]] : count += symbols[s[i]]
  }

  return count

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
