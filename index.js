let homeboxEl= document.getElementById("homebox-el")
let guestboxEl = document.getElementById("guestbox-el")



let homebox=0
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


let guestbox=0
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
