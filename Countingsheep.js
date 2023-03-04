/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

link -> https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript


*/
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  if (arrayOfSheep === undefined || arrayOfSheep === null) return 0;
  // let resalt = 0;
  // for (let i = 0; i <= arrayOfSheep.length; i++) {
  //   if (arrayOfSheep[i] === true) resalt++;
  // }
  let resalt = arrayOfSheep.filter((vel) => vel === true);
  return resalt;
}

countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);
