/* Full Disclosure JS
	Author: Serghie
	Date: 08/05/2020 */

// Submit Message Function

function submitButton() {

	// Store name and number values in variables

	var name = document.notifForm.name.value;

	var num = document.notifForm.number.value;

	// If else statement for alert boxes

	if(name!=="" && num!==""){
	window.alert("Check your messages for a verification code!"); 

	 } else {
	 	window.alert("Please fill in your name and/or cell phone number.");
	 
	 	} // End of if else statement

} // End of submitButton() function