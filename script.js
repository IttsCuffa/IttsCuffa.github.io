/* Menu mobile clousure */
(()=>{
    const d=document;
    const $btnMenu=d.querySelector(".btn-menu");
    const $nav=d.querySelector(".nav-menu");
    const $bgBlack=d.querySelector(".bg-black");
    const $logo=d.querySelector(".logo")
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



/**Menu desplegable */
(()=>{
  const d=document;
  const listItems=d.querySelectorAll(".list-button-click");

listItems.forEach(listItem=>{
  listItem.addEventListener("click",()=>{
    listItem.classList.toggle('arrow');
    let height=0;
    let menu=listItem.nextElementSibling;
    if(menu.clientHeight=="0"){
      height=menu.scrollHeight;
    }
    menu.style.height=  `${height}px`;
  })
})


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
        if(campos.name && campos.email && campos.motives){
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
/**BTN Scroll top */
(()=>{
  const d=document,
  $btnScroll=d.querySelector(".btn-scroll-top")



  window.addEventListener("scroll",e=>{
    let scroll=d.documentElement.scrollTop;
    if(scroll>575){
      
      $btnScroll.classList.remove("hidden")
    }else{
  $btnScroll.classList.add("hidden")
    }
  })


  d.addEventListener("click",(e)=>{
    if(e.target.matches(".btn-scroll-top")){
      window.scrollTo({
        behavior:"smooth",
        top:0
      })
    }
  })

})();


(()=>{
  const d=document;
 const section=d.querySelectorAll("main section")


  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("mostrar-seccion")
      }
    })
  })
 
  section.forEach(el=>observer.observe(el))
})();