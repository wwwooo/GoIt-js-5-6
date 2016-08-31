var Stopwatch = function() {
    var hour = min = sec = msec = 0;
    var timerId = false;
    var overwriteHTML = function(obj, value) {
        obj.innerHTML = (value < 10) ? '0' + value : value;
    };

    this.startCount = function() {
        var date = new Date();
        if (!timerId) {
            timerId = setInterval(function() {
                var newDate = new Date();
                msec += newDate - date;
                date = newDate;
                if (msec >= 1000) {
                    msec = 0;
                    sec++;
                    if (sec === 60) {
                        sec = 0;
                        min++;
                        if (min === 60) {
                            min = 0;
                            overwriteHTML(hours, ++hour);
                        }
                        overwriteHTML(minutes, min);
                    }
                    overwriteHTML(seconds, sec);
                }
                mseconds.innerHTML = msec;
            }, 4);
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
        mseconds.innerHTML = '000';
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
