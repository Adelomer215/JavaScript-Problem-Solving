/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

link -> https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/

function digitize(n) {
  //code here
  //   const array = [];
  //   str = n.toString();
  //   for (let i = 0; i < str.length; i++) {
  //     array.unshift(+str[i]);
  //   }
  //   console.log(array);
  //   return array;

  // use the map function
  return n
    .toString()
    .split("")
    .map((ele) => +ele)
    .reverse();
}
digitize(35231);
