var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// ==========
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}


// ============slider 1915

$(document).ready(function(){
  $('.customer-logos').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  dots: false,
  pauseOnHover: false,
  prevArrow: '<i class="slick-prev fas fa-angle-left"></i>',
  nextArrow: '<i class="slick-next fas fa-angle-right"></i>',
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 2
    }
  }]
  });
});