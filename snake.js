 //import {getInputDirection} from "./input.js";
 import {gameW,gameH,ctx,isFoodEaten} from "./main.js";
const snakeBody = [];

export default class Snake{
        
     constructor(gameW,gameH){
        this.width = 10;
        this.height = 10;
        this.x = 0
        this.y = 0;
        this.slength = 3;
        
        this.speed = {
            x:0
            ,y:0
        }
        this.pos = {
         x:gameW/2 - this.width,
         y:gameH/2 - this.height  
     };
     }
     
     update(){
  this.pos['x'] += this.speed.x;
  this.pos['y'] += this.speed.y;
     }
     
     draw(ctx){
         ctx.fillStyle = "black";
          snakeBody.unshift({x:this.pos['x'],y:this.pos['y']});
        for(let i = 0;i<snakeBody.length;i++){
           let part = snakeBody[i];
                 ctx.fillRect(snakeBody[i].x,snakeBody[i].y,this.width-1,this.height-1);
        }
        //snakeBody.push(this.pos['x'],this.pos['y']);
        while(snakeBody.length > this.slength){
            snakeBody.pop();
        }
     }
     checkDeath(){
      
          if(this.pos['x'] < 0){
      return true;
    }
    else if(this.pos['x'] > 410){
        return true;
    }
     else if(this.pos['y'] > 410){
        return true;
    }
     else if(this.pos['y'] < 10){
        return true;
    }
    else{
        return false;
    }
     }
     
     checkFoodCollision(varx,vary,varw,varh){
    var score = 0;
    if(Math.abs(this.pos.x - varx) < varw && Math.abs(this.pos.y - vary) < varh){ 
    score++;
    this.slength = this.slength+5;
    console.log(score);
    //console.log(this.slength);
    return true;
    }
    return false;
      }
      
      
      changeDir(direction){
          switch(direction){
      case 'ArrowUp':
       if(this.speed.y !== 0) break;
       this.speed = {x:0,y:-1};
       break;
          
      case'ArrowDown':
       if(this.speed.y !== 0) break;
       this.speed = {x:0,y:1};
       break;
          
      case'ArrowLeft':
       if(this.speed.x !== 0) break;
       this.speed = {x:-1,y:0};
       break;
          
      case 'ArrowRight':
       if(this.speed.x !== 0) break;   
       this.speed = {x:1,y:0};
       break;
  }
      }
     
}


