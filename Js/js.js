// start JS fun

var slides = document.getElementsByClassName("carousel-item");
var allSlides = slides.length;
var slidePosition = 0;

var moveslides = function(){
  for(let slide of slides) {
    slide.classList.remove("visable");
  }

  slides[slidePosition].classList.add("visable")
};

var moveToNext = function(){
  if(slidePosition == allSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++}

    moveslides();
};

var moveToPrev = function(){
  if(slidePosition == 0) {
    slidePosition = allSlides - 1
  } else {
    slidePosition--}

    moveslides();
};

document.getElementById("prev").addEventListener("click" , function(){
  moveToPrev();
})

document.getElementById("next").addEventListener("click" , function(){
  moveToNext();
})
