var lastLeft = new Date();
var lastRight = new Date();
var shaking = false;
var stopNum = 0;
var ds, a1, a2, a3, a4, a5, a6;
var flag=0; //博饼初始状态
// window.sounds = new Object();
// var sound = new Audio(img_dir+'/bo.mp3');
var gamecoin = 0;
// sound.load();
// 首先，定义一个摇动的阀值
var SHAKE_THRESHOLD = 800;
// 定义一个变量保存上次更新的时间
var last_update = 0;
// 紧接着定义x、y、z记录三个轴的数据以及上一次出发的时间
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;

function deviceMotionHandler(eventData) {
　　// 获取含重力的加速度
　　var acceleration = eventData.accelerationIncludingGravity; 

　　// 获取当前时间
　　var curTime = new Date().getTime(); 
　　var diffTime = curTime -last_update;
　　// 固定时间段
　　if (diffTime > 100) {
　　　　last_update = curTime; 

　　　　x = acceleration.x; 
　　　　y = acceleration.y; 
　　　　z = acceleration.z; 

　　　　var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000; 

　　　　if (speed > SHAKE_THRESHOLD) { 
　　　　　　// TODO:在此处可以实现摇一摇之后所要进行的数据逻辑操作
　　　　　　begin_func();
			//alert("test yao!");
		}

　　　　last_x = x; 
　　　　last_y = y; 
　　　　last_z = z; 
	} 
}

window.onload = function() {
	window.scroll(0, 0);
	
	
	if (window.DeviceMotionEvent) {
		
　　　　// 移动浏览器支持运动传感事件
　　　　window.addEventListener('devicemotion', deviceMotionHandler, false);
	}
	
	gamecoin = parseInt($("#id_gamecoin").html());

	//var str = aaajax('./initGame');
	//
	//switch (str.status) {
    //
	//	case '200':
	//		$("#id_leftcount").html(str.times);
	//		gamecoin = parseInt(str.score);
	//		addinfo(str);
	//		break;
	//	case '204':
	//		$("#txt").show();
	//		$("#txt").html("网络出错啦,请稍候再来！");
	//		break;
	//	case '205':
	//		alert("本次博饼活动已经结束！");
	//		window.location.href = "../Login/sign.html";
	//		break;
	//	case '300':
	//		$("#txt").html("您还没登录哟！");
	//		alert("您还没登录哟！");
	//		window.location.href = "../Login/sign.html";
	//		break;
	//	default:
	//		$("#txt").html("出错啦,请重新登录！");
	//		break;
	//}
}

function imghide() {
	
	var str = bbajax(app_dir+'/Index/startGame');
	
	
	switch (str.status) {
		case '200':
			// sound.play();						
			shake.play();
			$('.dice').show().addClass('active');
			
			ds = str.roll;
			a1 = ds.substr(0, 1);
			a2 = ds.substr(1, 1);
			a3 = ds.substr(2, 1);
			a4 = ds.substr(3, 1);
			a5 = ds.substr(4, 1);
			a6 = ds.substr(5, 1);
			
			
			$('.dice1').children('img').attr('src', img_dir+"/dian"+a1 +".png");
			$('.dice2').children('img').attr('src', img_dir+"/dian"+a2 +".png");
			$('.dice3').children('img').attr('src', img_dir+"/dian"+a3 +".png");
			$('.dice4').children('img').attr('src', img_dir+"/dian"+a4 +".png");
			$('.dice5').children('img').attr('src', img_dir+"/dian"+a5 +".png");
			$('.dice6').children('img').attr('src', img_dir+"/dian"+a6 +".png");
			//for (var i=0; i < 6; i++){
			//	$('.dice'+[i+1]).children('img').attr('src', '/images/bobingh5/common/dice'+resultArray[i]+'.png');
			//};
			//document.getElementById("rezult").innerHTML = "<img src='"+img_dir+"/dian"+a1+".png' id='p1' class='p_1' /> <img src='"+img_dir+"/dian"+a2+".png' id='p2' class='p_2' /> <img src='"+img_dir+"/dian"+a3+".png' class='p_3' /> <img src='"+img_dir+"/dian"+a4+".png' id='p4' class='p_4' /> <img src='"+img_dir+"/dian"+a5+".png' id='p5' class='p_5' /> <img src='"+img_dir+"/dian"+a6+".png' id='p6' class='p_6' />";
			

			addinfo(str);

			
			break;
		case '201':
			$("#txt").html("您的博饼次数已经用完！");
			break;
		case '204':
			$("#txt").html("本次博饼活动已经结束！");
			break;
		default:
			$("#txt").html("出错啦,请返回首页重新进入博饼！");
			//window.location.reload();
			break;
	};
	$("#loading").hide();
	$("#rezult").show();
	$("#boyiba").attr("disabled", false);
	//$("#i_bg").attr("src","images/l"+arr[5]+".wav")
}

