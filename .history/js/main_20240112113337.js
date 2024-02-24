/*=============== SEARCH ===============*/
// $(document).ready(function(){
//     $('#search-button')
// })
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

/*=============== login Menu ===============*/
if(searchButton){
    loginButton.addEventListener('click', () =>{
        console.log('search click');
        loginContent.classList.add('show-login')
        loginContent.classList.remove('hide-search');
    })
}

// ========= login hidden =============//
if(loginClose){
    loginClose.addEventListener('click', () =>{
        console.log('close click');
        // loginContent.classList.add('hide-login')
        loginContent.classList.remove('show-login');
    })
}


/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/


/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/