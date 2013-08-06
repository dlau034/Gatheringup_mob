// Swipe on Place Details on Place Page
// #############################################    

// var myScroller;
// $.ui.ready(function () {
//     $(".events_car").scroller(); //Fetch the scroller from cache
// });        

// $("#events_car").swipeUp(function(){
//     $(this).css3Animate({        
//         y: "-200px",
//         timingFunction: "ease",
//         time: "200ms",
//     });
// }).swipeDown(function(){
// 	$(this).css3Animate({        
// 		y: "0",
//         timingFunction: "ease",
//         time: "200ms",
//     });
// });

// Carousel
// #############################################    

var options={
   vertical:false, // page up/down
   horizontal:true, // page left/right
   // pagingDiv:null, // div to hold the dots for paging
   // pagingCssName:"carousel_paging", //classname for the paging dots
   // pagingCssNameSelected: "carousel_paging_selected", //classname for the selected page dots
   wrap:true //Creates a continuous carousel
}

var carousel = $("#events_car, #place_car").carousel(options);

// Enable Scroll 
// #############################################    

// var myScroller;
$.ui.ready(function () {
    myScroller = $(".story_unit").scroller(); //Enable scroll on story unit
});

                    
$.ui.ready(function () {
    $("#slide_wrapper").scroller(); //Enable scroll on story unit
});
                    
// Enable Nav Accordion

var list = $(".cat_main") 

$(".cat_sec").hide();

list.click(function(){
	$(this).siblings(".cat_sec").toggle();
	$(this).parent().siblings().children(".cat_sec").hide();
});

// Leaflet JS
// #############################################    

var map2
        
function loadmap_event(){

  if (map2 === undefined) {

    map2 = L.map('map_event').setView([40.78486, -73.963036], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/b33ed4828e694c8eb411b09577f89072/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map2);        
    console.log("event map is working")
  }
}

var map3; 

function loadmap_place(){
    
  if (map3 === undefined) {
    map3 = L.map('map_place').setView([40.78486, -73.963036], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/b33ed4828e694c8eb411b09577f89072/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map3);      

var myIcon = L.icon({
    iconUrl: 'http://siteimages.gatheringup.com/mapsicon/1.png',
    iconSize: [47, 47],
    iconAnchor: [23, 47],
    popupAnchor: [0, -47]
});

var marker = L.marker([40.78486, -73.963036],{icon: myIcon}).addTo(map3);

marker.on('click', function(e) {
    map.setZoom(14);
});

    console.log("place map working")    
  }        
}

var map1

function loadmap_story(){
    
  if (map1 === undefined) { 

    map1 = L.map('map_story').setView([40.78486, -73.963036], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/b33ed4828e694c8eb411b09577f89072/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map1);                                
    console.log("story page map working")
  }
}

var map4

function loadmap_bookmark(){
    
  if (map4 === undefined) { 

    map4 = L.map('map_bookmark').setView([40.78486, -73.963036], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/b33ed4828e694c8eb411b09577f89072/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map4);                                
    console.log("bookmark page map working")
  }
}

// #############################################            

    // var map = L.map('map').setView([40.78486, -73.963036], 13);

    // L.tileLayer('http://{s}.tile.cloudmade.com/b33ed4828e694c8eb411b09577f89072/997/256/{z}/{x}/{y}.png', {
    //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    //     maxZoom: 18
    // }).addTo(map);

    // var myIcon = L.icon({
    //     iconUrl: 'http://siteimages.gatheringup.com/mapsicon/1.png',
    //     iconSize: [47, 47],
    //     iconAnchor: [23, 47],
    //     popupAnchor: [0, -47]
    // });

    // var marker = L.marker([40.78486, -73.963036],{icon: myIcon}).addTo(map);

    // marker.on('click', function(e) {
    //     map.setZoom(14);
    // });
    
    //     }
    // );

// var tab = ;

$(".tab_place").swipe(function(){
  console.log("is being clicked!")
    slidemenu();
});


$.ui.ready(function () {
    $("#drawer").drawer({direction:"up"})

});     