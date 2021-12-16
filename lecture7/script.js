const findVowelsCount= inputString =>inputString.split('').filter(letter =>'aeoiuy'.includes(letter)).length;

console.log(findVowelsCount('Pasha'));


const filterArray = (arr, conditionNumber)=>{
    // arr.sort((element1, element2)=>element1-element2);
    let result=arr.filter((elementq, index) =>elementq>conditionNumber);
    console.log(result);
}

filterArray([1,2,4,6,8,13],9);

const createArrayWithObjects=(name1, name2, ...name_n)=>{
    let arr = [name1, name2, ...name_n]
    let result = arr.forEach((element, index)=> console.log(`name: ${element}; id: ${index}`));
    return result;
}
createArrayWithObjects('jae', 'anna', 'julia', 'kai');
