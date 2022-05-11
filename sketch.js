var gameOverImg, homeBackgroundImg, level1Img, level2Img, mianCarImg;
var obs1Img, obs2Img, obs3Img, obs4Img, obs5Img, obs6Img, obs7Img;
var playButtonImg, replayButtonImg, roadImg, nextLevelImg, nextLevelx;
var enteranceButttonImg, back1Img, back2Img;


var gameClickSound, palySound, gameOverSound, hornSound, crashSound;

var replayx;

var homebgx, level1x, level2x, enterancex;
var back1x, back2x, roadx;
var mainx, obs1x, obs1xG2, obs1xG1;

var gameOverx;

var spwanner2;

var play1 = 3, play2 = 4, end = 5, end2 = 6, home = 2, x = 1, gameState = 1;

var a, c;
var p;

var b1, b2;

var distance = 0;

var obstacleG1, obstacleG2, obstacleG3, obstacleG4, obsx, obsxx, obsxxx, obsxxxx;

function preload(){


    gameOverImg                  = loadImage("gameOver.png")
    homeBackgroundImg            = loadImage("homeBackground.png")
    level1Img                    = loadImage("level1.png")
    level2Img                    = loadImage("level2.png")
    mianCarImg                   = loadImage("mainCar.png")
    nextLevelImg                 = loadImage("nextLevel.png")
    obs1Img                      = loadImage("obs1.png")
    obs2Img                      = loadImage("obs2.png")
    obs3Img                      = loadImage("obs3.png")
    obs4Img                      = loadImage("obs4.png")
    obs5Img                      = loadImage("obs5.png")
    obs6Img                      = loadImage("obs6.png")
    obs7Img                      = loadImage("obs7.png")
    replayButtonImg              = loadImage("replayButton.png")
    roadImg                      = loadImage("road.png")
    enteranceButttonImg          = loadImage("enteranceButton.png")
    back1Img                     = loadImage("back1.png")
    back2Img                     = loadImage("back2.png")


    gameClickSound               = loadSound("gameClick.mp3")
    palySound                    = loadSound("playSound.mp3")
    gameOverSound                = loadSound("gameOver.mp3")
    hornSound                    = loadSound("hornSound.mp3")
    crashSound                   = loadSound("crashSound.mp3")
}

function setup() {

    createCanvas(windowWidth, windowHeight);


    homebgx = createSprite(width/2, height/2);
    homebgx.addImage(homeBackgroundImg);
    homebgx.scale = 0.6

    enterancex = createSprite(width/1.97, height/4)
    enterancex.addImage(enteranceButttonImg)
    enterancex.scale = 0.5

    level1x = createSprite(width/11, height/7)
    level1x.addImage(level1Img)
    level1x.scale = 0.5

    level2x = createSprite(width/11, height/3)
    level2x.addImage(level2Img)
    level2x.scale = 0.343

    roadx = createSprite(width / 2, height / 2)
    roadx.addImage(roadImg)
    roadx.scale = 7.5

    mainx = createSprite(width / 2.45, height/1.1)
    mainx.addImage(mianCarImg)
    mainx.scale = 0.35

    obstacleG1 = createGroup();
    obstacleG2 = createGroup();

    obstacleG3 = createGroup();
    obstacleG4 = createGroup();

    obs1xG1 = createGroup();
    obs1xG2 = createGroup();
    
    back1x = createSprite(width / 70, height / 32)
    back1x.addImage(back1Img)
    back1x.scale = 0.2

    back2x = createSprite(width / 2.5, height / 1.5)
    back2x.addImage(back2Img)
    back2x.scale = 0.4

    replayx = createSprite(width / 2, height / 1.5)
    replayx.addImage(replayButtonImg)
    replayx.scale = 0.5

    gameOverx = createSprite(width / 2, height / 2)
    gameOverx.addImage(gameOverImg)

    nextLevelx = createSprite(width / 1.8, height / 1.5)
    nextLevelx.addImage(nextLevelImg)
    nextLevelx.scale = 0.2

    b1 = createSprite(width / 7.6, height / 2, width / 90, height)

    b2 = createSprite(width / 1.145, height / 2, width / 90, height)

}

