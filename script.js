new Swiper('.card-wrapper', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        },
    }
});

const catalogButton = document.querySelector('.catalog');
const whatsappButton = document.querySelector('.whatsapp');
const form = document.querySelector('form');
const subject = document.querySelector('input');
const message = document.querySelector('textarea');

const navbar = document.querySelector('nav');
const menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

catalogButton.addEventListener('click', () => {
    window.open('https://wa.me/c/558598264897', '_blank');
});

whatsappButton.addEventListener('click', () => {
    window.open('https://wa.me/558598264897', '_blank');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.location.href = `mailto:toptechredes0022gh@gmail.com?subject=${subject.value}&body=${message.value}`;
});