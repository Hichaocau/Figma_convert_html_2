$(document).ready(function(){
    $('.slider__list-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        dots: true, //dấu chấm dưới slider css: slick-dots
        arrows: false, //ẩn previous/next
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 741,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false, //ẩn mũi tên
                dots: true
              }
            }
          ],
    });
});

const iconHeader = document.querySelector('.header__menu i')
const headerNavbar = document.querySelector('.header__navbar')

iconHeader.addEventListener('click', () => {
  headerNavbar.classList.toggle('active')
  iconHeader.classList.toggle('fa-xmark')
})


