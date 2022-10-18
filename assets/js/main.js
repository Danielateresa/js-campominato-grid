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


//ogni cella ha un numero progressivo da 1 a 100




//al click deve essere creata la griglia
//seleziono il bottone dal DOM
let buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', function () {


    //loop per creare le celle che mi servono(100)
    for (i = 1; i <= totalCells; i++) {
        //let number = numberList[i];
        //console.log(i);
        //evoco la funzione con i segnaposto che poi passeranno le variabili nella funzione stessa
        cellGenerator(container);

    }
    clickOnCell(totalCells)
    let cellsList = document.querySelectorAll('.cell');
    cellsList.addEventListener('click', function () {


        console.log('ho cliccato sulla cella');
    })


})

//la funzione ha il compito di creare la cella
function cellGenerator(containerEl) {


    //aggiungo al DOM la stringa dellea cella
    const cellString = document.createElement('div');
    //assegno la classe al div creato
    cellString.classList.add('cell');
    //aggiungo i numeri nelle celle
    cellString.insertAdjacentHTML('beforeend', i);
    //console.log(cellString);
    //inserisco le celle nel container
    containerEl.insertAdjacentElement('beforeend', cellString);
    return cellString

    //la stringa era precedentemente così scirtta `<div class="cell">${i}</div>`; ma questo metodo non permette di asssegnare metodi
}

//creo il click sulla singola cella
//click su cosa?
function clickOnCell(totalCells) {
    for (let i = 0; i < totalCells.length; i++) {
        let cell = totalCells[i];
        console.log(cell);


    }
}


//con un ciclo for scorro le caselle per creare il click alla casella singola
