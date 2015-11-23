window.onload = function() {

	// var countValue = document.getElementById('counterNumb').innerHTML;
	var countValue = 30;
	document.getElementById('counterNumb').innerHTML = "00:" + countValue;

	setInterval(countDownCounter , 1000);

	function countDownCounter() {
		if (countValue > 0) {
				if (countValue < 11){
					countValue = "0" + (countValue - 1);
				} else {
					countValue = countValue - 1;
				}
			}
		else {
			//alert("Nothing is going to happen you fucking racist!");
			countValue = "30";
		}
		document.getElementById('counterNumb').innerHTML = "00:" + countValue;
		document.title = "00:" + countValue;
	}

	if (localStorage.getItem("cusTextKey") !== '') {
		document.getElementById('txtMessageBody').innerHTML = localStorage.getItem("cusTextKey");
		localStorage.setItem("cusTextKey", "");
	}

	// Google analytics SHIT
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-3416596-11', 'crazymotherfucker.me');
	  ga('send', 'pageview');

}