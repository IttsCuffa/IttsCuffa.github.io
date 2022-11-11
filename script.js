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
   const $containerProject=d.querySelectorAll(".container-project")
   const   $containerRedes=d.querySelectorAll(".container-redes svg")
   const $sectionMenu=d.querySelector(".section-menu")
   const $timeContent=d.querySelectorAll(".timeline-content");
   const $itemContact=d.querySelectorAll(".item");
  const $itemInput=d.querySelectorAll(".form div input")
  const $textarea=d.querySelector("textarea")
   const ls=localStorage;
    const $moon=d.querySelector(".moon");
    const $sun=d.querySelector(".sun");

        
$btnMode.addEventListener("click",e=>{
   if($sun.matches(".none")){
    darkMode();
   }else{
    lightMode();
    
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

        let lightMode=()=>{
            $moon.classList.remove("none");
            $sun.classList.add("none");
            body.classList.add("light-mode");
            header.classList.add("light-mode");
             $navMenu.classList.add("light-mode");
             $sectionMenu.classList.add("light-mode");
             $textarea.classList.add("light-mode");
             $menuLinks.forEach(el => {
                 el.classList.add("light-mode")
               });
            $svgLinks.forEach(el=>{
             el.classList.add("light-mode")

            })
            $containerRedes.forEach(el=>{
                el.classList.add("light-mode")
   
               })
               $containerProject.forEach(el => {
                el.classList.add("light-mode-container-project")
              });
              $timeContent.forEach(el => {
                el.classList.add("light-mode-container-project")
              });
              $itemContact.forEach(el => {
                el.classList.add("light-mode-container-project")
              });
              $itemInput.forEach(el => {
                el.classList.add("light-mode")
              });
               ls.setItem("theme","light");

        }
     
       
        let darkMode=()=>{
            $sun.classList.remove("none");
            $moon.classList.add("none");
            body.classList.remove("light-mode");
            header.classList.remove("light-mode");
             $navMenu.classList.remove("light-mode");
             $sectionMenu.classList.remove("light-mode")
             $textarea.classList.remove("light-mode");
             $menuLinks.forEach(el => {
                 el.classList.remove("light-mode")
               });
            $svgLinks.forEach(el=>{
             el.classList.remove("light-mode")
            });
            $containerRedes.forEach(el=>{
                el.classList.remove("light-mode")
   
               })
               $containerProject.forEach(el => {
                el.classList.remove("light-mode-container-project")
              });
               $timeContent.forEach(el => {
                el.classList.remove("light-mode-container-project")
              });
              $itemContact.forEach(el => {
                el.classList.remove("light-mode-container-project")
              });
              $itemInput.forEach(el => {
                el.classList.remove("light-mode")
              });
            ls.setItem("theme","dark")
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
        if(campos.name && campos.email && campos.motives  ){
           console.log(campos)
            fetch("https://formsubmit.co/ajax/riosfacundo.isaias@gmail.com", {
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

(()=>{
  
 
  
})();