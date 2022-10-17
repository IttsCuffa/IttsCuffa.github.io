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


/* El funcionamiento es correcto pero la logica esta mal. */
/* (()=>{
    const d=document;
   const $btnMode=d.querySelector(".btn-mode");
   const body=d.querySelector("body");
    const $menuLinks=d.querySelectorAll(".menu-link ")
   const $navMenu=d.querySelector(".nav-menu")
   const header=d.querySelector("header")
   const $svgLinks=d.querySelectorAll(".svg-link")
    $btnMode.addEventListener("click",e=>{
        $btnMode.firstElementChild.classList.toggle("none");
        $btnMode.lastElementChild.classList.toggle("none");
        body.classList.toggle("dark-mode");
       header.classList.toggle("dark-mode");
        $navMenu.classList.toggle("dark-mode");
      
        $menuLinks.forEach(el => {
            el.classList.toggle("dark-mode")
          });
       $svgLinks.forEach(el=>{
        el.classList.toggle("dark-mode")
       })
     
    })
    })(); */


    (()=>{
        const d=document;
        const $btnMode=d.querySelector(".btn-mode");
   const body=d.querySelector("body");
    const $menuLinks=d.querySelectorAll(".menu-link ")
   const $navMenu=d.querySelector(".nav-menu")
   const header=d.querySelector("header")
   const $svgLinks=d.querySelectorAll(".svg-link")
   const ls=localStorage;
    const $moon=d.querySelector(".moon");
    const $sun=d.querySelector(".sun");
        
$btnMode.addEventListener("click",e=>{
   if($moon.matches(".none")){
        lightMode();
   }else{
 
    darkMode();
   }
})
   /* carga del dom-testing de dark o light */
        d.addEventListener("DOMContentLoaded",e=>{
            /* Si al obtener el elemento(clave) no existe(es igual a null) entonces le establecemos una clave llamada theme con su valor dark */
            if(ls.getItem("theme")===null){
                ls.setItem("theme","dark")
            }

            if(ls.getItem("theme")==="dark"){
                darkMode();
            }
            if(ls.getItem("theme")==="light"){
                lightMode();
            }
           
        })

        let darkMode=()=>{
            $moon.classList.add("none");
            $sun.classList.remove("none");
            body.classList.add("dark-mode");
            header.classList.add("dark-mode");
             $navMenu.classList.add("dark-mode");
           
             $menuLinks.forEach(el => {
                 el.classList.add("dark-mode")
               });
            $svgLinks.forEach(el=>{
             el.classList.add("dark-mode")

            })
            ls.setItem("theme","dark")
        }
     
       
        let lightMode=()=>{
            $sun.classList.add("none");
            $moon.classList.remove("none");
            body.classList.remove("dark-mode");
            header.classList.remove("dark-mode");
             $navMenu.classList.remove("dark-mode");
           
             $menuLinks.forEach(el => {
                 el.classList.remove("dark-mode")
               });
            $svgLinks.forEach(el=>{
             el.classList.remove("dark-mode")
            })
            ls.setItem("theme","light")
        }
       
    })();





  /*  (()=>{ */
    /*   /* localStorage */
     /*  saveLocalStorage(body.classList.value); */
      /*  console.log(body.classList.value) 
 
      let saveLocalStorage=(mode) =>{
        localStorage.setItem( "theme",mode);
    }

    let getLocalStorage=()=>{
        localStorage.getItem("theme")
    }
   })();
*/
/* Contacto form */
(()=>{
    const d=document;
    const $form=d.querySelector(".form")
    const $response=d.querySelector(".contact-form-response")
    $form.addEventListener("submit",e=>{
        e.preventDefault();
        fetch("https://formsubmit.co/ajax/riosfacundo.isaias@gmail.com",{
            method:"POST",
            body: new FormData(e.target),
        }).then((res)=>(res.ok ? res.json():Promise.reject(res)))
        .then((json)=>{
    /* ventana modal y loader faltan */
    location.hash="#gracias";
    $form.reset()

        })
           
        .catch((err)=>{
            let message=err.statusText || "Ocurrio un error al enviar el formulario,intente nuevamente";
            $response.querySelector("h3").innerHTML=`Error${err.status}:${message}`;

        }).finally(()=>{
            setTimeout(()=>{
                location.hash="#close";
            },3000)
        })
    })
})();
/*  */