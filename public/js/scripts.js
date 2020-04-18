/* ===================================
1. Preloader
2. Scroll to Top
3. Smooth scrool
4. Parallax
5. Reviews
6. Blog slider
7. Navigation collapse
8. Wow js
==================================== */

(function ($) {


    jQuery(document).ready(function () {

        /* ===================================
        8. Wow js
        ==================================== */

        new WOW().init();

        

        /* ===================================
        1. Preloader
        ==================================== */

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });

        $(document).ready(function(){
          $('ul li a').click(function(){
            $('li a').removeClass("active");
            $(this).addClass("active");
        });
        });

        /* ===================================
        2. Scroll to Top
        ==================================== */

        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {
                $('.return-to-top').fadeIn(200);
            } else {
                $('.return-to-top').fadeOut(200);
            }
        });
        $('.return-to-top').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
        });


            /* MAIN MENU */
            $('#main-menu > li:has(ul.sub-menu)').addClass('parent');
            $('ul.sub-menu > li:has(ul.sub-menu) > a').addClass('parent');

            $('#menu-toggle').click(function() {
                $('#main-menu').slideToggle(300);
                return false;
            });

            $(window).resize(function() {
                if ($(window).width() > 700) {
                    $('#main-menu').removeAttr('style');
                }
            });
            
        /* ===================================
        3. Smooth scrool
        ==================================== */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        // direct browser to top right away
        if (window.location.hash)
            scroll(0,0);
        // takes care of some browsers issue
        setTimeout(function(){scroll(0,0);},1);

        $(function(){
        //your current click function
        $('a.smooth-scroll').on('click',function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:$($(this).attr('href')).offset().top - 50
            },1000,'swing');
        });

        // if we have anchor on the url (calling from other page)
        if(window.location.hash){
            // smooth scroll to the anchor id
            $('html,body').animate({
                scrollTop:$(window.location.hash).offset().top - 50
                },1000,'swing');
            }
        });


        $('.js-tilt').tilt({
            scale: 1.1
        })
        
        /* ===================================
        4. Parallax
        ==================================== */

        var parallaxeffect = $(window);
        parallaxeffect.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });

        /* ===================================
        5. Reviews
        ==================================== */

        $(".review-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

        /* ===================================
        6. Blog slider
        ==================================== */

        $(".blog-slider").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });

        /* ===================================
        7. Navigation collapse
        ==================================== */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        

        $(document).ready(function(e) {
    $("#contact-form").validate({
      rules:{
            captchaField:{
                equalTo : "#captchaValue"
            }
      },
      submitHandler: function(form) {
        $( "#form-sending" ).removeClass( "hidden" );
        //var formData = new FormData($('#contact-form'));
            //data: $('#contact-form').serialize(),
        $.ajax({
            type: "POST",
            url: "sendmail/sendmail.php",
            data: new FormData(form),
            mimeType: "multipart/form-data",
            contentType: false,
            cache: false,
            processData: false,
            success : function(res){
                if (res == "success"){
                    formSuccess();
                }else{
                    formError();
                }
            },
            error : function(){
                formError();
            }
        });
        return false;
      }
     });
    function formSuccess(){
        $("#contact-form").trigger("reset");
        $( "#form-sending" ).addClass( "hidden" );
        $( "#form-success" ).removeClass( "hidden" );
    }
    function formError(){
        $( "#form-sending" ).addClass( "hidden" );
        $( "#form-error" ).removeClass( "hidden" );
    }
    
    function captcha(){
        var $rand_1 = Math.floor((Math.random() * 9) + 1);
        var $rand_2 = Math.floor((Math.random() * 9) + 1);
        var $result = $rand_1 + $rand_2;
        $('span.captcha').html($rand_1+' + '+$rand_2);
        $('input#captchaValue').val($result);
    }
    captcha();
    
});

    });

})(jQuery);
