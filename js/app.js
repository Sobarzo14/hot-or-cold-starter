function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();

function newGame() {
	let random = Math.random()
	random = random * 100
	random = Math.floor(random)
	return random;
}

$('.js-new-game').click(function() {
	console.log(newGame())
})

});


$('form').submit(function() {
	event.preventDefault();
	var guess = $('#js-user-guess').val()
	if (abs(random - guess) <= 50) {
		console.log("too hot")
	}
})



