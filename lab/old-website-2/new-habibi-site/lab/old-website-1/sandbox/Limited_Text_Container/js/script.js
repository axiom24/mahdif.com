window.onload = function() {
	document.getElementById('txtWriteHere').onclick = function() {
		if (document.getElementById('txtWriteHere').value === "...") {
			document.getElementById('txtWriteHere').value = "";
		}
	};
	
	document.getElementById('txtWriteHere').onblur = function(){
		if (document.getElementById('txtWriteHere').value === ""){
			document.getElementById('txtWriteHere').value = "...";
		}
	};

	function lettersCountNumb(){
		return document.getElementById('txtWriteHere').value.length;
	};

	document.getElementById('txtWriteHere').onkeyup = function() {
			document.getElementById('titleKeyCountNum').innerHTML = (140 - lettersCountNumb()) + " letters left";
	};
};