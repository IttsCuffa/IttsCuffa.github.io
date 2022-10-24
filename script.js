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
/* dark mode */

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
    $containerRedes=d.querySelectorAll(".container-redes svg")
        
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
            $containerRedes.forEach(el=>{
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
            });
            $containerRedes.forEach(el=>{
                el.classList.remove("dark-mode")
   
               })
            ls.setItem("theme","light")
        }
       
    })();

/*Expresiones regulares-formulario  */
(()=> {
    const d=document,
    $inputs=d.querySelectorAll(".input-form"),
    $textarea=d.querySelector("textarea"),
    $form=d.querySelector(".form")
    $loader=d.querySelector(".container-loader")
   


   const expresiones={
    nombre:/^[a-zA-Z0-9\_\-\s]{4,16}$/,//Letras ,numeros,guion y guion bajo
   correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
   motivos:/^[a-zA-Z0-9\-\s]{4,20}$/, //Letras ,numeros,guion 
   mensaje:/^[a-zA-ZÀ-ÿ-u00f1-u00d10-9\-\s]{4,150}$/
   }

 const campos={
    name:false,
    email:false,
    motives:false,
    textarea:false
 }
   
   const validarFormulario=(e)=>{
         
       switch(e.target.name){
        case "name":
           validarCampos(expresiones.nombre,e.target,"name")
        break;
        case "email":
            validarCampos(expresiones.correo,e.target,"email")
        break;
        case "motives":
            validarCampos(expresiones.motivos,e.target,"motives")
        break;
        case "textarea":
            validarCampos(expresiones.mensaje,e.target,"textarea")
        break;
       }
        
   }
   const validarCampos=(expresion,input,campo)=>{
    if(expresion.test(input.value)){
       document.querySelector(`#grupo${campo} .input-form`).classList.add("input-form-correcto")
       document.querySelector( `#grupo${campo} .input-form`).classList.remove("input-form-incorrecto");
    
       document.querySelector( `#grupo${campo} .form-input-error`).classList.add("none")
        campos[campo]=true;
  console.log( campos[campo])
 }else{
   
    document.querySelector(`#grupo${campo} .input-form`).classList.remove("input-form-correcto")
    document.querySelector( `#grupo${campo} .input-form`).classList.add("input-form-incorrecto")
    document.querySelector( `#grupo${campo} .form-input-error`).classList.remove("none")
    campos[campo]=false;
 }
   }
   $inputs.forEach((el)=> {
    el.addEventListener("keyup",validarFormulario)
    el.addEventListener("blur",validarFormulario)
    

    });

  /*  $textarea.addEventListener("keyup",validarFormulario); */
  console.log(campos)
   $form.addEventListener("submit",(e)=>{
   
    e.preventDefault();   
    $loader.classList.remove("none");     /*   */
        if(campos.name && campos.email && campos.motives && campos.textarea ){
           
            fetch("https://formsubmit.co/ajax/rfxxj.cipko18@jyplo.com", {
                method: "POST",
                body: new FormData(e.target),
              })
                .then((res) => (res.ok ? res.json() : Promise.reject(res)))
                .then((json) => {
                
                    location.hash="#gracias";
                    $form.reset();
                    $inputs.forEach((input)=>{
                        input.classList.remove("input-form-correcto")
                    })
                
                })
                .catch((err) => {
                  console.log(err);

                  let message =
                    err.statusText || "Ocurrió un error al "
                })
                .finally(() => {
                  $loader.classList.add("none");
               
                  setTimeout(() => {
                    location.hash="#close"
                  }, 3000);  
                });
        

        }else{
     
        console.log("error")
       }

          
   })
  

   
})();

