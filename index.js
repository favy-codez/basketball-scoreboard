const homeboxEl = document.getElementById("homebox-el")
const guestboxEl = document.getElementById("guestbox-el")
const periodNum =document.getElementById("period-num")

let homebox= 0
let guestbox = 0
let periodNo = 1

function add1point() {
    homebox += 1
    homeboxEl.textContent = homebox
    homeboxEl.style.color = "white"
}

function add2point() {
    homebox += 2
    homeboxEl.textContent = homebox
    homeboxEl.style.color = "white"
}

function add3point() {
    homebox += 3
    homeboxEl.textContent = homebox
    homeboxEl.style.color = "white"
}

// period section
function period(){
    if(periodNo <= 3){
        periodNo += 1
        periodNum.textContent = periodNo
    }else {
        
    }
}

// guest section
function add1points() {
    guestbox += 1
    guestboxEl.textContent = guestbox
}

function add2points(){
    guestbox += 2
    guestboxEl.textContent = guestbox
    guestboxEl.style.color = "white"
}

function add3points(){
    guestbox += 3
    guestboxEl.textContent = guestbox
    guestboxEl.style.color = "white"
}

function reset() {
    homeboxEl.textContent = 0
    homeboxEl.style.color = "black"
    guestboxEl.textContent = 0
    guestboxEl.style.color = "black"
    periodNum.textContent = 1
}