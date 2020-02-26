$(document).ready(() => {
    $('#arrowBack').click(function () {
        $('ul > li:first')
            .prev()
            .end()
            .appendTo('ul');
    });
    $('#arrowForward').click(function () {
        $('ul > li:last')
            .prev()
            .end()
            .prependTo('ul');
    });
});