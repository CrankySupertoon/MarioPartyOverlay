/*
* Updates the characters.
* 
* @param {number} player Which player should be updated.
* @param {boolean} character What character should be used.
*/
function changeCharacters (player, character) {
	var selected = document.querySelector('input[name="icons"]:checked').value;
	var charElement = document.getElementById(character + player);

	characters[player] = character;

	charElement.checked = true;

	document.getElementById('p' + player + 'Img').src = 'img/' + selected + '/' + character + '.png';
	coinStarTie();
}

var characters = ['', 'mario', 'luigi', 'yoshi', 'peach'];

/*
* Changes com status of a character.
* 
* @param {number} player Which player should be updated.
*/
function changeCom (player) {
	if (getValue('com' + player) == true) {
		document.getElementById('p' + player + 'ComDisplay').style.visibility = 'visible';
	} else {
		document.getElementById('p' + player + 'ComDisplay').style.visibility = 'hidden';
	}
}

/*
* Show/Hide characters based on the selected game.
* 
* @param {string} game What game is currently used.
*/
function changeGame (game) {
	editValue(game, true);
	curGame = game;
	var showChars = [];
	var hideChars = [];

	hideChars.push(document.querySelectorAll('.warioSpan'));
	hideChars.push(document.querySelectorAll('.daisySpan'));
	hideChars.push(document.querySelectorAll('.rosalinaSpan'));
	hideChars.push(document.querySelectorAll('.toadSpan'));
	hideChars.push(document.querySelectorAll('.toadetteSpan'));
	hideChars.push(document.querySelectorAll('.waluigiSpan'));
	hideChars.push(document.querySelectorAll('.dkSpan'));
	hideChars.push(document.querySelectorAll('.diddySpan'));
	hideChars.push(document.querySelectorAll('.birdoSpan'));
	hideChars.push(document.querySelectorAll('.bowserSpan'));
	hideChars.push(document.querySelectorAll('.bowserjrSpan'));
	hideChars.push(document.querySelectorAll('.koopakidSpan'));
	hideChars.push(document.querySelectorAll('.pompomSpan'));
	hideChars.push(document.querySelectorAll('.goombaSpan'));
	hideChars.push(document.querySelectorAll('.koopaSpan'));
	hideChars.push(document.querySelectorAll('.drybonesSpan'));
	hideChars.push(document.querySelectorAll('.montySpan'));
	hideChars.push(document.querySelectorAll('.booSpan'));
	hideChars.push(document.querySelectorAll('.spikeSpan'));
	hideChars.push(document.querySelectorAll('.blooperSpan'));
	hideChars.push(document.querySelectorAll('.shyguySpan'));
	hideChars.push(document.querySelectorAll('.hammerbroSpan'));
	hideChars.push(document.querySelectorAll('.kamekSpan'));

	hideChars.push(document.querySelectorAll('.mp6C'));
	hideChars.push(document.querySelectorAll('.mp7C'));
	hideChars.push(document.querySelectorAll('.mp8C'));
	hideChars.push(document.querySelectorAll('.mp9C'));
	hideChars.push(document.querySelectorAll('.mpDSC'));
	hideChars.push(document.querySelectorAll('.smpC'));

	showChars.push(document.querySelectorAll('.marioSpan'));
	showChars.push(document.querySelectorAll('.luigiSpan'));
	showChars.push(document.querySelectorAll('.peachSpan'));
	showChars.push(document.querySelectorAll('.yoshiSpan'));
	if (game != 'mpa') {
		showChars.push(document.querySelectorAll('.warioSpan'));
	}

	if (game == 'mp1' || game == 'mp2' || game == 'mp3' || game == 'mp4' || game == 'mp4' || game == 'mp10' || game == 'mpsr' || game == 'smp' || game == 'all') {
		showChars.push(document.querySelectorAll('.dkSpan'));
	}
	if (game == 'mp3' || game == 'mp4' || game == 'mp5' || game == 'mp6' || game == 'mp7' || game == 'mp8' || game == 'mp9' || game == 'mp10' || game == 'mpds' || game == 'mpit' || game == 'mpsr' || game == 'mptt100' || game == 'smp' || game == 'all') {
		showChars.push(document.querySelectorAll('.waluigiSpan'));
		showChars.push(document.querySelectorAll('.daisySpan'));
	}
	if (game == 'mp6' || game == 'all') {
		showChars.push(document.querySelectorAll('.koopakidSpan'));
		showChars.push(document.querySelectorAll('.mp6C'));
	}
	if (game == 'mp6' || game == 'mp7' || game == 'mp8') {
		showChars.push(document.querySelectorAll('.booSpan'));
		showChars.push(document.querySelectorAll('.toadetteSpan'));
	}
	if (game == 'mp6' || game == 'mp7' || game == 'mp8' || game == 'mp9' || game == 'mp10' || game == 'mpds' || game == 'mpit' || game == 'mpsr' || game == 'all')  {
		showChars.push(document.querySelectorAll('.toadSpan'));
	}
	if (game == 'mp7' || game == 'mp8' || game == 'all') {
		showChars.push(document.querySelectorAll('.birdoSpan'));
		showChars.push(document.querySelectorAll('.drybonesSpan'));
	}
	if (game == 'mp7' || game == 'all') {
		showChars.push(document.querySelectorAll('.mp7C'))
	}
	if (game == 'mp8') {
		showChars.push(document.querySelectorAll('.blooperSpan'))
		showChars.push(document.querySelectorAll('.hammerbroSpan'))
		showChars.push(document.querySelectorAll('.mp8C'))
	}
	if (game == 'mp9') {
		showChars.push(document.querySelectorAll('.koopaSpan'));
		showChars.push(document.querySelectorAll('.shyguySpan'));
		showChars.push(document.querySelectorAll('.kamekSpan'));
		showChars.push(document.querySelectorAll('.birdoSpan'));
		showChars.push(document.querySelectorAll('.mp9C'));
	}
	if (game == 'mp9' || game == 'mp10') {
		hideChars.push(document.querySelectorAll('.happeningC'));
	} else {
		showChars.push(document.querySelectorAll('.happeningC'));
	}
	if (game == 'smp' || game ==  'all') {
		showChars.push(document.querySelectorAll('.koopaSpan'));
		showChars.push(document.querySelectorAll('.shyguySpan'));
	}
	if (game == 'mp10' || game == 'all') {
		showChars.push(document.querySelectorAll('.rosalinaSpan'));
		showChars.push(document.querySelectorAll('.spikeSpan'));
		showChars.push(document.querySelectorAll('.toadetteSpan'));
	}
	if (game == 'mp10' || game == 'all') {
		showChars.push(document.querySelectorAll('.rosalinaSpan'));
		showChars.push(document.querySelectorAll('.spikeSpan'));
		showChars.push(document.querySelectorAll('.toadetteSpan'));
		showChars.push(document.querySelectorAll('.mp10C'));
	}
	if (game == 'mpds' || game == 'all') {
		showChars.push(document.querySelectorAll('.mpDSC'));
	}
	if (game == 'mpit' || game == 'mpsr' || game == 'mptt100' || game == 'smp') {
		showChars.push(document.querySelectorAll('.rosalinaSpan'));
	}
	if (game == 'mpit') {
		showChars.push(document.querySelectorAll('.booSpan'));
		showChars.push(document.querySelectorAll('.bowserjrSpan'));
	}
	if (game == 'mpsr') {
		showChars.push(document.querySelectorAll('.toadetteSpan'));
		showChars.push(document.querySelectorAll('.diddySpan'));
	}
	if (game == 'smp' || game == 'all') {
		showChars.push(document.querySelectorAll('.bowserSpan'));
		showChars.push(document.querySelectorAll('.goombaSpan'));
		showChars.push(document.querySelectorAll('.montySpan'));
		showChars.push(document.querySelectorAll('.diddySpan'));
		showChars.push(document.querySelectorAll('.bowserjrSpan'));
		showChars.push(document.querySelectorAll('.booSpan'));
		showChars.push(document.querySelectorAll('.hammerbroSpan'));
		showChars.push(document.querySelectorAll('.drybonesSpan'));
		showChars.push(document.querySelectorAll('.pompomSpan'));
		showChars.push(document.querySelectorAll('.smpC'));
	}
	if (game == 'all') {
		showChars.push(document.querySelectorAll('.blooperSpan'));
		showChars.push(document.querySelectorAll('.kamekSpan'));
		showChars.push(document.querySelectorAll('.mp8C'));
		showChars.push(document.querySelectorAll('.mp9C'));
	}

	if (game == 'mpa' || game == 'mpit' || game == 'mpsr' || game == 'mptt100') {
		showChars.push(document.querySelectorAll('.mp6C'));
		showChars.push(document.querySelectorAll('.mp7C'));
		showChars.push(document.querySelectorAll('.mp8C'));
		showChars.push(document.querySelectorAll('.mp9C'));
		showChars.push(document.querySelectorAll('.mp10C'));
		showChars.push(document.querySelectorAll('.mpDSC'));
		showChars.push(document.querySelectorAll('.smpC'));

		document.getElementById('counterError').style = '';
	} else {
		document.getElementById('counterError').style = 'display: none;';
	}

	for (var num = 0; num < hideChars.length; num++) {
		for (var num2 = 0; num2 < hideChars[num].length; num2++) {
			//hideChars[num][num2] = hideChars[num][num2] + 'Span';
			hideChars[num][num2].style.display = 'none';
		}
	}

	for (var num = 0; num < showChars.length; num++) {
		for (var num2 = 0; num2 < showChars[num].length; num2++) {
			//showChars[num][num2] = showChars[num][num2] + 'Span';
			showChars[num][num2].style.display = '';
		}
	}
}
var curGame = 'all';
var pastResults = [];

