$().ready(function() {

    $('#inst').load('instagram.html');
    $('#btn-inst').addClass('btn-secondary');

    $('#btn-gallery').click(function () {
        $('#btn-inst').removeClass('btn-secondary');
        $(this).addClass('btn-secondary');
        $('#inst').load('gallery.html');
        return false;
    });

    $('#btn-inst').click(function () {
        $('#btn-gallery').removeClass('btn-secondary');
        $(this).addClass('btn-secondary');
        $('#inst').load('instagram.html');
        return false;
    });
});