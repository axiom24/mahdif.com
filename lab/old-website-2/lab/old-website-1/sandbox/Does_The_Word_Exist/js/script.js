window.onload = function() {

	function findTheUserName(){
		if (document.getElementById('txtWriteHere').value === "..."){
			alert("Type something for FUCK's sake");
		}else{
			var smartAssUserName = prompt('What is your name?', 'Asshole');
			var allText = document.getElementById('txtWriteHere').value;
			var userNameContArray = [];

			for (i = 0; i < allText.length; i++){
				if (allText[i] === smartAssUserName[0]){
					for (var j = i; j < (smartAssUserName.length + i) ; j++){
						userNameContArray.push(allText[j]);
					}
				}
			}

			if (userNameContArray.length === 0){
				alert("FUCK! I can't find it.");
			}else{
				alert(userNameContArray.join('') + " is found in the paragraph");
			}
		}
	};

	document.getElementById('buttonFindMyName').onclick = function(){
		findTheUserName();
	};

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
	}

	document.getElementById('txtWriteHere').onkeyup = function() {
		document.getElementById('titleKeyCountNum').innerHTML = lettersCountNumb() + " out of 140";
		percentValue = (lettersCountNumb() / 140 * 100) + "%";
		document.getElementById('headProgress').style.width = percentValue;
	};


};