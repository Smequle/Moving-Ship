var ship = createSprite(150, 150);

var ship_moving;

function preload() {
    ship_moving = loadAnimation("ship-1.png", "ship-2.png");
}

function setup() {
    createCanvas(300, 300);
    ship = createSprite(150, 150, 50, 150);
    ship.scale = 0.15
    ship.addAnimation("moving", ship_moving);
}

function draw() {
    background(rgb(100, 200, 250));
    drawSprites();
}