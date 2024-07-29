var timer = 60;
var score = 0;
var hitrun = 0;

function makeBubble() {
    var clutter = " ";

    for (var i = 1; i <= 184; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#bottompanel").innerHTML = clutter;
}

function makeTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timeint);
            document.querySelector("#bottompanel").innerHTML = `<h1>Game Over<h1>`;
        }


    }, 1000);
}

function getNewHit() {
    hitrun = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrun;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#bottompanel")
.addEventListener("click", function (details) {
    var clickednum = Number(details.target.textContent)
    if (clickednum === hitrun) {
        increaseScore();
        makeBubble();
        getNewHit();
    }

})

makeTimer();
makeBubble();
getNewHit();
