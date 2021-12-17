const mainDiv = document.querySelector('.container');
const r = document.querySelector(':root');

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
})

btn.addEventListener('click', () => {
  clearPage();
  let k = prompt('How many squares per side?', '16');
  newGrid (k);
  r.style.setProperty('--column', `repeat(${k}, 1fr)`);
});

function clearPage() {
  while (mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.firstChild);
  }
}

function newGrid(k) {
  
  let j = parseInt(k*k);

  if (k <= 100) {
    for (let i = 0; i < j; i++) {
      let grid = document.createElement('div');
      grid.classList.add('gridPiece');
      mainDiv.appendChild(grid);
    }
  } else {
    alert("Please choose a number less than or equal to 100.");
    for (let i = 0; i < 256; i++) {
      let grid = document.createElement('div');
      grid.classList.add('gridPiece');
      mainDiv.appendChild(grid);
    }
  }

  [...document.querySelectorAll('.gridPiece')].forEach((gridPiece) =>{
    gridPiece.addEventListener('mouseover', function () {
      gridPiece.style.backgroundColor = '#BAE4BF';
    });
  })
  
}
