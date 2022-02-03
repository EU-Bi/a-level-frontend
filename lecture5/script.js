// Where is the Task 1?

const initialString = `Hello world`;
function searchSubStringIndex(initialString, searchingSubstring){
    console.log(initialString.indexOf(searchingSubstring));

    // please handle if cases if index === -1

    /**
     * Example:
     * searchSubstringIndex (initialString, 'cat'); // There is not 'cat' in the initial string.;
     */
}

searchSubStringIndex(initialString, 'world');

//count substring in string
function searchSubstringAmount(initString, searchingSubStr){
    let count = initString.split(searchingSubStr).length-1;
    console.log(count + " - searchSubstringAmount");

    // please handle if cases if index === -1

    /**
     * Example:
     * searchSubstringIndex (initialString, 'cat'); // There is not 'cat' in the initial string.;
     */
}


//count only one letter in string
function searchSubstringAlt(initString, searchingSubStr){
    let count = [...initString].filter(l => l === searchingSubStr).length;
    console.log(count + " - searchSubstringAlt");
}
let initString=`Hello world`;
let searchingSubStr='l';
searchSubstringAmount(initString, searchingSubStr);
searchSubstringAlt(initString, searchingSubStr);







