$(document).ready(function(){
    var imageHrefs = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg"] // массив картинок
    var imageIndex = 0;  // Счетчик, указывающий на текущую картинки
    var galleryImage = $("#gallery-image");
    while (imageIndex < imageHrefs.length-1) {
        galleryImage.attr('src', imageHrefs[imageIndex]);
        imageIndex++;
    }
    imageIndex = 0;
    galleryImage.attr('src', imageHrefs[imageIndex]);
    function image_change(){
        galleryImage.fadeOut('slow', function () {
            galleryImage.attr('src', imageHrefs[imageIndex]);
            galleryImage.on("load", function() {
                galleryImage.fadeIn('slow');
            })
        });
    }
    function right_arrow() // Открытие следующей картинки(движение вправо)
    {
        if (imageIndex < imageHrefs.length-1) imageIndex++;
        else{
            imageIndex = 0;
        }
        image_change();
    }

    function left_arrow() // Открытие предыдущей картинки(движение влево)
    {
        if (imageIndex > 0) imageIndex--;
        else{
            imageIndex = imageHrefs.length-1;
        }
        image_change();
    }

    $('#gallery-left-arrow').click(left_arrow)
    $('#gallery-right-arrow').click(right_arrow)

    $('.reservation-position').click(function(){
        $('.reservation-position').toggleClass('inactive')
        scrollLock = false;
    })
    $('.reservation-box').click(function(event){
        event.stopPropagation()
    })
    $('.reservation__button').click(function(){
        $('.reservation-position').toggleClass('inactive')
        scrollLock = true;
    })

    $('.nav-item').click(function(){
        $('#toggle').removeAttr('checked')
    })
    $('.close-box').click(function(){
        $('#toggle').removeAttr('checked')
    })
    $('.container').click(function(event){
        event.stopPropagation()
    })
    $(".slide-animation").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
    $('.play-link').click(function(){
        scrollLock = true;
        $('.body').addClass('noscroll');
        $('.video-block').slideDown('slow', function() {
            //Добавить iframe class="iframe" . Удалить width and height
            $('.video-block__position').append('<iframe class="iframe" src="https://www.youtube.com/embed/4d7ixL36oA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        })
    });
    $('.video-block').click(function(){
        scrollLock = false;
        $('.body').removeClass('noscroll');
        $('.video-block').slideUp('slow', function() {
            $('.iframe').remove();
        });
    });
    //отключаем временно ссылки в Food-menu
    $('a.food-menu__link').click(function() { return false;
    });
    $(function(){
        $(window).scroll(function() {
            if($(this).scrollTop() >= 10) {
                $('.menu-wrap').removeClass('menu-wrap__inactive');
                $('.menu-wrap').addClass('menu-wrap__active');
                }
            else{
                $('.menu-wrap').addClass('menu-wrap__inactive');
                $('.menu-wrap').removeClass('menu-wrap__active');
            }
        });
    });

    var pichrefs = ["img/menu-1.jpg","img/menu-2.jpg","img/menu-3.jpg","img/menu-4.jpg","img/menu-5.jpg","img/menu-6.jpg"] // массив картинок
    var picIndex = 0;  // Счетчик, указывающий на текущую картинки
    var galleryPic = $(".food-gallery__img");
    while (picIndex < pichrefs.length-1) {
        galleryPic.attr('src', pichrefs[picIndex]);
        picIndex++;
    }
    picIndex = 0;
    function pic_change(){
        galleryPic.fadeOut('slow', function () {
            $('.food-gallery__wrap').scrollTop(0);
            galleryPic.attr('src', pichrefs[picIndex]);
            galleryPic.on("load", function() {
                galleryPic.fadeIn('slow');
            })
        });
    }
    function btn_right_arrow() // Открытие следующей картинки(движение вправо)
    {
        if (picIndex < pichrefs.length-1) picIndex++;
        else{
            picIndex = 0;
        }
        pic_change();
    }

    function btn_left_arrow() // Открытие предыдущей картинки(движение влево)
    {
        if (picIndex > 0) picIndex--;
        else{
            picIndex = pichrefs.length-1;
        }
        pic_change();
    }

    $('.food-gallery__left-arrow').click(btn_left_arrow)
    $('.food-gallery__right-arrow').click(btn_right_arrow)
    function openGallery(indexZ){
        $('.food-gallery__img').attr('src', "img/menu-" + indexZ++ + ".jpg");
        $('.food-gallery').addClass('food-gallery__active');
        /*$('.body').addClass('noscroll');*/
        $('.food-gallery__wrap').scrollTop(0);
        picIndex = indexZ;
        scrollLock = true;
    }
        $('.click_item-1').click(function(){
        openGallery(1);
        });
        $('.click_item-2').click(function(){
        openGallery(1);
        });
        $('.click_item-3').click(function(){
        openGallery(6);
        });
        $('.click_item-4').click(function(){
        openGallery(1);
        });
        $('.click_item-5').click(function(){
        openGallery(4);
        });
            $('.click_item-6').click(function(){
        openGallery(5);
        });
    $('.food-gallery').click(function() { 
        $('.food-gallery__img').attr('src', "");
        $('.food-gallery').removeClass('food-gallery__active');
        $('.body').removeClass('noscroll');
        scrollLock = false;
    });
    $('.food-gallery__img').click(function(event){
        event.stopPropagation()
    })
    $('.food-gallery__left-arrow').click(function(event){
        event.stopPropagation()
    })
    $('.food-gallery__right-arrow').click(function(event){
        event.stopPropagation()
    })
    var $window = $(window), previousScrollTop = 0, scrollLock = false;
        $window.scroll(function(event) {     
    if(scrollLock) {
        $window.scrollTop(previousScrollTop); 
        }
        previousScrollTop = $window.scrollTop();
    });
// Отправка заявки 
$('#form1').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form.name.value == '' || document.form.phone.value == '' ) {
        valid = false;
        return valid;
    }
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $('.js-overlay-thank-you').fadeIn();
        $(this).find('input').val('');
        $('#form1').trigger('reset');
        $('.reservation-position').toggleClass('inactive');
        scrollLock = false;
        setTimeout(function(){
              $('.js-overlay-thank-you').fadeOut();
                }, 1500);
    });
    return false;
});

$('#form2').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.forms['form2'].name.value == '' || document.forms['form2'].phone.value == '' ) {
        valid = false;
        return valid;
    }
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $('.js-overlay-thank-you').fadeIn();
        $(this).find('input').val('');
        $('#form2').trigger('reset');
        setTimeout(function(){
              $('.js-overlay-thank-you').fadeOut();
                }, 1500);
    });
    return false;
});

    // Закрыть попап «спасибо»
    $('.js-close-thank-you').click(function() { // по клику на крестик
        $('.js-overlay-thank-you').fadeOut();
    });

    $(document).mouseup(function (e) { // по клику вне попапа
        var popup = $('.popup');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-thank-you').fadeOut();
        }
    });

    // Маска ввода номера телефона (плагин maskedinput)
    $(function($){
        $('[name="phone"]').mask("+7(999) 999-9999");
    });
})
