
var funnyCanvas = document.getElementById("funny");
var funnyContext = funnyCanvas.getContext('2d');
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



function animateFunny(){
	totalElements = parseInt(document.getElementById("numOfElements").value);
	msPerFrame = parseInt(document.getElementById("frameLength").value);
	
	color[currFrame] = new Array(totalElements);
	height[currFrame] = new Array(totalElements);
	
	for (var i = 0; i < totalElements; i++){
		color[currFrame][i] = 'yellow';
		height[currFrame][i] = parseInt(Math.random()*20+1)*9;
	}
	
	window.setInterval(drawGraph, msPerFrame);
	
	funnySort(0, totalElements);
	
	
	function drawGraph(){

		if (currFrame < totalFrames-1){
			funnyContext.clearRect(0, 0, 1000, 1000);
			for (var i = 0; i < totalElements; i++){
				funnyContext.beginPath();
				var xLoc = i*(width+GAP) + COMMON_X;
				var yLoc = COMMON_Y - height[currFrame][i];
				funnyContext.rect(xLoc, yLoc,width, height[currFrame][i]);
				funnyContext.fillStyle = color[currFrame][i];
				funnyContext.fill();
				funnyContext.lineWidth = 1;
				funnyContext.strokeStyle = 'black';
				funnyContext.stroke();
			}
			currFrame++;
		}
		else{
			for (var i = 0; i < totalElements; i++){
				funnyContext.beginPath();
				var xLoc = i*(width+GAP) + COMMON_X;
				var yLoc = COMMON_Y - height[currFrame][i];
				funnyContext.rect(xLoc, yLoc,width, height[currFrame][i]);
				funnyContext.fillStyle = 'green';
				funnyContext.fill();
				funnyContext.lineWidth = 1;
				funnyContext.strokeStyle = 'black';
				funnyContext.stroke();
			}
		}
	}
}
function funnySort (left, right){


	if (left < right){
		center = Math.floor((left + right)/2);
		funnySort (left, center);
		funnySort (center+1, right);
		color[totalFrames] = new Array(totalElements);
		height[totalFrames] = new Array(totalElements);
		for (var i = 0; i < totalElements; i++){
			color[totalFrames][i] = 'yellow';
			height[totalFrames][i] = height[totalFrames-1][i];
		}
		color[totalFrames][center] = 'gray';
		color[totalFrames][right] = 'gray';
		if (height[totalFrames-1][center] > height[totalFrames-1][right]){
			height[totalFrames][center] = height[totalFrames-1][right];
			height[totalFrames][right] = height[totalFrames-1][center];
		}
		totalFrames++;
		funnySort (left, (right-1));
	}
	
	
}