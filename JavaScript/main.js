//requiring an IP address in js https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript


//sticky header
//for larger screens
  $(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });
  $('.top-navigation').sticky({
    getWidthFrom: '.body',
    responsiveWidth: true
  });
  $('.top-navigation').on('sticky-start', function (){
    // $('.head-wrapper').addClass('test')
    $('.grid').css({
      "background-color": "white"
    });
  });
  $('.top-navigation').on('sticky-end', function (){
    $('.grid').css({
      "background-color": "transparent"
    });
  });
  //sticky header
  //for mobile screens
  $(document).ready(function(){
    $(".nav-container").sticky({topSpacing:0});
  });
  $('.nav-container').sticky({
    getWidthFrom: '.body',
    responsiveWidth: true,
  });
  $('.nav-container').on('sticky-start', function (){
    // $('.head-wrapper').addClass('test')
    $('.nav-container').css({
      "background-color": "white"
    });
  });
  $('.nav-container').on('sticky-end', function (){
    $('.nav-container').css({
      "background-color": "transparent"
    });
  });

//----------------------------------------------------------------------
//brings the sidenav out
// $(document).ready(function(){
  $('.dropbtn').click(function() {
    $('.dropdown-content').animate({right:'0'}, 1200);
  });
// });
// hides the side nav
$('.nav-arrow').click(function() {
  $('.dropdown-content').animate({right:'-280px'}, 1200);
});
//sub-nav dropdown within a drop down
$('.test1').click(function() {
  $('.dropdown-menu1').slideToggle("slow");
});
$('.test2').click(function() {
  $('.dropdown-menu2').slideToggle("slow");
});
$('.test3').click(function() {
  $('.dropdown-menu3').slideToggle("slow");
});
$('.test4').click(function() {
  $('.dropdown-menu4').slideToggle("slow");
});
$('.test5').click(function() {
  $('.dropdown-menu5').slideToggle("slow");
});
$('.test-b').click(function() {
  $('.dropdown-menu-b').slideToggle("slow");
});
$('.test-p').click(function() {
  $('.dropdown-menu-p').slideToggle("slow");
});
$('.test-d').click(function() {
  $('.dropdown-menu-d').slideToggle("slow");
});
$('.test-l').click(function() {
  $('.dropdown-menu-l').slideToggle("slow");
});

//----------------------------------------------------------------------
//the slide show for the news feed
$('.slides').slick({
  fade:true,
});

//----------------------------------------------------------------------
//the cookie pop up alert
$('#pop-up')
  .hide()
  .fadeIn(2200)
  .delay(12000)
  .slideUp(1500)
$('.cookie-x').click(function(){
  $('#pop-up')
  .hide()
  localStorage.setItem('cookies-enabled', true);
});

//local storage, if pop-up hide then dont pop up if reloaded

// check if #pop-up has style display none
// if true return
// =>

if(localStorage.getItem('cookies-enabled')){
  $('#pop-up').hide()
}


//will clear the storage when the
// localStorage.clear();
// else{
// }
//
// if((access the localStorage) == 'cookies-enabled'){
//   the hide #pop-up
// }

// then stop from loading

// var cat = localStorage.getItem('myCat');


//corsel make the box resize with the content

//on load change display to
// function myFunction3(){
//   var popup = document.getElementById("pop-up");
//     popup.classList.toggle("show");
// }
//
// function myFunction2() {
//     var popup = document.getElementById("pop-up");
//     popup.classList.toggle("hide");
