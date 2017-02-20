$(function(){
	// articleList页面 ajax数据传输(获取数据库中的数据)
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/articleTitle',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<div class="articalList">'+
			'<h3 class="articleTitle">'+response[i].title+'</h3>'+
			'<div class="content">'+
				'<img src="'+response[i].img+'" alt="">'+
				'<p class="textInfo">'+response[i].content+'</p>'+
				'<p class="ydqw" onclick="ydqw('+response[i].id+')">阅读全文>></p>'+
			'</div>'+
			'<div class="markInfo">'+
				'<span class="time">'+new Date(response[i].time).toLocaleDateString()+'</span>'+
				'<span>作者:<span class="name">'+response[i].author+'</span></span>'+
			'</div>'+
		'</div>';
				$('.listWrap').append(ma);
			}
		}
	})	
})
//跳转详情页面(要放在与加载函数外边)
function ydqw(data){
	window.location.href="/articleDetail?data="+data;
}
