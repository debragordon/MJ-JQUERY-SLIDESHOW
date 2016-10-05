//confiuration
var width = 720;
var animationSpeed = 2000;
var pause = 3000;
var currentSlide = 1;

//cache DOM
var $slider = $('#slider');
var $sliderContainer = $slider.find('.slides');
var $slides = $sliderContainer.find('.slide');
var interval;
var $playShow = $('#auto-play');
var $goBack = $('#go-back');
var $goForward = $('#go-forward');

$(function() {

//starts slider
  function startSlider() {
    interval = setInterval(function() {
      $sliderContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        currentSlide++;
        if(currentSlide === $slides.length) {
          currentSlide = 1;
          $sliderContainer.css("margin-left", 0);
        }
      });
    }, pause);
  }
//stops slider
  function stopSlider() {
    clearInterval(interval);
  }

//moves to the LEFT
  function goLeft() {

  }

//moves to the RIGHT
  function goRight() {

  }

//this starts the slider in autoplay mode
var clickNumber = 0;

  $playShow.click(function(e){
    if (clickNumber %2 === 0) {
      $(this).text('Stop');
      console.log("even");
      startSlider();
    } else {
      console.log("odd");
      stopSlider();
      $(this).text('Autoplay');
    };
    clickNumber++;

//this goes back one slide
  $goBack.click(function(e){
      goLeft();
    };

//this goes forward one slide
  $goBack.click(function(e){
      goRight();
    };

  });

 });



// var fadeIn = $(function() {
//   setInterval(function() {
//     $('#slider .slides').fadeIn(2000)
//   }, 3000);
// });

// var swipeLeft = $(function() {
//   setInterval(function() {
//     $('#slider .slides').animate({'margin-left': '-=720'}, 1000)
//   }, 3000);
// });

// var fadeOut = $(function() {
//   setInterval(function() {
//     $('#slider .slides').fadeOut(2000)
//   }, 3000);
// });