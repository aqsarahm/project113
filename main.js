
function setup(){
    canvas = createCanvas(740, 580);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}
function draw()  
{
    image(video, 220, 220, 300, 250);

    fill(0, 128, 0);
    stroke(0, 0, 250);
    circle(50, 50, 90);

    fill(0, 0, 184);
    stroke(0, 189, 0);
    rect(95, 40, 550, 40);


    fill(0, 128, 0);
    stroke(0, 0, 250);
    circle(690, 50, 90);

    fill(0, 0, 184);
    stroke(0, 189, 0);
    rect(95, 510, 550, 40);


    fill(0, 128, 0);
    stroke(0, 0, 250);
    circle(690, 530, 90);

    fill(0, 0, 184);
    stroke(0, 189, 0);
    rect(30, 95, 40,390);


    fill(0, 128, 0);
    stroke(0, 0, 250);
    circle(50, 530, 90);

    fill(0, 0, 184);
    stroke(0, 189, 0);
    rect(670, 95, 40,390);
   
}
function take_snapshot(){
    save('student_name.png');
}
