var obstacles;
var asteroidimg, asteroidfireimg;
var life1, life2, life3, lives, life1img,life2img,life3img,livesimg;
var spacesshipimg,spacebg,spaceship;
var finishbg,inputbg;
var name;
var randomword;
var asteroidsGroup;
var words = ["smart","red","flight","critic","take","run","warm","button","lounge","depart","hay","row","file","tone","plead","slogan","amuse","report","nun","toast","hold","kidnap"];
gamestate = 0;
function preload(){
    asteroidimg = loadImage("asteroid.png");
    asteroidfireimg = loadImage("asteroidfire.png");
    life1img = loadImage("heart.png");
    life2img = loadImage("heart.png");
    life3img = loadImage("heart.png");
    spacebg = loadImage("spacebg.webp");
    spaceshipimg = loadImage("spaceship.png");
    finishbg = loadImage("finishbg.png");
    inputbg = loadImage("inputimg.jpg");
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    
    life1 = createSprite(100,100,100,100);
    life1.addImage("life1",life1img);
    
    life2 = createSprite(130,100,100,100);
    life2.addImage("life2",life2img);

    life3 = createSprite(160,100,100,100);
    life3.addImage("life3",life3img);

    asteroidsGroup = new Group();
}

function draw(){      
  gameState();

}

function lives(){

    lives = 3;

    life1.visible = true;
    life2.visible = true;
    life3.visible = true;

    while(0==0){
    if(obstacles.isTouching(spaceship)){
        lives-=1;
    }

    if(lives==2){
        life3.visible = false;
    }

    if(lives==1){
        life2.visible = false;
    }

    if(lives==0){
        life1.visible = false;
        gamestate=2;
    }
   }
}

function gameState(){
    while(gamestate==0){
        background(inputbg);
        asteroidsGroup.velocityY = 0;
        asteroidsGroup.visible = false;

    }

    while(gamestate==1){
        background(spacebg);
        lives();
        asteroid.velocityY = 2;
        asteroidsGroup.visible = true;
    }

    while(gamestate==2){
        background(finishbg);
        asteroid.velocityY = 0;
        asteroidsGroup.visible = false;
    }
}

function obstacles(){
    var asteroid=(random(0,windowWidth,10,10,10));

    
    randomword = words[random(0,words.length-1)];
    asteroid.addImage("asteroid",asteroidimg);
    asteroid.lifetime = 400;

    asteroidsGroup.add(asteroid);

}


