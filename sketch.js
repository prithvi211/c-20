var mR,fR;



function setup() {
  createCanvas(800,400);
  fR=createSprite(200, 200, 150, 200);
  fR.shapeColor="green";
  fR.debug= true;
  fR.velocityX=3;
  mR=createSprite(600, 200, 50, 50);
  mR.shapeColor="green";
  mR.debug= true;
  mR.velocityX=-2;
}


function draw() {
  background(0); 
 // mR.x=mouseX;
 // mR.y=mouseY;

 /* if(mR.x-fR.x<(fR.width+mR.width)/2 && fR.x-mR.x<(fR.width+mR.width)/2 &&
  fR.y-mR.y<(fR.height+mR.height)/2 && mR.y-fR.y<(fR.height+mR.height)/2) {
    fR.shapeColor="red";
    mR.shapeColor="red";
    
  } else {
    fR.shapeColor="green";
    mR.shapeColor="green";
  }*/


  if(mR.x-fR.x<(fR.width+mR.width)/2 && fR.x-mR.x<(fR.width+mR.width)/2){
    mR.velocityX *= -1;
    fR.velocityX *= -1;
  } 
  
  if(fR.y-mR.y<(fR.height+mR.height)/2 && mR.y-fR.y<(fR.height+mR.height)/2){
    mR.velocityY *= -1;
    fR.velocityY *= -1;
  }
  drawSprites();
}