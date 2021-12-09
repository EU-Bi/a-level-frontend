const initialString = `Hello world`;
function searchSubStringIndex(initialString, searchingSubstring){
    console.log(initialString.indexOf(searchingSubstring));
}

searchSubStringIndex(initialString, 'world');

//count substring in string
function searchSubstringAmount(initString, searchingSubStr){
    let count = initString.split(searchingSubStr).length-1;
    console.log(count + " - searchSubstringAmount");
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







