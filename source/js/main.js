
var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() {
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.typewriter').text(type);
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }

    }, 90);
}());


$('.vmsw__what__title--wrap').click(function(){

    var target = $(this).data('target');
    console.log(target);
    console.log(this);

    if(target){
        $('.vmsw__what__info').filter(target).toggle('hide');
        $('.vmsw__what__title').filter(target).toggle('hide');
    }

});
$('.vmsw__what__info__wrap').click(function(){

    var target = $(this).data('target');
    console.log(target);
    console.log(this);

    if(target){
        $('.vmsw__what__info').filter(target).toggle('hide');
        $('.vmsw__what__title').filter(target).toggle('hide');
    }
});

window.onload = function(){
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

