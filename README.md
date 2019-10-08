# photoword
Javascript project that merges text and images/photos from the internet. It uses fabricjs to manage main functionality.

It is live on http://user.ceng.metu.edu.tr/~e2099026/photoword.

### Working Principles
Mainly there are predefined image url. When the "PhotoWord" button is pressed it selects a random image and your text from the input box. Then it calculates the text length and splits it according to image's original width and places the text on the canvas over image. Then it gets the dataurl of the canvas as blob object and sets it src attribute of img tag on the modal. This is because when the image size is huge, img cannot handle raw dataurl and it is not able to show image to user. With converting it to blob and then src makes it possible for other images too. 

Also, modal provides options to choose font color, font size and font family. There are event listeners on these options and when someone selects the option, it renders the text again on canvas with new options provided.
