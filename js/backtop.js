/**
 * Created by Administrator on 2015/12/7.
 */
$(function () {
    $(window).scroll(function(){
        var winscr = $(window).scrollTop();
        if (winscr > 60){
            $(".flow_header").show();
        }else{
            $(".flow_header").hide();
        }
        (winscr > 100)?$(".back2top").fadeIn(800):$(".back2top").fadeOut(800);
    });
    $(".back2top").click(function(){
        $('body,html').animate({scrollTop:0},1500);
    })
});
