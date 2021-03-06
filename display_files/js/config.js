
/* ***** COUNTDOWN DATE ***** */

	// Select Year, Mounth, Day and Hours for the countdown

	var choose_year 			= 2020; 		// Year

	var choose_mounth 			= "August";	// Mounth

	var choose_day 				= 8;			// Day

	var choose_hour 			= "00:00:00";	// Hour (Hours:Min:Sec)

	var counterExpiryText 		= "Coming soon!!!"; // Text to display upon expiry, replacing the countdown.



/* ***** STYLE ***** */

	var choose_numbers_style	= "7"			// Numbers Style: 1 to 11

	var choose_numbers_color	= "#5CD427"		// Numbers Color (hex)

	var choose_style			= "black";		// Display Style: black, white

	var choose_background		= "dark";		// Background Style: dark, light, image


// If you select texture as background, select the texture (textures are diferent for dark scheme and light scheme:

	var choose_texture			= "01" ;			// Background texture 01 to 08


// If you select image as background, configure the path to images:

/* ***** BACKGROUND IMAGE ***** */

	var slidesArray = [		// Slideshow Images

						{image : 'display_files/slideshow/image01.jpg'},	// Image 1 of Background Slideshow

						{image : 'display_files/slideshow/image02.jpg'},	// Image 2 of Background Slideshow

						{image : 'display_files/slideshow/image03.jpg'},	// Image 3 of Background Slideshow

						{image : 'display_files/slideshow/image04.jpg'},	// Image 4 of Background Slideshow

						{image : 'display_files/slideshow/image05.jpg'}	// Image 5 of Background Slideshow

				];

	var	choose_slide_interval = 3000;	// Length between transitions (3000 = 3 seconds)

	var choose_transition = 1; 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left

	var choose_transition_speed = 1000;	// Speed of transition (1000 = 1 second)
