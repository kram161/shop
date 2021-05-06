$(document).ready(function(){
    $('.main-info__scroll-button').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#Choice').offset().top }, 1000);
        e.preventDefault();
    });
});
$(document).ready(function() {
    $('.expand__sidebar').click(function(e){
        $('.sidebar').toggleClass('sidebar__active');
        $('.expand__sidebar').toggleClass('expand__sidebar__active');
        $('.main-content').toggleClass('Main-content__active')
        $('.main-navbar').toggleClass('main-navbar__active')
        $('.product-customization__quantity__range').toggleClass('product-customization__quantity__range__active')
    })
    $('.expand__sidebar__active').click(function(e){
        $('.sidebar').removeClass('sidebar__active');
        $('.expand__sidebar').removeClass('expand__sidebar__active');
        $('.main-content').removeClass('Main-content__active')
        $('.main-navbar').removeClass('main-navbar__active')
        $('.product-customization__quantity__range').removeClass('product-customization__quantity__range__active')
    })
    $('.sidebar__change-theme__button').click(function(e){
        $('.sidebar__change-theme').toggleClass('sidebar__change-theme__white-theme')
        $('.sidebar__logo').toggleClass('sidebar__logo__white-theme')
        $('.sidebar__services').toggleClass('sidebar__services__white-theme')
        $('.sidebar__menu').toggleClass('sidebar__menu__white-theme')
        $('.sidebar').toggleClass('sidebar__white-theme')
    })
    $('.product-customization__platform__unit__activator').click(function(e){
        $('.product-customization__platform__unit').toggleClass('product-customization__platform__unit__active')
        $('.product-customization__platform__unit__description').toggleClass('product-customization__platform__unit__description__active')

    })
    $('.product-information__visible,.product-information__hidden').hover(function(e){
        $('.product-information__hidden').toggleClass('product-information__hidden__active')
    })
});
let mySlider = new rSlider({
    target: '#sampleSlider',
    values: [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15],
    tooltip: true,
    scale: true,
    labels: true,
    set: [8],
});
$(document).ready(function() {
    $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});