// Three pages include the play audio function, therefore they'll reuse the javascript file, however the debug console
// will display an error for the slideshow functions ('slideIndex(), plusSlides(), etc..') because some html files do not accomodate them.

// Play audio when the image tag (or button) is pressed
const btn = document.querySelector('#playButton');
let muted = false;

btn.addEventListener('click', () => {
    const audio = document.querySelector("#playAudio");

    // When clicked, this will mute/unmute the audio and change the icon depending on the state
    if (!muted) {
        audio.volume = 0.5;
        muted = true;
        var img = document.querySelector('#playButton');
        img.src = "Assets/musicon.svg";
    }
    // The branch here will occur once the play button has been pressed again (with muted being false), changing the icon 
    // and muting the audio
    else {
        audio.volume = 0;
        muted = false;
        var img = document.querySelector('#playButton');
        img.src = "Assets/musicoff.svg";
    }
    audio.play();
    console.log("pressed");
});

// Javascript for examples.html
let slideIndex = 1;
showSlides(slideIndex);

// This is a function which changes the index number of the slide.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.display = "block";
}

// Functions for button that scrolls back to top for examples.html
let mybutton = document.getElementById("top");

window.onscroll = function() {scrollFunction()};

// Once user scrolls 20px down, the button will show up
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}