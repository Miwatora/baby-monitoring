img = "";
Status = "";
objects = [];

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 460, 380);
}

function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;  
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

