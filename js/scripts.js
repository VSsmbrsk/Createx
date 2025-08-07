$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }

})
$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    appendArrows: $('.slick__arrows'), 
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.auto-play').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  appendArrows: $('.slick__arrows'), 
  dots: false,
  infinite: true,
  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }
  ]
});
$('.plays').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    appendArrows: $('.slick__arrows'), 
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$(document).ready(function () {
  // Load previously opened FAQ from localStorage
  const openId = localStorage.getItem("openFaqId");
  if (openId) {
    const $item = $(`.faq-item[data-id="${openId}"]`);
    $item.addClass("active");
    $item.find(".faq-answer").slideDown();
  }

  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");

    // Collapse all others
    $(".faq-item").not($item).removeClass("active").find(".faq-answer").slideUp();

    // Toggle this one
    $item.toggleClass("active");
    $item.find(".faq-answer").slideToggle();

    // Save to localStorage if open
    if ($item.hasClass("active")) {
      localStorage.setItem("openFaqId", $item.data("id"));

      // Scroll smoothly to opened FAQ
      $('html, body').animate({
        scrollTop: $item.offset().top - 20
      }, 500);
    } else {
      localStorage.removeItem("openFaqId");
    }
  });
});
