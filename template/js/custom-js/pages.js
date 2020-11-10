// Add your custom JavaScript for storefront pages here.
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