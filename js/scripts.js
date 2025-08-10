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

document.addEventListener('DOMContentLoaded', function () {
    const modalLogin = document.getElementById('modalOverlay'); // твой Sign in
    const modalSignup = document.getElementById('modalSignup'); // новый Sign up

    const linkToSignup = modalLogin?.querySelector('.link-up');
    const linkToLogin = modalSignup?.querySelector('.link-in');

    const closeButtons = document.querySelectorAll('[data-close], #closeModal');

    // Открытие модалки
    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // Закрытие модалки
    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Закрыть все
    function closeAllModals() {
        closeModal(modalLogin);
        closeModal(modalSignup);
    }

    // Переключение Sign in → Sign up
    linkToSignup?.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(modalLogin);
        openModal(modalSignup);
    });

    // Переключение Sign up → Sign in
    linkToLogin?.addEventListener('click', function (e) {
        e.preventDefault();
        closeModal(modalSignup);
        openModal(modalLogin);
    });

    // Закрытие по крестику
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => closeAllModals());
    });

    // Закрытие по клику на overlay
    [modalLogin, modalSignup].forEach(modal => {
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Закрытие по Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // Пример открытия Sign in (можешь привязать к своей кнопке в шапке)
    document.querySelector('.login__link')?.addEventListener('click', function (e) {
        e.preventDefault();
        openModal(modalLogin);
    });
});