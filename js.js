/*
The list of APIs:

hover()
width()
css()
html()

*/
$(document).ready(function(){
    
$(".left").hover(function(){
    
   if($(".right").width()>=1894){
          
      $(".span2").html("The Right has full width")
   }
   else{
      $(".span2").html("")
   }

    var dwr=$(".right").width()
    if ($(".left").width()>dwr){
        $(".span1").html("Left > Rihgt")
    }
    else if($(".left").width()<dwr){
       $(".span1").html("Left < Rihgt")
    }
    else{
       $(".span1").html("Left == Rihgt")
    }

    $(this).width("-="+30)
    $(".left span").html("- "+$(this).width()+"px")

    $(".right").width("+="+30)
    $(".right span").html("+ "+$(".right").width()+"px")
    $(".right").css({
    
        "color":"rgb(3, 2, 27)",
        "background":"rgb(3, 0, 202)",
   })
},
function(){

    var dwr=$(".right").width()
    if ($(".left").width()>dwr){
        $(".span1").html("Left > Rihgt")
    }
    else if($(".left").width()<dwr){
       $(".span1").html("Left < Rihgt")
    }
    else{
    
       $(".span1").html("Left == Rihgt")
    }

    $(".right span").html($(".right").width()+"px")
    $(".right").css({
    
        "color":" rgb(3, 0, 202)",
        "background":"rgba(160, 128, 23, 0.739)",
   })
   $(".left span").html($(this).width()+"px")
}
);


$(".right").hover(function(){


   if($(".left").width()>=1894){
          
      $(".span2").html("The Left has full width")
   }
   else{
      $(".span2").html("")
   }
    
    var dwr=$(".right").width()
    if ($(".left").width()>dwr){
        $(".sapn1").html("Left > Rihgt")
    }
    else if($(".left").width()<dwr){
       $(".span1").html("Left < Rihgt")
    }
    else{
    
       $(".span1").html("Left == Rihgt")
    }

    $(this).width("-="+30)
    $(".right span").html("- "+$(this).width()+"px")

    $(".left").width("+="+30)
    $(".left span").html("+ "+$(".left").width()+"px")
    $(".left").css({
        
            "color":"rgb(3, 2, 27)",
            "background":"rgb(3, 0, 202)",
    })
},
function(){


    var dwr=$(".right").width()
    if ($(".left").width()>dwr){
        $(".span1").html("Left > Rihgt")
    }
    else if($(".left").width()<dwr){
       $(".span1").html("Left < Rihgt")
    }
    else{
       $(".span1").html("Left == Rihgt")
    }

    $(".left span").html($(".left").width()+"px")
    $(".left").css({
    
        "color":"rgb(3, 0, 202)",
        "background":"rgba(160, 128, 23, 0.739)",
   })
   $(".right span").html($(this).width()+"px")
}
);


});