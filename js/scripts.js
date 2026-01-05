$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 6500,
  autoplaySpeed: 1000,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    1100: {
      items: 1,
    },
  },
});
$(".autoplay").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  appendArrows: $(".slick__arrows"),
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".auto-play").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  appendArrows: $(".slick__arrows"),
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".plays").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  appendArrows: $(".slick__arrows"),
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(document).ready(function () {
  const openId = localStorage.getItem("openFaqId");
  if (openId) {
    const $item = $(`.faq-item[data-id="${openId}"]`);
    $item.addClass("active");
    $item.find(".faq-answer").slideDown();
  }

  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");

    $(".faq-item")
      .not($item)
      .removeClass("active")
      .find(".faq-answer")
      .slideUp();

    $item.toggleClass("active");
    $item.find(".faq-answer").slideToggle();

    if ($item.hasClass("active")) {
      localStorage.setItem("openFaqId", $item.data("id"));

      $("html, body").animate(
        {
          scrollTop: $item.offset().top - 20,
        },
        500
      );
    } else {
      localStorage.removeItem("openFaqId");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modalLogin = document.getElementById("modalOverlay");
  const modalSignup = document.getElementById("modalSignup");

  const linkToSignup = modalLogin?.querySelector(".link-up");
  const linkToLogin = modalSignup?.querySelector(".link-in");

  const closeButtons = document.querySelectorAll("[data-close], #closeModal");

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function closeAllModals() {
    closeModal(modalLogin);
    closeModal(modalSignup);
  }

  linkToSignup?.addEventListener("click", function (e) {
    e.preventDefault();
    closeModal(modalLogin);
    openModal(modalSignup);
  });

  linkToLogin?.addEventListener("click", function (e) {
    e.preventDefault();
    closeModal(modalSignup);
    openModal(modalLogin);
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => closeAllModals());
  });

  [modalLogin, modalSignup].forEach((modal) => {
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  document
    .querySelector(".login__link")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(modalLogin);
    });
});
console.clear();

const nav = document.querySelector("nav");
const navLinksContainer = document.querySelector(".nav-links");
const navLinks = [...document.querySelectorAll(".link")];
const menuBtn = document.querySelector(".menu-btn");
const subMenuBtn = document.querySelector(".sub-menu-btn");

function createHoverEl() {
  let hoverEl = document.createElement("div");
  hoverEl.className = "hover-el";
  hoverEl.style.setProperty("--y", "0px");
  hoverEl.style.setProperty("--mousex", "0px");
  hoverEl.style.setProperty("--mousey", "0px");
  navLinksContainer.appendChild(hoverEl);
}
createHoverEl();

navLinks.forEach((link, index) => {
  let hoverEl = navLinksContainer.querySelector(".hover-el");
  link.style.setProperty("--delay", `${index * 50}ms`);
  link.addEventListener("mousemove", function (e) {
    hoverEl.style.setProperty("--y", `${index * 60}px`);
    hoverEl.style.setProperty("opacity", "1");
    hoverEl.style.setProperty("--mousex", `${e.pageX - hoverEl.offsetLeft}px`);
    hoverEl.style.setProperty("--mousey", `${e.pageY - hoverEl.offsetTop}px`);
  });
  navLinksContainer.addEventListener("mouseout", function () {
    hoverEl.style.setProperty("opacity", "0");
  });
  link.addEventListener("click", function () {
    let hoverEl = navLinksContainer.querySelector(".hover-el");
    hoverEl.style.opacity = "0";
    toggleSubmenu(link);
  });
});

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
  menuBtn.classList.toggle("close");
});
subMenuBtn.addEventListener("click", function () {
  nav.classList.toggle("sub-menu-open");
  removeSubmenu();
});

function toggleSubmenu(el) {
  let subMenu = nav.querySelector(".sub-menu");
  if (el.children[1]) {
    createSubmenu(el);
  } else if (nav.contains(subMenu)) {
    removeSubmenu();
  } else {
    return;
  }
}

function createSubmenu(el) {
  let subMenuContainer = document.createElement("div");
  subMenuContainer.className = "sub-menu";
  let subMenuItem = el.children[1].cloneNode(true);
  let subMenuItemList = [...subMenuItem.children];
  subMenuItemList.forEach((item, index) => {
    item.classList.add("off-menu");
    item.style.setProperty("--delay", `${index * 40}ms`);
  });
  nav.classList.toggle("sub-menu-open");
  nav.appendChild(subMenuContainer);
  subMenuContainer.appendChild(subMenuItem);
  setTimeout(function () {
    subMenuItemList.forEach((item) => {
      item.classList.remove("off-menu");
      item.classList.add("on-menu");
    });
  }, 200);
}
function removeSubmenu() {
  let subMenu = nav.querySelector(".sub-menu");
  let subMenuItemList = [...subMenu.children[0].children];
  if (nav.contains(subMenu)) {
    subMenuItemList.forEach((item) => {
      item.classList.add("off-menu");
      item.classList.remove("on-menu");
    });
    setTimeout(function () {
      nav.removeChild(subMenu);
    }, 500);
  }
}
document.querySelector(".copyright__right").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const pagination = document.querySelector(".events__pagination");
const nextButton = pagination.querySelector(".arrow__pagination");

const setActive = (link) => {
  const current = pagination.querySelector("a[aria-current='page']");
  if (current === link) return;

  current?.classList.remove("active");
  current?.removeAttribute("aria-current");

  link.classList.add("active");
  link.setAttribute("aria-current", "page");

  updateNextButton();
};

const updateNextButton = () => {
  const active = pagination.querySelector("a[aria-current='page']");
  const isLast = !active?.parentElement.nextElementSibling?.querySelector("a");

  nextButton.disabled = isLast;
};

pagination.addEventListener("click", (e) => {
  const link = e.target.closest("a:not(.arrow__pagination)");
  if (!link) return;

  e.preventDefault();
  setActive(link);
});

nextButton.addEventListener("click", () => {
  const active = pagination.querySelector("a[aria-current='page']");
  const next = active?.parentElement.nextElementSibling?.querySelector("a");

  if (next) setActive(next);
});

// инициализация при загрузке
updateNextButton();
