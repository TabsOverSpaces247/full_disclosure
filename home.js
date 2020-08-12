/* Full Disclosure JS
	Author: Serghie
	Date: 08/05/2020 */

// Slideshow Variables 

var i = 0;

var images = [];

var time = 3000;


// Array list of images

images[0] = "summer(1).jpg";
images[1] = "weeknd(1).jpg";
images[2] = "kehlani(1).jpg";
images[3] = "don(1).jpg";
images[4] = "sza(1).jpg";
images[5] = "mariah(1).jpg";
images[6] = "6lack(1).jpg";


// Function to go to the next image

function nextImg() {

	document.slideshow.src = images[i];

	if(i<images.length - 1){
		i++;
	} else {
		i = 0;

	} // End of if else statement

	// How often to run the function

	setTimeout("nextImg()" , time);

} // End of function

// Calling the function to run on the load of page

window.onload = nextImg();