const sumOfTopTwo = require('./exercise2.js');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1,4,2,3,5];
const arr3 = [10,9,111,2,7,1];
const arr4 = [5,3,8,12,12,9,3,7,6,6,8];

test("Return sum of integers on top 2", () =>{
    expect(sumOfTopTwo(arr1)).toBe(9);
});
test("Return sum of integers on top 2", () =>{
    expect(sumOfTopTwo(arr2)).toBe(9);
});
test("Return sum of integers on top 2", () =>{
    expect(sumOfTopTwo(arr3)).toBe(121);
});
test("Return sum of integers on top 2", () =>{
    expect(sumOfTopTwo(arr4)).toBe(24);
});