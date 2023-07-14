let slideIndex = 1;

function redundant(n){
    showSlide(n)
}


function changeSlide(n){
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(n){
    let i = 0;
    let slides = document.getElementsByClassName("my-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

}