/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

link -> https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
*/

function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += s;
  }
  console.log(str);
  return str;
}
repeatStr(15, "a");
