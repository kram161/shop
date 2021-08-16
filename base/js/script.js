jQuery(document).ready(function(){
    jQuery('.main-info__scroll-button').on('click', function(e){
        if (jQuery('section').is('#Choice')){
            jQuery('html,body').stop().animate({ scrollTop: jQuery('#Choice').offset().top }, 1000);
            e.preventDefault();
        }
        else if(jQuery('section').is('#Trust')){
            jQuery('html,body').stop().animate({ scrollTop: jQuery('#Guarantees-review').offset().top }, 1000);
        }
        else if(jQuery('section').is('#Jobs')){
            jQuery('html,body').stop().animate({ scrollTop: jQuery('#Jobs-form').offset().top }, 1000);
        }
        else if(jQuery('section').is('#Feedback')){
            jQuery('html,body').stop().animate({ scrollTop: jQuery('#Feedback-form').offset().top }, 1000);
        }
    });
});
jQuery(document).ready(function() {
    jQuery('.expand__sidebar').click(function(e){
        jQuery('.sidebar').toggleClass('sidebar__active');
        jQuery('.scroller-block').toggleClass('scroller-block__sidebar__active');
        jQuery('.expand__sidebar').toggleClass('expand__sidebar__active');
        jQuery('.main-content').toggleClass('Main-content__active')
        jQuery('.main-navbar').toggleClass('main-navbar__active')
        jQuery('.product-customization__quantity__range').toggleClass('product-customization__quantity__range__active')
        window.setTimeout(function() {
            jQuery('.rs-container').remove();
        }, 200 /* 0.5 sec */);
        window.setTimeout(function() {
            let mySlider = new rSlider({
                target: '#sampleSlider',
                values: [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15],
                tooltip: true,
                scale: true,
                labels: true,
                set: [8],
            });
        }, 200 /* 0.5 sec */);
    })
    jQuery('.expand__sidebar__active').click(function(e){
        jQuery('.sidebar').removeClass('sidebar__active');
        jQuery('.expand__sidebar').removeClass('expand__sidebar__active');
        jQuery('.main-content').removeClass('Main-content__active')
        jQuery('.main-navbar').removeClass('main-navbar__active')
        jQuery('.product-customization__quantity__range').removeClass('product-customization__quantity__range__active')
    })
    jQuery('.sidebar__change-theme__button').click(function(e){
        jQuery('body').toggleClass('body__white-theme')
        jQuery('html').toggleClass('scrollbar__white-theme')

    })
    jQuery('.product-customization__platform__unit__activator').click(function(e){
        jQuery('.product-customization__platform__unit').toggleClass('product-customization__platform__unit__active')
        jQuery('.product-customization__platform__unit__description').toggleClass('product-customization__platform__unit__description__active')

    })
    jQuery('.product-information__visible,.product-information__hidden').hover(function(e){
        jQuery('.product-information__hidden').toggleClass('product-information__hidden__active')
    })
    jQuery('.profile-menu__personal').click(function(e){
        jQuery('.profile-menu__personal').toggleClass('profile-menu__active',true)
        jQuery('.profile-menu__purchase-history').removeClass('profile-menu__active',false)
        jQuery('.profile-menu__referral-system').removeClass('profile-menu__active-history',false)
        jQuery('.personal').toggleClass('personal-active',true)
        jQuery('.purchase-history').removeClass('personal-active',false)
        jQuery('.referral-system').removeClass('personal-active',false)
    });
    jQuery('.profile-menu__purchase-history').click(function(e){
        jQuery('.profile-menu__purchase-history').toggleClass('profile-menu__active',true)
        jQuery('.profile-menu__personal').removeClass('profile-menu__active',false)
        jQuery('.profile-menu__referral-system').removeClass('profile-menu__active-history',false)
        jQuery('.personal').removeClass('personal-active',false)
        jQuery('.purchase-history').toggleClass('personal-active',true)
        jQuery('.referral-system').removeClass('personal-active',false)
    });
    jQuery('.profile-menu__referral-system').click(function(e){
        jQuery('.profile-menu__referral-system').toggleClass('profile-menu__active-history',true)
        jQuery('.profile-menu__personal').removeClass('profile-menu__active',false)
        jQuery('.profile-menu__purchase-history').removeClass('profile-menu__active',false)
        jQuery('.personal').removeClass('personal-active',false)
        jQuery('.purchase-history').removeClass('personal-active',false)
        jQuery('.referral-system').toggleClass('personal-active',true)
    });
    jQuery('.change-login').click(function(e){
        jQuery('.personal-login__box').attr('readonly',false);
        jQuery('.change-login').toggleClass('personal-data-active')
        jQuery('.success-login').removeClass('personal-data-active')
    });
    jQuery('.success-login').click(function(e){
        jQuery('.personal-login__box').attr('readonly', true);
        jQuery('.success-login').toggleClass('personal-data-active')
        jQuery('.change-login').removeClass('personal-data-active')
    });
    jQuery('.change-email').click(function(e){
        jQuery('.personal-email__box').attr('readonly',false);
        jQuery('.change-email').toggleClass('personal-data-active')
        jQuery('.success-email').removeClass('personal-data-active')
    });
    jQuery('.success-email').click(function(e){
        jQuery('.personal-email__box').attr('readonly', true);
        jQuery('.success-email').toggleClass('personal-data-active')
        jQuery('.change-email').removeClass('personal-data-active')
    });
    jQuery('.change-phone').click(function(e){
        jQuery('.personal-phone__box').attr('readonly',false);
        jQuery('.change-phone').toggleClass('personal-data-active')
        jQuery('.success-phone').removeClass('personal-data-active')
    });
    jQuery('.success-phone').click(function(e){
        jQuery('.personal-phone__box').attr('readonly', true);
        jQuery('.success-phone').toggleClass('personal-data-active')
        jQuery('.change-phone').removeClass('personal-data-active')
    });
    jQuery('.change-telegram').click(function(e){
        jQuery('.personal-telegram__box').attr('readonly',false);
        jQuery('.change-telegram').toggleClass('personal-data-active')
        jQuery('.success-telegram').removeClass('personal-data-active')
    });
    jQuery('.success-telegram').click(function(e){
        jQuery('.personal-telegram__box').attr('readonly', true);
        jQuery('.success-telegram').toggleClass('personal-data-active')
        jQuery('.change-telegram').removeClass('personal-data-active')
    });
    jQuery('.change-discord').click(function(e){
        jQuery('.personal-discord__box').attr('readonly',false);
        jQuery('.change-discord').toggleClass('personal-data-active')
        jQuery('.success-discord').removeClass('personal-data-active')
    });
    jQuery('.success-discord').click(function(e){
        jQuery('.personal-discord__box').attr('readonly', true);
        jQuery('.success-discord').toggleClass('personal-data-active')
        jQuery('.change-discord').removeClass('personal-data-active')
    });
    jQuery('.change-password').click(function(e){
        jQuery('.personal-information__change-password').toggleClass('change-password__active')
        jQuery('.personal-password').toggleClass('personal-information__change-password')
    });
    jQuery('.password-save__button').click(function(e){
        jQuery('.personal-information__change-password').removeClass('change-password__active')
        jQuery('.personal-password').removeClass('personal-information__change-password')
    });
    jQuery('.gmail-auth').click(function(e){
        jQuery('.authorization-form__sign-in-gmail').toggleClass('authorization_form-active',true)
        jQuery('.authorization-form__registration').removeClass('authorization_form-active',false)
        jQuery('.authorization-form__sign-in').removeClass('authorization_form-active',false)
    });
    jQuery('.sign-in-auth').click(function(e){
        jQuery('.authorization-form__sign-in').toggleClass('authorization_form-active',true)
        jQuery('.authorization-form__registration').removeClass('authorization_form-active',false)
        jQuery('.authorization-form__sign-in-gmail').removeClass('authorization_form-active',false)
    });
    jQuery('.reg-auth').click(function(e){
        jQuery('.authorization-form__registration').toggleClass('authorization_form-active',true)
        jQuery('.authorization-form__sign-in-gmail').removeClass('authorization_form-active',false)
        jQuery('.authorization-form__sign-in').removeClass('authorization_form-active',false)
    });
    jQuery('.guarantees-answers__units-answer').click(function(e){
        jQuery(this).toggleClass('answer-activate')
    });
    jQuery('.guarantees-answers__button').click(function(e){
        jQuery('.guarantees-answers__button').removeClass('guarantees-answers__button-active')
        jQuery(this).toggleClass('guarantees-answers__button-active')
    });
    jQuery('.guarantees-payment').click(function(e){
        jQuery('.guarantees-payment__answer').toggleClass('guarantees-answers__units-active')
        jQuery('.guarantees-services__answer').removeClass('guarantees-answers__units-active')
        jQuery('.guarantees-safety__answer').removeClass('guarantees-answers__units-active')
    });
    jQuery('.guarantees-services').click(function(e){
        jQuery('.guarantees-services__answer').toggleClass('guarantees-answers__units-active')
        jQuery('.guarantees-payment__answer').removeClass('guarantees-answers__units-active')
        jQuery('.guarantees-safety__answer').removeClass('guarantees-answers__units-active')
    });
    jQuery('.guarantees-safety').click(function(e){
        jQuery('.guarantees-safety__answer').toggleClass('guarantees-answers__units-active')
        jQuery('.guarantees-payment__answer').removeClass('guarantees-answers__units-active')
        jQuery('.guarantees-services__answer').removeClass('guarantees-answers__units-active')
    });
    jQuery('.burger-mini').click(function(e){
        jQuery('.burger-mini').toggleClass('burger-mini__active');
        jQuery('.sidebar').toggleClass('sidebar__active');
        jQuery('.main-navbar__first-child__dropdown').toggleClass('main-navbar__first-child__dropdown__active');
        jQuery('.dropdown-button-mini').toggleClass('dropdown-button-mini__active');
    });
    jQuery('.chsposition').click(function(e){
        jQuery(this).toggleClass('chsposition-active');
    });
    jQuery('.chsgame').click(function(e){
        jQuery(this).toggleClass('chsgame-active');
    });
    jQuery('.sidebar__logo_language__us').click(function(e){
        jQuery(this).toggleClass('active__language',true);
        jQuery(this).toggleClass('active__language__us',true);
        jQuery(this).removeClass('inactive__language',true);
        jQuery('.sidebar__logo_language__eu').toggleClass('inactive__language',true)
        jQuery('.sidebar__logo_language__eu').removeClass('active__language',true)
    });
    jQuery('.sidebar__logo_language__eu').click(function(e){
        jQuery(this).toggleClass('active__language',true);
        jQuery(this).removeClass('inactive__language',true);
        jQuery('.sidebar__logo_language__us').toggleClass('inactive__language',true)
        jQuery('.sidebar__logo_language__us').removeClass('active__language',true)
        jQuery('.sidebar__logo_language__us').removeClass('active__language__us',true)
    });
    jQuery('.product__region__language__us').click(function(e){
        jQuery(this).toggleClass('product__region__active__language',true);
        jQuery(this).toggleClass('product__region__active__language__us',true);
        jQuery(this).removeClass('product__region__inactive__language',true);
        jQuery('.product__region__language__eu').toggleClass('product__region__inactive__language',true)
        jQuery('.product__region__language__eu').removeClass('product__region__active__language',true)
    });
    jQuery('.product__region__language__eu').click(function(e){
        jQuery(this).toggleClass('product__region__active__language',true);
        jQuery(this).removeClass('inactive__language',true);
        jQuery('.product__region__language__us').toggleClass('product__region__inactive__language',true)
        jQuery('.product__region__language__us').removeClass('product__region__active__language',true)
        jQuery('.product__region__language__us').removeClass('product__region__active__language__us',true)
    });
    jQuery('.product-quantity-dropbtn').click(function(e){
        jQuery('.product-quantity-dropdown-content').toggleClass('product-quantity-dropdown-content__active');
    });
    jQuery('.description__drop-down__button').click(function(e){
        jQuery('.description__drop-down__text').toggleClass('description__drop-down__text-active')
        jQuery('.description__drop-down__button-arrow').toggleClass('description__drop-down__button-arrow-active')
    })
    jQuery('.game__slider,.review__slider').click(function(e){
        jQuery(this).toggleClass('disable');
        window.setTimeout(function() {
            jQuery('.game__slider').removeClass('disable');
            jQuery('.review__slider').removeClass('disable');
        }, 1000 /* 0.5 sec */);
    });
    jQuery('.error__button').click(function(e){
        jQuery('.error').css('display', 'none');
    })
    jQuery('.success__button').click(function(e){
        jQuery('.success').css('display', 'none');
    })
});
jQuery(document).ready(function() {
    jQuery('.down').click(function () {
        var jQueryinput = jQuery(this).parent().find('input');
        var count = parseInt(jQueryinput.val()) - 1;
        count = count < 1 ? 1 : count;
        jQueryinput.val(count);
        jQueryinput.change();
        return false;
    });
    jQuery('.up').click(function () {
        var jQueryinput = jQuery(this).parent().find('input');
        jQueryinput.val(parseInt(jQueryinput.val()) + 1);
        jQueryinput.change();
        return false;
    });
});
jQuery(document).ready(function() {
    jQuery('.welcome__button__link').click(function(e){
        e.preventDefault()
        jQuery('.welcome__text__block-hidden').slideToggle();
    })
});
jQuery(document).ready(function() {
    jQuery('.sidebar-menu-arrow').click(function(e){
        e.preventDefault()
        jQuery(this).parents('.sidebar__services__elements').find('> ul').slideToggle();
    })
});
jQuery(document).ready(function(){
    jQuery(".main-navbar__first-child__dropdown").hover(function () {
        jQuery(".dropdown-content").stop().slideDown(300);
    }, function(){
        jQuery(".dropdown-content").stop().slideUp(300);
    });
});
jQuery(document).ready(function(){
    jQuery('.clear-button').on('click', function(){
        jQuery(this).parent().find('input[type="radio"]').prop('checked', false);
        jQuery('.product-card__text__options__unit__first').find('input[type="checkbox"]').prop('checked', false);
    });
});
jQuery(document).ready(function(){
    jQuery(window).scroll(function(e) {
        if(jQuery(window).scrollTop()>=200) {
            jQuery('.scroller').fadeIn(200);
        } else {
            jQuery('.scroller').fadeOut(200);
        }
    });
    jQuery('.scroller-block').click(function(e){
        window.scrollTo({top: 0,behavior: 'smooth'});
    })
})

