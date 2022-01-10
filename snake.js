 import {getInputDirection} from "./input.js";

export default class Snake{
        
     constructor(gameW,gameH){
        this.width = 10;
        this.height = 10;
        this.x = gameW/2 - this.width;
        this.y = gameH/2 - this.height;
        this.body = [];
        this.pos = {
         x:gameW/2 - this.width,
         y:gameH/2 - this.height  
     };
     }
     
     update(){
          const inputS = getInputDirection();
    this.body.push(this.pos['x'],this.pos['y']);     
  this.pos['x'] += inputS.x;
  this.pos['y'] += inputS.y;
     }
     
     draw(ctx){
       ctx.fillStyle = "black";
       ctx.fillRect(this.pos['x'],this.pos['y'],this.width,this.height);
     }
     checkDeath(){
          if(this.pos['x'] < 0){
      return true;
    }
    else if(this.pos['x'] > 400){
        return true;
    }
     else if(this.pos['y'] > 400){
        return true;
    }
     else if(this.pos['y'] < 10){
        return true;
    }
    else{
        return false;
    }
     }
     
     
     
}


