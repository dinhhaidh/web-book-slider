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


const loginButton = document.getElementById('search-button')
const loginClose = document.getElementById('search-close')
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


/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/


/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/