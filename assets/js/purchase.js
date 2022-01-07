
var courseID=document.currentScript.getAttribute('courseID');
var courseName=document.currentScript.getAttribute('courseName');
var coursePrice=Number(document.currentScript.getAttribute('coursePrice'));

dataLayer.push({
	'courseID': courseID,
	'courseName':courseName,
	'coursePrice':coursePrice,
	'event': 'customView'
  });

var buttons = document.getElementsByClassName("Course");
var gtmFunction = function() {
	dataLayer.push({
		'couseID': courseID,
		'courseName':courseName,
		'coursePrice':coursePrice,
		'event': 'customPurchase'
	  });
	};
for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', gtmFunction, false);
}	


