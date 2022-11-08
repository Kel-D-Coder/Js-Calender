const dateContainer = document.querySelector(".dateContainer")
const time = new Date();
const monthInx = time.getMonth();
const year = time.getFullYear();
const day = time.getDate();
const monthDoc = document.getElementById("Month");
const dayDoc = document.getElementById("Day");
const yearDoc = document.getElementById("Year");

const months = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec"
];


setInterval(() => {
   monthDoc.textContent = months[monthInx];
   dayDoc.textContent = day;
   yearDoc.textContent = year;
},10);

   if(monthInx == 11) {
      dateContainer.style.backgroundColor = 'yellow';
   }
   else if (monthInx == 10) {
      dateContainer.style.backgroundColor = "red"
   }
   else if(monthInx == 9) {
      dateContainer.style.backgroundColor = 'green'
   }
   else if(monthInx == 8) {
      dateContainer.style.backgroundColor = 'blue'
   }
   else if(monthInx == 7) {
      dateContainer.style.backgroundColor = 'brown'
   }
   else if(monthInx == 6) {
      dateContainer.style.backgroundColor = 'tomato'
   }
   else if(monthInx == 5) {
      dateContainer.style.backgroundColor = 'yellowgreen'
   }
   else if(monthInx == 4) {
      dateContainer.style.backgroundColor = 'aqua'
   }
   else if(monthInx == 3) {
      dateContainer.style.backgroundColor = 'rebeccapurple'
   }
   else if(monthInx == 2) {
      dateContainer.style.backgroundColor = 'chartreuse'
   }
   else if(monthInx == 1) {
      dateContainer.style.backgroundColor = 'chocolate'
   }
   else if(monthInx == 0) {
      dateContainer.style.backgroundColor = 'cyan'
   }
   else {
      dateContainer.style.backgroundColor = "lightgreen"
   }