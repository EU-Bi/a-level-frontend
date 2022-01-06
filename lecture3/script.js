// Where is the first task??

function greeting(name){
    console.log(`Hello ${name}! How are you?`);
}
greeting(`Anna`); // please consider to use single or double quotes for simple strings

const Lecture3 = {
    dataType: `string, number, boolean`,
    String: `I'm a string`,
    Number: `2^53 - 1`,
    Boolean: `true or false`,
    show: function(){
        alert(`This is ${this.dataType}`);
    }

};
console.log(Lecture3.show()); // don't forget to add parentheses to call a function
