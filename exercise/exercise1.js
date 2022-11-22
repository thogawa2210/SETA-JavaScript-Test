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
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === max) {
            list.push(i);
        }
    }
    return list;
}

function findAppearMost (arr){
    if(arr.length === 0){
        return null;
    } else if(arr.length === 1){
        return arr[0];
    }else{
        const stringLengthArr = stringLengthList(arr);
        const countArr = countLengthArray(arr,stringLengthArr);
        const listIndexOfMostAppear = findIndexOfMostAppear(countArr);
        if(listIndexOfMostAppear.length === 1){
            const stringLengthAppearMost = stringLengthArr[listIndexOfMostAppear[0]];
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].length === stringLengthAppearMost){
                    result.push(arr[i]);
                }
            }
            return result;
        }else{
            let stringLengthAppearMost = [];
            for (let i = 0; i < listIndexOfMostAppear.length; i++) {
                stringLengthAppearMost.push(stringLengthArr[listIndexOfMostAppear[i]])
            }
            let result = [];
            for (let i = 0; i < stringLengthAppearMost.length; i++) {
                let listStringByLength = [];
                for (let j = 0; j <arr.length; j++) {
                    if(arr[j].length === stringLengthAppearMost[i]) {
                        listStringByLength.push(arr[j])
                    }
                }
                result.push(listStringByLength);
            }
            return result;
        }
    }
}

module.exports = findAppearMost;