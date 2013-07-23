
$("#events_car").swipeUp(function(){
    $(this).css3Animate({        
        y: "-200px",
        timingFunction: "ease",
        time: "200ms",
    });
}).swipeDown(function(){
	$(this).css3Animate({        
		y: "0",
        timingFunction: "ease",
        time: "200ms",
    });
});

// Carousel

var options={
   vertical:false, // page up/down
   horizontal:true, // page left/right
   pagingDiv:null, // div to hold the dots for paging
   pagingCssName:"carousel_paging", //classname for the paging dots
   pagingCssNameSelected: "carousel_paging_selected", //classname for the selected page dots
   wrap:true //Creates a continuous carousel
}

var carousel = $("#events_car").carousel();