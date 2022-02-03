const citiesAndCountries = {
    'Kyiv': 'Ukraine',
    'Washington': 'USA',
    'Odessa': 'Ukraine',
    'Munich': 'Germany',
    'Kharkiv': 'Ukraine',
    'New-York': 'USA',
    'Amsterdam': 'Netherlands',
    'Berlin': 'Germany',
    'Chicago': 'USA',
    'Lisbon': 'Portugal',
    'Lviv': 'Ukraine',
    'Hamburg': 'Germany'
};

let indexes = [];
let arrKeys = Object.keys(citiesAndCountries);

let arrVal = Object.values(citiesAndCountries);

let uniqueCountries = arrVal.filter(function (item, pos) {
    return arrVal.indexOf(item) == pos;
})
for (let i = 0; i < uniqueCountries.length; i++) {
    let el = uniqueCountries[i];
    let idx = arrVal.indexOf(el);
    while (idx != -1) {
        indexes.push(arrKeys[idx]);
        idx = arrVal.indexOf(el, idx + 1);
    }

    let obj = {}
    obj[el] = indexes;
    console.log(el + ':' + indexes.sort());
    indexes = [];

}
    // for( let i = 0; i = arrKeys.length; i++){
    //     if()
    //}

    
// Actually it's not exactly what aws in the HW, but looks interesting. Good job!
// However, please consider to:

const countriesData = {};

for (const key in citiesAndCountries) {
  // check if property is in the object
  if (!countriesData[citiesAndCountries[key]]) {
    // if not
    // set a new array with initial value
    countriesData[citiesAndCountries[key]] = [key];
  } else {
    // add new value to existing property
    countriesData[citiesAndCountries[key]].push(key);
  }
}

console.log(countriesData);