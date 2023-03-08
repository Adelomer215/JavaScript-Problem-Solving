var containsDuplicate = (nums) => {
  // first way of solving
  //   let b = "";
  //   for (let i = 0; i < nums.length; i++) {
  //     let a = nums.filter((e) => e === nums[i]);
  //     if (a.length > 1) {
  //       b = a;
  //       break;
  //     }
  //   }
  //   return true ? b.length > 1 : flase;

  //   second way of solving
  //   let resualt = "";
  //   nums = nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       resualt = true;
  //       break;
  //     }
  //   }
  //   return resualt;

  // third way to solve the problem
  const set = new Set();
  for (const key in nums) {
    if (set.has(nums[key])) return true;
    set.add(nums[key]);
  }
  return false;
};
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2, 5, 8]);
