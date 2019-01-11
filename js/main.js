// MyBurgerMenu 🍔
$('.burger-menu').click(function () {
  $(this).add('.main-nav').toggleClass('active');
});

// Smooth
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  let encre = this.hash;
  $('html, body').animate({
    scrollTop: $(encre).offset().top - $('.main-nav').outerHeight()
  }, '800');
  $('.burger-menu').removeClass('active');
  $('.main-nav').removeClass('active');
});


// scroll top

let btn = $('.bt-top');

if ($(window).scrollTop() > 300) {
  btn.addClass('show');
} else {
  btn.removeClass('show');
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// scroll side

let scroll = $('.scroll');

if ($(window).scrollTop() > 150) {
  scroll.addClass('side');
  
} else {
  scroll.removeClass('side');
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 150) {
    scroll.addClass('side');
  } else {
    scroll.removeClass('side');
  }
});


//easy reveal

let windowHeight = $(window).height();

function appear() {
  $(".revealable").each(function () {
    var fromTop = $(this).offset().top;
    var windowScroll = $(window).scrollTop();
    if ((windowScroll + (windowHeight - 100)) >= fromTop) {
      $(this).addClass('revealed');
    }
  });
}
appear();
$(window).on('scroll', function () {
  appear();
})

// translate effect
let columns = $('.column');

/*if ($(window).scrollTop() > $('header').outerHeight()) {
  columns.addClass('translate');
} else {
  columns.removeClass('translate');
}*/

$(window).scroll(function () {
  if ($(window).scrollTop() > ($('header').outerHeight()) / 2) {
    columns.addClass('translate');
  } else {
    columns.removeClass('translate');
  }
});