const num = [1, 2, 3, 4, 5];
const [first, second, ...rest] = num;
// console.log(first);
// console.log(second);
// console.log(rest);

// spread operator
const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
