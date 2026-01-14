function rotate(nums, k) {
  k = k % nums.length;
  return nums.slice(-k).concat(nums.slice(0, nums.length - k));
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
