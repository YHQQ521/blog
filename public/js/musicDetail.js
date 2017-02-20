$(function(){
	$.ajax({
		type:'GET',
		dataType:'json',
		data:{id:id},
		url:'/musicDetaildata',
		success:function(response,status,xhr){
			console.log(response);
			$('.detailTitle').text(response[0].title);
			$('.time').text(new Date(response[0].time).toLocaleDateString());
			$('.name').text(response[0].star);
			$('.audio audio').attr('src',response[0].music);
			$('.detailText').text(response[0].lyrics);
		}
	})	
})
