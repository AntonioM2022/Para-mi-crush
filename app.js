function moverPosicionRandom(elm){
    elm.style.position='absolute';
    elm.style.top = Math.random()* (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random()* (window.innerHeight - elm.offsetHeight) + 'px';
}

let btnSi= document.getElementById("btn_si")
let btnNO = document.getElementById("btn_no")
let divModoSeXo= document.getElementsByClassName("modo_sexo")[0]

btnNO.addEventListener('mpuseeenter', function(e){moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e) {
    alert('sabia que diriras que si. Casemonos ya y tengamso hijos. TE AMO!!!')
    divModoSeXo.style.display= 'block';
    const cancion= new Audio('');
    cancion.play();

})

