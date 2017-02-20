$(function(){
	$.ajax({
		type:'GET',
		dataType:'json',
		data:{id:id},
		url:'/articleDetaildata',
		success:function(response,status,xhr){
			console.log(response);
			$('.detailTitle').text(response[0].title);
			$('.time').text(new Date(response[0].time).toLocaleDateString());
			$('.name').text(response[0].author);
			$('.detailText').text(response[0].content);
		}
	})	
})
