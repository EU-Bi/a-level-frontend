function greeting(name){
    console.log(`Hello ${name}! How are you?`);
}


const Lecture3 = {
    dataType: `string, number, boolean`,
    String: `I'm a string`,
    Number: `2^53 - 1`,
    Boolean: `true or false`,
    show: function(){
        alert(`This is ${this.dataType}`);
    }

};
console.log(Lecture3.show);