
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
  let xp = 42, yp = 25;
  var loop = setInterval(function(){
      xp += (mouseX - xp) / 12;
      yp += (mouseY - yp) / 12;
      follower.css({left:xp, top:yp});
  }, 6);
  