function draw() {

if (gameState === 1) {
    background(0);

    back2x.visible = false;

    b1.visible = false;
    b2.visible = false;

    nextLevelx.visible = false;

    gameOverx.visible = false;

    replayx.visible = false;

    back1x.visible = false;

    mainx.visible = false;

    roadx.visible = false;

    homebgx.visible = true;

    level1x.visible = false;
    level2x.visible = false;

if (mousePressedOver(enterancex) || keyDown("enter")) {

    palySound.play();

    gameState = home;
}
    

    drawSprites();
}



if (gameState === 2) {
    background(0);

    back2x.visible = false;

    b1.visible = false;
    b2.visible = false;


    nextLevelx.visible = false;

    gameOverx.visible = false;

    replayx.visible = false;

    back1x.visible = false;

    mainx.visible = false;

    roadx.visible = false;

    homebgx.visible = true;

    enterancex.visible = false;

    level1x.visible = true;
    level2x.visible = true;
    

    if (mousePressedOver(level1x) || keyDown("1")) {

        palySound.play();

        homebgx.visible = false;

        gameState = 3;

    }

    if (mousePressedOver(level2x) || keyDown("2")) {

        palySound.play();

        gameState = 4;

    }

    drawSprites();
}

if (gameState === 3) {
    background(0);

    back2x.visible = false;

    mainx.collide(b1)
    mainx.collide(b2)

    b1.visible = false;
    b2.visible = false;


    nextLevelx.visible = false;

    gameOverx.visible = false;

    replayx.visible = false;

    back1x.visible = true;

    mainx.visible = true;

    roadx.visible = true;

    level1x.visible = false;
    level2x.visible = false;

    homebgx.visible = false;

    roadx.velocityY = (4 + (distance / 150) * 1.5);

if (roadx.y > height) {

    roadx.y = height / 2

}

if (keyDown("up_Arrow")) {

    mainx.y -= 15

}

if (keyDown("down_Arrow")) {

    mainx.y += 15

}

if (keyDown("left_Arrow")) {

    mainx.x -= 15

}

if (keyDown("right_Arrow")) {

    mainx.x += 15

}

if (keyDown("space")) {

    hornSound.play();

}

spwanObss();
out();



     
    if (mousePressedOver(back1x) || keyDown("shift")) {

        obs1xG1.destroyEach();
        obs1xG1.destroyEach();

        mainx.x = width / 2.45
        mainx.y = height / 1.1    

        distance = 0;

        gameClickSound.play();

        obstacleG1.destroyEach();

        obstacleG2.destroyEach();

        gameState = 2

        roadx.velocityY = 0;

        mainx.visible = false;

        roadx.visible = false;
    
        level1x.visible = true;
        level2x.visible = true;
    
        homebgx.visible = true;

    }

    drawSprites();

    textSize(20)
    stroke("black")
    strokeWeight(2)
    fill("black")
    text("DISTANCE: "+ distance, width / 75, height / 12)

    distance = distance + Math.round(getFrameRate() / 60)


}

if (gameState === 4) {
    background(0);

    back2x.visible = false;

    mainx.collide(b1)
    mainx.collide(b2)

    b1.visible = false;
    b2.visible = false;


    nextLevelx.visible = false;

    gameOverx.visible = false;

    replayx.visible = false;

    back1x.visible = true;

    mainx.visible = true;

    roadx.visible = true;

    level1x.visible = false;
    level2x.visible = false;

    homebgx.visible = false;

    roadx.velocityY = (4 + (distance / 150) * 1.5);

    if (roadx.y > height) {
    
        roadx.y = height / 2
    
    }
    
    if (keyDown("up_Arrow")) {
    
        mainx.y -= 15
    
    }
    
    if (keyDown("down_Arrow")) {
    
        mainx.y += 15
    
    }
    
    if (keyDown("left_Arrow")) {
    
        mainx.x -= 15
    
    }
    
    if (keyDown("right_Arrow")) {
    
        mainx.x += 15
    
    }
    
    if (keyDown("space")) {
    
        hornSound.play();
    
    }

spwanObss2();
out2();

if (mousePressedOver(back1x) || keyDown("shift")) {
    obs1xG2.destroyEach();

    mainx.x = width / 2.45
    mainx.y = height / 1.1

    gameClickSound.play();

    distance = 0

    obstacleG3.destroyEach();

    obstacleG4.destroyEach();

    gameState = 2

    roadx.velocityY = 0;

    mainx.visible = false;

    roadx.visible = false;

    level1x.visible = true;
    level2x.visible = true;

    homebgx.visible = true;

}


    drawSprites();

    textSize(20)
    stroke("black")
    strokeWeight(2)
    fill("black")
    text("DISTANCE: "+ distance, width / 75, height / 12)

    distance = distance + Math.round(getFrameRate() / 60)
}

if (gameState === 5) {
    background(0);

    back2x.visible = true;

    if (mousePressedOver(back2x) || keyDown("b")) {

        obs1xG1.destroyEach();

        obstacleG1.destroyEach();
        obstacleG2.destroyEach();

        mainx.x = width / 2.45
        mainx.y = height / 1.1

        gameState = 2

    }

    obstacleG1.setVelocityYEach(0);
    obstacleG2.setVelocityYEach(0);

    obstacleG1.setLifetimeEach(-1)
    obstacleG2.setLifetimeEach(-1)

    obs1xG1.setVelocityYEach(0);
    obs1xG1.setLifetimeEach(-1);

    b1.visible = false;
    b2.visible = false;


    back1x.visible = false;

    if (distance > 1000) {

        nextLevelx.visible = true;

        if (mousePressedOver(nextLevelx) || keyDown("enter")) {

            gameState = 4

            obstacleG1.destroyEach();
            obstacleG2.destroyEach();

            distance = 0;

            mainx.x = width / 2.45
            mainx.y = height / 1.1

            gameClickSound.play();

        }
    }

    gameOverx.visible = true;

    replayx.visible = true;

    roadx.visible = true;

    mainx.visible = true;

    mainx.velocityY = 0;
    


    if (mousePressedOver(replayx) || keyDown("r")) {
        gameState = 3

        distance = 0

        gameClickSound.play();

        obstacleG1.destroyEach();
        obstacleG2.destroyEach();

        mainx.x = width / 2.45
        mainx.y = height / 1.1

    }

    drawSprites();

}

if (gameState === 6) {
    background(0);

    back2x.visible = true;

    if (mousePressedOver(back2x) || keyDown("b")) {

        obs1xG2.destroyEach();

        mainx.x = width / 2.45
        mainx.y = height / 1.1

        obstacleG3.destroyEach();
        obstacleG4.destroyEach();

        gameState = 2

    }

    b1.visible = false;
    b2.visible = false;

    obs1xG2.setVelocityYEach(0);
    obs1xG2.setLifetimeEach(-1);

    back1x.visible = false;

    gameOverx.visible = true;

    replayx.visible = true;

    roadx.visible = true;

    mainx.visible = true;

    mainx.velocityY = 0;
    
    obstacleG3.setVelocityYEach(0);
    obstacleG4.setVelocityYEach(0);

    obstacleG3.setLifetimeEach(-1)
    obstacleG4.setLifetimeEach(-1)

    if (mousePressedOver(replayx) || keyDown("r")) {
        gameState = 4

        distance = 0;

        gameClickSound.play();

        obstacleG3.destroyEach();
        obstacleG4.destroyEach();

        mainx.x = width / 2.45
        mainx.y = height / 1.1

        obs1xG2.destroyEach();

    }

    drawSprites();

}

edges= createEdgeSprites();
mainx.collide(edges);
  
}

