// $.ui.ready(
//     function(){
//         $(".featured_pg").toggleHeaderMenu(false); 
//     }
// );


// $("li").addClass("foo");
// $.ui.clearHistory("featured_pg");

// $.ui.removeFooterMenu("#main");
// $.ui.setBackButtonText("Go Back");

$(".place_unit").swipeDown(function(){
    $(this).css3Animate({        
        y: "265px",
        timingFunction: "ease",
        time: "1000ms",
    });
}).swipeUp(function(){
	$(this).css3Animate({        
		y: "0",
        timingFunction: "ease",
        time: "1000ms",
    });
});
