document.addEventListener("DOMContentLoaded", () => {
let btnAbrir=document.querySelector(".iconos svg:nth-child(2)");//El icono para abrir el menú
let desp=document.querySelector(".desplegable");
let body=document.querySelector("body");

btnAbrir.addEventListener("click",()=>{ //Cuando hago click en el icono se despliega el menu   
    console.log("CLICK DETECTADO");
    desp.style.top="0%";
    desp.style.transition="top 0.5s linear";
    desp.style.height="100vh";
    desp.style.backgroundColor="#ee2737";
    body.style.overflow = "hidden";
});



let btnCerrar=document.querySelector(".cerrarMenu div:nth-child(1)>svg");

btnCerrar.addEventListener("click",()=>{
    desp.style.top="-100%";
    body.style.overflow = "visible";
})



//CAMBIAR EL BOTON DE HACER PEDIDO
// Selecciona el primer enlace dentro del div con id "contenedor"
// const btnPedido = document.querySelector(".nav-bar>a");
// const nav=document.querySelector(".nav-bar");

// // Crea una función que verifica el ancho de la pantalla
// function cambiarTextoPedido() {
//   if (window.matchMedia("(max-width: 992px)").matches) {
//     btnPedido.textContent = "PEDIR";
//     nav.style.width="30%";
//   } else {
//     btnPedido.textContent = "HACER PEDIDO";
//     nav.style.width="38%";
//   }
// }

// // Ejecuta la función al cargar la página y cada vez que la pantalla cambia de tamaño
// window.addEventListener("load", cambiarTextoPedido);
// window.addEventListener("resize", cambiarTextoPedido);

})
