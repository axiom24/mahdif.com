$(function (){

  var dribbbleAccessToken = "0b8815bfe87b8aaa2f189a08851c23485e1a521c14034330bc29a69c6b7edb37";
  var imageSource;

  $.ajax({
    type: 'GET',
    url: 'https://api.dribbble.com/v1/shots?list=animated&access_token=' + dribbbleAccessToken,
    success: function(dribbbleShotsList) {
      $.each(dribbbleShotsList, function(i, dribbbleShot){
        if(dribbbleShot.images.hidpi){ // if there is a hi resolution image please display it.
          imageSource = dribbbleShot.images.hidpi;
        } else { // else, show me the normal resolution image.
          imageSource = dribbbleShot.images.normal;
        }
        $('#kharaList').append("<li><img src='"+imageSource+"'></li>");
      });
    }
  });

});
