$(document).ready(function(){
    $("#btn1").click(function(){
        $("#box1").animate({
            height: '300px',
            width: '300px'
        });
    });
    $("#btn2").click(function(){
        $("#box1").animate({
            height: '100px',
            width: '100px'
        });
    });
    $("#btn3").click(function(){
        $("#box2").animate({
            height: '300px',
            width: '300px'
        });
    });
    $("#btn4").click(function(){
        $("#box2").stop();
    });

    $("#btn5").click(function(){
        $("#div1").delay(800).fadeIn();
        $("#div2").delay(1600).fadeIn();
        $("#div3").delay(2400).fadeIn();
    });

        $("#btn6").click(function(){
            $("#box3").fadeIn(3000);
          });
        $("#btn7").click(function(){
            $("#box3").fadeOut(3000);

        });
        $("p").click(function(){
            $("p").fadeTo(5000 , 0.5);
        });
        $("#btn8").click(function(){
            $("#div4").fadeToggle();
            $("#div5").fadeToggle("slow");
            $("#div6").fadeToggle(3000);
        });

        $("#start").click(function(){
          $("#div7").animate({
              height: '500px',
              width: '500px'
          });
        });
        $("#finish").click(function(){
          $("#div7").finish();
        });
        $("#btn9").click(function(){
          $("p").hide();
        });

        $("#btn10").click(function(){
          $("p").fadeIn(2000);
          $("div").show(2000);
        });

        $(".btn11").click(function(){
          $("div").slideDown(); //SLIDE UP
        });
        $(".btn12").click(function(){
          $("div").slideUp(); //SLIDE dOWN
        });


});
