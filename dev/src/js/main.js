

var btn_grid = document.getElementById('grid-view'),
	btn_flow = document.getElementById('flow-view'),
	feed = document.getElementById('feed');


function grid() {
	if (!btn_grid.classList.contains('active')) {
		btn_grid.classList.add('active');
		btn_flow.classList.remove('active');

		btn_flow.getElementById('grey').style.display = 'block';
		btn_flow.getElementById('red').style.display = 'none';		
		btn_grid.getElementById('grey').style.display = 'none';
		btn_grid.getElementById('red').style.display = 'block';		


		feed.classList.remove('flow-feed');
		feed.classList.add('grid-feed');
	}
}

btn_grid.addEventListener('click', grid);

function flow() {
	if (!btn_flow.classList.contains('active')) {
		btn_flow.classList.add('active');
		btn_grid.classList.remove('active');

		btn_grid.getElementById('grey').style.display = 'block';
		btn_grid.getElementById('red').style.display = 'none';		
		btn_flow.getElementById('grey').style.display = 'none';
		btn_flow.getElementById('red').style.display = 'block';		

		feed.classList.remove('grid-feed');
		feed.classList.add('flow-feed');
	}
}

btn_flow.addEventListener('click', flow);

$('.btn-more').click(function() {
	if($('.wrapper').css('grid-template-areas')=='"hl hl hl hl hl hm hm hm hm hm hm hm" "c c c c c c c c c s s s" "fl fl fl fl ft fm fm fm fm fm fs fs"')
		$('.wrapper').css('grid-template-areas', '"hl hl hl hl hl hm hm hm hm hm hm hm" "s s s c c c c c c c c c" "fl fl fl fl ft fm fm fm fm fm fs fs"');
	else
		$('.wrapper').css('grid-template-areas', '"hl hl hl hl hl hm hm hm hm hm hm hm" "c c c c c c c c c s s s" "fl fl fl fl ft fm fm fm fm fm fs fs"');
});

$(document).ready(function() {
  $('#slider').slick({
  	'arrows': false,
  	'autoplay': true
  });
});
	