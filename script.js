function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // AM or PM 
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12 hour format 
  hours = hours % 12;
  hours = hours ? hours : 12 ; 

  // Add leading zros
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;

  // timeString 
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;
  document.getElementById('clock').textContent =timeString; 

  //Date string 
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();

  const dateString = `${dayName}, ${day} ${monthName}, ${year}`;
  document.getElementById('date').textContent = dateString;

}
setInterval(updateClock,1000);
updateClock();