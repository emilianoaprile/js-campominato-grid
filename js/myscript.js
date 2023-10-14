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
    gridElement.classList.remove('d-none');

    // for per creare le 100 celle ed assegnarli il numero statico
    for (let i = 0; i < 100; i++) {
        const cellNumber = i + 1;
        console.log(cellNumber);

        const htmlCell = document.createElement('div');
        console.log(htmlCell);

        gridElement.appendChild(htmlCell);
        htmlCell.classList.add('grid-cell')

        htmlCell.innerHTML = cellNumber;
    }

})










