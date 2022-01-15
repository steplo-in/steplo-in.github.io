
var courseID=Number(document.currentScript.getAttribute('courseID'));
var courseName=document.currentScript.getAttribute('courseName');
var coursePrice=Number(document.currentScript.getAttribute('coursePrice'));

dataLayer.push({
	'courseID': courseID,
	'courseName':courseName,
	'coursePrice':coursePrice,
	'event': 'customView',
	'courseItems':[{'id':courseID,'google_business_vertical':'retail'}],
	'ecomItems':[{'item_id':courseID,"item_name":courseName,"quantity":1,"price":coursePrice}]
  });

var buttons = document.getElementsByClassName("Course");
var gtmFunction = function() {
	dataLayer.push({
		'courseID': courseID,
		'courseName':courseName,
		'coursePrice':coursePrice,
		'event': 'customPurchase',
		'courseItems':[{'id':courseID,'google_business_vertical':'retail'}],
		'ecomItems':[{'item_id':courseID,"item_name":courseName,"quantity":1,"price":coursePrice}]
	  });
	};
for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', gtmFunction, false);
}	


