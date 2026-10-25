function findAverage(nums) {
  // Code here
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum / nums.length;
}