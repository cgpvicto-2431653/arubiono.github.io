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
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `C'est une égalité !` : win ? `${win} gagne la partie !` : `C'est au tour de ${turn} !`;
    };

init();


// ma partie 
//
//
//
//
//
//

document.addEventListener('DOMContentLoaded', dialog()); // pour que la function dialog se fasse au chargement de la page 
    
function dialog () {
    const dialog = document.getElementById('dialog');                               // une constant 
    const closeButton = document.getElementById('fermer-dialog');                   // 
    const neverShowButton = document.getElementById('ne-plus-afficher');            // 
    const storageKey = 'neverShowDialog';                                           // Bouton pour fermer la fenêtre et enregistrer une préférence pour qu'elle ne s’affiche plus.


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

