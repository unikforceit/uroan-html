/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
  "use strict";

  var Medi = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        this.preloader();
        this.BackgroundImage();
        this.MobileMenu();
        this.scrollTop();
        // this.Animation();
        this.NiceNumber();
        this.SidebarMenu();
        this.LimitedSlider();
        this.testimonialslide();
        this.instagramslide();
        this.logoslide();
        this.features();
        this.testimonialabout();
        this.heroslide();
        this.twocategories();
        this.indexinstagram();
        this.categoriesslide();
        // this.Niceselect();
      },
      preloader: function () {
        $(window).on("load", function () {
          $(".preloader").fadeOut("slow");
        });
      },
      BackgroundImage: function () {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")"
          );
        });
      },
      Animation: function () {
        var wow = new WOW({
          boxClass: "wow", // animated element css class (default is wow)
          animateClass: "animated", // animation css class (default is animated)
          offset: 0, // distance to the element when triggering the animation (default is 0)
          mobile: true, // trigger animations on mobile devices (default is true)
          live: true, // act on asynchronously loaded content
        });
        wow.init();
      },
      MobileMenu: function () {
        jQuery(window).on("scroll", function () {
          if (jQuery(window).scrollTop() > 100) {
            jQuery(".default-header-section").addClass("sticky-on");
          } else {
            jQuery(".default-header-section").removeClass("sticky-on");
          }
        });
        $(".open_mobile_menu").on("click", function () {
          $(".mobile_menu_wrap").toggleClass("mobile_menu_on");
        });
        $(".open_mobile_menu").on("click", function () {
          $("body").toggleClass("mobile_menu_overlay_on");
        });
        if ($(".mobile_menu li.dropdown ul").length) {
          $(".mobile_menu li.dropdown").append(
            '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
          );
          $(".mobile_menu li.dropdown .dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
          });
        }
      },
      SidebarMenu: function () {
        $("#sidemenu").on("click", function () {
          $(".sidemenu-wrap").addClass("sidebar-open");
        });
        $("#side-cart").on("click", function () {
          $(".cart-drawer").toggleClass("cart-open");
        });
        $("#sidemenu").on("click", function () {
          $(".overlay").addClass("open");
        });
        $("#search-manu").on("click", function () {
          $(".search-popup").addClass("popup");
          $(".overlay").addClass("open");
        });
        $(".overlay").on("click", function () {
          $(".sidemenu-wrap").removeClass("sidebar-open");
          $(".overlay").removeClass("open");
          $(".search-popup").removeClass("popup");
        });
      },
      Tools: function () {
        $(".menu-search button").on("click", function () {
          $('.menu-search input[type="search"]').toggleClass("search-visible");
        });

        $(".expert-doctor-img .icon").on("click", function (event) {
          event.preventDefault();
          $(".expert-doctor-img").toggleClass("social-visible");
        });

        // $(document).ready(function() {
        //     $('select').niceSelect();
        // });
      },
      LimitedSlider: function () {
        var LimitedSlider = new Swiper("#limite-slider", {
          slidesPerView: 4,
          loop: true,
          autoplay: true,
          navigation: {
            nextEl: ".uroan-button-next",
            prevEl: ".uroan-button-prev",
          },
          breakpoints: {
            360: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        });
      },
      testimonialslide: function () {
        var testimonialslide = new Swiper("#testimonial-slide", {
          slidesPerView: 1,
          loop: true,
          autoplay: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      },
      instagramslide: function () {
        var swiperinsta = new Swiper(".instagram-slide", {
          slidesPerView: 3,
          spaceBetween: 60,
          centeredSlides: true,
          loop: true,
          autoplay: true,
          breakpoints: {
            360: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
        });
      },
      logoslide: function () {
        var swiperlogo = new Swiper(".logo-slide", {
          slidesPerView: 5,
          spaceBetween: 10,
          loop: true,
          autoplay: true,
          breakpoints: {
            360: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          },
        });
      },
      categoriesslide: function () {
        var swipercate = new Swiper(".categories-slide", {
          slidesPerView: 4,
          spaceBetween: 10,
          loop: true,
          autoplay: true,
          breakpoints: {
            360: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        });
      },
      features: function () {
        var swiperfea = new Swiper(".features", {
          slidesPerView: 4,
          spaceBetween: 10,
          loop: true,
          autoplay: true,
          breakpoints: {
            360: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        });
      },
      testimonialabout: function () {
        var swiperabout = new Swiper(".testimonial-slider", {
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay: 2000,
            reverseDirection: true,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".uroan-button-next",
            prevEl: ".uroan-button-prev",
          },
          breakpoints: {
            360: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          },
        });
      },
      heroslide: function () {
       jQuery(document).ready(function(){
        var swiperhero = new Swiper(".hero-slide", {
          direction: "vertical",
          effect: "slide",
          slidesPerView: 1,
          // loop: true,
          // autoplay: {
          //   delay: 2000,
          //   reverseDirection: true,
          //   disableOnInteraction: false,
          // },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".uroan-button-next",
            prevEl: ".uroan-button-prev",
          },
        });
       });
      },
      twocategories: function () {
        var swiperfea = new Swiper(".two-categories", {
          slidesPerView: 5,
          spaceBetween: 10,
          loop: true,
          autoplay: {
            delay: 2000,
            reverseDirection: true,
            disableOnInteraction: false,
          },
          breakpoints: {
            360: {
              slidesPerView: 2,
            },
            520: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          },
        });
      },
      indexinstagram: function () {
        var swiperinsta = new Swiper(".index-two-instagram", {
          slidesPerView: 5,
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
          autoplay: true,
          breakpoints: {
            360: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          },
        });
      },
      NiceNumber: function () {
        $('input[type="number"]').niceNumber();
      },
      Niceselect: function () {
        $(document).ready(function () {
          $("select").niceSelect();
        });
      },
      Counter: function () {
        if ($(".odometer").length) {
          $(".odometer").appear();
          $(document.body).on("appear", ".odometer", function (e) {
            var odo = $(".odometer");
            odo.each(function () {
              var countNumber = $(this).attr("data-count");
              $(this).html(countNumber);
            });
            window.odometerOptions = {
              format: "d",
            };
          });
        }
      },
      MasonryGrid: function () {
        $(".grid").masonry({
          itemSelector: ".grid-item",
          columnWidth: ".grid-item",
          // percentPosition: true,
          gutter: 10,
          fitWidth: true,
        });
      },
      GoogleMap: function () {
        var mapSelector = $("#popular_map");
        if (mapSelector.length) {
          var lat = mapSelector.data("lat");
          var lon = mapSelector.data("lon");
          var zoom = mapSelector.data("zoom");
          var marker = mapSelector.data("marker");
          var info = mapSelector.data("info");
          var markerLat = mapSelector.data("mlat");
          var markerLon = mapSelector.data("mlon");
          var map = new GMaps({
            el: "#popular_map",
            lat: lat,
            lng: lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: zoom,
            height: "100%",
          });
          map.addMarker({
            lat: markerLat,
            lng: markerLon,
            icon: marker,
            infoWindow: {
              content: info,
            },
          });
        }
      },
      scrollTop: function () {
        $(window).on("scroll", function () {
          var ScrollBarPosition = $(this).scrollTop();
          if (ScrollBarPosition > 200) {
            $(".scroll-top").fadeIn();
          } else {
            $(".scroll-top").fadeOut();
          }
        });
        $(".scroll-top").on("click", function () {
          $("body,html").animate({
            scrollTop: 0,
          });
        });
      },
    },
  };
  jQuery(document).ready(function () {
    Medi.init();
  });
})(jQuery);
// product-counter
const decrementButton = document.getElementById("decrement-button");
const incrementButton = document.getElementById("increment-button");
const productCount = document.getElementById("product-count");

decrementButton.addEventListener("click", () => {
  let count = parseInt(productCount.value, 10);
  count = Math.max(count - 1, 0);
  productCount.value = count;
});

incrementButton.addEventListener("click", () => {
  let count = parseInt(productCount.value, 10);
  count = count + 1;
  productCount.value = count;
});
const slideButton = document.getElementById("slide-button");
const productImage = document.getElementById("product-image");

let currentImageIndex = 1;
const totalImages = 3;
