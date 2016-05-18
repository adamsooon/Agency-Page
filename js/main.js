$(document).ready(function () {
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
    $('#email').blur(function(){
        var a = $('#email').val();
        if (a.length > 0) {
            $('#email+label').addClass('valid');
        } else {
            $('#email+label').removeClass('valid');
        }
    });
});
//Google maps
if ($('.map-wrap').length) {
$('.map-wrap').easyGoogleMaps({
    lat: 1.276816,
    lng: 103.848346,
    zoom: 13
  });
    }