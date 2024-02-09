function aumentarLargo(){
    circulo = document.getElementById("circulo");
    circulo.style.height = (circulo.clientHeight+50)+"px";

}
function disminuLargo(){
    circulo = document.getElementById("circulo");
    circulo.style.height = (circulo.clientHeight-50)+"px";

}
function aumentarAncho(){
    circulo = document.getElementById("circulo");
    circulo.style.width = (circulo.clientWidth+50)+"px";

}
function disminuAncho(){
    circulo = document.getElementById("circulo");
    circulo.style.width = (circulo.clientWidth-50)+"px";

}
function desaparecer(){
    circulo = document.getElementById("circulo");
    if(circulo.hidden == false){
        circulo.hidden = true;
        document.getElementById('desaparecer').innerText = "Aparecer";
    }else{
        circulo.hidden = false;
        document.getElementById('desaparecer').innerText = "Desaparecer";
    }

}
function CambiarColor(){
    ColorNuevo = document.getElementById("CambiadorColor");
    document.getElementById("circulo").style.backgroundColor = ColorNuevo.value;
}