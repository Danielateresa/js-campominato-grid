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
//celle per riga da inserie (con la radice quadrata di totalCells ootengo il numero delle righe 100/10, 49/7, ecc)
const cellsRow = Math.sqrt(totalCells);
//console.log(cellsRow);

//seleziono il container dal DOM
const containerEl = document.querySelector('.container');
//ogni cella ha un numero progressivo da 1 a 100

//al click deve essere creata la griglia
//seleziono il bottone dal DOM
const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', function () {


    //loop per creare le celle che mi servono secondo il livello scelto(numero ri celle)
    for (i = 1; i <= totalCells; i++) {
        //aggiungo al DOM la stringa dellea cella 
        //la funzione ha il compito di creare la cella
        const cellString = cellElementGenerator('div', 'cell', i, cellsRow);
        //assegno la classe al div creato
        cellString.classList.add('cell');
        //console.log(cellString);
        //aggiungo i numeri nelle celle
        cellString.innerText = i;
        //ci sono 10 caselle per 10 righe
        cellString.style.width = `calc( 100% / ${cellsRow})`;
        //inserisco le celle nel container
        containerEl.insertAdjacentElement('beforeend', cellString);


        //cliccando sulla singola cella questa cambia colore 
        cellString.addEventListener('click', function () {
            //this si riferisce a cellstring, ossia la cella
            this.classList.toggle('clicked_cell');
            //compare in console innertext che rappresenta il numero legato alla cella
            console.log(this.innerText);
        })
    }

})

//funzione con i segnaposto che poi passeranno le variabili nella funzione stessa
function cellElementGenerator(tagname, cssClass, n, cellsRow) {
    const cellString = document.createElement(tagname);
    cellString.className = cssClass;
    cellString.innerText = n;
    cellString.style.width = `calc( 100% / ${cellsRow})`;
    return cellString;
}


