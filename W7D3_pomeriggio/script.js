let display = document.querySelector('#display');
let displayP = document.querySelector('#displayP');


document.addEventListener("DOMContentLoaded", startTimer)
window.addEventListener("unload", reset)



var s = 0, m = 0;
var sP = 0, mP = 0;

function startTimer() {
    let activeTime = Date.now()
    let inactiveTime = activeTime - parseInt(localStorage.getItem("tempoChiuso"))

    if (inactiveTime == activeTime) {
        inactiveTime = 0;
    }
    inactiveTime = Math.floor(inactiveTime / 1000)

    s = parseInt(localStorage.getItem("secondi"))? parseInt(localStorage.getItem("secondi")):0
    if (localStorage.getItem("minuti")) {
        m = parseInt(localStorage.getItem("minuti"))
    }
    //*se no non fa nulla

    sP = parseInt(sessionStorage.getItem("secondi"))? parseInt(sessionStorage.getItem("secondi")):0
    if (sessionStorage.getItem("minuti")) {
        mP = parseInt(sessionStorage.getItem("minuti"))
    }

    s = s + (inactiveTime % 60)
    m = m + Math.floor(inactiveTime / 60)
    sP = sP + (inactiveTime % 60)
    mP = mP + Math.floor(inactiveTime / 60)

    

    interval = setInterval(function () {
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        sP++;
        if (sP == 60) {
            mP++;
            sP = 0;
        }
        if (!isNaN(m) && !isNaN(s)) {
            localStorage.setItem("secondi", s)
            localStorage.setItem("minuti", m)
        }
        display.innerHTML = `${m} minuti ${s} secondi`;

        if (!isNaN(mP) && !isNaN(sP)) {
            sessionStorage.setItem("secondi", sP)
            sessionStorage.setItem("minuti", mP)
        }
        displayP.innerHTML = `${mP} minuti ${sP} secondi`;
    }, 1000);
}

function reset() {

    var oraChiusura = Date.now()
    localStorage.setItem("tempoChiuso", oraChiusura)

}