var dataController = (function() {
	var constants = {
		X_START: 130,
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
	var mainImage = document.getElementById('mainImage');
	var constructBtn = document.getElementById('construct-btn');
	var word = document.getElementById('word');
	var downloadImageLink = document.getElementById('downloadImageLink');

	return {
		getUIElements: function() {
			return {
				constructBtn: constructBtn,
				word: word,
				mainImage: mainImage,
				downloadImageLink: downloadImageLink
			}
		}
	};
})();

var controller = (function(dataCtrl, UICtrl) {

	var getRandomPhoto = function() {

	}

	var getTokenizedText = function(word, canvasWidth) {
		var realString = word ? word.toUpperCase() : 'ALWAYS MOVE FORWARD';
		var wordOfText = realString.split(' ');
		var lineLengthPx = (canvasWidth / 2) + 100;

		var currentLinePx = 0;
		var lineStr = '';
		var resultStr = '';
		var wordCount = wordOfText.length;
		for(var i = 0; i <  wordCount; i++) {
			var charCountOfWord = wordOfText[i].length;
			var pxOfWord = (charCountOfWord + 1) * 75;
			currentLinePx += pxOfWord;

			if (currentLinePx > lineLengthPx) {
				lineStr += wordOfText[i];
				resultStr += lineStr + '\n';
				lineStr = '';
				currentLinePx = 0;
				continue;
			}

			if (i == wordCount - 1) {
				lineStr += wordOfText[i];
				resultStr += lineStr;
			} else {
				lineStr += wordOfText[i] + ' ';
			}
		}
		return resultStr;
	}

	var loadFonts = function() {
		WebFont.load({
			google: {
				families: [	'Merienda',
							'Montserrat',
							'Oswald',
							'Roboto Condensed',
							'Muli',
							'Lobster',
							'Yanone Kaffeesatz',
							'Shadows Into Light']
			}
		});
	}

	var dataURLToBlob = function(dataURI) {
		var binStr = atob(dataURI.split(',')[1]);
		var lenBin = binStr.length;
		uriArr = new Uint8Array(lenBin);

		for (var i = 0; i < lenBin; i++) {
			uriArr[i] = binStr.charCodeAt(i);
		}

		return new Blob([uriArr]);
	}

	var getBlobURL = function(canvas) {
		var dURL = canvas.toDataURL();
		return URL.createObjectURL(dataURLToBlob(dURL));
	}

	var downloadCanvas = function(link, filename, canvas) {
		link.href = getBlobURL(canvas);
		link.download = filename;
	};

	var constructImage = function() {
		var word = UICtrl.getUIElements().word;
		var rawWordValue = word.value;
		var mainImage = UICtrl.getUIElements().mainImage;
		var downloadImageLink = UICtrl.getUIElements().downloadImageLink;

		var canvas = new fabric.Canvas('mainImageCnv');

		// https://images.pexels.com/photos/671915/pexels-photo-671915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
		fabric.util.loadImage('img/adventure2.jpg', function(img) {
			var imgInstance = new fabric.Image(img, {
				evented: false,
				hasControls: false,
				selectable: false,
			});
			canvas.setWidth(img.width);
			canvas.setHeight(img.height);
			canvas.setBackgroundImage(imgInstance, canvas.renderAll.bind(canvas));

			var wordValue = getTokenizedText(rawWordValue, img.width);

			// PLACE TEXT ON CANVAS IMAGE
			var canvasWord = new fabric.Text(wordValue, {
				left: dataCtrl.getConstants().X_START,
				top: canvas.height / dataCtrl.getConstants().Y_START_RATIO,
				fontFamily: 'Shadows Into Light',
				textAlign: 'left',
				fontSize: '110',
				stroke: '#FFFFFF',
				fill: '#FFFFFF'
			});

			console.log(canvasWord.measureLine(0));


			canvas.add(canvasWord);
			canvas.renderAll();

			mainImage.src = canvas.toDataURL();

		}, null, {crossOrigin: 'Anonymous'});

		downloadImageLink.addEventListener('click', function() {
			downloadCanvas(event.target, 'photoWord.png', canvas);
		}, false);

		word.value = '';
	};

	var init = function() {
		loadFonts();
		var constructBtn = UICtrl.getUIElements().constructBtn;
		constructBtn.addEventListener('click', function() {
			constructImage();
		});
	};

	return {
		initApp: function() {
			init();
		}
	};
})(dataController, UIController);

controller.initApp();
