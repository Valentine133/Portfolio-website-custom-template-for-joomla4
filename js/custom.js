window.addEventListener('DOMContentLoaded', () => {
  // Handling a click on the navigation button 
  let barsBtn = document.querySelector('.btn-bars'),
      navigationBars = document.querySelector('.header__navigation .navbar-nav');

  barsBtn.addEventListener('click', () => {
      if (!barsBtn.classList.contains('open')) {
          barsBtn.classList.add('open');
          navigationBars.classList.add('open');
      } else {
          barsBtn.classList.remove('open');
          navigationBars.classList.remove('open');
      }
  });

  let header = document.querySelector('#page-header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
      header.classList.add('scroller');
    } else {
      header.classList.remove('scroller');
    }
  });

  // Parralax - Rellax 
  // Also can pass in optional settings block
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    // init Masonry
    var $grid = $('.grid').masonry({
      // options...
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

  /**
     * Lazysizes
     * https://github.com/aFarkas/lazysizes
     */
    document.addEventListener("lazybeforeunveil", (el) => {
        let bg = el.target.getAttribute("data-bg");
        if (bg) {
            el.target.style.backgroundImage = "url(" + bg + ")";
        }
    });

  // ================================================
  // Swiper
  // Initialization
  // http://idangero.us/swiper/
  // ================================================
  // var swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //     threshold: 10,
  //     loop: true,
  //     autoplay: {
  //         delay: 5000,
  //     },
  //     navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //     },
  // });

  var slideItemSwiperSettings = {
    speed: 800,
    spaceBetween: 15,
    slidesPerView: 1,
    autoHeight: true,
    // loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true,
    //   dynamicBullets: true,
    // },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    // autoplay: {
    //   delay: 9000,
    // }
  },
  sliderItemSwiper = new Swiper('.sliderItem-swiper', slideItemSwiperSettings);

  // ============================================
  // AOS 
  // Animation of the appearance of objects when scrolling 
  // ============================================
  AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 70, // offset (in px) from the original trigger point
      delay: 300, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

  // ================================================
  // jQuery fancyBox.
  // http://fancyapps.com/fancybox/3/
  // Initialization
  // <a class="fancybox" data-fancybox="group1" href="big.jpg"><img src="small.jpg" alt="" /></a>
  // ================================================
  $(".fancybox").fancybox({
      loop: true,
      infobar: true
  });

  // Animating SVG text 
  $(function() {
    $('.intro').addClass('go');

    $('.reload').click(function() {
      $('.intro').removeClass('go').delay(0).queue(function(next) {
        $('.intro').addClass('go');
        next();
      });

    });
  });

  // ==================================== 
  /* ---- particles.js container ---- */
  // ==================================== 
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, update;
  count_particles = document.querySelector(".js-count-particles");
  // update = function () {
  //   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
  //     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  //   }
  //   requestAnimationFrame(update);
  // };
  // requestAnimationFrame(update);


  // Random construction of letters 
  setTimeout(function() {
    window.onload = play();
  }, 3000);

  function play() {
    var blue = "#2980b9";
    var l = Snap("#logo");
    var p = l.select("path");
    l.clear();
    l.append(p);

    p.attr({
      fill: blue,
      stroke: "#0066CC"
    });

    function textIteration() {
      // modify this one line below, and see the result !
      var logoTitle = "Front End Developer";
      var logoTitle2 = "Web designer";
      var logoTitle3 = "Illustrator from Ukraine";
      var logoRandom = "";
      var logoTitleContainer = l.text(0, "70%", "");
      var possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}-+*/|}{[]~\\":;?/.><=+-_)(*&^><=+-_)(*&^%$#@!)}/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}-+*/|}{[]~\\":;?/.><=+-_)(*&^';
      logoTitleContainer.attr({
        fontSize: 200,
        fontFamily: "Ubuntu",
        fill: "#ffffff",
        fontWeight: "500"
      });

      function generateRandomTitle(i, logoRandom) {
        setTimeout(function () {
          logoTitleContainer.attr({ text: logoRandom });
        }, i * 150);
      }

      for (var i = 0; i < logoTitle.length + 1; i++) {
        logoRandom = logoTitle.substr(0, i);
        for (var j = i; j < logoTitle.length; j++) {
          logoRandom += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        generateRandomTitle(i, logoRandom);
        logoRandom = "";
      }

      setTimeout(function () {
      for (var i = 0; i < logoTitle2.length + 1; i++) {
        logoRandom = logoTitle2.substr(0, i);
        for (var j = i; j < logoTitle2.length; j++) {
          logoRandom += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        generateRandomTitle(i, logoRandom);
        logoRandom = "";
      }
      }, 6000);

      setTimeout(function () {
      for (var i = 0; i < logoTitle3.length + 1; i++) {
        logoRandom = logoTitle3.substr(0, i);
        for (var j = i; j < logoTitle3.length; j++) {
          logoRandom += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
        generateRandomTitle(i, logoRandom);
        logoRandom = "";
      }
      }, 11000);
    }
    textIteration();
  }

  setInterval(function() {
    play();
  }, 19000);

  // Skill Bars / Bar Fill Animation 
  (function () {
    var square = document.querySelector('.skills-wrapper');

    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.skills');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }

        if (entry.isIntersecting) {
          entrySquare.classList.add('animation');
          return;
        }

        entrySquare.classList.remove('animation');
      });
    });

    observer.observe(square);
  })();

  // init Isotope
  var $grid = $('.grid').isotope({
    // options
    itemSelector: ".grid__item"
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $(this).addClass("active").siblings().removeClass("active");
  });


  // Change Scroll down to Scroll up
  function replaceText() {
    let scrollDown = document.querySelector('.scroll-text h5');
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 80) {
      scrollDown.innerHTML = 'scroll up';
      window.addEventListener('scroll', replaceText);
    } else {
      scrollDown.innerHTML = 'scroll down'; 
    }
  }

  window.addEventListener('scroll', replaceText); 
});