var garden,basket,basketball,soccer,sportball, score =0;
var gardenImg,basketImg,basketballImg,soccerImg,sportballImg,obstacle1,obstacle2,obstacle3;
var obstacle1Img,obstacle2Img,obstaccle3Img;
var background1;
var background1Img;
var background2;
var background2Img;
var play,playbuttonImg;
var gameover,gameoverImg;
var gameState = "serve";
var sportballGroup,basketGroup,soccerGroup;
var obstacle1group,obstacle2group,obstacle3group;
var invisiblegr, invisiblegrImg;
var restart,restartImg;

function preload(){
  playImg = loadImage("play.png");
  background1Img = loadImage("blue.png");
  background2Img = loadImage("clouds.gif");
  basketImg = loadImage("basket.png");
  basketballImg = loadImage("basketball.png");
  soccerImg = loadImage("soccer.png");
  sportballImg = loadImage("sportball.png");
obstacle1Img= loadImage("asteroid.png");
obstacle2Img= loadImage("bomb.png");
obstacle3Img= loadImage("wildtortoise.png");
gameoverImg= loadImage("gameover.png");
invisiblegrImg =loadImage("grass.png") ;
restartImg = loadImage("reset.png")
}


function setup(){
  
  createCanvas(800,600); 
  //start of the game background 

  background1=createSprite(250,120,20,20);
  background1.addImage("backgroung1",background1Img);
  background1.scale = 1.5;
  background1.visible=true;


 play = createSprite(400 , 550 , 50 , 50) ;
play.addImage(playImg) ;
play.scale = 0.2 ;
play.visible = true ;


  background2 = createSprite(600 , 300) ; 
  background2.addImage("background2",background2Img) ;


  //creating basket  running
  basket = createSprite(160,340,20,20);
  basket.scale =0.09;
  basket.addImage("basket",basketImg);
  basket.visible=false;

invisiblegr = createSprite(300 , 840 , 100 , 100) ;
invisiblegr.addImage(invisiblegrImg) ;
invisiblegr.scale = 1 ;
  

restart = createSprite(400 , 350 , 50 , 50) ;
restart.addImage(restartImg) ;
restart.scale = 0.15 ;
restart.visible = false ;
  
gameover = createSprite(400 , 200 , 50 , 50) ;
gameover.addImage(gameoverImg) ;
gameover.scale = 0.15 ;
gameover.visible = false ;
    
  obstacle1group=new Group();
  obstacle2group=new Group();
  obstacle3group=new Group();
  soccerGroup=new Group();
  basketGroup=new Group();
  sportballGroup=new Group();
}

