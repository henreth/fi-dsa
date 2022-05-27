function consecutiveSubstrings(string) {
  let sub = []
  for (let i = 0; i < string.length; i++){
    let newStr = string[i]
    if (!sub.includes(newStr)){
      sub.push(newStr)
      let j = i + 1
      while (j < string.length){
        newStr+=string[j]
        !sub.includes(newStr)? sub.push(newStr) : null
        j++
      }
    }
  }
  return sub
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
