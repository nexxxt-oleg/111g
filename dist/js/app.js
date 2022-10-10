document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('teamsSlider')) {
        const sliderBrands = new Swiper('#teamsSlider', {
            slidesPerView: 4,
            navigation: {
                nextEl: '#teamsSlider__btnPrev',
                prevEl: '#teamsSlider__btnNext',
            },
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

    if (document.getElementById('gallery')) {
        const sliderBrands = new Swiper('#gallery', {
            slidesPerView: 6,
            lazy: true,
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                },
                1300: {
                    slidesPerView: 6,
                },
            }
        });
    }

    if (document.getElementById('posterSlider')) {
        const sliderBrands = new Swiper('#posterSlider', {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                prevEl: '#gallery__btnNext',
                nextEl: '#gallery__btnPrev',
             },
            lazy: {
                loadPrevNext: true,
            },
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
            }
        });
    }
});