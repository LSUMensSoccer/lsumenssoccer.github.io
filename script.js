window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("downarrow").style.color = rgb(255, 255, 255, (1 / document.body.scrollTop))
}
