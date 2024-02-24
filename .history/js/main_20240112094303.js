/*=============== SEARCH ===============*/
// $(document).ready(function(){
//     $('#search-button')
// })
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

/*=============== Show Menu ===============*/
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
        searchContent.classList.remove('hide-search');
    })
}

// ========= menu hidden =============//
if(searchClose){
    searchClose.addEventListener('click', () =>{
        console.log('');
        searchContent.classList.remove('hide-search');
        searchContent.classList.add('show-search')
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