function spwanObss() {

    if (frameCount % 60 === 0) {

    a = Math.round(random(1, 5))

    if (a === 1) {
        p = 5
    }

    if (a === 2) {
        p =2.45
    }

    if (a === 3) {
        p = 3.2
    }

    if (a === 4) {
        p = 2.85
    }

    if (a === 5) {
        p = 3.85
    }
        
    obsx = createSprite(width / p, height / 30)
    obsx.velocityY = (3 + (distance / 300) * 2)
    
    

    spwanner1 = Math.round(random(1, 2))

    switch(spwanner1) {
        case 1: obsx.addImage(obs5Img);
                break;
        case 2: obsx.addImage(obs2Img);
                break;
                default: break;
    }

    obsx.setCollider("rectangle",0, 0, mainx.width, mainx.height)

    obstacleG1.add(obsx);
    obsx.scale = 0.3
    obsx.lifetime = 300



    c = Math.round(random(1, 3))

    if (c === 1) {
        r = 1.66
    }

    if (c === 2) {
        r = 1.29
    }

    if (c === 3) {
        r = 1.45
    }

    obsxx = createSprite(width / r, height / 20)

    if (distance < 100 ) {

        obsxx.velocityY = 5

    }

    if (distance > 100) {

        obsxx.velocityY = (3 + (distance / 100) * 2.5)

    }

    spwanner2 = Math.round(random(1, 2))

    switch(spwanner2) {
        case 1: obsxx.addImage(obs3Img);
                break;
        case 2: obsxx.addImage(obs4Img);
                break;
                default: break;
    }

    obsxx.setCollider("rectangle",1, 1, mainx.width, mainx.height)

    obstacleG2.add(obsxx);
    obsxx.scale = 0.3
    obsxx.lifetime = 300

    obs1x = createSprite(width / 2, height / 22)
    obs1x.velocityY = 5
    obs1x.addImage(obs1Img)

    obs1x.scale = 0.2
    obs1x.lifetime = 300

    obs1xG1.add(obs1x)

   }





}





