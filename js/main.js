var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var mseconds = document.querySelector('.mseconds');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');

var timerId;

var startCount = function() {
    var hour = 1;
    var min = 1;
    var sec = 0;

    timerId = setInterval(function() {
        if (sec === 60) {
            sec = 0;
            if (min === 60) {
                min = 0;
                hours.innerHTML = (hour < 10) ? '0' + hour : hour;
                hour++;
            }
            minutes.innerHTML = (min < 10) ? '0' + min : min;
            min++;
        }
        seconds.innerHTML = (sec < 10) ? '0' + sec : sec;
        sec++;
    }, 1000);
};

var stopCount = function() {
    clearInterval(timerId);
};

btnStart.addEventListener('click', startCount);
btnStop.addEventListener('click', stopCount);
