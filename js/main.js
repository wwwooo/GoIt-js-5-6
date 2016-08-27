var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var mseconds = document.querySelector('.mseconds');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');

var timerId;

var stopWatch = function(sec, min, hour) {
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

    timerId = setTimeout(stopWatch, 1000, sec, min, hour);
};

var startCount = function() {
    timerId = setTimeout(stopWatch, 1000, 0, 1, 1);
};

var stopCount = function() {
    clearTimeout(timerId);
};

btnStart.addEventListener('click', startCount);
btnStop.addEventListener('click', stopCount);
