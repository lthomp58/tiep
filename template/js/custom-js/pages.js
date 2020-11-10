// Add your custom JavaScript for storefront pages here.
if($('.page--home').length){
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2) > .banner').appendTo('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)');
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').remove();
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)').toggleClass('col-lg-4 col-lg-auto');
    $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').toggleClass('col-lg-4 col-lg-auto');

}