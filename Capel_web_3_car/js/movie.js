$(document).ready(function(){
  $('aside a').click(function(){
    $('aside img').removeClass('current');
    $(this).children('img').addClass('current');
  });
});