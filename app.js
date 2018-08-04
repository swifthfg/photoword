var dataController = (function() {
	var constants = {
		X_START: 130,
		Y_START_RATIO: 2.35,
		TRIAL_IMAGE_SRC: 'img/adv.jpg',
	};

	var photoUrls = [
	'https://images.pexels.com/photos/1294230/pexels-photo-1294230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/797394/pexels-photo-797394.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/1114897/pexels-photo-1114897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	'https://images.pexels.com/photos/1292678/pexels-photo-1292678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/709881/pexels-photo-709881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/962095/pexels-photo-962095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1287081/pexels-photo-1287081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/965154/pexels-photo-965154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/599459/pexels-photo-599459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/940380/pexels-photo-940380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/544980/pexels-photo-544980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/374624/pexels-photo-374624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1278541/pexels-photo-1278541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/958363/pexels-photo-958363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/991438/pexels-photo-991438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1284296/pexels-photo-1284296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1248513/pexels-photo-1248513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1096658/pexels-photo-1096658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1096891/pexels-photo-1096891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/378148/pexels-photo-378148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/635609/pexels-photo-635609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/671915/pexels-photo-671915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/852793/pexels-photo-852793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/122829/pexels-photo-122829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	'https://images.pexels.com/photos/1102257/pexels-photo-1102257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	]

	return {
		getConstants: function() {
			return constants;
		},

		getPhotoUrls: function() {
			return photoUrls;
		}
	}
})();

var UIController = (function(){
	var mainImage = document.getElementById('mainImage');
	var constructBtn = document.getElementById('construct-btn');
	var word = document.getElementById('word');
	var downloadImageLink = document.getElementById('downloadImageLink');
	var fontFamilySelect = document.getElementById('fontFamilySelect');
	var fontSizeBox = document.getElementById('fontSizeBox');
	var fsButton = document.getElementById('fsButton');

	return {
		getUIElements: function() {
			return {
				constructBtn: constructBtn,
				word: word,
				mainImage: mainImage,
				downloadImageLink: downloadImageLink,
				fontFamilySelect: fontFamilySelect,
				fontSizeBox: fontSizeBox,
				fsButton: fsButton
			}
		}
	};
})();

var controller = (function(dataCtrl, UICtrl) {
	var mainImage = UICtrl.getUIElements().mainImage;
	var canvas = new fabric.Canvas('mainImageCnv');
	var canvasWord;

	var getRandomInt = function(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	var getRandomPhoto = function() {
		var photoUrls = dataCtrl.getPhotoUrls();
		var randomIndex = getRandomInt(photoUrls.length);
		return photoUrls[randomIndex];
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
		var downloadImageLink = UICtrl.getUIElements().downloadImageLink;

		// https://images.pexels.com/photos/671915/pexels-photo-671915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
		fabric.util.loadImage(getRandomPhoto(), function(img) {
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
			if (canvasWord) {
				canvas.remove(canvasWord);
				canvas.renderAll();
			}
			canvasWord = new fabric.Text(wordValue, {
				left: dataCtrl.getConstants().X_START,
				top: canvas.height / dataCtrl.getConstants().Y_START_RATIO,
				fontFamily: 'Shadows Into Light',
				textAlign: 'left',
				fontSize: '110',
				stroke: '#FFFFFF',
				fill: '#FFFFFF'
			});

			// console.log(canvasWord.measureLine(0));

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
		var fontFamilySelect = UICtrl.getUIElements().fontFamilySelect;
		var fontSizeBox = UICtrl.getUIElements().fontSizeBox;
		var fsButton = UICtrl.getUIElements().fsButton;

		constructBtn.addEventListener('click', function() {
			constructImage();
		});

		fsButton.addEventListener('click', function(){
			var value = fontSizeBox.value;
			if (value && !isNaN(value)) {
				canvasWord.fontSize = value;
				canvas.renderAll();
				mainImage.src = canvas.toDataURL();
			}
		});

		fontFamilySelect.addEventListener('change', function() {
			canvasWord.fontFamily = this.value;
			canvas.renderAll();
			mainImage.src = canvas.toDataURL();
		});
	};

	return {
		initApp: function() {
			init();
		}
	};
})(dataController, UIController);

controller.initApp();