function draw() {

  background("lightblue");
  basket.collide(invisiblegr) ; 
  
 if(gameState ===  "serve"){
  serve() ;
  
  if(mousePressedOver(play)){
    gameState = "play" ;    
  }
  
  
} 


  
//when the gameSTATE is in play mode 
  if(gameState==="play"){
    background2.visible=true;
    play.visible=false;
    background1.visible=false;
    basket.visible = true;
    gameover.visible =false;
    background2.velocityY = 3;
    basket.x = World.mouseX;
   
    basket.x =mouseX;
    basket.y =mouseY;
  
    drawSprites();

    fill("black") ;
    stroke("black") ;
    textSize(20) ;
    text("score:"+score , 550 , 50) ;
  
    if(background2.y < 80){
      background2.y = background2.width/2 ;   
      }


      if(invisiblegr.x < 20){
        invisiblegr.x = invisiblegr.width/2 ;   
        }  

  
    
 if(basket.isTouching(sportballGroup)){
  sportball.destroyEach() ;
 
  score = score + 2 ;
}

if(basket.isTouching(soccerGroup)){
  soccerGroup.destroyEach() ;
 
  score = score + 3 ;
}

if(basket.isTouching(basketballGroup)){
  basketballGroup.destroyEach() ;
 
  score = score + 4 ;
}
  


createBasketballs();
createSoccerss();
createSportball();
createObstacles1s();
createObstacles2s();
createObstacles3s();
  
  if(basket.isTouching(obstacle1group)||basket.isTouching(obstacle2group)||basket.isTouching(obstacle3group)){
    
    obstacle1group.destroyEach();
    obstacle2group.destroyEach();
    obstacle3group.destroyEach();
    gameState="end";

  }
}


  function serve(){
    basket.visible = false ;
    play.visible = true;
    background1.visible = true ;
    background2.visible = false;  
    invisiblegr.visible = false ; 

  fill("green")
 stroke("green")
 textSize(28);
 text("BASKETS AND BALLS", 250, 200);
  }


  //when the gamestate is in end 
  if(gameState==="end"){
 
  
  background2.velocityY = 0 ;
  invisiblegr.velocityX = 0 ;

  basket.x =0;
  basket.y =0;
  
  restart.visible = true ;
  gameover.visible = true ;
  
  obstacles1group.setVelocityXEach(0) ;
  obstacles2group.setVelocityXEach(0) ;
  obstacles3group.setVelocityYEach(0) ;
  basketballGroup.setVelocityXEach(0) ;
  soccerGroup.setVelocityXEach(0) ;
  sportballGroup.setVelocityEach(0) ;

     
  obstacles1group.setLifetimeEach(-1);
  obstacles2group.setLifetimeEach(-1)
  obstacles3group.setLifetimeEach(-1);
  basketballGroup.setLifetimeEach(-1)
  soccerGroup.setLifetimeEach(-1);  
  sportballGroup.setLifetimeEach(-1);  
    
   if (mousePressedOver(restart)) {
    basket.x =mouseX;
    basket.y =mouseY;
     obstacles1Group.destroyEach();
     obstacle2group.destroyEach();
     obstacle3group.destroyEach();
     sportball.destroyEach() ;
     basketball.destroyEach() ;
     soccer.destroyEach() ;
     gameState = "play";
     score = 0;
    } 

  }

}
//----------------------------FUNCTIONS................//

function createBasketballs() {
  if(frameCount % 100 ===  0){
basketball = createSprite(random(50, 350),40, 10, 10);
basketball.addImage(basketballImg);
basketball.scale=0.04;
basketball.velocityY = 3;
basketball.lifetime = 150;
basketGroup.add(basketball) ;
}
}


function createSoccerss() {
  if(frameCount % 300 ===  0){
soccer = createSprite(random(50, 350),40, 10, 10);
soccer.addImage(soccerImg);
soccer.scale=0.04;
soccer.velocityY = 3;
soccer.lifetime = 150;
soccerGroup.add(soccer) ;
}
}

function createSportball() {
  if(frameCount % 500  ===  0){
sportball = createSprite(random(50, 350),40, 10, 10);
sportball.addImage(sportballImg);
sportball.scale=0.03;
  sportball.velocityY = 3;
  sportball.lifetime = 150;
  sportballGroup.add(sportball) ;
}
}




function createObstacles1s() {
  if(frameCount % 600  ===  0){
  obstacle1 = createSprite(random(50, 350),40, 10, 10);
  obstacle1.addImage(obstacle1Img);
  obstacle1.scale=0.04;
  obstacle1.velocityY = 3;
  obstacle1.lifetime = 150;
  obstacle1group.add(obstacle1) ;
  }
}

  function createObstacles2s() {
    if(frameCount % 350  ===  0){
    obstacle2 = createSprite(random(50, 350),40, 10, 10);
    obstacle2.addImage(obstacle2Img);
    obstacle2.scale=0.04;
    obstacle2.velocityY = 3;
    obstacle2.lifetime = 150;
    obstacle2group.add(obstacle2) ;
    }
  }

    function createObstacles3s() {
      if(frameCount % 800  ===  0){
      obstacle3 = createSprite(random(50, 350),40, 10, 10);
      obstacle3.addImage(obstacle3Img);
      obstacle3.scale=0.04;
      obstacle3.velocityY = 3;
      obstacle3.lifetime = 150;
      obstacle3group.add(obstacle3) ;
      }
      }
