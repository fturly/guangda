/**
 * Created by Administrator on 2015/12/7.
 */
$(function () {
    $(window).scroll(function(){
        var winscr = $(window).scrollTop();
        var _off = $(".icontainer3").offset().top;
        if (winscr > 60){
            $(".flow_header").show();
        }else{
            $(".flow_header").hide();
        }
        (winscr > 100)?$(".back2top").fadeIn(800):$(".back2top").fadeOut(800);
        if ((winscr + 500) > _off){
            $(".icontainer3_1").animate({top:1626, opacity:"1"}, 800);
            $(".icontainer3_2").animate({top:1626, opacity:"1"}, 800);
            $(".icontainer3_3").animate({top:1626, opacity:"1"}, 800);
            $(".icontainer3_4").animate({top:1626, opacity:"1"}, 800);
        }
    })
    $(".back2top").click(function(){
        $('body,html').animate({scrollTop:0},1500);
    })
})
