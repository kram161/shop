$(function(){
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
    $('.game__slider').slick({
        swipeToSlide: true,
        infinite:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableHeight: true,
        variableWidth: true,
        prevArrow: prvArrow,
        nextArrow: nxtArrow,
    })

    var slick = $('.game__slider').slick("getSlick");
    var getLeftOld = slick.getLeft;
    slick.getLeft = function(slideIndex) {
        var that = this;
        //console.log('getLeft '+slideIndex);
        var left = getLeftOld.call(this, slideIndex);

        if(direction === 1) {
            //if (!$(that.$slides[slideIndex]).hasClass('slick-current')) {
            direction = 0;
            //console.log('updated');
            left += 110;
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
    $('.hot-deals__cards__slider').slick({
        swipeToSlide: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:3,
        variableHeight: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: nxtArrow,
    });
    $('.review__slider').slick({
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll:1,
        variableHeight: true,
        variableWidth: true,
        prevArrow: prvArrow,
        nextArrow: nxtArrow,
    })
    var slick = $('.review__slider').slick("getSlick");
    var getLeftOld = slick.getLeft;
    slick.getLeft = function(slideIndex) {
        var that = this;
        //console.log('getLeft '+slideIndex);
        var left = getLeftOld.call(this, slideIndex);

        if(direction === 1) {
            //if (!$(that.$slides[slideIndex]).hasClass('slick-current')) {
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
})
