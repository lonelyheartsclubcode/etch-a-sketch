const mainDiv = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  let grid = document.createElement('div');
  grid.classList.add('gridPiece');
  mainDiv.appendChild(grid);
}



const btn = document.querySelector('.btn');

[...document.querySelectorAll('.gridPiece')].forEach((gridPiece) =>{
  gridPiece.addEventListener('mouseover', function () {
    gridPiece.style.backgroundColor = '#BAE4BF';
  });
  btn.addEventListener('click', () => {
      clearPage();
      newGrid ();
    });
})

function clearPage() {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function newGrid() {
  let k = prompt('How many squares per side?', '16');
  let j = parseInt(k*k);
  for (let i = 0; i < j; i++) {
    console.log('ye');
    let grid = document.createElement('div');
    grid.classList.add('gridPiece');
    mainDiv.appendChild(grid);
  }

  
}
