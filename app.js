$(".spider").mouseenter(function(){
  $(this).animate({height: '140px', opacity:0.5});
})

$(".spider").mouseleave(function(){
  $(this).animate({height: '130px', opacity:1});
})

$(".col").click(function() {
  $(this).addClass('card-rotate');
})

// $(".col").dblclick(function() {
//   $(this).removeClass('card-rotate');
//   $(this).off("click");
//   $(this).addClass('card-reverse-rotate');
// })
