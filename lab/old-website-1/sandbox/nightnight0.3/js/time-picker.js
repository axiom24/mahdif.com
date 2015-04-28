var ampm="AM";


$(document).ready(function(){
  $("#HoursArrowUp").click(function(){
   var strHour = document.getElementById("hour").value;
   //alert (strHour);
   strHour++;
   if(strHour==13){
   strHour=strHour-12;
   }
   if(strHour<10){
    $('#hour').val("0"+strHour);
  }
   else{
    $('#hour').val(strHour);
   }
   
  });
});

$(document).ready(function(){
  $("#HoursArrowDown").click(function(){
   var strHour = document.getElementById("hour").value;
   //alert (strHour);
   strHour --;
   if(strHour ==0){
   strHour =strHour +12;
   }
   if(strHour<10){
    $('#hour').val("0"+strHour);
  }
   else{
    $('#hour').val(strHour);
   }
  });
});

$(document).ready(function(){
  $("#MinutesArrowUp").click(function(){
   var strMin = document.getElementById("minute").value;
   for(var i=0;i<5;i++){
    strMin++;
   }
   
   if(strMin==65){
   strMin=strMin-65;
   }
   if(strMin<10){
    $('#minute').val("0"+strMin);
  }
   else{
    $('#minute').val(strMin);
   }
   
  });
});

$(document).ready(function(){
  $("#MinutesArrowDown").click(function(){
   var strMin = document.getElementById("minute").value;
   for(var i=0;i<5;i++){
    strMin--;
   }
   if(strMin== -5){
   strMin=strMin+65;
   }
   if(strMin<10){
    $('#minute').val("0"+strMin);
  }
   else{
    $('#minute').val(strMin);
   }
  });
});


$(document).ready(function(){
$("#pm").click(function(){

  ampm="PM";
  //alert (ampm);
  $("#pm").css({"background":"url(images/pmIcon_Light.svg) #006699 center no-repeat", "background-size":"30%"});
  $("#am").css({"background":"url(images/amIcon_Dark.svg) #c1ccd5 center no-repeat", "background-size":"45%"});


  }); 
});


$(document).ready(function(){
$("#am").click(function(){

  ampm="AM";
  //alert (ampm);

  $("#pm").css({"background":"url(images/pmIcon_Dark.svg) #c1ccd5 center no-repeat", "background-size":"30%"});
  $("#am").css({"background":"url(images/amIcon_Light.svg) #006699 center no-repeat", "background-size":"45%"});

  }); 
});







