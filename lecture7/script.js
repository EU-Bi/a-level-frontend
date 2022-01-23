const findVowelsCount= inputString =>inputString.split('').filter(letter =>'aeoiuy'.includes(letter)).length; // could you please describe your code step by step

console.log(findVowelsCount('Pasha'));


const filterArray = (arr, conditionNumber)=>{
    // arr.sort((element1, element2)=>element1-element2);
    const result=arr.filter((elementq, index) =>elementq>conditionNumber);
    console.log(result);
}

filterArray([1,2,4,6,8,13],9);

const createArrayWithObjects=(...arr)=>{ // you can unite all arguments with ... operator
    // let arr = [name1, name2, ...name_n];

    // forEach doesn't return anything
    const result = arr.map((element, index)=> ({name: element, id: index + 1}));
    console.log(result);
}
createArrayWithObjects('jae', 'anna', 'julia', 'kai');
