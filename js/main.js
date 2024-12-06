/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
    updateScoreDisplay();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    if (win) {                                      //la condition pour augementer ou non le scors du joueurs dans le local storage 
        if (win === 'X') {
            xWins++;
            localStorage.setItem('xWins', xWins);   // si x gagne on change la valeur de son nombre de victoire dans localstorage
        } else if (win === 'O') {
            oWins++;
            localStorage.setItem('oWins', oWins);   // mm chose pour o 
        }
    }
    messages.textContent = win === 'T' ? `C'est une égalité !` : win ? `${win} gagne la partie !` : `C'est au tour de ${turn} !`;
    win=0;            //pour changer la valeur de win car comme on met a jour le score a partir de ca si on le met pas a 0 a chaque fin de tour le gagnant reste l'ancien gagnant mm si parsonne joue 
};



function updateScoreDisplay() {
    const scoreBoard = document.getElementById('score-board');  //pour cree et chamger le tableau des scores
    scoreBoard.innerHTML = `
        <p>Score de X : ${xWins} || Score de O : ${oWins}</p>
    `;
}



// ma partie 
//
//
//
//
//
//


let xWins = parseInt(localStorage.getItem('xWins')) || 0;  // on inisialise des variable a 0 ensuite elle prend la valeur de son local storage
let oWins = parseInt(localStorage.getItem('oWins')) || 0;
const storageKey = 'neverShowDialog';             // Bouton pour fermer la fenêtre et enregistrer une préférence pour qu'elle ne s’affiche plus.

document.addEventListener('DOMContentLoaded', dialog()); // pour que la function dialog se fasse au chargement de la page 
    
function dialog () {
    const dialog = document.getElementById('dialog');                               // une constant 
    const closeButton = document.getElementById('fermer-dialog');                   // 
    const neverShowButton = document.getElementById('ne-plus-afficher');            // 

    // verifier si la fenetre doit être affichée
    if (!localStorage.getItem(storageKey)) { // si dans local sotage ya pas la clef "neverShowDialog" ca afficher la fenetre en mode modal pour rien pouvoir faire deriere
        dialog.showModal(); 
    }

// fermer la fenetre sans modifier le stockage 
closeButton.addEventListener('click', 
function () 
{
    dialog.close();
});

// fermer la fenetre et enregistrer dans clef de storage pour qu a la ligne 87 et 88 le dialog de s'affiche jamais 
// (pour modifer ca faut aller dans le console du navigateur et ecrire "localStorage.removeItem('neverShowDialog');")
neverShowButton.addEventListener('click', 
function () 
{
    localStorage.setItem(storageKey, 'true');
    dialog.close();
});
};



document.getElementById('reset-scores').addEventListener('click',          //avec la mm methode que au dessus ligne 26 (code de la dame) j'ai fait un autre boutton pour reset le scoresboard
function  resetScores() 
{
    xWins = 0;                                  // tout réinitialiser
    oWins = 0;                                  //
    localStorage.removeItem('xWins');           // suppr les variable du localstorage
    localStorage.removeItem('oWins');
    updateScoreDisplay();                       // mettre a jour le tableau
});


init();   // deplaser ca car dans cette function on fait la mise a jour visuel du score boar et si on fait cette fonction avant le reste ba c'est pas a jour