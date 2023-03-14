
let slide = document.querySelector('swiper-slide');
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  );

let blog = document.querySelector('.full-blog');
let blog2 = document.querySelector('.full-blog2');
function FullBlog(){
  blog.style.display='block';
}
function Close(){
  blog.style.display='none';
}

function FullBlog2(){
  blog2.style.display='block';
}
function Close2(){
  blog2.style.display='none';
}
  

var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
