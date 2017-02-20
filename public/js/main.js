$(function(){
	//页面跳转
	$('#sy,#wz,#tp,#yy,#dy,#lyb,#log,#close,#close2,#register,#register2,#logIn').on('mouseover',function(){
		$(this).css('cursor','pointer');
	})
	$('.nav li').on('mouseover',function(){
		$(this).css('fontWeight','bold');
	})
	$('.nav li').on('mouseout',function(){
		$(this).css('fontWeight','normal');
	})
	$('#sy').click(function(){
		window.location.href='/';
	})
	$('#wz').click(function(){
		window.location.href='/articleList';
	})
	$('#tp').click(function(){
		window.location.href='/imgList';
	})
	$('#yy').click(function(){
		window.location.href='/musicList';
	})
	$('#dy').click(function(){
		window.location.href='/movieList';
	})
	$('#lyb').click(function(){
		window.location.href='/message';
	})
	//后台管理页中的tab切换
	$('.adminNav li').on('mouseover',function(){
		$(this).css('cursor','pointer');
		$(this).css('fontWeight','bold').siblings().css('fontWeight','normal');
	})
	$('.adminNav li').on('mouseout',function(){
		$(this).css('fontWeight','normal');
	})
	$('.adminNav li').click(function(){
		$('.adminContent').css('display','none');
		$('.adminNav li').css('background','#fff');
		$('.adminContent').eq($(this).index()).css('display','block');
		$(this).css('background','green');
	})
	//首页点击登录的事件
	$('#log').click(function(){
		$('#syLog').css('display','block');
	})
	if($('#syLog').css('display')=='block'){
		$('body').height($(window).height()).css('overflow-y','hidden');	
	}else{
		$('body').height($(window).height()).css('overflow-y','auto');		
	}
	$('#close').click(function(){
		$('#syLog').css('display','none');
	})
	//首页点击注册的事件
	$('#register').click(function(){
		$('#syLog').css('display','none');
		$('#syRegister').css('display','block');
	})
	$('#close2').click(function(){
		$('#syRegister').css('display','none');
	})
})
