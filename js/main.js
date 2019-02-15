// MyBurgerMenu 🍔
$('.burger-menu').click(function () {
  $(this).add('.main-nav').toggleClass('active');
});

// Smooth
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  let encre = this.hash;
  if (encre == "#work") {
    $('html, body').animate({
      scrollTop: $(encre).offset().top
    }, '800');
  } else {
    $('html, body').animate({
      scrollTop: $(encre).offset().top - $('.main-nav').outerHeight()
    }, '800');
  }


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

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
    scroll.addClass('hidden');
  } else {
    scroll.removeClass('hidden');
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

// eye following mouse

  let mouseX = 44, mouseY = 25, limitX = 54, limitY = 24;
  $(window).mousemove(function(e){
    var offset = $('.eye_container').offset();
     mouseX = Math.min(e.pageX - offset.left, limitX);
     mouseY = Math.min(e.pageY - offset.top, limitY);
     if (mouseX < 32) mouseX = 32;
     if (mouseY < 25) mouseY = 25;
  });
  
  let follower = $("#eye_follower");
  let xp = 0, yp = 0;
  var loop = setInterval(function(){
      xp += (mouseX - xp) / 12;
      yp += (mouseY - yp) / 12;
      follower.css({left:xp, top:yp});
  }, 6);
  