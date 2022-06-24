nose_x = 0;
nose_y = 0;

function preload() {
cimg = loadImage('cbg.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded); // To load the possnet model
    poseNet.on('pose',got_poses);// This is to execute the possnet model and it has two parameters in which it is compulsory to write the first parameter which is 'poses' and the second one is to collect the results
}

function got_poses(results) {
if (results.length > 0) {
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;   
    console.log("Nose x : "+ nose_x);
    console.log("Nose y : "+nose_y);
}
}

function modelLoaded() {
    console.log('Possnet is initialized');
}

function draw() {
image(video,0,0,300,300);
image(cimg, nose_x-17, nose_y-10,30, 30);

// fill (255,0,0);

// stroke(255,0,0);

// circle(nose_x,nose_y,25);
}

function take_snapshot() {
    save('myfilterimage.png');
}