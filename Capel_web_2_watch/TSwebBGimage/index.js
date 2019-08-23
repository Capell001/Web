$(document).ready(function(e) {
  var no = $('body').attr('data-fileTotal');
  for(i=0;i<no;i++){
    $('#wrapper').append('<div class="block"><button>'+(i+1)+'</button></div>');
  }
  $('.block').each(function(index, element) {
    backimg = 'url(images/'+(index+1)+'.png)';
    $(this).css('background-image',backimg);
  });
  $('.block button').click(function(){
    backimg = 'url(images/'+$(this).text()+'.png)';
    $('body').css('background-image',backimg);
  });
});
