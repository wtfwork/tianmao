// 动态生成显示当前图片的按钮
for(var i = 0; i < $($('.banner_img_container')[0]).children().length; i++){
	var li = document.createElement('li');
	$('.bg_btn')[0].appendChild(li);
}

// 鼠标移入显示左点击按钮
$('#leftTouch')[0].onmouseover = $('#btnL')[0].onmouseover = function(){
	$('#btnL').css('opacity',0.6);
}
$('#leftTouch')[0].onmouseout = $('#btnL')[0].onmouseout = function(){
	$('#btnL').css('opacity',0);
}
// 鼠标移入显示右点击按钮
$('#rightTouch')[0].onmouseover = $('#btnR')[0].onmouseover = function(){
	$('#btnR').css('opacity',0.6);
}
$('#rightTouch')[0].onmouseout = $('#btnR')[0].onmouseout = function(){
	$('#btnR').css('opacity',0);
}

// 
	
	
	
	
	
	
	
	
	
	
	
	


























/*// slidesjs 自动播放的轮播图
$(function() {
      $('.banner_img_container').slidesjs({
        width: 549,
        height: 287,
        play: {
          active: true,
          auto: true,
          interval: 2000,
          swap: true
        }
      });
});*/
