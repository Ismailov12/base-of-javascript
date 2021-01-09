document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    function updateClock()  {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();

        hour = (hour < 10) ? `0${hour}` : hour;
        minute = (minute < 10) ? `0${minute}` : minute;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;
        
        let  time = `${hour}: ${minute}:${seconds}`;

        setInterval(updateClock, 1000);
        document.getElementById("Clock").innerText = time;

    };

updateClock();


});