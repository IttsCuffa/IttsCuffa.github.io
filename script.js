/* Menu mobile clousure */
(()=>{
    const d=document;
    const $btnMenu=d.querySelector(".btn-menu");
    const $nav=d.querySelector(".nav-menu");
    const $bgBlack=d.querySelector(".bg-black")
    /* Abrir menu */
    $btnMenu.addEventListener("click",e=>{
        $btnMenu.firstElementChild.classList.toggle("none")
        $btnMenu.lastElementChild.classList.toggle("none")
        $nav.classList.toggle("close-menu");
        
    })
    /* Este evento aparecera cuando apretemos en unos de los enlaces validos */
    d.addEventListener("click",(e)=>{
        if(!e.target.matches(".nav-menu a")) return false; 
        $btnMenu.firstElementChild.classList.remove("none")
        $btnMenu.lastElementChild.classList.add("none")
        $nav.classList.remove("close-menu");
    })

})();
/* Dark-mode & Light-mode */
(()=>{
    const d=document;
   const $btnMode=d.querySelector(".btn-mode");
   const body=d.querySelector("body");
    const $navItems=d.querySelector(".nav-items ")
   const $navMenu=d.querySelector(".nav-menu")
   const header=d.querySelector("header")
    $btnMode.addEventListener("click",e=>{
        $btnMode.firstElementChild.classList.add("none");
        $btnMode.lastElementChild.classList.remove("none");
        body.classList.add("dark-mode");
       header.classList.add("dark-mode");
        $navMenu.classList.add("dark-mode");
        $navItems.classList.add("dark-mode")
    })

})();