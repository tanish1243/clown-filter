noseX= 0;
noseY= 0 ;


function preload(){
clownnose= loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup(){
    canvas= createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide()
    posenet = ml5.poseNet(video , modelloaded);
    posenet.on('pose',got_poses);
}
function draw(){
    image(video , 0 , 0 , 300 , 300  );
    image(clownnose , noseX , noseY , 15 ,15 )
}
function take_snapshot(){
    save("Clown Face.jpg")
}
function modelloaded(){
    console.log("Model loaded successfuly")
}
 function got_poses(results){
  if(results.length > 0){
   console.log(results);
   console.log("nose x = " + noseX  );
   console.log("nose y = " + noseY);
   noseX= results[0].pose.nose.x - 8;
   noseY= results[0].pose.nose.y - 8;
  }
}