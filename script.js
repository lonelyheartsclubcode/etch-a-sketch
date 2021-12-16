const mainDiv = document.querySelector('.mainDiv');

for (let i = 0; i < 16; i++) {
  let grid = document.createElement('div');
  grid.classList.add("gridPiece");
  grid.textContent = `Mika here`;
  mainDiv.appendChild(grid);
}