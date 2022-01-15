
var courseID=document.currentScript.getAttribute('courseID');
var courseName=document.currentScript.getAttribute('courseName');
var coursePrice=Number(document.currentScript.getAttribute('coursePrice'));

dataLayer.push({
	'event': 'customView',
	'courseID': courseID,
	'courseName':courseName,
	'coursePrice':coursePrice,
	'courseCurrency':'INR',
	'courseItems':[{'id':courseID,'google_business_vertical':'retail'}],
	'ecomItems':[{'item_id':courseID,"item_name":courseName}]
  });

var buttons = document.getElementsByClassName("Course");
var gtmFunction = function() {
	dataLayer.push({
		'event': 'customPurchase',
		'courseID': courseID,
		'courseName':courseName,
		'coursePrice':coursePrice,
		'courseCcurrency':'INR',
		'courseItems':[{'id':courseID,'google_business_vertical':'retail'}],
		'ecomItems':[{'item_id':courseID,"item_name":courseName}],
		'purchaseTransactionId':"T_".concat((Math.random() + 1).toString(36).substring(7)).concat(Date.now()).concat((Math.random() + 1).toString(36).substring(7))
	  });
	};
for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', gtmFunction, false);
}	


