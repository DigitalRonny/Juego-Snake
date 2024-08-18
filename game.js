const playBoard = document.querySelector(".play-board")

let foodX, foodY; 
let snakeX= 10, snakeY= 20;
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() *30) + 1;
    foodY = Math.floor(Math.random() *30) + 1;
}


const changeDirection = (e) => {
    //console.log(e);
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
    initGame()
}


const initGame = () => {
    let htmlMarkUp= `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
    }


    snakeX += velocityX;
    snakeY += velocityY;
    
    htmlMarkUp += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`
    playBoard.innerHTML = htmlMarkUp;
}

changeFoodPosition();
//initGame(); 
setInterval(initGame, 125)
document.addEventListener("keydown", changeDirection);