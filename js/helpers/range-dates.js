

const getNextDayOfWeek = (date, dayOfWeek) => {
 
    let resultDate = new Date(date.getTime());
    //resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()+1) % 7) +1;

    return resultDate;
}


const nextFriday = () => {
    var date = new Date();
    let friday = getNextDayOfWeek(date,4);
    return friday;
} 

const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }