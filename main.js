window.onload = initialize;
message_count = [];

function initialize() {
	//we will initialize stuff here later
	$.getJSON("counts.json", function(json){
		message_count = json;
		drawGraph();
	});
	
}

function drawGraph() {
	var ctx = document.getElementById("donut_graph").getContext("2d");
	for(var i = 0; i < message_count.length; i++){
		message_count[i].color = getRandomColor();
	}
	var canvas = document.getElementById("donut_graph");
	canvas.width = window.innerWidth * 0.7;
	canvas.height = window.innerHeight * 0.7;
	var chart = new Chart(ctx).Doughnut(message_count);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}