const buttonStartJustePrix = document.querySelector('.startJustePrix');
const buttonStartQuizz = document.querySelector('.startQuizz');
const buttonStartDiceRoller = document.querySelector('.startDiceRoller');
const buttonStartRollDice = document.querySelector('.startDiceRoller');

function init() {
    buttonStartQuizz.addEventListener('click', Quizz.startQuizz);
    buttonStartJustePrix.addEventListener('click', JustePrix.startJustePrix);
    buttonStartDiceRoller.addEventListener('click', DiceROller.startDiceRoller);
}

init();

// TODO
// faire du CSS
// créer des fonctions init dans chaque jeu, et la fonction init de l'app doit appeler les init de chaque jeu
