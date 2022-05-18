var square = document.createElement('div');
square.style.width = '250px';
square.style.height = '250px';
square.style.backgroundColor = 'green';
square.style.position = 'absolute';
square.style.top = '0px';
square.style.left = '0px';
document.body.appendChild(square);
var angle = 0;
var angleIncrement = 3.14159265359;
var radius = 250;
var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function update() {
    angle += angleIncrement;
    square.style.top = (centerY + Math.sin(angle) * radius) + 'px';
    square.style.left = (centerX + Math.cos(angle) * radius) + 'px';
    requestAnimationFrame(update);
}
update();
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// DO NOT FUCKING USE
// Language: javascript
// TIFU