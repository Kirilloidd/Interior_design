"use string"
var menu_btn = document.getElementById("menu-toggle-btn");
var main_menu = document.getElementById("main-header-menu");
var menu_btn_span_1 = document.getElementById("menu-toggle-btn-span-1");
var img = document.getElementById("img-btn");
var logo = document.getElementById("logo");
var logo_img = document.getElementById("header-logo-img");
//var living_room = document.getElementById("living-room");
//var hotel_rooms = document.getElementById("hotel-rooms");
//var commercial = document.getElementById("commercial");
//var full_construction = document.getElementById("full-construction");
//var finishing_work = document.getElementById("finishing-work");
//var home_designer = document.getElementById("home-designer");
var service_title = document.getElementById("service-content-title");
var services_list = document.getElementById("services-list");
var open_close = false;

window.onresize = function() {
    if (window.matchMedia('(max-width: 1170px)').matches) {
        logo_img.src = "img/footer-logo.png";
    }
    else{
        logo_img.src = "img/logo.png";
    }
}

menu_btn.onclick = function() {
    if(open_close == false){
       main_menu.style.display = "block";
       open_close = true;
       img.style.display = "block";
       menu_btn_span_1.style.display = "none";
       if (window.matchMedia('(max-width: 768px)').matches) {
        logo.style.display = "none";
        menu_btn.style.marginLeft = "auto";
        
    }
}
else{
    main_menu.style.display = "none";
    open_close = false;
    menu_btn_span_1.style.display = "block";
    img.style.display = "none";  
    if (window.matchMedia('(max-width: 768px)').matches) {
        logo.style.display = "block";
        menu_btn.style.marginLeft = "0";
    }
}   
}


services_list.onclick = function(event){
    if (event.target.tagName != "A") return;
    service_title.innerHTML = event.target.innerHTML;
}

