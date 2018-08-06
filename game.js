var canvasBg = document.getElementById("canvasBg"),
ctxBg = canvasBg.getContext("2d"),
canvasEntities = document.getElementById("canvasEntities"),
ctxEntities = canvasEntities.getContext("2d"),
canvasHeight = canvasBg.height,
canvasWidth = canvasBg.width,
//player1 = new Player(),
// enemeies = [],
// numEnemies = 5,
// obstacles = [],
// isPlaying = false,
requestAnimFrame = window.requestAnimationFrame || 
                    window.webkitRequestAnimationFrame || 
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000/60);
                    },
imgSprite = new Image();
imgSprite.src = "images/sprite.png";
imgSprite.addEventListener("load", init, false);

function init() {
    // document.addEventListener("keydown", checkKeyDown, false);
    // document.addEventListener("keyup", checkKeyUp, false);
    // defineObstacles();
    // initEnemies();
    begin();
}
function begin() {
    ctxBg.drawImage(imgSprite, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight, 0,0);
    isPlaying = true;
    requestAnimationFrame(loop);
    console.log((imgSprite, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight, 0,0))
}
function loop() {

}

