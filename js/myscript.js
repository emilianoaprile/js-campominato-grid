console.log('CAMPOMINATO')

// richiamo elemento btn play dal DOM
const btnGiocaElement = document.querySelector('.btn-play');
console.log(btnGiocaElement);

// richiamo elemento grid dal DOM
const gridElement = document.querySelector('.grid');
console.log(gridElement);

// creo evento click per far comparire griglia

btnGiocaElement.addEventListener('click', function () {
    console.log('gioca', btnGiocaElement);

    // assegno stringa vuota in modo tale che ad ogni click non si generano griglie multiple
    gridElement.innerHTML = '';

    // tolgo la classe none a grid element
    // gridElement.classList.remove('d-none');

    // for per creare le 100 celle ed assegnarli il numero statico
    for (let i = 0; i < 100; i++) {
        const indexCellNumber = i + 1;
        console.log(indexCellNumber);

        const htmlCell = document.createElement('div');
        console.log(htmlCell);

        gridElement.appendChild(htmlCell);
        htmlCell.classList.add('grid-cell');
    }

    // recupero le cell create con js dal DOM => diventa un array
    const cellDOMElement = document.querySelectorAll('.grid-cell');
    console.log(cellDOMElement);

    // ciclo for per assegnare ad ogni cella l'event listener click (bg-lightblue)
    for (let k = 0; k < cellDOMElement.length; k++) {
        const currentCellElement = cellDOMElement[k];
        console.log(currentCellElement);


        // aggiungo evento click ad ogni cell
        currentCellElement.addEventListener('click', function(){

            currentCellElement.classList.add('bg-blue');
            console.log('ho cliccato sulla casella numero:', k + 1);
        })
    }

})










