function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    x=ml5.poseNet(video,fnoyc);
    x.on('pose',ftbcdap);
}
nosex=0;
nosey=0;
difference=0;
wristx=0;
rwristx=0;
function fnoyc(){
    console.log("poseNet is initialized");
}
function ftbcdap(result){
if (result.length>0){
    console.log(result); 
     nosex=result[0].pose.nose.x;
     nosey=result[0].pose.nose.y;
     console.log(nosex);
     console.log(nosey);
     wristx=result[0].pose.leftWrist.x;
     rwristx=result[0].pose.rightWrist.x;
     console.log("leftWristx is",wristx);
     console.log("rightWristx is",rwristx);
     difference=floor(wristx-rwristx);
}
}
function draw(){
    background("blue");
document.getElementById("aidoyc").innerHTML="Side of square will be ="+difference+"px";
fill("green");
stroke("black");
square(nosex,nosey,difference);
}
