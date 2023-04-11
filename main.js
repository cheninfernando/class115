function preload(){

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("posenet initialized");
}

function draw(){
image(video,0,0,400,400);
}

function takesnapshot(){
    save("myfilterimage.png");
}

function gotposes (results){
if(results.length>0){
    console.log(results);
    console.log("nosex="+results[0].pose.nose.x);
    console.log("nosey="+results[0].pose.nose.y);
}
}