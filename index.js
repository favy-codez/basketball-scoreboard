let homeboxEl = document.getElementById("homebox-el")
let guestboxEl = document.getElementById("guestbox-el")
const periodNum =document.getElementById("period-num")

let homebox= 0
let guestbox = 0
let periodNo = 1


function add1point() {
    let homebox= 0
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
        period
        periodNum.textContent = periodNo
    }else {
        
    }
}

// guest section
function add1points() {
    guestbox += 1
    guestboxEl.textContent = guestbox
    guestboxEl.style.color = "white"
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

// if (homeboxEl > guestboxEl){
//     homebox.style.color="green"
//     guestbox.style.color="red"
// }else if (homeboxEl < guestboxEl){
//     homebox.style.color="red"
//     guestbox.style.color="green"
// }else(homeboxEl === guestboxEl){
//     homebox.style.color="green"
//     guestbox.style.color="green"
// 