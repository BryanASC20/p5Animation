let xPos = -25;
let yPos = -25;
let yMove = true;
let xMove = false;
let rRand = 0;
let gRand = 255;
let bRand = 0;
let speed = 3;
 
function setup() {
   createCanvas(500, 500);
   background(20);
}
 
function draw() {
   background(20, 20);
 
   fill(rRand, gRand, bRand);
   if(yMove){
       ellipse(250, yPos, 50, 50);
        yPos += speed;
        if (yPos > 525) {
            yPos = -25;
            xMove = true;
            yMove = false;
        }
   }

    if(xMove){
         ellipse(xPos, 250, 50, 50);
         xPos += speed;
         if (xPos > 525) {
            xPos = -25;
            xMove = false;
            yMove = true;
         }
    }
}
function mouseClicked(){
    rRand = random (0, 255);
    gRand = random (0, 255);
    bRand = random (0, 255);
    yPos = -25;
    xPos = -25
    speed = random (3, 8);
    xMove = false;
    yMove = true;
}