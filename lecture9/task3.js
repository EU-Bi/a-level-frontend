const calcSumOfMinNumbers = (arr) =>{
    function getMinValue (arr){
        // please consider to update current functionality with Math.min(...arr)
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (min > arr[i]) min = arr[i];
        }
        return min;
    }

    const min1 = getMinValue(arr);

    const index = arr.indexOf(min1);
        if (index > -1) {
        arr.splice(index, 1);
        }
    const min2 = getMinValue(arr);
    const result = min1 + min2;
    console.log(result);   
   
};
calcSumOfMinNumbers([1, 2134,234,4]);