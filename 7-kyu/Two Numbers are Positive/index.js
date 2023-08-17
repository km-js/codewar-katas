// Task:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

// Examples:
// twoArePositive(2, 4, -3) == true
// twoArePositive(-4, 6, 8) == true
// twoArePositive(4, -6, 9) == true
// twoArePositive(-4, 6, 0) == false
// twoArePositive(4, 6, 10) == false
// twoArePositive(-14, -3, -4) == false


//One
// function twoArePositive(a, b, c) {
//   // Happy Coding
// if(a > 0 && b > 0 && c <= 0){
//   return true
// }
//   else if (b > 0 && c > 0 && a <= 0){
//     return true
//   }
//   else if(c > 0 && a > 0 && b <= 0){
//   return true
//   }
//     else if( a > 0 && b > 0 && c > 0 ){
//       return false
//     }
//       else if(a < 0 && b < 0 && c < 0){
//         return false
//       }
// else{
//   return false
// }
// }

//Two
let twoArePositive = (a,b,c) => {
    let count = 0;
let arr = [a,b,c]
console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }

  return count === 2 ? true : false

}

//Three
function twoArePositive(a, b, c) {
    return (a > 0) + (b > 0) + (c > 0) == 2;
  }

//Four
function twoArePositive(a, b, c) {
    return [...arguments].filter(i => i > 0).length === 2;
  };

