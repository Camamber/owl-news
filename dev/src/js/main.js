var btn_grid = document.getElementById('grid-view'),
	btn_flow = document.getElementById('flow-view'),
	feed = document.getElementById('feed');


btn_grid.addEventListener('click', function() {
	if (!btn_grid.classList.contains('active')) {
		btn_grid.classList.add('active');
		btn_flow.classList.remove('active');
		feed.classList.remove('flow-feed');
		feed.classList.add('grid-feed');
	}
});

btn_flow.addEventListener('click', function() {
	if (!btn_flow.classList.contains('active')) {
		btn_flow.classList.add('active');
		btn_grid.classList.remove('active');
		feed.classList.remove('grid-feed');
		feed.classList.add('flow-feed');
	}
});