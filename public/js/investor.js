var username = location.pathname.split('/')[2];
$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'profile/'+ username,
		success: function(investor){
			console.log(investor);
		}
	});
	$.ajax({
		type: 'GET',
		url: 'farmowned/'+ username,
		success: function(farm){
			console.log(farm);
		}
	});
});