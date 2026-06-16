function setImages() {

    console.log("Page loaded");

    let images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex" , "0");
    }
}

function upDate(previewPic) {

    console.log("focus or hover triggered");

    document.getElementById("image") .innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {

    document.getElementById("image") .innerHTML = "Hover over an image below to display here.";

    document.getElementById("image").style.backgroundImage = "url('')";
}