let btnAbrir=document.querySelector(".iconos svg:nth-child(2)");//El icono para abrir el menú
let desp=document.querySelector(".desplegable");

btnAbrir.addEventListener("click",()=>{ //Cuando hago click en el icono se despliega el menu       
    desp.style.top="100%";
    desp.style.transition="top 0.5s linear";
    desp.style.width="100%";
})