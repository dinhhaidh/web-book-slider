/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button')
const searchClose = document.getElementById('search-close')
const searchContent = document.getElementById('search-content')

/*=============== search Menu ===============*/
if(searchButton){
    searchButton.addEventListener('click', () =>{
        console.log('search click');
        searchContent.classList.add('show-search')
        searchContent.classList.remove('hide-search');
    })
}

// ========= search hidden =============//
if(searchClose){
    searchClose.addEventListener('click', () =>{
        console.log('close click');
        searchContent.classList.add('hide-search')
        searchContent.classList.remove('show-search');
    })
}


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
        11500: {
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
        11500: {
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
            11500: {
                slidesPerView: 4,
                centeredSlides: false,
    
            }
        }
    });

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/