const findAppearMost = require( './exercise1.js');

const arr1 = ["a", "ab", "abc", "cd", "def", "gh"];
const result1 = ["ab", "cd","gh"];
const arr2 = ["aa", "ab", "abc", "cd", "def", "gh"];
const result2 = ["aa","ab", "cd","gh"];
const arr3 = ["a", "ab", "abc", "cd", "def", "gh", "ik", "ghi"];
const result3 = ["ab", "cd","gh", "ik"];
const arr4 = ["ayz", "ab", "abc", "cd", "def", "gh", "ghi", "lmn"];
const result4 = ["ayz", "abc","def", "ghi", "lmn"];

test("Return an array of most appear string length", () =>{
    expect(findAppearMost(arr1)).toStrictEqual(result1);
});

test("Return an array of most appear string length", () =>{
    expect(findAppearMost(arr2)).toStrictEqual(result2);
});

test("Return an array of most appear string length", () =>{
    expect(findAppearMost(arr3)).toStrictEqual(result3);
});

test("Return an array of most appear string length", () =>{
    expect(findAppearMost(arr4)).toStrictEqual(result4);
});