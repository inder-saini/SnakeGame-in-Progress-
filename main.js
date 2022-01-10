import Snake from "./snake.js"
import Food from "./food.js";

export var container = document.getElementById("gameBoard");
var ctx = container.getContext('2d');
var currentTime = 0;
var lastRenderTime = 0;
var gameW  = container.width;
var gameH = container.height;
var isFoodEaten =true;
var score =0 ;
var isFoodEaten = true;

 let snake1 = new Snake(gameW,gameH);
 let food = new Food();

function gameLoop(){
  setTimeout(gameLoop, 50);
   ctx.clearRect(0,0,400,400);
   update();
  draw();
  
}

function update(){
    snake1.update();
    
    if(checkCollision()){
        food.spawn();
    }
    if(snake1.checkDeath()){
        console.log('gameOver');
    }
   
}
function  draw(){
    
    snake1.draw(ctx);
    food.draw(ctx);
}


function checkCollision(){
    if(food.x<snake1.x+10 && food.x+6 > snake1.x && food.y<snake1.y+10 && 6+food.y > snake1.y){
    isFoodEaten = true;
    //food.spawn();
    score++;
    console.log(score);
    return true;
    }
}




gameLoop(currentTime);


