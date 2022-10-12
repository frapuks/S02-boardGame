let level = 1;
let randomNumber;
let counter = 0;
let partyCounter = 0;
let victory = false;
let userNumber;
const boardResultJustePrix = document.querySelector('.boardResultJustePrix');




function startJustePrix() {
    initGame();
    playGame();
    endGame();
    displayScore();
}

function initGame() {
    chooseLevel();
    randomNumber = Math.round(Math.random() * (level * 10));
    counter = 1;
    partyCounter++;
    victory = false;
}

function chooseLevel() {
    do{
        level = parseInt(prompt(`Choissisez votre niveau entre 1 et 10 (Question obligatoire !)`));
    } while (isNaN(level) || level < 1 || level > 10);
}

function displayScore() {
    let rowScore = document.createElement('tr');
    let cellPartyNumber = document.createElement('td');
    cellPartyNumber.textContent = partyCounter;
    let cellScore = document.createElement('td');
    cellScore.textContent = counter;
    let cellVictory = document.createElement('td');
    cellVictory.textContent = victory;
    let cellRandomNumber = document.createElement('td');
    cellRandomNumber.textContent = randomNumber;
    let cellLevel = document.createElement('td');
    cellLevel.textContent = level;

    rowScore.appendChild(cellPartyNumber);
    rowScore.appendChild(cellLevel);
    rowScore.appendChild(cellRandomNumber);
    rowScore.appendChild(cellScore);
    rowScore.appendChild(cellVictory);
    boardResultJustePrix.appendChild(rowScore);
}

function endGame() {
    if (userNumber === randomNumber) {
        alert(`OUI OUI OUI, C'est Gagné !!! Vous avez réussi en ${counter} essais`);
        victory = true;
    } else {
        counter--;
        alert(`C'est perdu. Vous avez fait ${counter} essais !`);
    }
}

function playGame() {
    userNumber = parseInt(prompt(`Trouvez le Juste Prix entre 0 et ${level * 10}`));

    while (userNumber !== randomNumber) {
        if (isNaN(userNumber)){
            break;
        } else if (userNumber < randomNumber) {
            userNumber = parseInt(prompt(`C'est PLUS que ${userNumber}`));
        } else if (userNumber > randomNumber) {
            userNumber = parseInt(prompt(`C'est MOINS que ${userNumber}`));
        }
        counter++;
    }
}
