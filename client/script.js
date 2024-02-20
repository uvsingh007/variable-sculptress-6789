const open = document.querySelector(".logo-menu");
const close = document.querySelector(".logo-close")
const menu = document.querySelector(".menu")

open.addEventListener("click",()=>{
    open.classList.toggle("hid")
    menu.classList.toggle("hid")
    close.classList.toggle("hid")
})

close.addEventListener("click",()=>{
    close.classList.toggle("hid")
    menu.classList.toggle("hid")
    open.classList.toggle("hid")
})