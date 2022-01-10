import {container} from "./main.js";
import Snake from "./snake.js";
let snake = new Snake(600,600);

export default class Food{
    constructor(){
        
        this.spawn();
    }
    spawn(){
         
        this.x =  Math.floor(Math.random()*(container.width/10))*10;
        this.y = Math.floor(Math.random()*(container.height/10))*10
        this.radius = 4 + (16 - 4)*Math.random();
    
}
    
    draw(ctx){
            ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,6,6);
        }
        
        
    }



