// JavaScript in-class exercises for IO Lab 2/5/2016


// Create 3 'cat' objects and insert them into the DOM
// Instructions
// 1. Include 'alt' and 'src' as keys within each of the 3 objects - values should correspond to the cat's name and img source (you can re-use name and URLs from the existing cat elements in the HTML)
// 2. Put these 3 objects into an array - you can do this programmatically or hard-coded
// 3. We created the handler for the 'Cats from Obj' button in the HTML. Use the function below to trigger.
function populateFromObj() {

	// 1. Iterate through each 'cat' object in the list you created above
	// 2. For each obj:
		// a) create a new div element with class 'ib-grid-item'
		// b) create a new img element
		// c) set the 'src' and 'alt' attributes on the img with the corresponding values from the object
		// d) create a new p element
		// e) set the p element's innerHTML to the 'alt' value of the object
		// f) append the img and p elements to the div from step a
		// g) append the div element to the parent container

		// *** Hints:
		//				.createElement()
		//				.setAttribute()
		//				.innerHTML
		//				.appendChild
		//				.getElementsByClassName
}



// Continue with the following excercises if you have copmleted the excercise above
// We provided you with the buttons in the html doc that trigger each of these functions--
// make sure to uncomment the buttons if you do decide to complete the following excercises


// Remove the first cat in the grid
function removeFirstCat() {

}

// Add Dr. Franklin to the end of the list
function addCats() {

}

// Switch page background between white and grey
var colorSwitch = false;
function switchBodyBackgroundColor() {

}

// Pop-up the site's title
function displaySiteTitle() {

}

// Add an event listener to a button
window.onload = function() {

}

// Change around a few cat names
function changeEvenNames() {

}

// Swap the position of the sidebar and main container, increase the width of each grid item to 50%, and change the font
function changeGridLayout() {

}
