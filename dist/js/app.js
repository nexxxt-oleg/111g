document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById('teamsSlider')) {
        const sliderBrands = new Swiper('#teamsSlider', {
            slidesPerView: 4,
            navigation: {
                nextEl: '#teamsSlider__btnPrev',
                prevEl: '#teamsSlider__btnNext',
            },
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                440: {
                    slidesPerView: 1,
                },
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
        new Swiper('#gallery', {
            slidesPerView: 6,
            lazy: true,
            navigation: {
                prevEl: '#gallery__btnNext2',
                nextEl: '#gallery__btnPrev2',
            },
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                440: {
                    slidesPerView: 2,
                },
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
        new Swiper('#posterSlider', {
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
                300: {
                    slidesPerView: 1,
                },
                440: {
                    slidesPerView: 1,
                },
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

    const widthScreen = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;

    if (document.getElementById('actorsSlider')) {
        if (widthScreen < 991) {
            new Swiper('#actorsSlider', {
                spaceBetween: 30,
                navigation: {
                    prevEl: '#actorsSlider__btnNext',
                    nextEl: '#actorsSlider__btnPrev',
                },
            });
        }
    }
});