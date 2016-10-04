


// // console.log("this works");

// jQuery(document).ready(function ($) {

//   var checkedFlag = false;
//   $('#checkbox').click(function(){
//     var i = 0
//     var runTheShow = setInterval(function (){
//       if ($('#checkbox').checked === false) {
//         clearInterval(runTheShow);
//       }
//       // if (i >= 1) {
//       //   clearInterval(runTheShow);
//       // }
//       // i++;
//       moveRight();
//     }, 3000);
//   });

//   var slideCount = $('#slider ul li').length;
//   var slideWidth = $('#slider ul li').width();
//   var slideHeight = $('#slider ul li').height();
//   var sliderUlWidth = slideCount * slideWidth;
//   console.log("slide width", slideWidth);
//   $('#slider').css({ width: slideWidth, height: slideHeight });

//   $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth/2 });

//   $('#slider ul li:last-child').prependTo('#slider ul');

//   function moveLeft() {
//       $('#slider ul').animate({
//           left: + slideWidth
//       }, 200, function () {
//           $('#slider ul li:last-child').prependTo('#slider ul');
//           $('#slider ul').css('left', '');
//       });
//   };

//   function moveRight() {
//       $('#slider ul').animate({
//           left: - slideWidth
//       }, 200, function () {
//           $('#slider ul li:first-child').appendTo('#slider ul');
//           $('#slider ul').css('left', '');
//       });
//   };

//   $('a.control_prev').click(function () {
//     moveLeft();
//   });

//   $('a.control_next').click(function () {
//     moveRight();
//   });

// });
