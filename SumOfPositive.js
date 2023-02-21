/*
    second problem 
   sumOfPositive from youtube
    link -> https://www.youtube.com/watch?v=RxO5bKxaH-c&list=PL3iticg1TvA-jMsFwDgdb6Cy_L__qL56H&index=3
    - git an array with numbers and i should calculate just the positive numbers 

*/

function sumOfPositive(arr) {
  // with no build in js functions
  //   let reuslt = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       reuslt += arr[i];
  //     }
  //   }
  //   return reuslt;
  //
  //
  //   with js bulit in function
  const positiveNums = arr.filter((number) => number > 0);
  return positiveNums.reduce((acc, cu) => acc + cu, 0);
}
console.log(sumOfPositive([1, -3, 5, 91, -8, -70, 25]));
