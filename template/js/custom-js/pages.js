// Add your custom JavaScript for storefront pages here.
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
$(document).ready(function(){
    $('body').addClass('loaded');
})
if($('.page--home').length){
    //mosaico principal
    if(isMobile){
        
    }else{
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2) > .banner').appendTo('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)');
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').remove();
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)').toggleClass('col-lg-4 col-lg-auto');
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').toggleClass('col-lg-4 col-lg-auto');
        
    }
    //blocos categorias
    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) .col-12').attr('class','col-12 col-md-auto px-1 py-1');
    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) .row').addClass('justify-content-center align-items-center mx-0');

    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) a').each(function(){
        let title = $(this).find('img').attr('alt');
        $(this).append('<label class="floating-title">'+ title +'</label>');
    });

    $('#alpix .banners-grid').each(function(){
        if($(this).find('.col-12').length == 3){
            $(this).addClass('mosaico-footer');
            let i = $('<div class="row align-items-bottom"><div class="col-12 col-md-6">'+ getHTML($(this).find('.col-12:nth-child(1) .banner'))+'</div><div class="col-12 col-md-6">'+ getHTML($(this).find('.col-12:nth-child(2) .banner'))+''+ getHTML($(this).find('.col-12:nth-child(3) .banner'))+'</div></div>');
            $(this).find('.row').empty().append(i);
        }
    })
    
}


$(document).ready(function(){
    if($('.product-card').length){
        $('#alpix .product-card__name, #alpix .product_list_adjust').equalHeights();
    }
    $('#alpix .header__search-input').keyup(function(){
        $('body .search__input').val($(this).val()).[0].dispatchEvent(new Event('input'));
    });

    $('body').click(function(e){
        if($(e.target).closest('.header__search').length == 0){
            $('#instant-search .search__status .close').click();
        }
    });

    
    
});

function getHTML(oObj){
    return $('<div></div>').append($(oObj)).html();
}






