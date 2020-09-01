// event
$('.page-scroll').on('click',function(e){
  

    var tujuan = $(this).attr('href');

    var elementujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elementujuan.offset().top-80
    },1400,'easeOutBack');

    e.preventDefault();

});