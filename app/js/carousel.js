$(document).ready(function() {
  $('.tech__carousel').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          centerMode: true,
          slidesToShow: 4,
          autoplay: false,
        }
      },
      {
        breakpoint: 930,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          autoplay: false,
        }
      },
      {
        breakpoint: 730,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          autoplay: false,
        }
      },
      {
        breakpoint: 490,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          autoplay: false,
        }
      }
    ]
  });
});