var dog,sadDog,happyDog;
var feedfood,addfood;
var foodObj;
var database;


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;


  feed=createButooon("feed the dog");
  feed.position(700,75);
  feed.mousePressed(feedDog);

  addFood=createButton("addfood");
  addfood.position(800,95);
  addfood.mousePressed(addfoods)
}

function draw() {
  background(46,139,87);
feedDog();
addFood();
  drawSprites();
}


function feedDog() {
   dog.addImage("happy dog.png");

    if(foodObj.getFoodStock()<= 0{
     foodObj.updateFoodStock(foodObj.getFoodStock()*0
    
    }
      else{
        foodObj.updateFoodStock(foodObj.getFoodStock()-1)
      }
    }


function addFood() {
  foodS++
  database.ref('/').update({
    Food:foodS
  })
}

//function to update food stock and last fed time


//function to add food in stock
