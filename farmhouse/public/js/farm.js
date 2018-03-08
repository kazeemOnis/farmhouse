$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'farm/getfarms',
		success: function(farms){
			// use jquery to put the farms into the farm.html page
			// there are currently 3 farms they're listed out on the console
			console.log(farms);
		}
	});
});