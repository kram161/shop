jQuery(document).ready(function(){
    let prvArrow = '<span class="prev__arrow">' +
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n \t viewBox="0 0 404.258 404.258" style="enable-background:new 0 0 404.258 404.258;" xml:space="preserve">\n' +
        '<polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "/>\n' +
        '</svg>' +
        '</span>';
    let nxtArrow = '<span class="next__arrow">' +
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
        '\t viewBox="0 0 404.258 404.258" style="enable-background:new 0 0 404.258 404.258;" xml:space="preserve">\n' +
        '<polygon points="138.331,0 114.331,18 252.427,202.129 114.331,386.258 138.331,404.258 289.927,202.129 "/>\n' +
        '</svg>' +
        '</span>'
    jQuery('.hot-deals__cards__slider').slick({
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        variableHeight: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: nxtArrow,
    });
    jQuery('.review__slider').slick({
        swipeToSlide: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll:1,
        variableHeight: true,
        variableWidth: true,
        prevArrow: prvArrow,
        nextArrow: nxtArrow,
    })
    var slick = jQuery('.review__slider').slick("getSlick");
    var getLeftOld = slick.getLeft;
    slick.getLeft = function(slideIndex) {
        var that = this;
        //console.log('getLeft '+slideIndex);
        var left = getLeftOld.call(this, slideIndex);

        if(direction === 1) {
            //if (!jQuery(that.jQueryslides[slideIndex]).hasClass('slick-current')) {
            direction = 0;
            //console.log('updated');
            left += 115;
        }
        //console.log(left);
        return left;
    };
    var direction = 0;
    var slideHandlerOld = slick.slideHandler;
    slick.slideHandler = function(index, sync, dontAnimate) {
        var that = this;
        //console.log('slideHandler '+index);
        //console.log('Current '+this.currentSlide);
        if (this.currentSlide < index || (this.currentSlide === 4 && index === 0)) {
            direction = 1;
        }
        return slideHandlerOld.call(this, index, sync, dontAnimate);
    };

    jQuery('.product-card__image__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-card__image__nav'
    });
    jQuery('.product-card__image__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-card__image__slider',
        dots: false,
        focusOnSelect: true,
        nextArrow: nxtArrow,
        prevArrow: false,
        responsive:[
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    nextArrow:false,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    jQuery('.product-footer__slider').slick({
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:1,
        variableHeight: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: nxtArrow,
    });
    jQuery('.guarantees-review__slider').slick({
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        variableHeight: true,
        variableWidth: true,
        prevArrow: prvArrow,
        nextArrow: nxtArrow,
    });

})

