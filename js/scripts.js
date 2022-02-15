function initiaPopupSlider() {
   $('.lp_thumb_1_slider_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: '.lp_thumb_1_slider_miniature'
  });
  $('.lp_thumb_1_slider_miniature').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.lp_thumb_1_slider_big',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    // responsive: [
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 4,
    //       vertical: false
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       vertical: false
    //     }
    //   }
    // ]
  }); 
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).on("load", function() {
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
});

$(document).scroll(function() {
});

$(document).ready(function() {


  $('.lp_slider_1').not(".slick-initialized").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    appendArrows: $("#sl_1_arrows"),
    prevArrow: '<button class="slick-prev lp_slick_arrow" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next lp_slick_arrow" aria-label="Next" type="button"></button>',
    // responsive: [
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 4,
    //       vertical: false
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       vertical: false
    //     }
    //   }
    // ]
  });


  

  $(".dr_title").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dr");
    if(!parent.hasClass("active")) {
      if(parent.closest(".dr.active").length == 0) {
        $(".dr").removeClass("active");
      }
      parent.addClass("active");
    } else {
      parent.removeClass("active");
    }
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27) {
      $(".dr").removeClass("active");
    }
  });

  $(document).mouseup(function(e) {
    hide_element = $(".dr");
    if (!hide_element.is(e.target)
        && hide_element.has(e.target).length === 0) {
        hide_element.removeClass("active");
      }
  });


  $(document).on("click", "[data-popup-link]",  function(e) {
    e.preventDefault();
    popupName = $(this).attr("data-popup-link");
    div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    topCoord = $(document).scrollTop();
    $("body").addClass("fixed");
    $("body").css({
        "top" :  -1 * topCoord + "px",
        "padding-right" : scrollWidth + "px"
    });
    $(".popup_bg").fadeIn(300);
    $("[data-popup = '"+ popupName +"']").fadeIn(300);
    initiaPopupSlider();
  });
  $(document).on("click", ".lp_close_popup, .popup_bg", function(e) {
    e.preventDefault();
    curTop = $("body").css("top");
    curTop = Math.abs(parseInt(curTop, 10));
    $("body").removeClass("fixed");
    if (curTop !== 0) {
        $("html").scrollTop(curTop);
    }
    $("body").attr("style", "");
    $("[data-popup]").fadeOut(300);
    $(".popup_bg").fadeOut(300);
  });
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27 && $("body").hasClass("fixed")) {
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").removeClass("fixed");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").attr("style", "");      
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    }
  });
  $(document).on("mouseup", function(e) {
    if($(".popup").is(":visible")) {
      e.preventDefault();
      hide_element = $(".popup_content");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          curTop = $("body").css("top");
          curTop = Math.abs(parseInt(curTop, 10));
          $("body").removeClass("fixed");
          if (curTop !== 0) {
              $("html").scrollTop(curTop);
          }
          $("body").attr("style", "");    
          $(".popup_bg").fadeOut(300);
          $("[data-popup]").fadeOut(300);
      }
    }
  });

  // -------

  $(".checkout_list p").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".checkout_dr");
    val = $(this).text();
    parent.find(".checkout_val p").text(val);
    parent.find("input[type='hidden']").val(val);
    parent.removeClass("active");
  });

  // --------

  $('.lp_slider_2').not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    fade: true,
    prevArrow: '<button class="slick-prev lp_slick_arrow" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next lp_slick_arrow" aria-label="Next" type="button"></button>'
  });

  //--------

  $('.lp_slider_3').not(".slick-initialized").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    variableWidth: true,
    appendArrows: $("#sl_2_arrows"),
    prevArrow: '<button class="slick-prev lp_slick_arrow" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next lp_slick_arrow" aria-label="Next" type="button"></button>',
    // responsive: [
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 4,
    //       vertical: false
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       vertical: false
    //     }
    //   }
    // ]
  });

  $('.lp_slider_4').not(".slick-initialized").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1200,
    variableWidth: true,
    appendArrows: $("#sl_4_arrows"),
    prevArrow: '<button class="slick-prev lp_slick_arrow" aria-label="Previous" type="button"></button>',
    nextArrow: '<button class="slick-next lp_slick_arrow" aria-label="Next" type="button"></button>',
    // responsive: [
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 4,
    //       vertical: false
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       vertical: false
    //     }
    //   }
    // ]
  });

  //--------

  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
        $(".lp_main_nav a").removeClass("active");
        $(this).addClass("active");
        $('html, body').stop().animate({
          'scrollTop': $(hrefAttr).offset().top+2
        }, 500);
      }
  });

});