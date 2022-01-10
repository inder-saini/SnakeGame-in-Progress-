let speed = {
    x:0,
    y:0
};
let prevSpeed = {
    x:0,
    y:0
};

window.addEventListener('keydown',e =>{
  switch(e.key){
      case 'ArrowUp':
       if(prevSpeed.y !== 0) break;
       speed = {x:0,y:-1};
       break;
          
      case'ArrowDown':
       if(prevSpeed.y !== 0) break;
       speed = {x:0,y:1};
       break;
          
      case'ArrowLeft':
       if(prevSpeed.x !== 0) break;
       speed = {x:-1,y:0};
       break;
          
      case 'ArrowRight':
          if(prevSpeed.x !== 0) break;
       speed = {x:1,y:0};
       break;
  }  
});

export  function getInputDirection(){
    prevSpeed = speed;
    return speed;
}

