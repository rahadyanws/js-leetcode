function moveZeroes(nums) {
  let pos = 0; // Pointer untuk posisi elemen non-zero

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap elemen
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
      pos++;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
