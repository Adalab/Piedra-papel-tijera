'use strict';

//1.Recogemos los elementos

const options = document.querySelector('.js_option');
const button = document.querySelector('.js_button');
const player = document.querySelector('.js_player');
const computer = document.querySelector('.js_computer');
const result = document.querySelector('.js_result')
const buttonReset = document.querySelector('.js_buttonReset');

//Añado la clase de hidden al botón reset
buttonReset.classList.add('hidden');

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

    //Para reiniciar el random si no siempre el mismo resultado la computadora
    let optionComputer = getRandomNumber(10);

    event.preventDefault();
    //Cuando pulse necesito recoger el valor selecionado
    let optionPlayer = parseInt(options.value);

    //Convierto el valor aletorio al valor del seleccionable

    if (optionComputer < 3) {
        optionComputer = 1;//Piedra
    } else if (optionComputer >= 6) {
        optionComputer = 2;//Papel
    } else {
        optionComputer = 3;//Tijera
    }

    //Cuando tenga el valor seleccionado tengo que compararlo con el valor generado aleatorio.
    //Llamar y enviar una variable
    feedbackPainter(optionPlayer, optionComputer);

    //Comprobamos numero de intentos
    counterTry++;

    if (counterTry > 10) {
        buttonReset.classList.remove('hidden');
    } else {
        //Añado la clase de hidden al botón reset
        buttonReset.classList.add('hidden');
    }
}

function feedbackPainter(optionPlayer, optionComputer) {
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
}

function handleReset() {
    counterPlayer = 0;
    counterComputer = 0;
    counterTry = 0;
    //Metemos el resultado dentro del inner
    player.innerHTML = counterPlayer;
    computer.innerHTML = counterComputer;
}

//Eventos
button.addEventListener('click', handleClick);
buttonReset.addEventListener('click', handleReset);