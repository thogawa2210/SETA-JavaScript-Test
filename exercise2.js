function sumOfTopTwo(array) {
    if(array.length<2){
        return 0;
    }
    let sortArr = array.sort(function(a, b){return b - a});
    return sortArr[0] + sortArr[1];
}

module.exports = sumOfTopTwo;