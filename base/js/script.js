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
    })
    $('.expand__sidebar__active').click(function(e){
        $('.sidebar').removeClass('sidebar__active');
        $('.expand__sidebar').removeClass('expand__sidebar__active');
    })
    $('.sidebar__change-theme__button').click(function(e){
        $('.sidebar__change-theme').toggleClass('sidebar__change-theme__white-theme')
        $('.sidebar__logo').toggleClass('sidebar__logo__white-theme')
        $('.sidebar__services').toggleClass('sidebar__services__white-theme')
        $('.sidebar__menu').toggleClass('sidebar__menu__white-theme')
        $('.sidebar').toggleClass('sidebar__white-theme')

    })
});
