
const boton =document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector (".btn-plataforma .plataformas")

boton.addEventListener("click",()=> {
    
    elementoPlataformas.classList.toggle("activo")

});
