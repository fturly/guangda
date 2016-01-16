/**
 * Created by Administrator on 2016/1/16.
 */
$(function () {
    $(window).scroll(function(){
        var winscr = $(window).scrollTop();
        var _off = $(".icontainer3").offset().top;
        if ((winscr + 500) > _off){
            $(".icontainer3_1").delay(100).animate({top:1626, opacity:"1"}, 800,function(){
                $(".icontainer3_2").delay(100).animate({top:1626, opacity:"1"}, 800, function(){
                    $(".icontainer3_3").delay(100).animate({top:1626, opacity:"1"}, 800, function(){
                        $(".icontainer3_4").delay(100).animate({top:1626, opacity:"1"}, 800, function(){
                            console.log("Finished");
                        });
                    });
                });
            });
        }
    });
});