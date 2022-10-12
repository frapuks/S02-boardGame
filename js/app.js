const buttonStartJustePrix = document.querySelector('.startJustePrix');
const buttonStartQuizz = document.querySelector('.startQuizz');

function init() {
    buttonStartQuizz.addEventListener('click', startQuizz);
    buttonStartJustePrix.addEventListener('click', startJustePrix);
}

init();

// TODO
// créer des modules de mes jeux
// faire du CSS
// gérer l'affichage des solutions du quizz dans une modale
// afficher les résultats du quizz dans un tableau