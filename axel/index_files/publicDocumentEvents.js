$(document).ready(function(){

    $(".menuPoint").each(function(index,el){
    
        var el = $(el);
        var link = el.find(".n-button");
        var rel = link.attr('rel');
        var headline = $("#nav-headline-"+rel);
        var others = $(".nav-headline");

        el.on({
            mouseenter: function(){

                if($(".active").size() == 0){
                    headline.fadeIn(300).addClass("active");
                    link.fadeIn(300).addClass("active");
                } else {
                    $(".active").fadeOut(200,function(){
                        headline.fadeIn(300).addClass("active");
                        link.fadeIn(300).addClass("active");
                    });
                }
                console.log($(".active"));


            },
            mouseleave: function(){
                headline.fadeOut(200,function(){
                    $(this).removeClass("active")
                });
                link.fadeOut(200,function(){
                    $(this).removeClass("active")
                });
            }
        });

    });
	
});