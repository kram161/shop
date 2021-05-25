$(document).ready(function(){
    $('.main-info__scroll-button').on('click', function(e){
        if ($('section').is('#Choice')){
            $('html,body').stop().animate({ scrollTop: $('#Choice').offset().top }, 1000);
            e.preventDefault();
        }
        else if($('section').is('#Trust')){
            $('html,body').stop().animate({ scrollTop: $('#Guarantees-review').offset().top }, 1000);
        }
        else if($('section').is('#Jobs')){
            $('html,body').stop().animate({ scrollTop: $('#Jobs-form').offset().top }, 1000);
        }
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
    $('.profile-menu__personal').click(function(e){
        $('.profile-menu__personal').toggleClass('profile-menu__active')
        $('.profile-menu__purchase-history').removeClass('profile-menu__active')
        $('.profile-menu__referral-system').removeClass('profile-menu__active')
        $('.personal').toggleClass('personal-active')
        $('.purchase-history').removeClass('personal-active')
        $('.referral-system').removeClass('personal-active')
    });
    $('.profile-menu__purchase-history').click(function(e){
        $('.profile-menu__purchase-history').toggleClass('profile-menu__active')
        $('.profile-menu__personal').removeClass('profile-menu__active')
        $('.profile-menu__referral-system').removeClass('profile-menu__active')
        $('.personal').removeClass('personal-active')
        $('.purchase-history').toggleClass('personal-active')
        $('.referral-system').removeClass('personal-active')
    });
    $('.profile-menu__referral-system').click(function(e){
        $('.profile-menu__referral-system').toggleClass('profile-menu__active')
        $('.profile-menu__personal').removeClass('profile-menu__active')
        $('.profile-menu__purchase-history').removeClass('profile-menu__active')
        $('.personal').removeClass('personal-active')
        $('.purchase-history').removeClass('personal-active')
        $('.referral-system').toggleClass('personal-active')
    });
    $('.change-login').click(function(e){
        $('.personal-login__box').attr('readonly',false);
        $('.change-login').toggleClass('personal-data-active')
        $('.success-login').removeClass('personal-data-active')
    });
    $('.success-login').click(function(e){
        $('.personal-login__box').attr('readonly', true);
        $('.success-login').toggleClass('personal-data-active')
        $('.change-login').removeClass('personal-data-active')
    });
    $('.change-email').click(function(e){
        $('.personal-email__box').attr('readonly',false);
        $('.change-email').toggleClass('personal-data-active')
        $('.success-email').removeClass('personal-data-active')
    });
    $('.success-email').click(function(e){
        $('.personal-email__box').attr('readonly', true);
        $('.success-email').toggleClass('personal-data-active')
        $('.change-email').removeClass('personal-data-active')
    });
    $('.change-phone').click(function(e){
        $('.personal-phone__box').attr('readonly',false);
        $('.change-phone').toggleClass('personal-data-active')
        $('.success-phone').removeClass('personal-data-active')
    });
    $('.success-phone').click(function(e){
        $('.personal-phone__box').attr('readonly', true);
        $('.success-phone').toggleClass('personal-data-active')
        $('.change-phone').removeClass('personal-data-active')
    });
    $('.change-telegram').click(function(e){
        $('.personal-telegram__box').attr('readonly',false);
        $('.change-telegram').toggleClass('personal-data-active')
        $('.success-telegram').removeClass('personal-data-active')
    });
    $('.success-telegram').click(function(e){
        $('.personal-telegram__box').attr('readonly', true);
        $('.success-telegram').toggleClass('personal-data-active')
        $('.change-telegram').removeClass('personal-data-active')
    });
    $('.change-discord').click(function(e){
        $('.personal-discord__box').attr('readonly',false);
        $('.change-discord').toggleClass('personal-data-active')
        $('.success-discord').removeClass('personal-data-active')
    });
    $('.success-discord').click(function(e){
        $('.personal-discord__box').attr('readonly', true);
        $('.success-discord').toggleClass('personal-data-active')
        $('.change-discord').removeClass('personal-data-active')
    });
    $('.change-password').click(function(e){
        $('.personal-information__change-password').toggleClass('change-password__active')
        $('.personal-password').toggleClass('personal-information__change-password')
    });
    $('.password-save__button').click(function(e){
        $('.personal-information__change-password').removeClass('change-password__active')
        $('.personal-password').removeClass('personal-information__change-password')
    });
    $('.gmail-auth').click(function(e){
        $('.authorization-form__sign-in-gmail').toggleClass('authorization_form-active',true)
        $('.authorization-form__registration').removeClass('authorization_form-active',false)
        $('.authorization-form__sign-in').removeClass('authorization_form-active',false)
    });
    $('.sign-in-auth').click(function(e){
        $('.authorization-form__sign-in').toggleClass('authorization_form-active',true)
        $('.authorization-form__registration').removeClass('authorization_form-active',false)
        $('.authorization-form__sign-in-gmail').removeClass('authorization_form-active',false)
    });
    $('.reg-auth').click(function(e){
        $('.authorization-form__registration').toggleClass('authorization_form-active',true)
        $('.authorization-form__sign-in-gmail').removeClass('authorization_form-active',false)
        $('.authorization-form__sign-in').removeClass('authorization_form-active',false)
    });
    $('.guarantees-answers__units-answer').click(function(e){
        $(this).toggleClass('answer-activate')
    });
    $('.guarantees-answers__button').click(function(e){
        $('.guarantees-answers__button').removeClass('guarantees-answers__button-active')
        $(this).toggleClass('guarantees-answers__button-active')
    });
    $('.guarantees-payment').click(function(e){
        $('.guarantees-payment__answer').toggleClass('guarantees-answers__units-active')
        $('.guarantees-services__answer').removeClass('guarantees-answers__units-active')
        $('.guarantees-safety__answer').removeClass('guarantees-answers__units-active')
    });
    $('.guarantees-services').click(function(e){
        $('.guarantees-services__answer').toggleClass('guarantees-answers__units-active')
        $('.guarantees-payment__answer').removeClass('guarantees-answers__units-active')
        $('.guarantees-safety__answer').removeClass('guarantees-answers__units-active')
    });
    $('.guarantees-safety').click(function(e){
        $('.guarantees-safety__answer').toggleClass('guarantees-answers__units-active')
        $('.guarantees-payment__answer').removeClass('guarantees-answers__units-active')
        $('.guarantees-services__answer').removeClass('guarantees-answers__units-active')
    });
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
