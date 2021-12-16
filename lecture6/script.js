function getMinValue(value1, value2){
    let result;
    if (value1>value2){
        result = value1;
        
    }
    if (value1<value2){
        result = value2;
    }
    if(value1==value2){
        console.log(`value is equal`);
    }
    console.log(result);
}
getMinValue(2, 2);
function maxElement(value1,value2,value3 ,value4){
    const result= Math.max(value1,value2,value3,value4);
    console.log(result);
}
maxElement(8, 9, 1, 8);

function getMinValue(value1, value2, ...value_n){
    let result = console.log(Math.min(value1, value2, ...value_n));
    return result;
}
getMinValue(3, 5,136,4,-5,-16);
function joinObjects(obj1, obj2){
    let result = console.log(Object.assign(obj1, obj2));
    return result;
}
let obj1 = {name: 'Joe'};
let obj2 = {age: 25};

joinObjects(obj1, obj2);