/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */


/*1.L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.

 -Serve un bottone che scatenerà l'evento
 -Serve un container nel DOM che conterrà le celle della griglia
 -seleziono l'elemento del DOM container
 -con il ciclo for posso creare le varie celle, sono 100 in totale

*/

//creo :
//delle carìvariabili con il numero totale delle caselle, 
//la stringa con i tag che comporanno la cella singola, 
let totalCells = 100;

//seleziono il container dal DOM
let container = document.querySelector('.container');
//seleziono le celle dal DOM
let cellsList = document.querySelector('cell');

//ogni cella ha un numero progressivo da 1 a 100

for (i = 0; i <= totalCells; i++) {
    //let number = numberList[i];
    console.log(i);
}


//al click deve essere creata la griglia
//seleziono il bottone dal DOM
let buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', function () {

    //creo la funzione con i segnaposto che poi passeranno le variabili nella funzione stessa
    cellGenerator(totalCells, container);

    //recupero la classe che cambia colore alla cella
    const clickedCell = document.querySelector('.clicked_cell');

})

function cellGenerator(maxCells, containerEl) {

    for (let i = 1; i <= maxCells; i++) {

        //aggiungo al DOM la stringa dellea cella
        const cellString = document.createElement('div');
        cellString.classList.add('cell');
        cellString.insertAdjacentHTML('beforeend', i);
        console.log(cellString);
        containerEl.insertAdjacentElement('beforeend', cellString);
        /* `<div class="cell">${i}</div>`; */
    }

}


//con un ciclo for scorro le caselle per creare il click alla casella singola
