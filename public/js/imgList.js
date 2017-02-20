$(function(){
	// ImgTitle页面 ajax数据传输(获取数据库中的数据)
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/ImgTitle',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<li>'+
							'<img src="'+response[i].img+'" alt="">'+
							'<span class="imgText imgTime">'+new Date(response[i].time).toLocaleDateString()+'</span>'+
							'<span class="imgText describe">'+response[i].content+'</span>'+
						'</li>';
				$('.imgList').append(ma);
			}
		}
	})	
})
