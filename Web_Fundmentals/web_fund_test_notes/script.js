// -------------------increaseLikesButton--------------------

var likes = 13
function likeHandler(){
    likes++
    console.log("likes ", likes)

    var button = document.querySelector(".likes")
    console.log(button.innerText)
    button.innerText = likes + " likes"
}

// -------------------------changingImage---------------------------

var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat() {
    animalImg.src = "alayne-s.jpg";
}

function pickDog() {
    animalImg.src = "todd-s.jpg";
}


// ------------------------------alertConfirmFunction----------------

function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}

// -----------------------removeElementFunction-----------------------

function hide(element) {
    element.remove();
}

// ----------------------------setTimeoutFunction----------------------- 