/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 */

function solution(str, ending){
 const c = str.includes(ending);
   return (c 
          && str.charAt(str.length-1) === ending.charAt(ending.length-1) 
          || ending === '')
          ? true 
          : false;
}