/*
* Gets a random number in a specified range and checks if it's a duplicate.
* 
* @param {number} max The max number.
*/
function randomCharFor (max, min) {
	if (min) {} else {
		var min = 0;
	}

	var result = '';
	result = Math.floor(Math.random() * max) + min;

	for (var num = 0; num < pastResults.length; num++) {
		if (result == pastResults[num]) {
			result = Math.floor(Math.random() * max) + 0;
			num = -1;
		}
	}
	pastResults.push(result);
	return result;
}

/*
* Randomly selects characters based on games.
*/
function randomChar () {
	var result = '';
	pastResults = [];
	var chars = [''];
	var rdmChars = [];

	if (curGame == 'mp1' || curGame == 'mp2') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(6);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'wario', 'dk'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp3' || curGame == 'mp4') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(8);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'wario', 'waluigi', 'dk'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp5') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(7);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'wario', 'waluigi'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp6') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(11);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'toad', 'toadette', 'wario', 'waluigi', 'koopakid', 'boo'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp7') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(12);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'toad', 'toadette', 'wario', 'waluigi', 'birdo', 'drybones', 'boo'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp8') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(14);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'toad', 'toadette', 'wario', 'waluigi', 'birdo', 'drybones', 'boo', 'blooper', 'hammerbro'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp9') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(12);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'toad', 'wario', 'waluigi', 'birdo', 'koopa', 'shyguy', 'kamek'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mp10') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(12);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'rosalina', 'toad', 'toadette', 'wario', 'waluigi', 'dk', 'spike'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mpa') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(4);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mpds') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(8);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'toad', 'wario', 'waluigi'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mpit') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(10);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'toad', 'wario', 'waluigi', 'boo', 'bowserjr'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mpsr') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(12);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'rosalina', 'toad', 'toadette', 'wario', 'waluigi', 'dk', 'diddy'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'mptt100') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(8);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'rosalina', 'wario', 'waluigi'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'smp') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(20);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'rosalina', 'wario', 'waluigi', 'dk', 'diddy', 'bowser', 'bowserjr', 'pompom', 'goomba', 'koopa', 'drybones', 'monty', 'boo', 'shyguy', 'hammerbro'];
			chars.push(rdmChars[result]);
		}
	} else if (curGame == 'all') {
		for (var num = 1; num < 5; num++) {
			result = randomCharFor(27);
			rdmChars = ['mario', 'luigi', 'yoshi', 'peach', 'daisy', 'rosalina', 'toad', 'toadette', 'wario', 'waluigi', 'dk', 'diddy', 'birdo', 'bowser', 'bowserjr', 'koopakid', 'pompom', 'goomba', 'koopa', 'drybones', 'monty', 'boo', 'spike', 'blooper', 'shyguy', 'hammerbro', 'kamek'];
			chars.push(rdmChars[result]);
		}
	}
	for (var num = 1; num < 5; num++) {
		//console.log(chars + num);
		editValue(chars[num] + num, true);
		document.getElementById(chars[num] + num).scrollIntoView(true);
		changeCharacters(num, chars[num]);
	}
}