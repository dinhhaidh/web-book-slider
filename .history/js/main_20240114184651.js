/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button')
const searchClose = document.getElementById('search-close')
const searchContent = document.getElementById('search-content')

/*=============== search Menu ===============*/
$(document).ready(function(){
    $('#search-button').click(function(){
        $('#search-content').addClass('show-search')
        $('#search-content').removeClass('search-content')
    })
});

// ========= search hidden =============//
$(document).ready(function(){
    $('#search-close').click(function(){
        $('#search-content').addClass('hide-search')
        $('#search-content').removeClass('show-search');
    })
})

const loginButton = document.getElementById('login-button')
const loginClose = document.getElementById('login-close')
const loginContent = document.getElementById('login-content')

/*=============== login show ===============*/
if(searchButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

// ========= login hidden =============//
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.add('hide-login')
    })
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER slider ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeature = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});


/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        centeredSlides: 'auto',

        breakpoints: {
            1150: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
// khi cuộn cao hơn 350 chiều cao của khung nhìn, hãy thêm
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
    if (sectionsClass) {
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link');
        } else {
          sectionsClass.classList.remove('active-link');
        }
      }
  });
};

window.addEventListener('scroll', scrollActive);
/*=============== DARK LIGHT THEME ===============*/ 
$(document).ready( function(){
    $('#theme-button').click( function () {  
        $('body').toggleClass('dark-theme');
        $('.ri-moon-line').toggleClass('ri-sun-line');
    });
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: trie

})