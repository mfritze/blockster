var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var AVATAR_COLOR = "#3DB845";
var block_color = "#00A3FB";
var BLOCK_HEIGHT = 40;

function draw_scene() {
    context.clearRect(0,0, canvas.width, canvas.height);
}

function draw_avatar(player) {
    context.beginPath();
    context.rect(PLAYER_X , player.y , PLAYER_WIDTH, PLAYER_HEIGHT);
    context.fillStyle = AVATAR_COLOR;
    context.fill();
    context.closePath();
}

function draw_blocks(blocks){
    for (var i = 0; i < blocks.length; i++) {
    	var block = blocks[i];
        context.beginPath();
        context.rect(block.x, block.y , block.width, BLOCK_HEIGHT);
        context.fillStyle = block_color;
        context.fill();
        context.closePath();
    }
}

function draw_score(score) {
    context.fillStyle = AVATAR_COLOR;
    context.font = "30px Arial";
    context.textAlign = "right";
    context.fillText(score, canvas.width, 30);
}

function draw_end_scene(score) {
    context.fillStyle = "#000000";

    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText(score, canvas.width/2, canvas.height/2);

    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Press space to continue", canvas.width/2, canvas.height/2 + 30);
}
