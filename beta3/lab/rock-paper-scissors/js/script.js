window.onload = function()
{
	var WinnerName = "";
	var stupidUserChoice = "";
	var smartComputerChoice = Math.random();

	// Computer Choice [BEGIN]
	var computerChoiceFunction = function()
	{
		smartComputerChoice = Math.random();

		if (smartComputerChoice < 0.34)
		{
			smartComputerChoice = "Rock";
		}
		else if (smartComputerChoice <= 0.67)
		{
			smartComputerChoice = "Paper";
		}
		else
		{
			smartComputerChoice = "Scissors"
		}
	};
	// Computer Choice [END]

	// Compare the choices [BEGIN]
	var compareChoicesBiatch = function(Choice1, Choice2)
	{
		if (Choice1 == Choice2)
		{
			WinnerName = "Tie";
		}
		else{
		
			if (Choice1 == "Rock")
			{
				if (Choice2 == "Scissors")
				{
					WinnerName = "Computer";
				}
				else
				{
					WinnerName = "Human";
				}
			}

			if (Choice1 == "Paper")
			{
				if (Choice2 == "Rock")
				{
					WinnerName = "Computer";
				}
				else
				{
					WinnerName = "Human";
				}
			}

			if (Choice1 == "Scissors")
			{
				if (Choice2 == "Rock")
				{
					WinnerName = "Human";
				}
				else
				{
					WinnerName = "Computer";
				}
			}
		}
	};
	// Compare the choices [END]

	document.getElementsByTagName('form')[0].onsubmit = function(evt)
	{
 		evt.preventDefault(); /* prevent the form from submitting */
 	}


	
	var numberShit = 0;
	
	var countShit = function()
	{	
		numberShit = numberShit + 1
		if (numberShit == 10)
		{
			alert("WTF Man!!?? You just clicked the button " + numberShit + " times! Are you okay?");
		}
	};

	document.getElementById('buttonRock').onclick = function()
	{
		countShit();
		document.getElementById('buttonFight').style.display = "block"; //display the fight button
		document.getElementById('buttonFight').focus();
		document.getElementById("buttonRock").className = "buttonSelected";
		document.getElementById("buttonPaper").className = "buttonPaperRockScissors buttonMiddle";
		document.getElementById("buttonScissors").className = "buttonPaperRockScissors";
		stupidUserChoice = "Rock";
		computerChoiceFunction(); //Run computer result function
	};

	document.getElementById('buttonPaper').onclick = function()
	{
		countShit();
		document.getElementById('buttonFight').style.display = "block"; //display the fight button
		document.getElementById('buttonFight').focus();
		document.getElementById("buttonRock").className = "buttonPaperRockScissors";
		document.getElementById("buttonPaper").className = "buttonSelected buttonMiddle";
		document.getElementById("buttonScissors").className = "buttonPaperRockScissors";
		stupidUserChoice = "Paper";
		computerChoiceFunction(); //Run computer result function
	};

	document.getElementById('buttonScissors').onclick = function()
	{
		countShit();
		document.getElementById('buttonFight').style.display = "block"; //display the fight button
		document.getElementById('buttonFight').focus();
		document.getElementById("buttonRock").className = "buttonPaperRockScissors";
		document.getElementById("buttonPaper").className = "buttonPaperRockScissors buttonMiddle";
		document.getElementById("buttonScissors").className = "buttonSelected";
		stupidUserChoice = "Scissors";
		computerChoiceFunction(); //Run computer result function
	};

	document.getElementById('buttonFight').onclick = function()
	{
		if (document.getElementById('buttonFight').value == 'FIGHT!')
		{
			document.getElementById('buttonFight').value = 'Play Again!';
			document.getElementById('buttonFight').focus();
			document.getElementById('buttonRock').style.display = 'none';
			document.getElementById('buttonPaper').style.display = 'none';
			document.getElementById('buttonScissors').style.display = 'none';

			compareChoicesBiatch(smartComputerChoice, stupidUserChoice);

			if (WinnerName == "Tie")
			{
				document.getElementById('headTxt').innerHTML = "<b>Tie!</b><br>" + "Both you and the computer had "+
				"<b>" + stupidUserChoice + "</b>" + " You better play again";
			}

			if (WinnerName == "Computer")
			{
				document.getElementById('headTxt').innerHTML = "<b>LOSER!</b><br>" + "The <b>computer</b> choose " +
				"<b>" + smartComputerChoice + "</b>" + ", And you like a smart ass choose "+
				"<b>" + stupidUserChoice + "</b>" + " What a LOSER...";
			}

			if (WinnerName == "Human")
			{
				document.getElementById('headTxt').innerHTML = "<b>Winner!</b><br>" + "we got a badass over here!";
			}
			
		}
		else
		{
			document.getElementById('headTxt').innerHTML = 'DO YOU THINK YOU CAN WIN IT?';
			document.getElementById('buttonFight').value = 'FIGHT!';
			document.getElementById('buttonFight').style.display = "none";
			document.getElementById('buttonRock').style.display = 'block';
			document.getElementById('buttonPaper').style.display = 'block';
			document.getElementById('buttonScissors').style.display = 'block';
			document.getElementById("buttonRock").className = "buttonPaperRockScissors";
			document.getElementById("buttonPaper").className = "buttonPaperRockScissors buttonMiddle";
			document.getElementById("buttonScissors").className = "buttonPaperRockScissors";
		}

	};

};