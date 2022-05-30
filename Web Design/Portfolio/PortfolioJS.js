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