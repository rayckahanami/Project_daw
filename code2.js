$(document).ready(function(){
    $("#btn1").click(function(){
      alert($("#text1").val());
    });
    $("#image").click(function(){
      if($("#image").attr("title") != "marko"){
        $("#image").attr("src","user.png");
        $("#image").attr("title","marko");
      }else{
//      $("#image").attr("src","https://www.serishirts.com//32939-54086-tm_home_default/wd-camiseta-negan-lucille-team.jpg");
      $("#image").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Map-Flag_of_the_Soviet_Union.svg/220px-Map-Flag_of_the_Soviet_Union.svg.png");
        $("#image").attr("title","no-marko");
    }
    });
    $("#btn2").click(function(){
      $("#p1").text("Hello" + $("#p1").text());
    });
    $("#btn3").click(function(){
      $("p.test").remove();
    });

});
