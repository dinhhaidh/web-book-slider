/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button')
const searchClose = document.getElementById('search-close')
const searchContent = document.getElementById('search-content')

/*=============== search Menu ===============*/
// if(searchButton){
//     searchButton.addEventListener('click', () =>{
//         console.log('search click');
//         searchContent.classList.add('show-search')
//         searchContent.classList.remove('hide-search');
//     })
// }
$(document).ready(function(){
    $('#search-button').click(function(){
        $('#search-content').addClass('show-search')
        $('#search-content').removeClass('search-content')
    })
});

// ========= search hidden =============//
$(document).ready(function(){
    $('#')
})
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
    // when the scroll is higher than 350 viewport height, add the
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
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'ri-sun-line'

// // Chủ đề đã chọn trước đó (nếu người dùng chọn biểu tượng)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // Chúng tôi có được chủ đề hiện tại mà giao diện đã xác thực lớp chủ đề tối
// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ?  'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?   'ri-moon-line' : 'ri-sun-line'

// chúng tôi xác nhận xem người dùng có đóng chủ đề trước đó hay không
// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     document.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
// }

// ACTIVE / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     console.log(123);
//     // add or remove the dark / icon theme
//     document.body.classList.toggle('dark-theme')
//     themeButton.classList.toggle('iconTheme')
//     // we save the theme and the current icon that the user close 
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })

/*=============== SCROLL REVEAL ANIMATION ===============*/
$(document).ready( function(){
    $('#theme-button').click( function () {  
        $('body').toggleClass('dark-theme');
        $('.ri-moon-line').toggleClass('ri-sun-line');
    });
});