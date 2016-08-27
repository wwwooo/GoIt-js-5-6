var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var mseconds = document.querySelector('.mseconds');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');

var timerId;

var startCount = function() {
    var hour = min = sec = 0;

    var innerHTML = function(obj, value) {
        obj.innerHTML = (value < 10) ? '0' + value : value;
    }

    timerId = setInterval(function() {
        if (sec === 60) {
            sec = 0;
            if (min === 60) {
                min = 0;
                innerHTML(hours, ++hour);
            }
            innerHTML(minutes, ++min);
        }
        innerHTML(seconds, ++sec);
    }, 1000);
};

var stopCount = function() {
    clearInterval(timerId);
};

btnStart.addEventListener('click', startCount);
btnStop.addEventListener('click', stopCount);
