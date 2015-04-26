// Run the code after the DOm is ready, this shit is same as $(ready) in JQuery
document.addEventListener("DOMContentLoaded", function() {
	
	document.getElementById('crazyMfAvatar').onclick = function(evt) {
		evt.preventDefault();
		alert("You're going to be the next");
	}

	document.getElementById('customText').onfocus = function() {
		if (document.getElementById('customText').value === "Type your hilarious shit here...") {
			document.getElementById('customText').value = "";
		}
		document.getElementById('customText').setAttribute("style", "font-style: normal; background: #fff; color: #222; text-align:center; border-color: #0082cc;");
	};

	document.getElementById('customText').onblur = function() {
		if (document.getElementById('customText').value === "") {
			document.getElementById('customText').value = "Type your hilarious shit here...";
		};
		document.getElementById('customText').setAttribute("style", "border-color: #e7e7e7;");
	}

	document.getElementById('moreOptionsLink').onclick = function(evt) {
		// evt.preventDefault(); //This link shall not do the default shit it usually does...
		if (document.getElementById('moreOptionsLink').innerHTML === "This is not enough? <strong>Customize the text</strong>") {
			document.getElementById('customText').className = "opacityFull";
			document.getElementById('superCrazyButton').className = "crazyMFfButton extraMFbutton opacityFull";
			document.getElementById('moreOptionsLink').innerHTML = "Oh forget it I'll just go with the default, <strong>I'm a lazy-ass motherfucker</strong>";
			document.getElementById('normalCrazyButton').className = "opacityZero crazyMFfButton";
			document.getElementById('moreOptionsLink').href = "#moreOptionsLink";
		} else {
			document.getElementById('customText').className = "opacityZero";
			document.getElementById('superCrazyButton').className = "crazyMFfButton extraMFbutton opacityZero";
			document.getElementById('moreOptionsLink').innerHTML = "This is not enough? <strong>Customize the text</strong>";
			document.getElementById('normalCrazyButton').className = "crazyMFfButton opacityFull";
			document.getElementById('moreOptionsLink').href = "#";
			alert('sucker.');
		}
	};

	// When clicking on the first button
	document.getElementById('normalCrazyButton').onclick = function() {
		localStorage.setItem("cusTextKey", "")
		window.open("crazyMotherfucker.html","_self");
	}

	// Pass the shitty text to the other page biatch
	function passShittyText() {
		cusTextValue = document.getElementById('customText').value;
		localStorage.setItem("cusTextKey", cusTextValue);
		window.open("crazyMotherfucker.html", "_self");
	}

	// When clicking on the second button
	document.getElementById('superCrazyButton').onclick = function() {
		passShittyText();
	}
	// Twitter shit
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	document.getElementById('customText').onkeypress = function(evt) {
		console.log(evt);
		if (evt.keyCode === 13) {
			passShittyText();
		}
	}

	// Facebook poop
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=144205785784973&version=v2.0";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


	// Google analytics SHIT
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-3416596-11', 'crazymotherfucker.me');
	  ga('send', 'pageview');

});
