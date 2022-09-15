const d=document;
const $btnMenu=d.querySelector(".btn-menu");
const $nav=d.querySelector(".nav")
$btnMenu.addEventListener("click",e=>{
    $nav.classList.toggle("none")
})