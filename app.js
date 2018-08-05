var dataController = (function() {
	var constants = {
		X_START: 130,
		Y_START_RATIO: 2.35,
		TRIAL_IMAGE_SRC: 'img/adv.jpg',
		DEFAULT_FONT_SIZE: "110",
		DEFAULT_FONT_FAMILY: "Shadows Into Light",
		DEFAULT_FONT_COLOR: "#FFFFFF"
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
		'https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/70741/cereals-field-ripe-poppy-70741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1027393/pexels-photo-1027393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/129743/pexels-photo-129743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1034568/pexels-photo-1034568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1028185/pexels-photo-1028185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/103567/pexels-photo-103567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/748626/pexels-photo-748626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/432786/pexels-photo-432786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/443356/pexels-photo-443356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1009136/pexels-photo-1009136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/236017/pexels-photo-236017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/289618/pexels-photo-289618.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		'https://images.pexels.com/photos/355805/pexels-photo-355805.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		'https://images.pexels.com/photos/355872/pexels-photo-355872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
		'https://images.pexels.com/photos/8662/sunset-feathers.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/674268/pexels-photo-674268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/303024/pexels-photo-303024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/871053/pexels-photo-871053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/962095/pexels-photo-962095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/319969/pexels-photo-319969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/105032/pexels-photo-105032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/327509/pexels-photo-327509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/416202/pexels-photo-416202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/46248/owl-hunt-nature-hunter-46248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/56865/adler-bird-bird-of-prey-raptor-56865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/40196/lion-animal-portrait-africa-safari-40196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/236636/pexels-photo-236636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/793235/pexels-photo-793235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/127723/pexels-photo-127723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/1134188/pexels-photo-1134188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/725743/pexels-photo-725743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/60219/pexels-photo-60219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/132340/pexels-photo-132340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/355336/pexels-photo-355336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/40889/light-bulb-current-light-glow-40889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/533540/pexels-photo-533540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/220444/pexels-photo-220444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/119573/pexels-photo-119573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		'https://images.pexels.com/photos/433155/pexels-photo-433155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
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

	return {
		getUIElements: function() {
			return {
				constructBtn: constructBtn,
				word: word,
				mainImage: mainImage,
				downloadImageLink: downloadImageLink,
				fontFamilySelect: fontFamilySelect,
			}
		}
	};
})();

var controller = (function(dataCtrl, UICtrl) {
	var mainImage = UICtrl.getUIElements().mainImage;
	var canvas = new fabric.Canvas('mainImageCnv');
	var canvasWord;
	var constants = dataCtrl.getConstants();

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

	var resetSettings = function() {
		$('#fontSizeSelect').val(constants.DEFAULT_FONT_SIZE);
		$('#fontFamilySelect').val(constants.DEFAULT_FONT_FAMILY);
		$('#fontColorSelect').val(constants.DEFAULT_FONT_COLOR);
	}

	var constructImage = function() {
		$(".hidden").show();
		resetSettings();

		var word = UICtrl.getUIElements().word;
		var rawWordValue = word.value;
		var downloadImageLink = UICtrl.getUIElements().downloadImageLink;

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
				left: constants.X_START,
				top: canvas.height / constants.Y_START_RATIO,
				fontFamily: 'Shadows Into Light',
				textAlign: 'left',
				fontSize: constants.DEFAULT_FONT_SIZE,
				stroke: constants.DEFAULT_FONT_COLOR,
				fill: constants.DEFAULT_FONT_COLOR
			});

			// console.log(canvasWord.measureLine(0));

			canvas.add(canvasWord);
			canvas.renderAll();

			mainImage.src = canvas.toDataURL();
			$(".hidden").hide();
			$('#canvasModal').modal('show');
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

		constructBtn.addEventListener('click', function() {
			constructImage();
		});

		fontFamilySelect.addEventListener('change', function() {
			canvasWord.fontFamily = this.value;
			canvas.renderAll();
			mainImage.src = canvas.toDataURL();
		});

		$('.close-btn').click(function() {
			mainImage.src = "";
			resetSettings();
		});

		$('#fontSizeSelect').click(function() {
			canvasWord.fontSize = this.value;
			canvas.renderAll();
			mainImage.src = canvas.toDataURL();
		});

		$('#fontColorSelect').click(function() {
			canvasWord.setColor(this.value);
			canvasWord.stroke = this.value;
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
