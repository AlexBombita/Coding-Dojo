var neilLikes = 9
function neilHandler(){
    neilLikes++
    console.log("neilLikes ", neilLikes)

    var button = document.querySelector(".neil")
    console.log(button.innerText)
    button.innerText = neilLikes + " Likes"
}

var nicholeLikes = 12
function nicholeHandler(){
    nicholeLikes++
    console.log("nicholeLikes ", nicholeLikes)

    var button = document.querySelector(".nichole")
    console.log(button.innerText)
    button.innerText = nicholeLikes + " Likes"
}

var jimLikes = 9
function jimHandler(){
    jimLikes++
    console.log("jimLikes ", jimLikes)

    var button = document.querySelector(".jim")
    console.log(button.innerText)
    button.innerText = jimLikes + " Likes"
}