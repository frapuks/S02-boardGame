const buttonStartJustePrix = document.querySelector('.startJustePrix');
const buttonStartQuizz = document.querySelector('.startQuizz');

function init() {
    buttonStartQuizz.addEventListener('click', Quizz.startQuizz);
    buttonStartJustePrix.addEventListener('click', JustePrix.startJustePrix);
}

init();

// TODO
// faire du CSS
// gérer l'affichage des solutions du quizz dans une modale
// afficher les résultats du quizz dans un tableau