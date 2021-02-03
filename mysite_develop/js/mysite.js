$(function () {
  $(".main-images").skippr({
    transition: "fade",

    speed: 1000,

    easing: "easeOutQuart",

    navType: "block",

    childrenElementType: "div",

    arrows: true,

    autoPlay: true,

    autoPlayDuration: 3000,

    keybordOnAlways: true,

    hidePrevious: false
  });
});


$(function () {
  $("#back-button a, .to_top").on('click', function (event) {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    event.preventDefault();
  });
});

// var offset = $("#portfolio").offset() || {top: 0, left: 0};


$(function () {
  $(".nav_list_item a").on('click', function (event) {
    var offset = $($(this).attr("href")).offset() || { top: 0, left: 0 };
    $("body, html").animate({
      scrollTop: offset.top
    }, 500);


    if(screen.width < 767){
      $('.menu-trigger').removeClass("active");
      $(".header_menu").toggleClass("open");
      $('.humberger').fadeToggle();
    }

    event.preventDefault();
  })
})

$(function () {
  $('.menu-trigger').on('click', function (event) {
    $(this).toggleClass("active");
    $(".header_menu").toggleClass("open");
    $('.humberger').fadeToggle();
    event.preventDefault();
  });
});