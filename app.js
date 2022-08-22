


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
timer.addEventListener('click', openModal)

function openModal(){
    modal.style.display === "none" ? modal.style.display = 'block' : modal.style.display = 'none';
    modal.innerHTML = new Date()
}