$(function(){
	//首页登录 ajax将数据插入数据库
	$('#logIn').click(function(){
		$.ajax({
			type:'POST',
			dataType:'json',
			url:'/logIn',
			data:{user:$('#user0').val(),password:$('#password0').val()},
			error:function(response,status,xhr){
				console.log('出错了');
			},
			success:function(response,status,xhr){
				if(response==0){
					alert('用户名不存在');
				}else if(response==2){
					alert('密码错误');
				}else{
					alert(response.user);
					$('#syLog').css('display','none');
					$('#log').css('display','none');
					$('#name').css('display','block');
					$('#name').text(response.user);
				}
			}
		})
	}) 
	//首页注册 ajax将数据插入数据库
	$('#register2').click(function(){
		$.ajax({
			type:'GET',
			dataType:'json',
			url:'/register',
			data:{user:$('#user').val(),password:$('#password').val()},
			success:function(response,status,xhr){
				console.log('插入成功');
			}
		})
	}) 

	// 首页 获取文章列表数据
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/homeArticle',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<h3 class="articleTitle">'+response[i].title+'</h3>'+
			'<div class="content">'+
				'<img src="'+response[i].img+'" alt="">'+
				'<p class="textInfo">'+response[i].content+'</p>'+
				'<p class="ydqw" onclick="ydqw('+response[i].id+')">阅读全文>></p>'+
			'</div>'+
			'<div class="markInfo">'+
				'<span class="time">'+new Date(response[i].time).toLocaleDateString()+'</span>'+
				'<span>作者:<span class="name">'+response[i].author+'</span></span>'+
			'</div>';
				$('.articleRecomend').append(ma);
			}
		}
	})
	// 首页 获取图片列表数据
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/homeimages',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<li>'+
							'<img src="'+response[i].img+'" alt="">'+
						'</li>';
				$('#imgRecomend ul').append(ma);
			}
		}
	})
	// 首页 获取音乐列表数据
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/homemusic',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<li onclick="ckxyMusic('+response[i].id+')">'+response[i].title+'</li>';
				$('#musicRecomend ul').append(ma);
			}
		}
	})
	// 首页 获取电影列表数据
	$.ajax({
		type:'GET',
		dataType:'json',
		url:'/homemovie',
		success:function(response,status,xhr){
			console.log(response);
			for(var i=0;i<response.length;i++){
				var ma=	'<li onclick="ckxyMovie('+response[i].id+')">'+response[i].title+'</li>';
				$('#movieRecomend ul').append(ma);
			}
		}
	})		
})
//跳转详情页面(要放在与加载函数外边)
//文章
function ydqw(data){
	window.location.href="/articleDetail?data="+data;
}
//音乐
function ckxyMusic(data){
	window.location.href="/musicDetail?data="+data;
}
//电影
function ckxyMovie(data){
	window.location.href="/movieDetail?data="+data;
}