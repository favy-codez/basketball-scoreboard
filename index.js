const homeboxEl = document.getElementById("homebox-el")
const guestboxEl = document.getElementById("guestbox-el")
const periodNum =document.getElementById("period-num")

let homebox= 0
let guestbox = 0
let periodNo = 1

function add1point(){
    homePoints("add-one")
}
function add2point(){
    homePoints("add-two")
}
function add3point(){
    homePoints("add-three")
}
function add1points(){
    guestpoints("add-one")
}
function add1points(){
    guestpoints("add-two")
}
function add1points(){
    guestpoints("add-three")
}

 {
    switch(points){
        case "addOne":
            homebox += 1
            break;
            case "addTwo":
                homebox += 2
                break;
    }
    // homebox += 1
    // homeboxEl.textContent = homebox
    // homeboxEl.style.color = "white"
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

// //  color section
// if(homeboxEl>guestboxEl){
//     homeboxEl.style.color = "green"
//     guestboxEl.style.color = "red"
// }if(guestboxEl>homeboxEl){
//     homeboxEl.style.color = "red"
//     guestboxEl.style.color = "green"
// }else(guestboxEl===homeboxEl){
//     homeboxEl.style.color = "black"
//     guestboxEl.style.color = "black"
// }