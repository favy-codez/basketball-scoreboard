const homeboxEl = document.getElementById("homebox-el")
const guestboxEl = document.getElementById("guestbox-el")
const periodNum =document.getElementById("period-num")

let homebox= 0
let guestbox = 0
let periodNo = 1


function add1point() {
    homebox += 1
    homeboxEl.textContent = homebox
    // homeboxEl.style.color = "white"
    changeColors()
}

function add2point() {
    homebox += 2
    homeboxEl.textContent = homebox
    // homeboxEl.style.color = "white"
    changeColors()
}

function add3point() {
    homebox += 3
    homeboxEl.textContent = homebox
    // homeboxEl.style.color = "white"
    changeColors()
}

// period section
function period(){
    if(periodNo <= 3){
        periodNo += 1
        periodNum.textContent = periodNo
    }
}

// guest section
function add1points(x) {
    guestbox += 1
    guestboxEl.textContent = guestbox
    guestboxEl.style.color = "white"
    changeColors()
}

function add2points(){
    guestbox += 2
    guestboxEl.textContent = guestbox
    // guestboxEl.style.color = "white"
    changeColors()
}

function add3points(){
    guestbox += 3
    guestboxEl.textContent = guestbox
    // guestboxEl.style.color = "white"
    changeColors()
}

function reset() {
    // location.reload()
    homeboxEl.textContent = 0
    homeboxEl.style.color = "red"
    guestboxEl.textContent = 0
    guestboxEl.style.color = "red"
    // periodNum.textContent = 1
}

function changeColors(){
    if (guestbox > homebox){
        homeboxEl.style.color = "red"
        guestboxEl.style.color = "green"
    }else if (homebox > guestbox){
        homeboxEl.style.color = "green"
        guestboxEl.style.color = "red"
    }else if (homebox == guestbox){
        homeboxEl.style.color = "green"
        guestboxEl.style.color = "green"
    }
}
