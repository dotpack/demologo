$(function () {
    var $elem = $('.effect');
    var $body = $('body');
    var tmOut;

    function init() {
        if (tmOut) { 
            clearTimeout(tmOut);
            tmOut = null;
        }
        $body.removeClass('anim').addClass('on');
        $elem.removeClass('anim').removeClass('off').on('click', function () {
            destroy();
        }).ripples({
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.04,
        });        
    }

    function destroy() {
        $body.addClass('anim').removeClass('on');
        $elem.addClass('anim').addClass('off');
        tmOut = setTimeout(function () {
            $elem.ripples('destroy');
            $elem.remove();
        }, 1000);
    }

    init();
});