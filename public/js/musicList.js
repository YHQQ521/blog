$(function(){
	// musicList页面 ajax数据传输(获取数据库中的数据)
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/musicTitle',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<li onclick="ckxy('+response[i].id+')">'+response[i].title+'</li>';
				$('.musicList').append(ma);
			}
		}
	})	
})
//跳转详情页面(要放在与加载函数外边)
function ckxy(data){
	window.location.href="/musicDetail?data="+data;
}
