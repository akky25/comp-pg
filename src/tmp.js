const arr1 = [1, 2, 3, 4];
const arr2 = arr1;

arr1[1] = 0;

console.log(arr1);
console.log(arr2);

const arr11 = [1, 2, 3, 4];
const arr22 = [...arr11];

arr11[1] = 100;

console.log(arr11);
console.log(arr22);
