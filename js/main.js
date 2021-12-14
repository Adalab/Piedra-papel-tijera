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


//Creo un contador para el numero de victorias
//Lo creo fuera para que no se pierda el valor
let counterPlayer = 0;
let counterComputer = 0;
//Contador numero de intentos
let counterTry = 0;

function handleClick(event) {

    event.preventDefault();
    //Cuando pulse necesito recoger el valor selecionado
    const optionPlayer = parseInt(options.value);

    //Convierto el valor aletorio al valor del seleccionable

    if (optionComputer < 3) {
        optionComputer = 1;
    } else if (optionComputer >= 6) {
        optionComputer = 2;
    } else {
        optionComputer = 3;
    }

    //Cuando tenga el valor seleccionado tengo que compararlo con el valor generado aleatorio.


    if (optionPlayer === 0) {
        result.innerHTML = "Seleccione una opción";
    } else if (optionPlayer === optionComputer) {
        result.innerHTML = "Empate";
    } else if (optionPlayer === 1 && optionComputer === 3 ||
        optionPlayer === 2 && optionComputer === 1 || optionPlayer === 3 && optionComputer === 2) {
        //Ponemos lasnopciones para que gane el jugador
        result.innerHTML = "Has ganado!";
        player.innerHTML = ++counterPlayer;
    } else {
        result.innerHTML = "Has perdido";
        computer.innerHTML = ++counterComputer;
    }
    //Para reiniciar el random si no siempre el mismo resultado la computadora
    optionComputer = getRandomNumber(10);

    //Comprobamos numero de intentos
    counterTry++;

    if (counterTry > 10) {
        counterPlayer = 0;
        counterComputer = 0;

        counterTry = 0;

        //Metemos el resultado dentro del inner
        player.innerHTML = counterPlayer;
        computer.innerHTML = counterComputer;
    }

}

//Eventos
button.addEventListener('click', handleClick);