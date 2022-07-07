// mostrar conteudo
var sobreShow = document.getElementById("sobre");
var habilidadesShow = document.getElementById("habilidade")
var idiomasShow = document.getElementById("idiomas")
var objetivosShow = document.getElementById("objetivos")


// mostrar imagens
var showImgIdiomas = document.getElementById("img-idiomas")
var showImgRaio = document.getElementById("raio")
var showImgvertical = document.getElementById("vertical-img")

// habilidades





function skill(){
    
  

habilidadesShow.style.opacity = "1"
showImgRaio.style.animation = 'raio 2s ease-in-out';
showImgRaio.style.opacity = "1"


sobreShow.style.opacity = "0"
idiomasShow.style.opacity = "0" 
objetivosShow.style.opacity = "0"
showImgIdiomas.style.opacity = "0"




};

function idiomas(){
idiomasShow.style.opacity ="1"
showImgIdiomas.style.opacity = "1"
showImgIdiomas.style.animation = 'idiomas 2s ease-in-out'
showImgRaio.style.opacity = "0"

sobreShow.style.opacity = "0"
habilidadesShow.style.opacity = "0"
objetivosShow.style.opacity = "0"




}

function objetivo(){
    objetivosShow.style.opacity = "1"

    idiomasShow.style.opacity ="0"
    sobreShow.style.opacity = "0"
    habilidadesShow.style.opacity = "0"
    showImgIdiomas.style.opacity = "0"
    showImgRaio.style.opacity = "0"
   
   



}


