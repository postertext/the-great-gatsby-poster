function startTimer(duration, display, hurryTxt) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        if (timer > 0) {
            for (i = 0; i < display.length; ++i) {
                display[i].textContent = minutes + ":" + seconds;
            }
        }

        if (--timer < 0) {
            for (i = 0; i < hurryTxt.length; ++i) {
                hurryTxt[i].textContent = "Free shipping offer extended! Buy now before it's too late!";
            }
        }
    }, 1000);
}

window.onload = function () {
    var thirtyFiveMinutes = 60 * 35;
    var hurryTxt = document.querySelectorAll('.hurry-txt'), i;
    var display = document.querySelectorAll('.time'), i;
    
    startTimer(thirtyFiveMinutes, display, hurryTxt);
};