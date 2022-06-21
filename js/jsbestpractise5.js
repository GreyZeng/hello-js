window.onload = prepareLinks;
function prepareLinks() {
    var links = document.getElementsByTagName("a");
    if (links.length > 0) {
        for (var i = 0; i < links.length; i++) {
            if (links[i].getAttribute("class") == "popUp") {
                links[i].onclick = function () {
                    popUp(this.getAttribute("href"));
                    return false;
                }
            }
        }
    }
}

function popUp(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}