/*
The list of APIs:

hover()
width()
css()
html()

*/
$(document).ready(function(){

$(".left").hover(function(){
    
    $(this).width("-="+30)
    $(".left span").html("- "+$(this).width()+"px")

    $(".right").width("+="+30)
    $(".right span").html("+ "+$(".right").width()+"px")
    $(".right").css({
    
        "color":"aqua",
        "background":"brown",
   })
},
function(){

    $(".right span").html($(".right").width()+"px")
    $(".right").css({
    
        "color":"brown",
        "background":"aqua",
   })
   $(".left span").html($(this).width()+"px")
}
);


$(".right").hover(function(){
    
    $(this).width("-="+30)
    $(".right span").html("- "+$(this).width()+"px")

    $(".left").width("+="+30)
    $(".left span").html("+ "+$(".left").width()+"px")
    $(".left").css({
        
            "color":"aqua",
            "background":"brown",
    })
},
function(){

    $(".left span").html($(".left").width()+"px")
    $(".left").css({
    
        "color":"brown",
        "background":"aqua",
   })
   $(".right span").html($(this).width()+"px")
}
);


});