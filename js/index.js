$(function(){
    $('.ban figure').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.slick-next').hide();
    $('.slick-prev').hide();

    $('.game button').on('click',load);

    function load(){
        location.href="game.html";
    }

});