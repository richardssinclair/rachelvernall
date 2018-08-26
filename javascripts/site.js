$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

$('.galleryFilter button span').click(function(){
    $('.galleryFilter button span').removeClass("active");
    $(this).addClass("active");
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        showArrows: true,
        wrapping: false,
        onShown: function() {
            console.log('Checking our the events huh?');
        },
        onNavigate: function(direction, itemIndex) {
            console.log('Navigating '+direction+'. Current item: '+itemIndex);
        }
    });
});
});
