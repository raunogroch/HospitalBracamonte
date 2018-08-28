$(document).ready(function() {
    var speed = 3000;
    var height_slider = $(window).height()-$('.navbar').height()+'px';
    $('#gallery li img').height(height_slider);
    $('#slider').css('margin-top',$('.navbar').height()+'px');
    $('#mask-gallery, #gallery li').width($('#slider').width());
    $('#gallery').width($('#slider').width() * $('#gallery li').length);
    $('#mask-gallery, #gallery li, #mask-excerpt, #excerpt li').height($('#slider').height());
    var run = setInterval('newsscoller(0)', speed);
    $('#gallery li:first, #excerpt li:first').addClass('selected');
    $('#btn-play').click(function () {
        run = setInterval('newsscoller(0)', speed);
        return true;
    });



    $('.commentary').css('padding-top', $('#excerpt li').height()/2-30+'px');

});

function newsscoller(prev) {
    var current_image = $('#gallery li.selected').length ? $('#gallery li.selected') : $('#gallery li:first');
    var current_excerpt = $('#excerpt li.selected').length ? $('#excerpt li.selected') : $('#excerpt li:first');
    if (prev) {
        var next_image = (current_image.prev().length) ? current_image.prev() : $('#gallery li:last');
        var next_excerpt = (current_excerpt.prev().length) ? current_excerpt.prev() : $('#excerpt li:last');
    } else {
        var next_image = (current_image.next().length) ? current_image.next() : $('#gallery li:first');
        var next_excerpt = (current_excerpt.next().length) ? current_excerpt.next() : $('#excerpt li:first');
    }
    $('#excerpt li, #gallery li').removeClass('selected');
    next_image.addClass('selected');
    next_excerpt.addClass('selected');
    $('#mask-gallery').scrollTo(next_image, 800);
    $('#mask-excerpt').scrollTo(next_excerpt, 800);
}