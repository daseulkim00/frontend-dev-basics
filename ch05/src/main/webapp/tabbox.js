// DOM Level 2 Event 처리: HTML element의 event Listener를 등록하는 방식
// 1) JavaScript Code(DOM API) 로만 작성하기

var tabBox = {
	init: function() {
		window.addEventListener("load", this.onWindowLoad);   // 이벤트리스너 윈도우에 등록 , load- 이벤트이름  밑에의 onWindowLoad 실행시키도록함
	},

	onTabClicked: function() {

		// unselect
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = '');

		// select
		this.className = "selected";
	},
	 {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];

		console.log(this);
	},
	onWindowLoad: function() {
		var liTabs = ul.getElementsByTagName("li");
		for (var i = 0; i < liTabs.length; i++) {
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	}
}