/*
Reverse Number is a number which is the same when reversed.

For Example;
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101 => First 20 Reverse Numbers

TASK:

You need to return the nth reverse number. (Assume that reverse numbers start from 0 as shown in the example.)
NOTES:

0 < n <= 1000000
 */

function findReverseNumber(n) {
var resultArr=[];
  
for(i=0; i<100000; i++){
  var arr = i.toString().split("");
  var reversedArr = i.toString().split("").reverse();

if( JSON.stringify(arr) === JSON.stringify(reversedArr)){
  resultArr.push(i); 
}}
  
return resultArr[n-1];
}