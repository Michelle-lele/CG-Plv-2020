const BOARD_CARDS = 16;
const cards = $('#board div');

$(document).ready(function() {
	initialize();
});

function initialize(){
	const cards_order = shuffle();

	cards.each(function(index){
  		$(this).attr('data-card', cards_order[index]);
  		$(`<img src="media/${cards_order[index]}.jpg">`).appendTo($(this));
	});

	cards.each(function(){
		$(this).click(()=>{
			checkCard($(this));
		})
	});


}

function shuffle(){
	const array = [];

	while(array.length < BOARD_CARDS){
		const random = Math.ceil(Math.random()*(BOARD_CARDS)/2);
		let numOccurences = $.grep(array, function (elem){
   			return elem === random;
		}).length;

		if (numOccurences < 2){
			array.push(random);
		}
	}
	return array;
}

function checkCard(card){
	const newCardID = card.attr('data-card');
	let activeCards = $('#board div.active');
	const activeCardID = activeCards.attr('data-card');

	card.children('img').css('display', 'block');
	card.attr('class', 'active');
	activeCards = $('#board div.active');
	
	if (activeCards.length === 2){	
		if (newCardID === activeCardID){
			setTimeout(function(){
				activeCards.css('opacity', '30%');
				activeCards.addClass('matched');
				activeCards.removeClass('active');
				activeCards.unbind();
				isGameWon();
			}, 500);
		}
		else{
			setTimeout(function(){
				activeCards.each(function(){
					$(this).children('img').css('display', 'none');
					activeCards.removeClass('active');
				});
			}, 500);
		}	
	}
}

function isGameWon(){
	const matched = $('#board div.matched');

	if (matched.length === BOARD_CARDS){
		const board = $('#board');
		const newGame = $('#new-game');
		board.animate({
    		opacity: 0,
    		height: 0}, 2000, function(){
				board.css('display', 'none');
			newGame.css('display', 'block');

			newGame.animate({
				opacity: 1,
				paddingTop: '200px',}, 1000);	
		});

		/*newGame.click(()=>{
			cards.each(()=>{
				$(this).removeClass('matched');
				$(this).css('opacity', '1');
				$('img', this).remove();
			});
			initialize();

			board.animate({
	    		opacity: 1,
	    		height: '100%'}, 2000, function(){
					newGame.animate({
						opacity: 0,
						paddingTop: '200px',}, 1000)
					});
					newGame.css('display', 'none');
					board.css('display', 'block');
		});*/

		return true;
	}
	return false;
}

