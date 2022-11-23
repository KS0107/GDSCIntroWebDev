window.addEventListener('scroll', function () { social() });
function social() {
    if (document.body.scrollTop > 5100 || document.documentElement.scrollTop > 5100) {
        document.getElementById("iconbar").style.left = "0";
    } else {
        document.getElementById("iconbar").style.left = "-60px";
    }
}
// Onclick functions on the navbar using javascript
function onClickFunction() { 
    document.getElementById("AboutButton").style.color = "red";
}

// Example to Create a link solely with javascript
function addLinkToBody() { 
    const link = document.createElement('a'); 
    const linknode = document.createTextNode("Link");
    link.appendChild(linknode);
    link.title = "Click here!";
    link.href = "https://www.google.com";
    document.body.appendChild(link);
}

//Add that function to a button