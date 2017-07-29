	//Story and beginning questions
	var intro = document.getElementById("intro");
	var story1 = document.getElementById("story1");
	var story2 = document.getElementById("story2");
	var story3 = document.getElementById("story3");
	var story4 = document.getElementById("story4");
	var story5 = document.getElementById("story5");
	//First set of options
	var jumpEl = document.getElementById("jump");
	var waitEl = document.getElementById("wait");
	//Second set of options
	var jump2El = document.getElementById("jump2");
	var joinHimEl = document.getElementById("joinHim")
	//Third set of options
	var standStillEl = document.getElementById("standStill");
	var run = document.getElementById("run");
	//Fourth set of options
	var escape = document.getElementById("escape");
	var smash = document.getElementById("smash");
	//Misc
	var end = document.getElementById("end");
	var endButton = document.getElementById("endButton");
	var restart = document.getElementById("restart");

	//Beginning
	
	confirm("Ready to play?");
 
	var age = prompt("How old are you?");
	if (age >= 18) {
        intro.textContent = "Time to start!";
    } else if(age < 18) {
        intro.textContent = "You're less than 18?  Be careful out there ... ";
    }
	  else{
		alert("Shy are we? Well you can play if you want to.");
	}
	
	story1.textContent= "You wake up on a small stone pillar. You look around and see nothing but blackness. A pale grey light shines on you from an unkown source. You here faint screams. What do you do?";
	
	//Initial State
	
	jump2El.disabled = true;
	joinHimEl.disabled = true;
	standStill.disabled = true;
	run.disabled = true;
	escape.disabled = true;
	smash.disabled = true;
	endButton.disabled =true;
	restart.disabled =true;
	
	jumpEl.style.display="block";
	waitEl.style.display="block"
	jump2El.style.display= "none";
	joinHimEl.style.display= "none";
	standStill.style.display= "none";
	run.style.display= "none";
	escape.style.display= "none";
	smash.style.display= "none";
	endButton.style.display= "none";
	restart.style.display= "none";
	
	//Button set 1
	
	var onJumpClick = function() {
		alert("You leap off the cold stone pillar into the endless abyss. You never hit anything you just keep falling. Eventually you die of thirst but your corpse continues to fall until it eventually disintegrates.")
		alert("You died. The game will restart once you hit OK")
		location.reload();
	}
	jumpEl.addEventListener("click",onJumpClick);
	
	
	var onWaitClick = function() {
		story2.textContent = "After waiting for what seems forever a white light shines from above. A deep voice beckons to you.'Would you like to join me?' What do you do?"
		jumpEl.disabled = true;
		jump2El.disabled = false;
		joinHimEl.disabled = false;
		waitEl.disabled = true;
		jump2El.style.display= "block";
		joinHimEl.style.display= "block";
	}
	waitEl.addEventListener("click", onWaitClick);
	
	//Button set 2
	
	var onJump2Click = function () {
		alert("'That's too bad' said the voice. You leap off the cold stone pillar into the endless abyss. You never hit anything you just keep falling. Eventually you die of thirst but your corpse continues to fall until it eventually disintegrates.")
		alert("You died. The game will restart once you hit OK")
		location.reload();
	}
	jump2El.addEventListener("click", onJump2Click);
	
	var onJoinClick = function () {
		story3.textContent = "In a whoosh of air you are lifted up and onto a white plain. You look back but can not see where you came from. At first you see nothing but then a dark cloud grows over you. 'Thank you for joining me' it said evily. What do you do?"
		jump2El.disabled = true;
		standStill.disabled = false;
		run.disabled = false;
		joinHimEl.disabled = true;
		standStill.style.display= "block";
		run.style.display= "block";
	}
	joinHimEl.addEventListener("click", onJoinClick);
	
	//Button set 3
	
	var onStillClick = function () {
		alert("The cloud lowers onto you. At first nothing happens. However after a few seconds your skin starts to burn and bubble. Within a minute you evaporate inside the cloud where you join the other totured souls for eternity.")
		alert("You died. The game will restart once you hit OK")
		location.reload();
	}
	standStillEl.addEventListener("click", onStillClick);
	
	var onRunClick = function (){
		story4.textContent = "You sprint away from the cloud. It whispers for you 'Come back I just want to give you a hug.' You run into a white wall and fall back. Stunned you stand up and see the cloud rapidly approaching. What do you do?"
		standStillEl.disabled = true;
		escape.disabled= false;
		smash.disabled= false;
		run.disabled= true;
		escape.style.display= "block";
		smash.style.display= "block";
	}
	run.addEventListener("click", onRunClick);
	
	//Button set 4
	
	var onEscapeClick = function () {
		alert("You attempt to run to the right but you tire out and the cloud falls on you. Your skin begins to melt as your soul joins the others inside the dark cloud.");
		alert("You died. The game will restart once you hit OK")
		location.reload();
	}
	escape.addEventListener("click", onEscapeClick);
	
	var onSmashClick = function () {
		story5.textContent= "You charge at the wall at full speed and suprisingly it breaks. You jerk up in your bed your heart racing. 'It was only a dream.' You sigh in relief.";
		escape.disabled= true;
		smash.disabled= true;
		endButton.disabled= false;
		restart.disabled= false;
		endButton.style.display= "block";
		restart.style.display= "block";
	}
	smash.addEventListener("click", onSmashClick);
	
	//Ending
	
	var onEndClick = function () {
		end.textContent= "Thanks for playing! First game I have made using my limited programming knowledge. Feedback is appreciated."
		endButton.disabled= true;
	}
	endButton.addEventListener("click", onEndClick);
	
	var onRestartClick = function () {
		location.reload();
	}
	restart.addEventListener("click", onRestartClick);