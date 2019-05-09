var interval;
interval = setInterval(myTimer, 1000);
function myTimer() {
	var d, hours, minutes;
  	d = new Date();
  	hours = d.getHours();
	minutes = d.getMinutes();
	if(hours < 10) {
		hours = "0" + hours;
	}else {
		hours = hours.toString();
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}else {
		minutes = minutes.toString();
	}
	document.getElementById("time").innerHTML = hours + " : " + minutes;
}