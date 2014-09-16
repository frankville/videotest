$(document).ready(function(){
/*
	$("#playBtn").click(function(event){
		//event.pŕeventDefault();
		playVideo();
	});
	$("#pauseBtn").click(function(event){
		//event.pŕeventDefault();
		pauseVideo();
*/

	$("#algo").change(function(){
		console.log($("input").val()+"-01");
	});

});



function pauseVideo(){
	document.getElementById("video1").pause();
}

function playVideo(){
	document.getElementById("video1").play();
}