$(document).ready(function () {
    if ($('.hero').length) {
        $('.hero').slick({
            dots: false
            , arrows: false
            , infinite: true
            , slidesToShow: 1
            , adaptiveHeight: true
            , autoplay: true
            , autoplaySpeed: 1000
            , fade: true
        })
    };
    /*function label() {
        var a = $('#email').val();
        if (a.length > 0) {
            $('#email+label').addClass('valid');
        } else {
            $('#email+label').removeClass('valid');
        }
    }
    setInterval(label, 500);*/
    // Newsletter form label below
    $('#email').blur(function () {
        var a = $('#email').val();
        if (a.length > 0) {
            $('#email+label').addClass('valid');
        } else {
            $('#email+label').removeClass('valid');
        }
    });
});

/* Blog */

//posts
if($('.posts-category-latests').length){
    $('#blatest').click(function(){
        $('.posts-category-latests').addClass('posts-active');
        $('.posts-category-popular,.posts-category-comments').removeClass('posts-active');
        $('.posts__latests').addClass('posts-list-active');
        $('.posts__popular,.posts__comments').removeClass('posts-list-active');
    });
}
if($('.posts-category-popular').length){
    $('#bpopular').click(function(){
        $('.posts-category-popular').addClass('posts-active');
        $('.posts-category-latests,.posts-category-comments').removeClass('posts-active');
        $('.posts__popular').addClass('posts-list-active');
        $('.posts__latests,.posts__comments').removeClass('posts-list-active');
        
    });
}
if($('.posts-category-comments').length){
    $('#bcomments').click(function(){
        $('.posts-category-comments').addClass('posts-active');
        $('.posts-category-latests,.posts-category-popular').removeClass('posts-active');
        $('.posts__comments').addClass('posts-list-active');
        $('.posts__popular,.posts__latests').removeClass('posts-list-active');
    });
}
//Google maps
if ($('.map-wrap').length) {
    $('.map-wrap').easyGoogleMaps({
        lat: 1.276816
        , lng: 103.848346
        , zoom: 13
    });
}