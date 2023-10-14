console.log('CAMPOMINATO')

const btnGiocaElement = document.querySelector('.btn-play');
console.log(btnGiocaElement);

const gridElement = document.querySelector('.grid');
console.log(gridElement);

for (let i = 0; i < 100; i++) {
    const cellNumber = i + 1;
    console.log(cellNumber);

    const htmlCell = document.createElement('div');
    console.log(htmlCell);

    gridElement.appendChild(htmlCell);
    htmlCell.classList.add('grid-cell')

    htmlCell.innerHTML = cellNumber;

}