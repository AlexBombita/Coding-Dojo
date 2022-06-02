function setNewImage() {
    document.querySelector("#img1").src ="./images/succulents-2.jpg"
}

function setOldImage() {
    document.querySelector("#img1").src ="./images/succulents-1.jpg"
}

var cookieDiv = document.querySelector(".cookieMessage");

function hide(element) {
    cookieDiv.remove();
}


