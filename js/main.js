'use strict';

//1.Recogemos los elementos

const options = document.querySelector('.js_option');
const button = document.querySelector('.js_button');
const player = document.querySelector('.js_player');
const computer = document.querySelector('.js_computer');
const result = document.querySelector('.js_result')

//Creo una variable para la opcion de la maquina, le paso un 10 para que me devuelva un valor del 1-10.
let optionComputer = getRandomNumber(10);


//Funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


function handleClick(event) {
    //Cuando pulse necesito recoger el valor selecionado
    const optionPlayer = options.value

    //Convierto el valor aletorio al valor del seleccionable

    if (optionComputer < 3) {
        optionComputer = 1;
    } else if (optionComputer >= 6) {
        optionComputer = 2;
    } else {
        optionComputer = 3;
    }

    //Cuando tenga el valor seleccionado tengo que compararlo con el valor generado aleatorio.



    if (optionPlayer === optionComputer) {
        result.innerHTML = "Empate";
    } else if () {

    }

    //Mostrar mensaje

    //incrementar el contador

}

//Eventos
button.addEventListener('click', handleClick);