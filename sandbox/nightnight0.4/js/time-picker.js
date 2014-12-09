
var ampm="AM";
var ampmSet="AM";

function addZero(num)
{
       (String(num).length < 2) ? num = String("0" + num) :  num = String(num);
       return num;
}

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
   
   if(strMin==60){
   strMin=strMin-60;
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
   strMin=strMin+60;
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
  ampmSet="PM";
  //alert (ampmSet);
  $("#pm").css({"background":"url(images/pmIcon_Light.svg) #006699 center no-repeat", "background-size":"30%"});
  $("#am").css({"background":"url(images/amIcon_Dark.svg) #c1ccd5 center no-repeat", "background-size":"45%"});
	

  }); 
});


$(document).ready(function(){
$("#am").click(function(){

	ampm="AM";
    //alert (ampm);
	ampmSet="AM";
	//alert (ampmSet);
  $("#pm").css({"background":"url(images/pmIcon_Dark.svg) #c1ccd5 center no-repeat", "background-size":"30%"});
  $("#am").css({"background":"url(images/amIcon_Light.svg) #006699 center no-repeat", "background-size":"45%"});
	
  }); 
});




//to calculate the time



$(document).ready(function(){
$("#SexyOrangeButton").click(function(){

//Calculating the 4th cycle "4.5 hrs"
	//alert(ampm);
	var strHourCalc = (document.getElementById("hour").value);
    var strMincalc = document.getElementById("minute").value;
	

   
   strHourCalc=strHourCalc*60;
	//alert (strHourCalc);
	//alert (strMincalc);
	
	//to get the hour of time after deducting 4.5 hours for the last cycle of sleep
	//to get an integer 
	var timeFourCalc=(parseInt(strHourCalc , 10) + parseInt(strMincalc, 10))-270;
	var timeFourHour = (Math.floor(timeFourCalc/60));
	//to take it as a number not a string
	timeFourHour=parseInt(timeFourHour , 10);
	timeFourHourAmPm=timeFourHour;
	
	//if(timeFourHour<10){
		//timeFourHour="0"+timeFourHour;
	//}
	if(timeFourHour<0){
	timeFourHour=timeFourHour+12;
		if(ampm=="PM"){
		ampm="AM";
		}
		else{ampm="PM";}
	}
	
	
	
	var timeFourMin=timeFourCalc%60;
	//to take it as a number not a string
	timeFourMin=parseInt(timeFourMin, 10);
	if(timeFourMin<0){
	timeFourMin=timeFourMin+60;
		if(timeFourHourAmPm>0){
			if(ampm=="PM"){
			ampm="AM";
			}
			else{ampm="PM";}
		}
	}
	//to check if the hour = "0" and replace it by 12
	timeFourCheck=timeFourHour;
	if(timeFourCheck=="00"){timeFourCheck=12;}
	//document.getElementById('time1').innerHTML="<b>"+timeFourHour+"</b>"+"0"+":"+"0"+timeFourMin;
	document.getElementById('time4').innerHTML="<div class='ResultTime fl'><b>"+addZero(timeFourCheck)+"</b>:"+addZero(timeFourMin)+"</div><div class='Result"+ampm+"Icon fl'  ></div>";
	
	//alert (timeFourHour+":"+timeFourMin+ampm);
	
	
	//Calculating the 3rd cycle "1.5 hrs"
	
	var timeThreeCalc=((timeFourHour*60) + timeFourMin)-90;
	var timeThreeHour = (Math.floor(timeThreeCalc/60));
	//to take it as a number not a string
	timeThreeHour=parseInt(timeThreeHour , 10);
	timeThreeHourAmPm=timeThreeHour;
	if(timeThreeHour<0){
	timeThreeHour=timeThreeHour+12;
		if(ampm=="PM"){
		ampm="AM";
		}
		else{ampm="PM";}
	}
	
	
	var timeThreeMin=timeThreeCalc%60;
	//to take it as a number not a string
	timeThreeMin=parseInt(timeThreeMin, 10);
	if(timeThreeMin<0){
	timeThreeMin=timeThreeMin+60;
		if(timeThreeHourAmPm>0){
			if(ampm=="PM"){
			ampm="AM";
			}
			else{ampm="PM";}
		}
	}

//to check if the hour = "0" and replace it by 12
	timeThreeCheck=timeThreeHour;
	if(timeThreeCheck=="00"){timeThreeCheck=12;}
	//alert (timeThreeHour+":"+timeThreeMin+ampm);
	document.getElementById('time3').innerHTML="<div class='ResultTime fl'><b>"+addZero(timeThreeCheck)+"</b>:"+addZero(timeThreeMin)+"</div><div class='Result"+ampm+"Icon fl'  ></div>";
	
	
	
	//Calculating the 2nd cycle "1.5 hrs"
	
	var timeTwoCalc=((timeThreeHour*60) + timeThreeMin)-90;
	var timeTwoHour = (Math.floor(timeTwoCalc/60));
	//to take it as a number not a string
	timeTwoHour=parseInt(timeTwoHour , 10);
	timeTwoHourAmPm=timeTwoHour;
	if(timeTwoHour<0){
	timeTwoHour=timeTwoHour+12;
		if(ampm=="PM"){
		ampm="AM";
		}
		else{ampm="PM";}
	}

	
	var timeTwoMin=timeTwoCalc%60;
	//to take it as a number not a string
	timeTwoMin=parseInt(timeTwoMin, 10);
	if(timeTwoMin<0){
	timeTwoMin=timeTwoMin+60;
		if(timeTwoHourAmPm>0){
			if(ampm=="PM"){
			ampm="AM";
			}
			else{ampm="PM";}
		}
	}
	//to check if the hour = "0" and replace it by 12
	timeTwoCheck=timeTwoHour;
	if(timeTwoCheck=="00"){timeTwoCheck=12;}
	//alert (timeTwoHour+":"+timeTwoMin+ampm);
	document.getElementById('time2').innerHTML="<div class='ResultTime fl'><b>"+addZero(timeTwoCheck)+"</b>:"+addZero(timeTwoMin)+"</div><div class='Result"+ampm+"Icon fl'  ></div>";
	
	//Calculating the 1st cycle "1.5 hrs"
	
	var timeOneCalc=((timeTwoHour*60) + timeTwoMin)-90;
	var timeOneHour = (Math.floor(timeOneCalc/60));
	//to take it as a number not a string
	timeOneHour=parseInt(timeOneHour , 10);
	timeOneHourAmPm=timeOneHour;
	if(timeOneHour<0){
	timeOneHour=timeOneHour+12;
		if(ampm=="PM"){
		ampm="AM";
		}
		else{ampm="PM";}
	}
	
	var timeOneMin=timeOneCalc%60;
	//to take it as a number not a string
	timeOneMin=parseInt(timeOneMin, 10);
	if(timeOneMin<0){
	timeOneMin=timeOneMin+60;
		if(timeOneHourAmPm>0){
			if(ampm=="PM"){
			ampm="AM";
			}
			else{ampm="PM";}
		}
	}
	//to check if the hour = "0" and replace it by 12
	timeOneCheck=timeOneHour;
	if(timeOneCheck=="00"){timeOneCheck=12;}
	//alert (timeOneHour+":"+timeOneMin+ampm);
	document.getElementById('time1').innerHTML="<div class='ResultTime fl'><b>"+addZero(timeOneCheck)+"</b>:"+addZero(timeOneMin)+"</div><div class='Result"+ampm+"Icon fl'  ></div>";
 	$(".ResultArrowCont").css({"display":"block"});
 	$(".ResultCont").css({"display":"inline-block"});
 	$(".SexyOrangeButton").css({"display":"none"});
 	$(".SexyGreenButton").css({"display":"block"});
 	$(".ResultNote").css({"display":"block"});
 	
	ampm=ampmSet;

	$(".SexyGreenButton").click(function()
	{
	 	$(".ResultArrowCont").css({"display":"none"});
	 	$(".ResultCont").css({"display":"none"});
	 	$(".SexyOrangeButton").css({"display":"block"});
	 	$(".SexyGreenButton").css({"display":"none"});
	 	$(".ResultNote").css({"display":"none"});
 	}); // end of $("#SexyOrangeButton").click(function()
  }); 
});


