$(document).ready(function() {


// Add jQuery here





$(function() {
  if($(window).scrollTop() >= 140) {
    $('.logo').addClass('resizelogo');
    $('.titlebar_wrapper').addClass('resizebg');
    $('.titlebar').addClass('resizemargin');
  }
  else {
    $('.logo').removeClass('resizelogo');
    $('.titlebar_wrapper').removeClass('resizebg');
    $('.titlebar').removeClass('resizemargin');
  }
});






























  });
