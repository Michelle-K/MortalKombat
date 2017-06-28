$(document).ready(function() {


	// gets the link for the theme song to be played in the background
	 var audioElement = document.createElement('audio');
	 audioElement.autoplay = true;
	 audioElement.loop = true;
     audioElement.setAttribute('src', 'sounds/themeSong.mp3');



//List of Players
var player1 = {
	name: "Goro",
	health: 100,
	attack: 1,
	imgURL: "gifs/goro-win.gif",
	play : function() {
		return "<p>Your fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};

var player2 = {
	name: "Sub Zero",
	health: 110,
	attack: 2, 
	imgURL: "gifs/subzero-win.gif",
	play : function() {
		return "<p>Your fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};
var player3 = {
	name: "Mileena",
	health: 120,
	attack: 3,
	imgURL: "gifs/mileena-win.gif",
	play : function() {
		return "<p>Your fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};
var player4 = {
	name: "Scorpion",
	health: 130,
	attack: 4,
	imgURL: "gifs/scorpion-win.gif",
	play : function() {
		return "<p>Your fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};

//List of Enemy
var enemy1 = {
	name: "Goro",
	health: 100,
	attack: 0.2,
	imgURL: "gifs/goro-win.gif",
	play : function() {
		return "<p>Enemy fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};

var enemy2 = {
	name: "Sub Zero",
	health: 110,
	attack: 0.5,
	imgURL: "gifs/subzero-main-crop.gif",
	play : function() {
		return "<p>Enemy fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};
var enemy3 = {
	name: "Mileena",
	health: 120,
	attack: 0.8,
	imgURL: "gifs/mileena-main.gif",
	play : function() {
		return "<p>Enemy fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};
var enemy4 = {
	name: "Scorpion",
	health: 130,
	attack: 1,
	imgURL: "gifs/scorpion-main.gif",
	play : function() {
		return "<p>Enemy fighter: " + this.name + "</p> <p>Health: " + this.health + "</p>";
	}
};



var userPlayer;
var userHealth= 0;
var enemy;
var enemyHealth= 0;
var theString;

// var findPlayer = function(theString) {
// 	if (theString === "player1") {
// 		userPlayer = player1;
// 	}
// 	else if (theString === "player2") {
// 		userPlayer = player2;
// 	}
// 	else if (theString === "player3") {
// 		userPlayer = player3;
// 	}
// 	else if (theString === "player4") {
// 		userPlayer = player4;
// 	}
// };


// $(".players").on("click", function() {
// 	theString = $(this).attr("id");
// 	findPlayer(theString);
// 	console.log(userPlayer);

// });


// User Selects their player
$("#player1").on("click",function(){
	userPlayer = player1;
	console.log(userPlayer);
	$("#player1").remove();
	$("#player2").hide();
	$("#player3").hide();
	$("#player4").hide();
	$("#enemy2").css("display", "inline-block");
	$("#enemy3").css("display", "inline-block");
	$("#enemy4").css("display", "inline-block");
	$("#choice1").hide();
	$("#choice2").show();
	$("#stage1").prepend('<img src="gifs/goro-fight.gif" alt="goro" />');
});

$("#player2").on("click",function(){
	$("#player2").remove();
	userPlayer = player2;
	console.log(userPlayer);
	$("#player1").hide();
	$("#player3").hide();
	$("#player4").hide();
	$("#enemy1").css("display", "inline-block");
	$("#enemy3").css("display", "inline-block");
	$("#enemy4").css("display", "inline-block");
	$("#choice1").hide();
	$("#choice2").show();
	$("#stage1").prepend('<img src="gifs/subzero-fight.gif" alt="subzero" />');
});

$("#player3").on("click",function(){
	$("#player3").remove();
	userPlayer = player3;
	console.log(userPlayer);
	$("#player2").hide();
	$("#player1").hide();
	$("#player4").hide();
	$("#enemy2").css("display", "inline-block");
	$("#enemy1").css("display", "inline-block");
	$("#enemy4").css("display", "inline-block");
	$("#choice1").hide();
	$("#choice2").show();
	$("#stage1").prepend('<img src="gifs/mileena-fight.gif" alt="mileena" />');
});

$("#player4").on("click",function(){
	$("#player4").remove();
	userPlayer = player4;
	console.log(userPlayer);
	$("#player2").hide();
	$("#player3").hide();
	$("#player1").hide();
	$("#enemy2").css("display", "inline-block");
	$("#enemy3").css("display", "inline-block");
	$("#enemy1").css("display", "inline-block");
	$("#choice1").hide();
	$("#choice2").show();
	$("#stage1").prepend('<img src="gifs/scorpion-fight.gif" alt="scorpion" />');
});



//User Selects their enemy


$("#enemy1").on("click",function(){
	$("#enemy1").hide();
	enemy = enemy1;
	console.log(enemy);
	$("#enemy2").css("display", "none");
	$("#enemy3").css("display", "none");
	$("#enemy4").css("display", "none");
	$("#choice2").hide();
	$("#battleButton").show();
	$("#stage2").prepend('<img id="goroFight" src="gifs/goro-fight.gif" alt="goro" />');

});

$("#enemy2").on("click",function(){
	$("#enemy2").hide();
	enemy = enemy2;
	console.log(enemy);
	$("#enemy1").css("display", "none");
	$("#enemy3").css("display", "none");
	$("#enemy4").css("display", "none");
	$("#choice2").hide();
	$("#battleButton").show();
	$("#stage2").prepend('<img id="subzeroFight" src="gifs/subzero-fight.gif" alt="subzero" />');
});

$("#enemy3").on("click",function(){
	$("#enemy3").hide();
	enemy = enemy3;
	console.log(enemy);
	$("#enemy2").css("display", "none");
	$("#enemy1").css("display", "none");
	$("#enemy4").css("display", "none");
	$("#choice2").hide();
	$("#battleButton").show();
	$("#stage2").prepend('<img id= "mileenaFight" src="gifs/mileena-fight.gif" alt="mileena" />');
});
$("#enemy4").on("click",function(){
	$("#enemy4").hide();
	enemy = enemy4;
	console.log(enemy);
	$("#enemy2").css("display", "none");
	$("#enemy3").css("display", "none");
	$("#enemy1").css("display", "none");
	$("#choice2").hide();
	$("#battleButton").show();
	$("#stage2").prepend('<img id= "scorpoinFight" src="gifs/scorpion-fight.gif" alt="scorpion" />');
});


//Click Battle Button to Begin
$("#battleButton").on("click", function(){
	$("#battleButton").hide();
	$(".battleGround").show();
	$("body").css("background-image","none");
	$(".battleGround").prepend('<img src="images/background4.jpg" alt="arena" id="arena" />');
	$("#fight").show();
	document.getElementById("userStats").innerHTML = userPlayer.play();
	document.getElementById("enemyStats").innerHTML = enemy.play();
	console.log(userPlayer);
  });


//ATACK
$("#fight").click("click", function(){
	randomAttack();
	document.getElementById("enemyStats").innerHTML = enemy.play();
//Detect Wins and losses
	//WIN
	if (enemy.health <= 0) {
		
		alert("FATALITY! YOU WIN!");
		// nextBattle();
			if (enemy == enemy1) {
				$("#enemy1").remove();
				$("#goroFight").remove();
				fatality();

			}
			if (enemy == enemy2) {
				$("#enemy2").remove();
				$("#subzeroFight").remove();
				fatality();

			}
			if (enemy == enemy3) {
				$("#enemy3").remove();
				$("#mileenaFight").remove();
				fatality();
			}
			if (enemy == enemy4) {
				$("#enemy4").remove();
				$("#scorpoinFight").remove();
				fatality();
			}
}
	randomAttacked();
	document.getElementById("userStats").innerHTML = userPlayer.play();
	//LOSE
	if (userPlayer.health <= 0) {
	alert("FATALITY! YOU LOSE!");
	window.location.reload();
}
});

//Play next battle on click
$("#nextBattle").on("click", function(){
	$("#nextBattle").hide();
	$("#fatal1").hide();
	$("#fatal2").hide();
	$("#fatal3").hide();
	$("#fatal4").hide();
	nextBattle();
});

function fatality(){
	if (userPlayer == player1){
		fatalitySound.play();
		$("#fatal1").show();
		$("#nextBattle").show();
		$("#fight").hide();
		$("#enemyStats").hide();
	}


	if (userPlayer == player2){
		fatalitySound.play();
		$("#fatal2").show();
		$("#nextBattle").show();
		$("#fight").hide();
		$("#enemyStats").hide();
	}

	if (userPlayer == player3){
		fatalitySound.play();
		$("#fatal3").show();
		$("#nextBattle").show();
		$("#fight").hide();
		$("#enemyStats").hide();
	}

	if (userPlayer == player4){
		fatalitySound.play();
		$("#fatal4").show();
		$("#nextBattle").show();
		$("#fight").hide();
		$("#enemyStats").hide();
	}
}



function nextBattle(){
	$("#fight").hide();
	$(".battleGround").hide();
	$("#enemy1").css("display", "inline-block");
	$("#enemy2").css("display", "inline-block");
	$("#enemy3").css("display", "inline-block");
	$("#enemy4").css("display", "inline-block");
	$("#choice2").show();
	$("body").css("background-image","url(images/logo.jpg)");
	$("#enemyStats").show();
}

//Generate  attack random number
function randomAttack(){
	 var attack = Math.floor((Math.random() * 21) + 1 * userPlayer.attack * 2);
	 enemy.health = enemy.health - attack;
	 console.log(enemy.health);	
}
function randomAttacked(){
	 var attack = Math.floor((Math.random() * 10) + 1 * enemy.attack);
	 userPlayer.health = userPlayer.health - attack;
	 console.log(userPlayer.health);
}

 var fatalitySound = document.createElement("audio");
        fatalitySound.src="sounds/fatality.mp3";
        fatalitySound.volume=10;
        fatalitySound.autoPlay=false;
        fatalitySound.preLoad=true;       
 
        $(".playSound").click(function() {
            fatalitySound.play();
        });


});
