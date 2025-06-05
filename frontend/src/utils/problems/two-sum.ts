/* eslint-disable @typescript-eslint/no-explicit-any */
// import assert from 'assert';

export const starterCode = `function twoSum(nums, target){
// Write your code here
}`;

// check if user's code passes the test cases
export const handleTwoSum = (fn: any) => {
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];
    const targets = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [1, 0],
    ];
    for (let i = 0; i < nums.length; i++) {
      const result = fn(nums[i], targets[i]);
      // Compare arrays by value
      const isEqual =
        Array.isArray(result) &&
        Array.isArray(answers[i]) &&
        result.length === answers[i].length &&
        result.every((val, idx) => val === answers[i][idx]);
      if (isEqual) {
        console.log(`Test case ${i + 1} passed`);
        alert(`Test cases passed`);
        return true;
      } else {
        console.error(
          `Test case ${i + 1} failed: expected ${answers[i]}, got ${result}`
        );
        alert(
          `Test case ${i + 1} failed: expected ${answers[i]}, got ${result}`
        );
        return false;
      }
    }
  } catch (error) {
    alert("Incorrect code. Please try again.");
    console.error("Error in Two Sum test:", error);
    // throw new Error("Two Sum test failed");
  }
};

/* 
for (let i = 0; i < nums.length; i++) {
    const pairNum = target - nums[i];
    const indexOfNum = nums.indexOf(pairNum);

    if (indexOfNum !== -1 && indexOfNum !== i) {
        return [i, indexOfNum];
    }
}
*/
