//Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

function isPalindrome(x) {
  // your code here
  const arr = x.split("");

let r1 = arr.join("").toLowerCase();
  let r2 = [...arr].reverse().join("").toLowerCase()
  return r1 === r2
}

isPalindrome("a")//true
isPalindrome("aba")//true
isPalindrome("Abba")//false
isPalindrome("hello")//true

// const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();