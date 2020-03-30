$(document).ready(function () {
    $('.shows__slider').slick({
        prevArrow: '<img src="img/arrow-left.svg" alt="left" class="shows__slider-arrows shows__slider-arrows--left">',
        nextArrow: '<img src="img/arrow-right.svg" alt="left" class="shows__slider-arrows shows__slider-arrows--right">',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 6000,
        
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                
              }
            },
        ]
    });
    
    $('.flowing-scroll').on( 'click', function(){ 
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({ 
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 700 // скорость прокрутки
            );
        }
        return false;
    });

    $('.toggle__btn').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    });

    $('.content__input').on('click', function() {
        $('.intro__title').toggleClass('active');
    });

    new WOW().init();
});