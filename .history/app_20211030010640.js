$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')

    })

    /* Setting owl carousel*/

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items:6,
        dots:false,
        loop:true,
        autoplay: false,
        autoplayHoverPause: true

    })
})