const nameOfDays ={
    'ru':['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
    'en':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
}
// 
const getNameOfDay =(day, lang)=>{
    return nameOfDays[lang][day-1];
}
    
console.log(getNameOfDay(6,'ru'));

const getNameOfDayW =(day, lang)=>{
    if(lang == 'en'){
        return nameOfDays.en[day-1];        
    }
    else if(lang == 'ru'){
        return nameOfDays.ru[day-1];
    }
    else{
        console.log(`Don't correct date`);
    }
} 
console.log(getNameOfDayW(1,'en'));






    

