//Create variables here
var happyDog, sadDog, dog, foodStock, ref;
var database;
function preload()
{
	//load images here
happyDog = loadImage("images/dogImg1.png");
sadDog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(300,300,150,150);
  dog.addImage(sadDog);
  dog.scale = 0.2;
  database = firebase.database()
  ref = database.ref("Food");
  ref.on("value",readStock);
}
function readStock(data){
foodStock = data.val()
}

function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodStock)
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
textSize(30);
fill(255);
text("Food Stock:"+foodStock,50,50);
}
function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
database.ref("/").update({
  Food:x
})
}


