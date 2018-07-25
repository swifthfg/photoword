(function() {

	var X_START = 80;
	var Y_START_RATIO = 2.35;

	function constructImage() {
		var word = document.getElementById('word');
		console.log(word.value);


		var canvas = new fabric.Canvas('mainImageCnv');
		var img = new Image();
		img.src = 'img/adv.jpg';

		img.onload = function() {
			var imgInstance = new fabric.Image(img, {
				scaleX: canvas.width / img.width,
				scaleY: canvas.height / img.height,
				evented: false,
				hasControls: false,
				selectable: false
			});

			canvas.add(imgInstance);
			var canvasWord = new fabric.Text('BE AN ADVENTURER \n NEVER STOP', {
				left: X_START,
				top: canvas.height / Y_START_RATIO,
				fontFamily: 'Helvetica',
				textAlign: 'center',
				fontSize: '100',
				stroke: '#FFFFFF',
				fill: '#FFFFFF'

			});
			canvas.add(canvasWord);
		}


		word.value = '';
	}

	var constructBtn = document.getElementById('construct-btn');
	constructBtn.addEventListener('click', function() {
		constructImage();
	});

})();
