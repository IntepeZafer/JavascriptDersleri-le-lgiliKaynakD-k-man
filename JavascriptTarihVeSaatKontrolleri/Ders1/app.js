const nowDate = new Date();
console.log(nowDate);
console.log(typeof nowDate);
console.log("Year: " , nowDate.getFullYear());
console.log("Month: " , nowDate.getMonth());
console.log("Day: " , nowDate.getDay());
console.log("Hours: " , nowDate.getHours());
console.log("Minutes: " , nowDate.getMinutes());
console.log("Seconds: " , nowDate.getSeconds());
console.log("Miliseconds: " , nowDate.getMilliseconds());
console.log("Timestamp: " , nowDate.getTime());
console.log("Today: " , nowDate.toDateString());
console.log("Today: " , nowDate.toTimeString());
console.log("Today: " , nowDate.toLocaleString());
console.log("Today: " , nowDate.toLocaleDateString());
console.log("Today: " , nowDate.toLocaleTimeString());