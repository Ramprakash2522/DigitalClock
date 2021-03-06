//IIFE - Immediately Invoked Function Expression
//(function(){})();

(function showTime(){

  let date = new Date(); //Date constructor


  const weekDayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  //object.propertyName
 let day = date.getDate(); //1-31
 let month = date.getMonth()+1; //0-11
 let year = date.getFullYear(); //yyyy
 let weekday = weekDayArr[date.getDay()]; //0-6
 let h = date.getHours();// 0 - 23
 let m = date.getMinutes(); // 0 - 59
 let s = date.getSeconds(); // 0 - 59
 let session = "AM";



  if(h==0){
    h = 12;
  }
  if(h>12){
    h = h-12
    session="PM";
  }

  h = h < 10 ? "0"+h : h;
  m = m < 10 ? "0"+m : m;
  s = s < 10 ? "0"+s : s;
  day = day<10 ? "0"+day : day;
  month = month<10 ? "0"+month : month;

  let fullDate = `${day}-${month}-${year}`;

  document.getElementsByClassName('weekDay')[0].innerText = weekday;
  document.getElementsByClassName('date')[0].innerText = fullDate;
  document.getElementsByClassName('hour')[0].innerText = h;
  document.getElementsByClassName('minute')[0].innerText = m;
  document.getElementsByClassName('second')[0].innerText = s;
  document.getElementsByClassName('session')[0].innerText = session;

  setTimeout(showTime,1000);
})();
