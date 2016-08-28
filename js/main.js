var Stopwatch = function() {
    var hour = min = sec = msec = 0;
    var timerId = false;

    var innerHTML = function(obj, value) {
        obj.innerHTML = (value < 10) ? '0' + value : value;
    };

    this.startCount = function() {
        if (!timerId) {
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
            btnStart.innerHTML = 'Pause';
        } else {
            clearInterval(timerId);
            btnStart.innerHTML = 'Continue';
            timerId = false;
        }
    };

    this.stopCount = function() {
        clearInterval(timerId);
        hour = min = sec = msec = 0;
        hours.innerHTML = minutes.innerHTML = seconds.innerHTML = '00';
        btnStart.innerHTML = 'Start';
        timerId = false;
    };
};

var firstStopwatch = new Stopwatch();

var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var mseconds = document.querySelector('.mseconds');
var btnStart = document.querySelector('.btn-startStopwatch');
var btnStop = document.querySelector('.btn-clearStopwatch');

btnStart.addEventListener('click', firstStopwatch.startCount);
btnStop.addEventListener('click', firstStopwatch.stopCount);
