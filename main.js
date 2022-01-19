import Snake from "./snake.js"
import Food from "./food.js";

export var container = document.getElementById("gameBoard");
export var ctx = container.getContext('2d');
var currentTime = 0;
export var gameW  = container.width;
export var gameH = container.height;
var lastR = 0;
export var isFoodEaten = true;
 


function gameLoop(currentTime){
  //setTimeout(gameLoop, 50);
  window.requestAnimationFrame(gameLoop);
  const time = (currentTime - lastR)/1000;
  
  
  if(time < 1/35) return;
  lastR = currentTime;
   ctx.clearRect(0,0,400,400);
   //food.draw(ctx);
   update();
   draw(ctx);
   }


function update(){
    
   if(snake1.checkFoodCollision(food.x,food.y,food.width,food.height)){
       food.spawn();
       //snake1.slength++;
   }
   snake1.update();
    if(snake1.checkDeath()){
        console.log('gameOver');
    }
   
}
function  draw(){
    
    snake1.draw(ctx);
     food.draw(ctx);
    
} 

window.addEventListener('keydown',e =>{
    const direction = e.key;
    snake1.changeDir(direction);
});

let snake1 = new Snake(gameW,gameH);
 let food = new Food(gameW,gameH);
 food.spawn();
 gameLoop(currentTime);




