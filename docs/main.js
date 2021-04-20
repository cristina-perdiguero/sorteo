'use strict'

const nodoBtnAdd       = document.querySelector('#añadir'); 
const nodoBtnGanador   = document.querySelector('#ganador'); 
const nodoParticipante = document.querySelector('#participante'); 
const nodoLista        = document.querySelector('.lista'); 
let   participantes    = []; 
let   resultado;  
let   efecto; 
 
nodoBtnAdd.addEventListener('click', ()=>{
    let participante = nodoParticipante.value; 
    añadirParticipante(participante); 
    createItem(participante); 
})

nodoBtnGanador.addEventListener('click', ()=>{ 
    let efecto = efectoGanador(); 
    pararEfecto(efecto); 
})

function createItem(nombre){
    const listItem     = document.createElement('div'); 
    listItem.innerHTML = nombre; 
    listItem.id        = nombre; 
    nodoLista.appendChild(listItem); 
}

function añadirParticipante(nombre){
    participantes.push(nombre); 
}

function getNumeroSorteo(maximo){
    let numero = Math.random()*maximo; 
    numero = Math.round(numero); 
    return numero ; 
}

function getNumeroMaximo(){
    return participantes.length - 1; 
}

function getGanador(ganador){
    return participantes[ganador]
}

function muestraGanador(ganador){
    if ( resultado !== undefined ){
        resultado.classList.remove('ganador'); 
    }
    resultado = document.querySelector(`#${ganador}`); 
    resultado.classList.add('ganador'); 
}

function ganador() {
    let nMax     = getNumeroMaximo(); 
    let nGanador = getNumeroSorteo(nMax);
    let ganador  = getGanador(nGanador); 
    muestraGanador(ganador); 
}

function efectoGanador(){
    let refInterval = setInterval(() => {
        ganador(); 
    }, 20);
    return refInterval;
}

function pararEfecto( efecto ){
    setTimeout(() => {
        clearInterval(efecto)
    }, 2000);
}