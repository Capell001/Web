$(function(){
   //$("#myModal").modal();
   $("#myModal").modal();
    setTimeout(function(){
      $('.close').trigger('click');
    },3000);
  //誰被按
  $('#collapsibleNavbar ul:eq(1) a').click(function(){
    //判斷對應位置的top距離
    var idname = $(this).attr('href');
    var targetTop = $(idname).position().top;  
    //console.log(targetTop);
    //控制誰=>做什麼
    $('html,body').animate({scrollTop:targetTop},1000,'easeInOutCirc');
  });
  
  //#sec3 .tabBanner換圖
  function changeBannerImg(){
    if( $(window).width() > 800 ){
      //$('#sec3 .tabBanner').html('<img src="images/AudemarsPigue/banner.jpg" alt="">');
      $('#sec3 .tab-pane:eq(0) .tabBanner img').attr('src','images/AudemarsPigue/banner.jpg');
      $('#sec3 .tab-pane:eq(1) .tabBanner img').attr('src','images/Blancpain/banner.jpg');
      $('#sec3 .tab-pane:eq(2) .tabBanner img').attr('src','images/Longines/banner.jpg');
      $('#sec3 .tab-pane:eq(3) .tabBanner img').attr('src','images/Omega/banner.jpg');
    }else{
      $('#sec3 .tab-pane:eq(0) .tabBanner img').attr('src','images/AudemarsPigue/banner_s.jpg');
      $('#sec3 .tab-pane:eq(1) .tabBanner img').attr('src','images/Blancpain/banner_s.jpg');
      $('#sec3 .tab-pane:eq(2) .tabBanner img').attr('src','images/Longines/banner_s.jpg');
      $('#sec3 .tab-pane:eq(3) .tabBanner img').attr('src','images/Omega/banner_s.jpg');
    }
  }
  
  function changeBannerImg(){
    var brand=['AudemarsPigue','Blancpain','Longines','Omega'];
    var brand_img='';
    if( $(window).width() < 800 ){ brand_img='_s'; }
    for( i=0; i<brand.length; i++ ){
      $('#sec3 .tab-pane').eq(i).children('.tabBanner').children('img').attr('src','images/'+brand[i]+'/banner'+brand_img+'.jpg');
    }
  }
  
  changeBannerImg();
  $(window).resize(function(){
    changeBannerImg();
  });
  
  //#sec4 img hover effect ===========================================================
  $('#sec4 .col-6 img').hover(
    function(){
      $('#sec4 .col-6 img').not(this).addClass('showS');
      $(this).addClass('showB');
  },
  function(){
    $('#sec4 .col-6 img').removeClass('showS').removeClass('showB');
  }
  );
   
  $('body>aside a').click(function(e){
    e.preventDefault();
  });
  
  
});

 
