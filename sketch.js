var bmw, kia_seltos, mg_hector;
var w1, w2, w3;
var speed, weight;
var t1, t2, t3;


function setup() {
  createCanvas(800,800);

  t1=createSprite(760, 100,50,70);
  t2=createSprite(760, 300,50,70);
  t3=createSprite(760, 500,50,70);

  speed=random(55,90);
  weight=random(400,1500);

  bmw=createSprite(50, 100, 50, 50);
  bmw.velocityX=speed;

  w1=createSprite(400, 200,800,10);

  kia_seltos=createSprite(50,300,50,50);
  kia_seltos.velocityX=speed;
  w2=createSprite(400,400,800,10);

  mg_hector=createSprite(50,500,50,50);
  mg_hector.velocityX=speed;
  w3=createSprite(400,600,800,10);
  
}

function draw() {
  background(255,255,255);

  if(t1.x-bmw.x<t1.width/2+bmw.width/2){
    bmw.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
      bmw.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      bmw.shapeColor=color(230,230,0)
    }

    if(deformation<100){
      bmw.shapeColor=color(0,255,0)
    }
  }

  if(t2.x-kia_seltos.x<t2.width/2+kia_seltos.width/2){
    kia_seltos.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
      kia_seltos.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      kia_seltos.shapeColor=color(230,230,0)
    }

    if(deformation<100){
      kia_seltos.shapeColor=color(0,255,0)
    }
  }

  if(t3.x-mg_hector.x<t3.width/2+mg_hector.width/2){
    mg_hector.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;

    if(deformation>180){
      mg_hector.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      mg_hector.shapeColor=color(230,230,0)
    }

    if(deformation<100){
      mg_hector.shapeColor=color(0,255,0)
    }
  }
  drawSprites();


}











//  Century :)