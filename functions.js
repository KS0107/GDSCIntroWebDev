window.addEventListener('scroll', function () { social() });
function social() {
    if (document.body.scrollTop > 5100 || document.documentElement.scrollTop > 5100) {
        document.getElementById("iconbar").style.left = "0";
    } else {
        document.getElementById("iconbar").style.left = "-60px";
    }
}
// Onclick functions on the navbar using javascript
function onClick() { 
    document.getElementById("AboutButton").classList.toggle("change");
}