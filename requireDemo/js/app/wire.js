define(["jquery","shirt"], function($,st) {
	$("<div>{color:"+ st.color +",size:" + st.size + "}</div>").appendTo($("body"));
});