// A $( document ).ready() block.
$( document ).ready(function() {
    
    $(".hamburger-button").click(function(){

        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
    })

    // animate on scroll - activate/initiate
    AOS.init({
        duration: 500
    });
});


// Light Gallery - Popup gallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});