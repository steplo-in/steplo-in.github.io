
var course=document.currentScript.getAttribute('course');
var baseLink=""
if(course=="English"){
	baseLink="https://api.whatsapp.com/send?phone=918618539841&text=Book%20My%20FREE%20Seat%20%3CEFIRST100%3E"
}else if(course=="Knitting"){
	baseLink="https://api.whatsapp.com/send?phone=918618539841&text=Book%20My%20FREE%20Seat%20%3CKFIRST100%3E"
}
var transactionID="T_".concat((Math.random() + 1).toString(36).substring(7)).concat(Date.now()).concat((Math.random() + 1).toString(36).substring(7))

sessionStorage.setItem("sessionTransID",transactionID)

var first5=transactionID.substring(0,5)
var last2=transactionID.substr(transactionID.length - 2)
var attributionCode=first5.concat(last2)

var whatsappCode="%20%3C".concat(attributionCode).concat("%3E")

var whatsApplink=baseLink.concat(whatsappCode)

var aTags = document.getElementsByClassName("aTag");
for (var i = 0; i < aTags.length; i++) {
	aTags[i].href=whatsApplink
}	
