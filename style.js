document.addEventListener("DOMContentLoaded", () => {
let btnAbrir=document.querySelector(".iconos svg:nth-child(2)");//El icono para abrir el menú
let desp=document.querySelector(".desplegable");

btnAbrir.addEventListener("click",()=>{ //Cuando hago click en el icono se despliega el menu   
    console.log("CLICK DETECTADO");
    desp.style.top="0%";
    desp.style.transition="top 0.5s linear";
    desp.style.height="100vh";
    desp.style.backgroundColor="#ee2737";
    desp.style.overflow = "hidden"
    // desp.style.display="flex";
    // desp.style.flexDirection="column";
    // desp.style.alignItems="center";
});



let btnCerrar=document.querySelector(".cerrarMenu div:nth-child(1)>svg");

btnCerrar.addEventListener("click",()=>{
    desp.style.top="-100%";
})

})
