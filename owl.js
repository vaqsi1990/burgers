


$('.owl-carousel').owlCarousel({
    stagePadding: 2,
    loop:true,
   
    margin:2,
    items:3,
    autoplay:false,
    
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
           
        },
        1000:{
            items:1,
           
            loop:false
        }
    }
})