var dataController = (function() {
	var constants = {
		X_START: 80,
		Y_START_RATIO: 2.35,
		TRIAL_IMAGE_SRC: 'img/adv.jpg',
	};

	return {
		getConstants: function() {
			return constants;
		}
	}
})();

var UIController = (function(){
	var constructBtn = document.getElementById('construct-btn');
	var word = document.getElementById('word');


	return {
		getUIElements: function() {
			return {
				constructBtn: constructBtn,
				word: word,
			}
		}
	};

})();

var controller = (function(dataCtrl, UICtrl) {
	var constructImage = function() {
		var word = UICtrl.getUIElements().word;
		console.log(word.value);


		var canvas = new fabric.Canvas('mainImageCnv');
		var img = new Image();
		img.src = dataCtrl.getConstants().TRIAL_IMAGE_SRC;

		img.onload = function() {
			var imgInstance = new fabric.Image(img, {
				scaleX: canvas.width / img.width,
				scaleY: canvas.height / img.height,
				evented: false,
				hasControls: false,
				selectable: false
			});

			canvas.add(imgInstance);
			var canvasWord = new fabric.Text('BE AN ADWENTURER \n NEVER STOP', {
				left: dataCtrl.getConstants().X_START,
				top: canvas.height / dataCtrl.getConstants().Y_START_RATIO,
				fontFamily: 'Raleway',
				textAlign: 'center',
				fontSize: '90',
				stroke: '#FFFFFF',
				fill: '#FFFFFF'

			});
			canvas.add(canvasWord);
		}

		word.value = '';
	};

	var init = function() {
		var constructBtn = UICtrl.getUIElements().constructBtn;
		constructBtn.addEventListener('click', function() {
			constructImage();
		});
	};

	return {
		init: function() {
			init();
		} 
	};
})(dataController, UIController);


controller.init();
