$(document).ready(function () {

// $('input[placeholder], textarea[placeholder]').placeholder();
//     $('select').each(function(){
//         $(this).siblings('p').text( $(this).children('option:selected').text() );
//     });
//     $('select').change(function(){
//         $(this).siblings('p').text( $(this).children('option:selected').text() );
//     });
//     //последовательное появление блоков
//     $( document ).ready(function() {
//
//         $(function() {
//             $('.s1-txt').each(function(i) {
//                 $(this).delay((i++) * 1500).fadeTo(3000, 1); })
//         });
//
//     });

    //скрол к форме

    $('.button-g').on('click',function(){
        var el = $(this).attr('data-href');
        console.log(el);
        $('html, body').animate({
            scrollTop: $(el).offset().top}, 500);
        return false;
    });
    $('.bxsliderr').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        pager: false,
        controls: true
    });



// Задание счетчика
//     $('#defaultCountdown').countdown({until: '+0d +15h 15m ',format: 'HMS'});
//     $('#defaultCountdown1').countdown({until: '+0d +15h 15m ',format: 'HMS'});


    // function inputlen(A,B) {
    //     // Проверка на введенные данные
    //     if (A < 2 || $("#" + B).val() == $("#" + B).attr('placeholder')) {
    //         $("#" + B).addClass("error");
    //         return false;
    //     }
    //     else {
    //         $("#" + B).removeClass("error");
    //         return true;
    //     }
    // }
// Валидация и отправка формы

});

$(function () {
// countdownStart
    var storageCountdownReset = "countdownResetFlexum",
        storageCountdownTime = "countdownTimeFlexum",
        countdownResetTimeVal = 41,
        nowDateTime = new Date().getTime(),
        countdownReset = localStorage.getItem(storageCountdownReset);
    if (countdownReset == null) {
        localStorage.setItem(storageCountdownReset, nowDateTime)
    } else {
        if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
            var countdownTime = (new Date).getTime() + 24e5;
            localStorage.setItem(storageCountdownTime, countdownTime);
            localStorage.setItem(storageCountdownReset, nowDateTime);
        }
    }

    if (localStorage.getItem(storageCountdownTime)) {
        var countdownTime = localStorage.getItem(storageCountdownTime);
    } else {
        countdownTime = (new Date).getTime() + 24e5;
    }

    $(".countdown").countdown(countdownTime, function (s) {
        $(this).html(s.strftime('' +
            '<div class="countdown__item hour">%H</div>' +
            '<div class="countdown__item minute">%M</div>' +
            '<div class="countdown__item second">%S</div>'
        ));
    }).on('update.countdown', function (e) {
        countdownTime = e.finalDate.getTime();
        localStorage.setItem(storageCountdownTime, countdownTime);
    }).on('finish.countdown', function (e) {
        $('.countdown').countdown('stop');
    });
// countdownEnd
})