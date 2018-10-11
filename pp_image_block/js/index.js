$(document).ready(function() {
	$('.js-product-images-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.b-image-block__slider-button--prev',
        nextArrow: '.b-image-block__slider-button--next',
	});
});