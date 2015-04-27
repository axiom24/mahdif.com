window.onload = function() {

	var buttonAskQuestonDefaultName = document.getElementById('buttonAskQuestion').value;
	var textQuestionDefaultName = document.getElementById('textQuestion').value;

	document.getElementsByTagName('form')[0].onsubmit = function(evt) {
	 	evt.preventDefault(); /* prevent the form from submitting */
	};

	var stupidQuestionAnswers = ["It is certain",
								"It is decidedly so",
								"Without a doubt",
								"Yes definitely",
								"You may rely on it",
								"As I see it, yes",
								"Most likely",
								"Outlook good",
								"Yes",
								"Signs point to yes",
								"Ask again later",
								"Better not tell you now",
								"Cannot predict now",
								"Concentrate and ask again",
								"Don't count on it",
								"My reply is no",
								"My sources say no",
								"Outlook not so good",
								"Very doubtful",
								"No",
								"What the fuck man!? Are you seriously asking a ball?"];
	function randomizedNumba(minNum, maxNum)
	{
		return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
	};

	document.getElementById('textQuestion').onclick = function()
	{
		if (document.getElementById('textQuestion').value == textQuestionDefaultName){
			document.getElementById('textQuestion').value = "";
		}
	};

	document.getElementById('buttonAskQuestion').onclick = function()
	{
		if (document.getElementById('textQuestion').value == "")
		{
			alert('Do not leave it empty. Type a question in the fucking box, Please.');
			document.getElementById('textQuestion').focus();
		}

		else if (document.getElementById('textQuestion').value == textQuestionDefaultName)
		{
			alert("Don't be a lazy ass jerk, Type in a real question, Please.");
		}

		else
		{
			if (document.getElementById('buttonAskQuestion').value == buttonAskQuestonDefaultName)
			{
				document.getElementById('textAnswer').innerHTML = stupidQuestionAnswers[randomizedNumba(0,20)];
				document.getElementById('textAnswer').style.display = "block";
				document.getElementById('ballCont').className += " ballContSmaller";
				document.getElementById('buttonAskQuestion').value = "Ask another question!";
				document.getElementById('textQuestion').style.display = "none";
				document.getElementById('buttonAskQuestion').focus();
			}
			else
			{
				document.getElementById('buttonAskQuestion').value = buttonAskQuestonDefaultName;
				document.getElementById('textQuestion').style.display = "block";
				document.getElementById('textQuestion').value = "";
				document.getElementById('ballCont').className = "ballCont";
				document.getElementById('textAnswer').style.display = "none";
				document.getElementById('textQuestion').focus();
			}
		}

	}	
}