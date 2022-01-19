//import {container,gameW, gameH} from "./main.js";

export default class Food{
    constructor(gameW,gameH){
        this.gameW = gameW;
        this.gameH = gameH
        this.width = 6;
        this.height = 6;
        this.spawn();
    }
    spawn(){
        this.x =  Math.floor(Math.random()*(this.gameW/10))*10;
        this.y = Math.floor(Math.random()*(this.gameH/10))*10 
}
    
    draw(ctx){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,this.width,this.height);
        }  
    }



