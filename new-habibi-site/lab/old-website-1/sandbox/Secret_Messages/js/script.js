window.onload = function() {
	document.getElementsByTagName('form')[0].onsubmit = function(evt) {
		evt.preventDefault();
		// console.log(evt);
	}
	// Textbox focus state
	document.getElementById('txtName').onfocus = function() {
		if (document.getElementById('txtName').value === "What's your name?"){
			document.getElementById('txtName').value = "";
		}
		document.getElementById('mainCont').style.marginTop = "50px";
		document.getElementById('btnSeeMessage').style.marginTop = "35px";
		document.getElementById('txtName').style.borderBottom = "solid 4px #00cccc";
		document.getElementById('txtName').style.font = "400 24px 'Open Sans','Helvetica Neue', 'Helvetica', Arial";
		document.getElementById('txtName').style.color = "#222";
	};

	// Textbox blur state
	document.getElementById('txtName').onblur = function() {
		if (document.getElementById('txtName').value === "") {
			document.getElementById('txtName').value = "What's your name?";
			document.getElementById('txtName').style.font = "300 italic 24px 'Open Sans','Helvetica Neue', 'Helvetica', Arial";
			document.getElementById('txtName').style.color = "#cecece";
			document.getElementById('btnSeeMessage').style.display = "none";
		}
		// document.getElementById('mainCont').style.marginTop = "250px";
		document.getElementById('txtName').style.borderBottom = "solid 2px #cecece";
	};

	document.getElementById('txtName').onkeyup = function() {
		if (!(document.getElementById('txtName').value === "")){
			document.getElementById('btnSeeMessage').style.display = "block";
		}
	};

	document.getElementById('btnSeeMessage').onclick = function() {
		if (document.getElementById('txtName').value === "Mahdi") {
			alert("OMG! You know my masters name! \n I'm going to take you to my masters place...")
		}
	}

};