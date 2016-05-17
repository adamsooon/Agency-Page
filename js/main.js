$(document).ready(function () {
    function label() {
        var a = $('#email').val();
        if (a.length > 0) {
            $('#email+label').addClass('valid');
        } else {
            $('#email+label').removeClass('valid');
        }
    }
    setInterval(label, 500);
});