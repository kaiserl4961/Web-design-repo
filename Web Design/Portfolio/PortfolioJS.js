function ball() {
    document.addEventListener("DOMContentLoaded", function() {

        var container = document.createElement('div');
        //container.style.width = '50%';
        //container.style.height = '50%';
        //container.style.position = 'relative';
        container.style.position = 'relative';
        container.style.width = '50%';
        container.style.height = '500px';
        //container.style.top = '25%';
        //container.style.left = '25%';
        //container.style.backgroundColor = "#00008b";
        container.style.backgroundColor = "#000";
        document.body.appendChild(container);

        var ball = document.createElement('div');
        ball.style.width = '25px';
        ball.style.height = '25px';
        ball.style.position = 'absolute';
        //ball.style.position = 'relative';
        ball.style.top = '0';
        ball.style.left = '0';
        ball.style.backgroundColor = '#000';
        ball.style.borderRadius = '50%';
        container.appendChild(ball);

        var x = 0;
        var y = 0;
        var xDirection = 1.1;
        var yDirection = 1;
        var xSpeed = 5;
        var ySpeed = 5;
        var color = '#000';

        function moveBall() {
            x += xDirection * xSpeed;
            y += yDirection * ySpeed;
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
            if (x >= container.offsetWidth - ball.offsetWidth) {
                xDirection = -1;
                color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                ball.style.backgroundColor = color;
            }
            if (x <= 0) {
                xDirection = 1;
                color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                ball.style.backgroundColor = color;
            }
            if (y >= container.offsetHeight - ball.offsetHeight) {
                yDirection = -1;
                color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                ball.style.backgroundColor = color;
            }
            if (y <= 0) {
                yDirection = 1;
                color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                ball.style.backgroundColor = color;
            }
        }

        setInterval(moveBall, 10);
    })
};
const rickroll = function(event) {
    event.preventDefault();
    document.write("Get 'rolled lol");
    window.setTimeout(function() {
        document.body.innerHTML =
            '<iframe width="966" height="543" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" frameborder="0"></iframe>';
        console.info("https://scratch.mit.edu/discuss/post/5069102/");
    }, 500);
};
document
    .querySelectorAll(".rickroll")
    .forEach((el) => el.addEventListener("click", rickroll));

function scrollStickyElement() {
    var stickyElement = document.querySelector(".sticky");
    var stickyElementOffset = stickyElement.offsetTop;
    var stickyElementHeight = stickyElement.offsetHeight;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset;
        var stickyElementCurrentPosition = stickyElementOffset - scrollTop;
        var stickyElementNewPosition = stickyElementHeight + stickyElementCurrentPosition;
        stickyElement.style.top = stickyElementNewPosition + "px";
    });
}

function scrollElement() {
    var element = document.querySelector(".scroll");
    var elementOffset = element.offsetTop;
    var elementHeight = element.offsetHeight;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset;
        var elementCurrentPosition = elementOffset - scrollTop;
        var elementNewPosition = elementHeight + elementCurrentPosition;
        element.style.top = elementNewPosition + "px";
    });
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*var button = document.getElementById('button'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('myDiv');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
};*/