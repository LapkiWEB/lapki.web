window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if (window.pageYOffset > 200) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}


$(function () {
  $('.menu__btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.header').addClass('active');
      $('html, body').css('overflow', 'hidden');
    } else {
      $('.menu').removeClass('active');
      $('.header').removeClass('active');
      $('html, body').css('overflow', 'auto');
    }
  }));
  $('.screen__menu-btn').on('click', (function () {
    if (!$('.menu').hasClass('active')) {
      $('.menu').addClass('active');
      $('.header').addClass('active');
      $('html, body').css('overflow', 'hidden');
    } else {
      $('.menu').removeClass('active');
      $('.header').removeClass('active');
      $('html, body').css('overflow', 'auto');
    }
  }));


  $('.slider__wrapper').slick({
    prevArrow: document.querySelector('.slick-prev'),
    nextArrow: document.querySelector('.slick-next'),
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [{
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });




})

  // window.addEventListener('DOMContentLoaded', function () {
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
      document.getElementsByTagName('html')[0].style.overflow = "hidden";
    });
  });

  function clossModel() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
     document.getElementsByTagName('html')[0].style.overflow = "auto";
  }

  modalCloseBtn.addEventListener('click', clossModel);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      clossModel();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      clossModel();
    }
  });

// });


