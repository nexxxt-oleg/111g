document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('teamsSlider')) {
        const sliderBrands = new Swiper('#teamsSlider', {
            slidesPerView: 4,
           /* navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },*/
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
            on: {
                init: function (e) {

                }
            }
        });
    }
});