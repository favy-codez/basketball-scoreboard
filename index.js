let homebox= 0
let guestbox = 0

document.getElementById("homebox-el").textContent = homeboxEl
document.getElementById("guestbox-el").textContent = guestboxEl

function add1point() {
    homebox += 1
    homeboxEl.textContent = homebox
}

function add2point() {
    homebox += 2
    homeboxEl.textContent = homebox
}

function add3point() {
    homebox += 3
    homeboxEl.textContent = homebox
}

function add1points() {
    guestbox += 1
    guestboxEl.textContent = guestbox
}

function add2points(){
    guestbox += 2
    guestboxEl.textContent = guestbox
}

function add3points(){
    guestbox += 3
    guestboxEl.textContent = guestbox
}