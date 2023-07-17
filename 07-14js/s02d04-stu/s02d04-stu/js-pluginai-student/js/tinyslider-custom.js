let slider = tns({
    container: '.slider-container',
    items: 1,
    gutter:10,
    autoplay:true,
    mousedrag:true,
    controls:false,
    nav:false,
    autoplayButtonOutput: false,
    autoplayTimeout:2000,
    responsive: {
        640: {
            items:2,
        },
        760: {
            items: 3,
        }
    }
})