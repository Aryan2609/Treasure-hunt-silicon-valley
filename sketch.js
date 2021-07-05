var bg,bg2,form,system,code,security;
var score=0;
var playImage;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2=loadImage("treasure.jpg")
  playImage = loadImage("playbutton.png")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  let btn = document.createElement("button");
    btn.innerHTML = "Solve and click me";
    btn.onclick = function () {
        window.location.href = "siliconvalley.html";
    };
    document.body.appendChild(btn);
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

drawSprites()
}