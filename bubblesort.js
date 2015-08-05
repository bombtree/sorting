
var bubbleCanvas = document.getElementById("bubble");
var bubbleContext = bubbleCanvas.getContext('2d');
var height = [];
var width = 5;
var color = [];
var temp;
var currDate = new Date();
var currFrame = 0;
var totalFrames = 1;
var totalElements = 10;
var msPerFrame;

var COMMON_Y = 190;
var COMMON_X = 100;
var GAP = 3;



function animateBubble(){

	
	totalElements = parseInt(document.getElementById("numOfElements").value);
	msPerFrame = parseInt(document.getElementById("frameLength").value);
	
	color[currFrame] = new Array(totalElements);
	height[currFrame] = new Array(totalElements);
	for (var i = 0; i < totalElements; i++){
		color[currFrame][i] = 'yellow';
		height[currFrame][i] = parseInt(Math.random()*20+1)*9;
	}
	
	window.setInterval(drawGraph, msPerFrame);
	
	bubbleSort(0, totalElements);
	
	
	function drawGraph(){

		if (currFrame < totalFrames-1){
			bubbleContext.clearRect(0, 0, 1000, 1000);
			for (var i = 0; i < totalElements; i++){
				bubbleContext.beginPath();
				var xLoc = i*(width+GAP) + COMMON_X;
				var yLoc = COMMON_Y - height[currFrame][i];
				bubbleContext.rect(xLoc, yLoc,width, height[currFrame][i]);
				bubbleContext.fillStyle = color[currFrame][i];
				bubbleContext.fill();
				bubbleContext.lineWidth = 1;
				bubbleContext.strokeStyle = 'black';
				bubbleContext.stroke();
			}
			currFrame++;
		}
		else{
			for (var i = 0; i < totalElements; i++){
				bubbleContext.beginPath();
				var xLoc = i*(width+GAP) + COMMON_X;
				var yLoc = COMMON_Y - height[currFrame][i];
				bubbleContext.rect(xLoc, yLoc,width, height[currFrame][i]);
				bubbleContext.fillStyle = 'green';
				bubbleContext.fill();
				bubbleContext.lineWidth = 1;
				bubbleContext.strokeStyle = 'black';
				bubbleContext.stroke();
			}
		}
	}
}
function bubbleSort (){
	
    do {
        swapped = false;
        for (var i=0; i < totalElements; i++) {
			height[totalFrames] = new Array(totalElements);
			color[totalFrames] = new Array(totalElements);
			for(var j = 0; j < totalElements; j++){
				height[totalFrames][j] = height[totalFrames-1][j];
				color[totalFrames][j] = 'yellow';
			}
			
			color[totalFrames][i] = 'gray';
			color[totalFrames][i+1] = 'gray';
            if (height[totalFrames-1][i] > height[totalFrames-1][i+1]) {
                height[totalFrames][i] = height[totalFrames-1][i+1];
				height[totalFrames][i+1] = height[totalFrames-1][i];
                swapped = true;
            }
		totalFrames++;
        }
    } while (swapped);
	
}

