function removeDuplicatesSortedArr(nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0, k);
}

console.log(removeDuplicatesSortedArr([1, 1, 2]));
console.log(removeDuplicatesSortedArr([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
