const css = {
	left_0: {left: '0%'},
	left_100: {left:'100%'},
	left__100: {left:'-100%'},
};

const anim_time = 3000;
const wait_time = 500;
let interval;
let is_animating = false;

const move_left = (slides) => {
	is_animating = true;
	const active_element = slides.filter('.active');
	const length = slides.length;
	const active_id = Number(active_element.attr('id').split('_')[1]);


	let next_id = active_id + 1 < length ? active_id + 1 : 0;
	const next_element = $('#slide_' + next_id);
	active_element.css(css.left_0);
	next_element.css(css.left_100);

	next_element.animate(css.left_0, wait_time);
	active_element.animate(css.left__100, wait_time, function(){
		slides.removeClass('active');
		next_element.addClass('active');
		is_animating = false;
	});
	// condition ? if_true : if_false
	// console.log(active_element);
	// console.log(length);
	// console.log(active_id);
	// console.log(next_id);
};

const move_right = (slides) => {
	is_animating = true;
	const active_element = slides.filter('.active');
	const length = slides.length;
	const active_id = Number(active_element.attr('id').split('_')[1]);


	let next_id = active_id - 1 < 0 ? length - 1 : active_id - 1;
	const next_element = $('#slide_' + next_id);
	
	next_element.css(css.left__100);
	active_element.css(css.left_0);

	next_element.animate(css.left_0, wait_time);
	active_element.animate(css.left_100, wait_time, function(){
		slides.removeClass('active');
		next_element.addClass('active');
		is_animating = false;
	});
};

const init = () => {
	const slides = $(
		'.container--slides--slide');

	interval = setInterval(move_right, anim_time, slides);

	$(document).on('keyup', function(e){

		const keycode = Number(e.which);

		if (!is_animating){
			switch (keycode){
				case 39:
					clearInterval(interval);
					interval = setInterval(move_left, anim_time, slides);
					move_left(slides);
					break;
				case 37:
					clearInterval(interval);
					interval = setInterval(move_right, anim_time, slides);
					move_right(slides);
					break;
				default:
					break;
			}
		}
	});
};

window.onload = init();