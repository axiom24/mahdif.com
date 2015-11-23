window.onload = function() {
	function lettersCounter() {
		return document.getElementById('txtWriteHere').value.length;
	}
	
	function showCount() {
		document.getElementById('titleKeyCountNum').innerHTML = lettersCounter();
		document.getElementById
	}
	
	var setDimensions = function() {
		document.getElementById('txtAreaTwin').offsetWidth = document.getElementById('txtWriteHere').offsetWidth;
		document.getElementById('txtAreaTwin').innerHTML = document.getElementById('txtWriteHere').value;
		document.getElementById('txtWriteHere').style.height = document.getElementById('txtAreaTwin').clientHeight + 10 + "px";
	};

	document.getElementById('txtWriteHere').onkeypress = function() {
		showCount();
		setDimensions();
	};
	document.getElementById('txtWriteHere').onkeyup = function() {
		showCount();
		setDimensions();
	};

	document.getElementById('buttonValidate').onclick = function() {
	};

	document.getElementById('txtWriteHere').onclick = function() {
		if (document.getElementById('txtWriteHere').value === "...") {
			document.getElementById('txtWriteHere').value = "";
		}
	};
	
	document.getElementById('txtWriteHere').onblur = function(){
		if (document.getElementById('txtWriteHere').value === "") {
			document.getElementById('txtWriteHere').value = "...";
		}
	};

};