var dataController = (function() {
	var constants = {
		X_START: 130,
		Y_START_RATIO: 2.35,
		TRIAL_IMAGE_SRC: 'img/adv.jpg',
	};

	var photoUrls = ['img/beautiful-bird-s-eye-view-boats-1039302.jpg', 'img/road.jpg', 'img/animals-birds-dawn-417142.jpg', 'img/astronomy-cosmos-dark-733475.jpg', 'img/green-leaves-plant-1104509.jpg', 'img/bloom-blossom-flora-101472.jpg', 'img/daylight-forest-glossy-443446.jpg', 'img/architecture-big-ben-blur-635609.jpg', 'img/adv.jpg', 'img/flora-flowes-green-122429.jpg', 'img/beach-boardwalk-branches-127513 (1).jpg', 'img/animals-black-and-white-equine-52500.jpg', 'img/astrology-astronomy-constellation-958363.jpg', 'img/beach-boardwalk-branches-127513.jpg', 'img/daylight-environment-forest-459225.jpg', 'img/bloom-blooming-country-145685.jpg', 'img/backlit-dawn-dusk-358137.jpg', 'img/fog-foggy-forest-158607.jpg', 'img/clouds-cloudy-cold-167699.jpg', 'img/4k-wallpaper-background-background-image-1261730.jpg', 'img/bulb-close-up-crack-40889.jpg', 'img/beach-boardwalk-boat-132037.jpg', 'img/bird-s-eye-view-colors-curve-1117267.jpg', 'img/beautiful-daylight-environment-709552.jpg', 'img/adventure-architecture-bank-458857.jpg', 'img/dried-leaves-environment-forest-1027393.jpg', 'img/clouds-dawn-dolomites-1278540.jpg', 'img/adult-architecture-art-959058.jpg', 'img/bright-clear-close-up-401107.jpg', 'img/dark-fashion-feet-671915.jpg', 'img/clouds-daylight-daytime-1096891.jpg', 'img/forest-landscape-light-35600.jpg', 'img/architecture-buildings-business-1248513.jpg', 'img/architecture-bridge-city-991438.jpg', 'img/adventure4.jpg', 'img/cool-wallpaper-forest-hawaii-38136.jpg', 'img/nature4.jpg', 'img/clouds-cloudy-conifers-247478.jpg', 'img/astronomy-beach-coast-912587.jpg', 'img/nature3.jpg', 'img/blur-charge-close-up-256302.jpg', 'img/arches-national-park-dark-dusk-33688.jpg', 'img/clouds-dawn-dusk-157039.jpg', 'img/blur-dawn-dusk-1273431.jpg', 'img/adventure2.jpg', 'img/abendstimmung-alternative-energy-dawn-414805.jpg', 'img/adventure3.jpg', 'img/adventure-bench-clouds-1096658.jpg', 'img/beach-cc0-coast-103567.jpg', 'img/animal-animals-backlit-236636.jpg', 'img/angry-animal-big-302304.jpg', 'img/fog-foggy-forest-96491.jpg', 'img/aerial-view-beach-beautiful-462162.jpg', 'img/beach-high-angle-shot-island-673865.jpg', 'img/forest-landscape-mountain-range-129105.jpg', 'img/action-athletes-bike-533540.jpg', 'img/android-wallpaper-drops-of-water-iphone-wallpaper-8633.jpg', 'img/bench-carved-stones-cemetery-257360.jpg', 'img/architecture-bridge-city-257703.jpg', 'img/adult-back-view-blur-287335.jpg', 'img/daylight-forest-nature-589802.jpg', 'img/branch-leaves-macro-1259813.jpg', 'img/nature2.jpg', 'img/adventure.jpg', 'img/adult-athlete-black-and-white-163403.jpg', 'img/architecture-buildings-city-1277546.jpg', 'img/autumn-daylight-fall-589841.jpg', 'img/abraham-lincoln-abundance-agriculture-691571.jpg', 'img/abandoned-forest-industry-34950.jpg', 'img/adult-adventure-air-1272392.jpg', 'img/clouds-cloudy-sky-countryside-1034887.jpg', 'img/cold-dark-eerie-414144.jpg', 'img/blur-chains-chrome-220237.jpg', 'img/cool-wallpaper-dawn-dusk-66997.jpg', 'img/asphalt-beautiful-fashion-373289.jpg', 'img/nature1.jpg', 'img/boat-boating-close-up-275637.jpg', 'img/blonde-hair-blurred-background-dress-852793.jpg', 'img/beautiful-coast-h2o-1001682.jpg', 'img/architecture-building-city-1121782.jpg'];

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
		var mainImage = UICtrl.getUIElements().mainImage;
		var downloadImageLink = UICtrl.getUIElements().downloadImageLink;

		var canvas = new fabric.Canvas('mainImageCnv');

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
			var canvasWord = new fabric.Text(wordValue, {
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
