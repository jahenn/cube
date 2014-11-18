$(document).ready(function(){
	$.ajax({
		url: '/users/all',
		dataType: 'json',
		success: function(data){
			var table = $('.table');
			$.each(data, function(i, row){
				$(table).append(function(){
					var tr = $("<tr></tr>");
					tr.append("<td>"+row.id+"</td>");
					tr.append("<td>"+row.username+"</td>");
					tr.append("<td>"+row.password+"</td>");
					return tr;
				});
			});
		}
	});
});