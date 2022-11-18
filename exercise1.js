function stringLengthList(arr) {
    let stringLengthList = [];
    for (let i = 0; i < arr.length; i++) {
        if( stringLengthList.indexOf(arr[i].length) === -1 ) {
            stringLengthList.push(arr[i].length);
        }
    }
    return stringLengthList;
}

const countLengthArray = (arr,stringLengthArr) => {
    let countArr = [];
    for (let i = 0; i < stringLengthArr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if(arr[j].length === stringLengthArr[i]){
                count += 1;
            }
        }
        countArr.push(count);
    }
    return countArr;
}

function findIndexOfMostAppear (arr){
    let max = arr[0];
    for (let i = 1; i <arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return arr.indexOf(max);
}

function findAppearMost (arr){
    const stringLengthArr = stringLengthList(arr);
    const countArr = countLengthArray(arr,stringLengthArr);
    const indexOfMostAppear = findIndexOfMostAppear(countArr);
    const stringLengthAppearMost = stringLengthArr[indexOfMostAppear];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length === stringLengthAppearMost){
            result.push(arr[i]);
        }
    }
    return result;
}

module.exports = findAppearMost;