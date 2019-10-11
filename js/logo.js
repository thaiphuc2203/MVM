jQuery(document).ready(function ($) {
    $('.branch_logo').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: '<span class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
        prevArrow: '<span class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
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
})