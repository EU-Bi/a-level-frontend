const testParagraph = document.getElementById('img1');
   function hideElement(){
    testParagraph.style.display='none';
}
function showElement(){
        testParagraph.style.display='block';
}

const myButton = document.getElementById('button');

myButton.addEventListener('click', hideElement);


const myBtn = document.getElementById('bttn');
myBtn.addEventListener('click', showElement);