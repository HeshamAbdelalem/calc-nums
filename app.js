module.exports.sum = sumNums;
module.exports.multiply = multiply;

function sumNums(...nums) {
  let total = null;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  console.log('## TCL ## >>: sumNums -> total', total);
  return total;
}

function multiply(...nums) {
  let total;
  if (nums.length >= 1) {
    total = 1;
  } else {
    return null;
  }

  for (let i = 0; i < nums.length; i++) {
    total *= nums[i];
  }
  console.log('## TCL ## >>: multiply -> total', total);
  return total;
}
