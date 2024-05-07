var fActive = '';
 
function filterColor(color){
 if(fActive != color){
 $('li.projects__item').filter('.'+color).slideDown();
 $('li.projects__item').filter(':not(.'+color+')').slideUp();
 fActive = color;
 }
}
 
$('.f-public').click(function(){ filterColor('public'); });
$('.f-street').click(function(){ filterColor('street'); });
$('.f-interior').click(function(){ filterColor('interior'); });
 
$('.f-all').click(function(){
 $('li.projects__item').slideDown();
 fActive = 'all';
});

$(document).ready(function(){

    $('.projects__swiper').each(function() {
        $(this).slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            dots: false,
            arrows: true,
        });
    });
});


/*btn to top*/

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          right: 0,
          behavior: 'smooth'
        });
      }
    }
  }
btnUp.addEventListener();


/*fancybox*/

Fancybox.bind('.fancybox', {});