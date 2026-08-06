

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

    
})();

document.addEventListener("DOMContentLoaded", function () {
        
  const accordions = document.querySelectorAll('.accordion-collapse');

  accordions.forEach(item => {
      item.addEventListener('show.bs.collapse', function () {

          accordions.forEach(other => {
              if (other !== item && other.classList.contains('show')) {
                  new bootstrap.Collapse(other, {
                      toggle: false
                  }).hide();
              }
          });

      });
  });

});

document.querySelectorAll('.contents-box a').forEach(link => {
  link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
          window.scrollTo({
              top: target.offsetTop - 20,
              behavior: 'smooth'
          });
      }
  });
});

const moduleTabs = document.querySelectorAll(".module-tab");
    const moduleContents = document.querySelectorAll(".module-content");

    moduleTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-target");

            moduleTabs.forEach(btn => btn.classList.remove("active"));
            moduleContents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });

    const swiper1 = new Swiper(".swiper-slider1", {
      // Optional parameters
      centeredSlides: false,
      grabCursor: true,
      freeMode: false,
      loop: false,
      mousewheel: false,
      keyboard: {
          enabled: true
      },

      // Enabled autoplay mode
      autoplay: {
          delay: 3000,
          disableOnInteraction: false
      },

      // If we need pagination
      pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true
      },

      // If we need navigation
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },

      // Responsive breakpoints
      breakpoints: {
          320: { // For mobile view
              slidesPerView: 2,
              spaceBetween: 20,
          },
          500: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1024: {
              slidesPerView: 6,
              spaceBetween: 20
          }
      }
  });






/*====================================
    OUR SOLUTIONS TABS
=====================================*/

document.addEventListener("DOMContentLoaded", function () {

  const tabs = document.querySelectorAll(".solution-tabs .nav-link");
  const panes = document.querySelectorAll(".tab-pane-custom");
  const contentArea = document.querySelector(".tab-content-area");

  tabs.forEach(tab => {

      tab.addEventListener("click", function () {

          // Remove active class
          tabs.forEach(btn => btn.classList.remove("active"));
          panes.forEach(item => item.classList.remove("active"));

          // Active tab
          this.classList.add("active");

          // Show content
          const target = this.getAttribute("data-tab");

          const activePane = document.getElementById(target);

          if (activePane) {

              activePane.classList.add("active");

              // Reset Scroll
              contentArea.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });

          }

      });

  });

});



var testimonialSwiper = new Swiper(".testimonialSwiper", {

    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        576: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 2,
            spaceBetween: 30
        }

    }

});