function addinfo(str) {
	// bgsound = document.getElementById('audio');
	// bgsound.load();
	
	setTimeout(diceReset, 1000);
	
	setTimeout(function(){
		$("#id_leftcount").html(str.times);
			
		// $("#my_rank").html(str.my_rank);
		// gamecoin += parseInt(str.score_each);
		// var gchtml = document.getElementById("id_gamecoin");
		// gchtml.innerHTML = gamecoin;
		if(str.hasLottery==1){		 
			$("#txt").html(str.word);
			$("#wx_share_desc").val(str.wx_share_msg);
			shareFn();
		}else{
			$("#txt").html('抱歉，您没搏到饼请继续努力！');
		}
		$("#txt").show();
		shake.pause();
		// bgsound.play();	
	}, 1500);
	// $("#prizepage").attr('src',public+'/Uploads/'+str.giftImg);
	// setTimeout(function(){
	// 	if(str.hasLottery==1){			 
	// 		$('#hasprize').show();
	// 	}else{
	// 		$('#noprize').show();
	// 	}		
	// },2000);
	//
	
	
	
	
	
}

function diceReset(){
	$('.dice').removeClass('active');
	// $('.dice6').addClass('active1');	
	flag=1;
	
}

var nowDate = 0, lastDate = 0;

function begin_func() {
		if(flag){
			flag=0;
			nowDate = new Date().getTime();
			//	alert(nowDate-lastDate);
			if (nowDate - lastDate < 1500) {
				lastDate = nowDate;
				return false;
			}
			
			var bbCount = parseInt($("#id_leftcount").html());
			if (bbCount > 0) {
				//		OnClick();
				$("#txt").hide();
				$("#rezult").hide();
				$("#yaobin").hide();
				$("#loading").show();
				$("#boyiba").attr("disabled", true);
				setTimeout(imghide, 500);

			} else {
				$("#txt").show();
				$("#txt").html("您今日次数已用完，分享可获一次机会！");
			}
		}
		
	 
	

}

function addOne(){
	
	$('#mcover').show();
	
}

var jqresult;
function bbajax(url) {
	
	$.ajax({
		url : url,
		type : 'post',
		dataType : "json",
		async : false,
		error : function(ret, error) {
			//alert(ret.responseText);
		},
		success : function(ret) {

			if (!ret) {
				return;
			}
			jqresult = ret;
		}
	});

	return jqresult;
}

function aaajax(url) {

	$.ajax({
		url : url,
		type : 'post',
		dataType : "json",
		async : false,
		error : function(ret, error) {
			//alert(ret.responseText);
		},
		success : function(ret) {
			
			if (!ret) {
				return;
			}
			jqresult = ret;
		}
	});

	return jqresult;
}

function ccajax(url) {

	$.ajax({
		url : url,
		type : 'post',
		dataType : "json",
		data : {
			type : "addOne"
		},
		async : false,
		error : function(ret, error) {
			//alert(ret.responseText);
		},
		success : function(ret) {

			if (!ret) {
				return;
			}
			jqresult = ret;
		}
	});

	return jqresult;
}

function shareHide(){
	
	$("#shareImg").hide();
	
}
