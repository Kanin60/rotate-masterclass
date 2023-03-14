

$(function(){
    $('.knap-one').click(function () {
        console.log("hey");
        $('.kasse1').toggleClass('kasse-rotate');
      
    });

    $('.knap2').click(function () {
        $('.kasse2').toggleClass('kasse-rotate');
      
    });

    $('.knap3').click(function () {
        $('.kasse3').toggleClass('kasse-rotate');
      
    });
})