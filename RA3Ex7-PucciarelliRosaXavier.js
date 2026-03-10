//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
document.addEventListener("DOMContentLoaded", () => {
    let header1 = document.querySelector("h1");
    header1.style.color = "blue";
});

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
let paragraf = document.getElementById("paragraf-hola")
paragraf.textContent="Hola Mon "

//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
let imatge = document.getElementById("imatge-canviant")
imatge.setAttribute("src","https://ethic.es/wp-content/uploads/2023/03/imagen-640x384.jpg")

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
let boton=document.getElementById("boto-alerta")

boton.addEventListener("click", ()=>{
    let fons=document.getElementById("caixa-estil")
    fons.style.backgroundColor="green"
})

//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
let botoActiu=document.getElementById("boto-toggle")
botoActiu.addEventListener("click",()=>{
    let texactiu=document.getElementById("text-classe")
    texactiu.classList.toggle("actiu")
})

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
boton.addEventListener("click",()=>{
    alert("alerta")
})

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
let llista=document.getElementById("llista-compra")
nouItem=document.createElement("li")
nouItem.textContent="Agua"
llista.appendChild(nouItem)

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
let tocarEliminar = document.getElementById("element-eliminar");
tocarEliminar.addEventListener("click", () => {
    tocarEliminar.remove();
});