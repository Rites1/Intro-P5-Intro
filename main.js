function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 130, 100,400, 300);
    fill("blue");
    stroke("green");
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);
    circle(590, 430, 80);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(580, 90, 20, 300);
    rect(40, 90, 20, 300);
}

function take_snapshot(){
    save("snapshot.png");
}