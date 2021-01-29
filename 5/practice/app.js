
$(function () {
  $.when(
    $(".box1").slideDown()
  )
  .done(function () {
    $('.box1').css({
      'background-color': '#0000FF',
      "height": "100px",
      "width": "200px"
    });
  }).done(function () {
    $(".box1").slideUp();
  });
});

