~ function(pro) {
	function queryURLParameter() {
		var reg = /([^?=&#]+)=([^?=&#]+)/g;
		var obj = {};
		this.replace(reg, function() {
			obj[arguments[1]] = arguments[2];
		})
		return obj;
	}
	pro.queryURLParameter = queryURLParameter;
}(String.prototype);
/*loading显示*/
var loadingRender = (function() {
	var ary = ["icon.png", "zf_concatAddress.png", "zf_concatInfo.png", "zf_concatPhone.png", "zf_course.png", "zf_course1.png", "zf_course2.png", "zf_course3.png", "zf_course4.png", "zf_course5.png", "zf_course6.png", "zf_cube1.png", "zf_cube2.png", "zf_cube3.png", "zf_cube4.png", "zf_cube5.png", "zf_cube6.png", "zf_cubeBg.jpg", "zf_cubeTip.png", "zf_emploment.png", "zf_messageArrow1.png", "zf_messageArrow2.png", "zf_messageChat.png", "zf_messageKeyboard.png", "zf_messageLogo.png", "zf_messageStudent.png", "zf_outline.png", "zf_phoneBg.jpg", "zf_phoneDetail.png", "zf_phoneListen.png", "zf_phoneLogo.png", "zf_return.png", "zf_style1.jpg", "zf_style2.jpg", "zf_style3.jpg", "zf_styleTip1.png", "zf_styleTip2.png", "zf_teacher1.png", "zf_teacher2.png", "zf_teacher3.jpg", "zf_teacher4.png", "zf_teacher5.png", "zf_teacher6.png", "zf_teacherTip.png"];

	var $loading = $("#loading");
	var $progressBox = $loading.find(".progressBox");
	var step = 0;
	var total = ary.length;
	return {
		init: function() {
			$loading.css("display", "block");
			$.each(ary, function(index, item) {
				var oImg = new Image;
				oImg.src = "img/" + item;
				oImg.onload = function() {
					step++;
					$progressBox.css("width", step / total * 100 + "%");
					if(step == total) {
						if(page === 0)return;
						window.setTimeout(function() {
							$loading.css("display", "none");
						}, 2000)
					}
				}
			})
		}
	}
})();

var phoneRender = (function(){
	var $phone = $("#phone");
	return{
		init:function(){
			$phone.css("display","block");
		}
	}
})();
/*控制page显示*/
var urlObj = window.location.href.queryURLParameter();
var page = parseFloat(urlObj["page"]);
isNaN(page) || page === 0 ? loadingRender.init() : null;
page === 1 ? phoneRender.init() : null;