$(function() {

  // 設定變數
  // $el=>被click展開的<dt>, $parentCol=>$el的parent的parent也就是info-col, $otherCols是沒有展開的info-col
  // $allDt預設是所有的<dt>, $allCells預設是所有的<dd>
  var $el, $parentCol, $otherCols, 
      $allDt = $("dt"),
      $allCells = $("dd");
  
  var colS = Math.floor($('#page-wrap').width()/$('.info-col').length*3/4);
  var colW = $('#page-wrap').width()-($('.info-col').length-1)*colS;

  $("#page-wrap a.image").on("click", function(e) { 

    if ( !$(this).parent().hasClass("curCol") ) {         
      e.preventDefault(); 
      $(this).next().find('dt:first').click(); 
    } 

  });

  $("#page-wrap dt").on("click", function() {

    $el = $(this);

    if (!$el.hasClass("current")) {

      $parentCol = $el.parent().parent();
      $otherCols = $(".info-col").not($parentCol);

      // remove current cell from selection of all cells
      $allDt = $("dt").not(this);

      // close all info cells
      $allCells.slideUp();

      // return all titles (except current one) to normal size
      $allDt.animate({
        fontSize: 15
      });

      // animate current title to larger size            
      $el.animate({"font-size": "20px"}).next().css('width',colW).slideDown();

      // make the current column the large size
      $parentCol.animate({width: colW}).addClass("curCol");

      // make other columns the small size
      $otherCols.animate({width: colS}).removeClass("curCol");

      // make sure the correct column is current
      $allDt.removeClass("current");
      $el.addClass("current");  

    }

  });

  $("#starter").trigger("click");

});
