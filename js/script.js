jQuery(document).ready(function ($){

    $('.dropdown-select').click(function(e) {
        $('.bottom__in--text .menu-dropd').toggleClass('active');
        e.preventDefault();
    });

    $('#cart').click(function(e){
        $('.product').toggleClass('product_active');
        e.preventDefault();
    })
})

  //caurosel
  let slidePosition = 0;
  const slides = document.getElementsByClassName('slider-item');
  const totalSlides = slides.length;
  const dots = document.getElementsByClassName('dots');
  const totalDot = dots.length;

  document.getElementById('caurosel_buton-prev').addEventListener("click",function () {
    movetoPrevSlide();
  });
  document.getElementById('caurosel_buton-next').addEventListener("click", function(){
    movetoNextSlide();
  });
  document.getElementById('dot-event').addEventListener("click",function () {
    moveDotSilde();
  });

  function updateSlidePosition() {
    for(let slide of slides){
      slide.classList.remove('active');
      slide.classList.add('caurosel-item--hidden');
    }
    for(let dot of dots){
      dot.classList.remove('active');
      dot.classList.add('dots-opacity');
    }
    slides[slidePosition].classList.add('active');
    dots[slidePosition].classList.add('active');
  }
  function moveDotSilde(){
    if(slidePosition === totalDot - 1){
      slidePosition = 0;
    }else{
      slidePosition++;
    }
    updateSlidePosition()
  }
  function movetoNextSlide() {
      if(slidePosition === totalSlides - 1){
          slidePosition = 0;
      }else{
          slidePosition++;
      }
      updateSlidePosition()
  }
  function movetoPrevSlide() {
      if(slidePosition === 0){
          slidePosition = totalSlides - 1;
      }else{
          slidePosition--;
      }
      updateSlidePosition()
  }