function spwanObss2() {

    if (frameCount % 60 === 0) {

    a = Math.round(random(1, 5))

    if (a === 1) {
        p = 5
    }

    if (a === 2) {
        p =2.45
    }

    if (a === 3) {
        p = 3.2
    }

    if (a === 4) {
        p = 2.85
    }

    if (a === 5) {
        p = 3.85
    }
        
    obsxxx = createSprite(width / p, height / 30)
    obsxxx.velocityY = (3 + (distance / 300) * 2)
    
    

    spwanner1 = Math.round(random(1, 3))

    switch(spwanner1) {
        case 1: obsxxx.addImage(obs5Img);
                break;
        case 2: obsxxx.addImage(obs2Img);
                break;
        case 3: obsxxx.addImage(obs6Img)
                default: break;
    }

    obsxxx.setCollider("rectangle",0, 0, mainx.width, mainx.height)

    obstacleG3.add(obsxxx);
    obsxxx.scale = 0.3
    obsxxx.lifetime = 300



    c = Math.round(random(1, 3))

    if (c === 1) {
        r = 1.66
    }

    if (c === 2) {
        r = 1.29
    }

    if (c === 3) {
        r = 1.45
    }
        
    obsxxxx = createSprite(width / r, height / 20)
    obsxxxx.velocityY = (3 + (distance / 100) * 2.5)
    

    spwanner2 = Math.round(random(1, 2))

    switch(spwanner2) {
        case 1: obsxxxx.addImage(obs3Img);
                break;
        case 2: obsxxxx.addImage(obs4Img);
                break;
                default: break;
    }


    obsxxxx.setCollider("rectangle",0, 0, mainx.width, mainx.height)

    obstacleG4.add(obsxxxx);
    obsxxxx.scale = 0.3
    obsxxxx.lifetime = 300


        obs1xx = createSprite(width / 2, height / 22)
        obs1xx.velocityY = 10
        obs1xx.addImage(obs1Img)

        obs1xx.scale = 0.2
        obs1xx.lifetime = 300

        obs1xG2.add(obs1xx);

   }

}




function out() {
    if (mainx.isTouching(obstacleG1)) {

        mainx.collide(obstacleG1);

        roadx.velocityY = 0;

        gameOverSound.play();

        crashSound.play();

        gameState = 5

        obstacleG1.setLifetimeEach(-1)


    }

    if (mainx.isTouching(obstacleG2)) {

        mainx.collide(obstacleG2);

        obstacleG2.setLifetimeEach(-1)

        roadx.velocityY = 0;

        gameOverSound.play();

        crashSound.play();

        gameState = 5

    }

    if (mainx.isTouching(obs1xG1)) {

        mainx.collide(obs1xG1);

        roadx.velocityY = 0

        gameOverSound.play();

        crashSound.play();

        gameState = 5;

    }
}

function out2() {
    if (mainx.isTouching(obstacleG3)) {

        mainx.collide(obstacleG3);

        roadx.velocityY = 0;

        gameOverSound.play();

        crashSound.play();

        gameState = 6

    }

    if (mainx.isTouching(obstacleG4)) {

        mainx.collide(obstacleG4);

        roadx.velocityY = 0;

        gameOverSound.play();

        crashSound.play();

        gameState = 6

    }
    
    if (mainx.isTouching(obs1xG2)) {

        mainx.collide(obs1xG2);

        roadx.velocityY = 0;

        gameOverSound.play();

        crashSound.play();

        gameState = 6;

    }
}