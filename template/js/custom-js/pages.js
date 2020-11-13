// Add your custom JavaScript for storefront pages here.
/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

if($('.page--home').length){
    //mosaico principal
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2) > .banner').appendTo('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)');
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').remove();
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)').toggleClass('col-lg-4 col-lg-auto');
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').toggleClass('col-lg-4 col-lg-auto');

    //blocos categorias
    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) .col-12').attr('class','col-12 col-md-auto px-1 py-1');
    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) .row').addClass('justify-content-center align-items-center mx-0');

    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) a').each(function(){
        let title = $(this).find('img').attr('alt');
        $(this).append('<label class="floating-title">'+ title +'</label>');
    });
}

if($('.product-card').length){
    $(document).ready(function(){
        $('#alpix .product-card__name').equalHeights();
    });
}
