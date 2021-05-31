/* Слайдер */

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 2000,

  autoplay: {
    delay: 10000,
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


/* Табы и Бургер */

document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('.work__step__btn').forEach(function(workStepBtn) {
    workStepBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work__block').forEach(function(workBlock) {
        workBlock.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelector('#header__burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

})


/* Аккордеон */

$(function() {
  $( "#accordion" ).accordion({
      active: false,
      collapsible: true
  } );
});


/* Доступность аккордеона по нажатию на Tab */

$(function(event, ui) {
  $('.faq__description:not(:last-child)').attr('tabIndex', '0');
});








