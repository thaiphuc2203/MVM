jQuery(document).ready(function($){	   
	$('.row22').slick({ 
	  autoplay:true, 
	  dots: true,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 4,
		slidesToScroll: 2,
	  nextArrow:'<span class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
		prevArrow:'<span class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  	  cssEase: 'linear',
  	   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
	});
  $("#icon_bar").click(function(){
    $("#menu_deskop").show();

  })
  $(".mobile_close").click(function(){
    $("#menu_deskop").hide();
  });

  // back to top
  console.log('hello world');
  $(window).scroll(function(){
    
    if ($(window).scrollTop() > 100) {
        $('#myBtn').addClass('show');
      } else {
        $('#myBtn').removeClass('show');
      } 
  })
  $('#myBtn').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

})
console.log('hello world');

$(document).ready(function () {	 
console.log('hello world');
$(window).scroll(function () {

  if ($(window).scrollTop() > 100) {
    $('#myBtn').addClass('show');
  } else {
    $('#myBtn').removeClass('show');
  }
})
$('#myBtn').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

})