const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateClock() {
    const currentDate = new Date();
    const hoursValue = currentDate.getHours().toString().padStart(2, "0");
    const minutesValue = currentDate.getMinutes().toString().padStart(2, "0");
    const secondsValue = currentDate.getSeconds().toString().padStart(2, "0");
    
    hours.textContent = hoursValue + ' : ';
    minutes.textContent = minutesValue + ' : ';
    seconds.textContent = secondsValue;
    
}
setInterval(updateClock, 1000);