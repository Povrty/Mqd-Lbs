// Starting Code
$(".q2").toggle();
$(".q3").toggle();
$(".next").toggle();
$(".answers").toggle();
var delay = 2000;

$(".adj").keydown(function( event ) {
    if (event.which === 13) {
        var msg = $(".input1").val();
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
            setTimeout(function() {
                $(".next").toggle();
            }, delay);
            $("body").keydown(function( event2 ) {
                if (event2.which === 9) {
                    $(".q2").toggle();
                    $(".next").toggle();
                    $(".sq1").css("opacity","1").css("transition","1s");
                    $(".sq2").css("opacity","1").css("transition","2s");
                    $(".sq3").css("opacity","1").css("transition","3s");
                    $(".an1").text(msg);
                }
            });
        }     
    }
});

$(".place").keydown(function( event3 ) {
    if (event3.which === 13) {
        var msg2 = $(".input2").val();
        if (msg2 === "") {
            alert("❌ You didn't write anything! ❌");
            $(".error2").css("opacity","1").css("transition","1s");
        }
        else {
            $(".sq1").css("opacity","0").css("transition","1s");
            $(".sq2").css("opacity","0").css("transition","2s");
            $(".sq3").css("opacity","0").css("transition","3s");
            $(".place").fadeOut(2000);
            $(".error2").css("opacity","0").css("transition","3s");
            setTimeout(function() {
                $(".next").toggle();
            }, delay);
            $("body").keydown(function( event4 ) {
                if (event4.which === 9) {
                    $(".q3").toggle();
                    $(".sq1").css("opacity","1").css("transition","1s");
                    $(".sq2").css("opacity","1").css("transition","2s");
                    $(".sq3").css("opacity","1").css("transition","3s");
                    $(".an2").text(msg2);
                }
            });
        }     
    }
});

$(".age").keydown(function( event5 ) {
    if (event5.which === 13) {
        var msg3 = $(".input3").val();
        if (msg3 === "") {
            alert("❌ You didn't write anything! ❌");
            $(".error3").css("opacity","1").css("transition","1s");
        }
        else {
            $(".sq1").css("opacity","0").css("transition","1s");
            $(".sq2").css("opacity","0").css("transition","2s");
            $(".sq3").css("opacity","0").css("transition","3s");
            $(".age").fadeOut(2000);
            $(".error3").css("opacity","0").css("transition","3s");
            setTimeout(function() {
                $(".next").toggle();
            }, delay);
            $("body").keydown(function( event6 ) {
                if (event6.which === 9) {
                    $(".q2").toggle();
                    $(".sq1").css("opacity","1").css("transition","1s");
                    $(".sq2").css("opacity","1").css("transition","2s");
                    $(".sq3").css("opacity","1").css("transition","3s");
                var ans3 = $(".input3").val() * 5;
                    $(".an3").text(ans3);
                    $(".answers").toggle();
                }
            });
        }     
    }
});



