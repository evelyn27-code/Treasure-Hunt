var bg,bg2,form,system,code,security;
var score=0;
var sponge,treasure1,yay,yaygirl;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  sponge = loadImage("spongeBob.png");
  treasure1 = loadImage("treasure1.jpg");
  yay = loadImage("yay.jpg")
  //yaygirl = loadImage("yaygirl1.png")

  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background



  if(score === 3) {
    clear()
    background(bg2)
    image(treasure1, 50,35,150, 120);
    image(yay, 780,30,150, 120);
    image(sponge, 390,320,200, 150);
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 260);
  }

  drawSprites()
}