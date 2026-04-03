/* ============================================
   Blue. — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Sticky nav shadow on scroll ---
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  // --- Mobile menu toggle ---
  var toggle = document.querySelector('.nav__toggle');
  var mobileMenu = document.querySelector('.nav__mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('is-open');
    });

    // Close mobile menu when clicking a link
    var mobileLinks = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
      });
    }
  }

  // --- FAQ accordion ---
  var faqItems = document.querySelectorAll('.faq__question');
  for (var j = 0; j < faqItems.length; j++) {
    faqItems[j].addEventListener('click', function () {
      var item = this.closest('.faq__item');
      var isOpen = item.classList.contains('is-open');

      // Close all
      var allItems = document.querySelectorAll('.faq__item');
      for (var k = 0; k < allItems.length; k++) {
        allItems[k].classList.remove('is-open');
        allItems[k].querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      }

      // Open clicked (if it wasn't already open)
      if (!isOpen) {
        item.classList.add('is-open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // --- Contact form handling ---
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Simulate submission (replace with real endpoint)
      setTimeout(function () {
        btn.textContent = 'Message sent';
        btn.style.backgroundColor = '#5DCAA5';

        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }, 1000);
    });
  }

})();
