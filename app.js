


setInterval(updateTime , 100);
function updateTime() {
    const time = new Date()
    const clock = document.querySelector(".clock")
    
x = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
y = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
z = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
const now = x + ':' + y + ':' + z;

    clock.innerText = now;

    
   
}
let modal = document.querySelector('.modal-uhr')
let timer = document.querySelector('.clock')
timer.addEventListener('click', openModalUhr)

function openModalUhr(){
    modal.style.display === "none" ? modal.style.display = 'block' : modal.style.display = 'none';
    modal.innerHTML = new Date()
}

let modalUber = document.querySelector('.modal-ubermich')
let uberMich = document.querySelector('.uber_mich')
uberMich.addEventListener('click', openModalUber)
let close = document.querySelector('.window-right')
close.addEventListener('click', openModalUber)
function openModalUber() {
    modalUber.style.display === "none" ? modalUber.style.display = 'block' : modalUber.style.display = 'none';
}


let modalArbeit = document.querySelector('.modal-arbeiten')
let arbeit = document.querySelector('.arbeit')
arbeit.addEventListener('click', openModalArbeit)
let close1 = document.querySelector('.window-right1')
close1.addEventListener('click', openModalArbeit)
function openModalArbeit() {
    modalArbeit.style.display === "none" ? modalArbeit.style.display = 'block' : modalArbeit.style.display = 'none';
}

