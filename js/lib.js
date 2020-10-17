jQuery(document).ready(function($) {
    //�Ҳ�ر�
    $(".box-right .close").click(function(){
        $(".box-right").fadeOut();
    })

    //�������
      $("body").niceScroll({
        touchbehavior:false,
        cursorwidth:6,
        cursorborder:"0px",
        cursorborderradius:"3px",
        background:"rgba(255,255,255,0)",
        autohidemode:"true",
        mousescrollstep :100,
        scrollspeed:100
      });
});