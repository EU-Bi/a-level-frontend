const calcSumOfMinNumbers = (arr) =>{
    let min1 = getMinValue(arr);
    function getMinValue (arr){
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) min = arr[i];
        }
        return min;
    }
    const index = arr.indexOf(min1);
        if (index > -1) {
        arr.splice(index, 1);
        }
    let min2 = getMinValue(arr);
    let result = min1 + min2;
    console.log(result);   
   
};
calcSumOfMinNumbers([1, 2134,234,4]);