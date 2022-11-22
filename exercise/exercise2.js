function sumOfTopTwo(array) {
    if(array.length===0){
        return 0;
    }else if(array.length=== 1){
        return array[0];
    }
    let sortArr = array.sort(function(a, b){return b - a});
    return sortArr[0] + sortArr[1];
}

module.exports = sumOfTopTwo;