// Starting Code
$(".q2").toggle();
$(".q3").toggle();

$(".adj").keydown(function( event ) {
    if (event.which === 13) {
        var msg = $("input").val();
        if (msg === "") {
            alert("❌ You didn't write anything! ❌");
            $(".error").css("opacity","1").css("transition","1s");
        }
        else {
            $(".sq1").css("opacity","0").css("transition","1s");
            $(".sq2").css("opacity","0").css("transition","2s");
            $(".sq3").css("opacity","0").css("transition","3s");
            $(".adj").fadeOut(2000);
            $(".error").css("opacity","0").css("transition","3s");
        }     
    }
    
});

