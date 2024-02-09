function aumentar(){
    circulo = document.getElementById("circulo");
    circulo.style.width = (circulo.clientWidth+50)+"px";
    circulo.style.height = (circulo.clientHeight+50)+"px";

}
function disminu(){
    circulo = document.getElementById("circulo");
    circulo.style.width = (circulo.clientWidth-50)+"px";
    circulo.style.height = (circulo.clientHeight-50)+"px";

}
function CambiarColor(){
    ColorNuevo = document.getElementById("CambiadorColor");
    document.getElementById("circulo").style.backgroundColor = ColorNuevo.value;
}