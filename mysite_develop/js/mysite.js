$(function () {
  $(".main-images").skippr({
    transition : "fade",

    speed : 1000,

    easing : "easeOutQuart",

    navType : "block",

    childrenElementType : "div",

    arrows : true,

    autoPlay : true,

    autoPlayDuration : 3000,

    keybordOnAlways : true,

    hidePrevious : false
  });
});