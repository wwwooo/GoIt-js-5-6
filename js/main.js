var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var mseconds = document.querySelector('.mseconds');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');

var timerSecontId;

var startCount = function() {
    var sec = 55;
    var min = 55;
    var hour = 1;
    timerSecondId = setInterval(function() {
        if (sec === 60) {
            sec = 0;
            setTimeout(null, 5000);
            if (min === 60) {
                min = 0;
                setTimeout(null, 5000);
                hours.innerHTML = (hour < 10) ? '0' + hour : hour;
                hour++;
            }
            minutes.innerHTML = (min < 10) ? '0' + min : min;
            min++;
        }
        seconds.innerHTML = (sec < 10) ? '0' + sec : sec;
        sec++;
    }, 50);
};

var stopCount = function() {
    clearInterval(timerSecondId);
};


btnStart.addEventListener('click', startCount);
btnStop.addEventListener('click', stopCount);
