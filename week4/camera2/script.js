let VIDEO=null;
let CANVAS=null;
let CONTEXT=null;



function main() {
    CANVAS=document.getElementById("myCanvas");
    CONTEXT=CANVAS.getContext("2d");
    let parent = document.getElementById("video")
    CANVAS.width =parent.offsetWidth;
    CANVAS.height = parent.offsetHeight;
    window.addEventListener("click",takePicture);


    let promise=navigator.mediaDevices.getUserMedia({video:true});
    promise.then(function(signal){
        VIDEO=document.createElement("video");
        VIDEO.srcObject=signal;
        VIDEO.play();
        VIDEO.onloadeddata=function() {           
            updateCanvas();
        }

    }).catch(function(err){
        alert(`Camera Error: ${err}`)
    });
}

function updateCanvas(){
    CONTEXT.drawImage(VIDEO,0,0);
    window.requestAnimationFrame(updateCanvas);
}
function takePicture() {
    console.log("takePicture");
    var photo = document.getElementById('photos')
    var data = CANVAS.toDataURL('image/png')
    photo.setAttribute('src',data)
}