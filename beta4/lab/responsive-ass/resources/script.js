// Run the code after the DOm is ready, this shit is same as $(ready) in JQuery
document.addEventListener("DOMContentLoaded", function() {

	document.getElementById('tryNowButton').onclick = function() {
		document.body.style.backgroundColor = "#fff";
		document.getElementById('headCont').style.display = "none";
		document.getElementById('footerCont').setAttribute("style", "bottom: -50px; opacity:0;")
		document.getElementById('photoshopImage').setAttribute("style", "margin-top: 50px; opacity:1;");
		// alert('fuck');
	};

	document.getElementById('photoshopImage').onclick = function() {
		document.getElementById('photoshopImage').setAttribute("style", "display: none;");
		document.getElementById('fuckingErrorMessage').setAttribute("style", "display: block;");
	};
	window.onresize = function(evt){
		// console.log(evt);
		// alert(evt.srcElement.innerWidth);
		if (evt.srcElement.innerWidth < 1200) {
			// document.getElementById('fuckingErrorMessage').setAttribute("style", "display: none");
			location.reload();
		};
	};
	

	// Google Shit
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-3416596-7', 'mahdif.com');
	  ga('send', 'pageview');

});
