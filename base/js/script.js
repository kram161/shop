$(function(){
    $('.main-info__scroll-button').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#Choice').offset().top }, 1000);
        e.preventDefault();
    });
});
$(document).ready(function() {
    $('.expand__sidebar').click(function(event){
        $('.sidebar').toggleClass('sidebar__active');
        $('.expand__sidebar').toggleClass('expand__sidebar__active');
    })
    $('.expand__sidebar__active').click(function(event){
        $('.sidebar').removeClass('sidebar__active');
        $('.expand__sidebar').removeClass('expand__sidebar__active');
    })
});