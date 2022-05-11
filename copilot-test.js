function calculateDaysBetweenDates(begin, end) {
    var date1 = new Date(begin);
    var date2 = new Date(end);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}


function getTime(date) {
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}

function getTime(timezone) {
    var date = new Date();
    var time = date.toLocaleString("en-US", { timeZone: timezone });
    return time;
}

function ball() {
    document.addEventListener("DOMContentLoaded", function() {
        var ball = document.createElement("div");
        ball.style.width = "100px";
        ball.style.height = "100px";
        ball.style.backgroundColor = "red";
        ball.style.borderRadius = "50px";
        ball.style.position = "absolute";
        ball.style.top = "0px";
        ball.style.left = "0px";
        document.body.appendChild(ball);

        var x = 0;
        var y = 0;
        var xSpeed = 5;
        var ySpeed = 5;

        function update() {
            x += xSpeed;
            y += ySpeed;
            if (x > window.innerWidth - 100) {
                xSpeed = -5;
            }
            if (y > window.innerHeight - 100) {
                ySpeed = -5;
            }
            if (x < 0) {
                xSpeed = 5;
            }
            if (y < 0) {
                ySpeed = 5;
            }
            ball.style.left = x + "px";
            ball.style.top = y + "px";
            window.requestAnimationFrame(update);
        }

        update();
    });
}

//holy shit this is so much easier
//holy shit this is a mess
//wow i cant fathom that this worked