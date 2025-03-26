const date = new Date();

const dateTypeCheck = typeof date; // date type is Object

const dateString = date.toDateString(); // toDateString method string valited chake

const timeString = date.toTimeString(); // date time string here.

const localString = date.toLocaleString(); // time to local string
const currentYear = date.getFullYear();

const currentMonth = date.getMonth();

const currentDate = date.getDate();

const currentHour = date.getHours();
const currentMinets = date.getMinutes();
const currentSeconds = date.getSeconds();
const currentMilliseconds = date.getMilliseconds();

console.log('current hour:', currentHour);
console.log('current mminets:', currentMinets);
console.log('current seconds:', currentSeconds);
console.log('current millisckends:', currentMilliseconds);
