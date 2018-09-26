//define(["jquery","shirt"], function($,st) {
//	
//	return function(){$("<div>{color:"+ st.color +",size:" + st.size + "}</div>").appendTo($("body"));};
//});


//define(["require", "jquery"], function(require) {
//    var st = require("shirt");
//	return function(){$("<div>{color:"+ st.color +",size:" + st.size + "}</div>").appendTo($("body"));};
//});


define(function(require) {
    var $ = require("jquery");
    var st = require("shirt");
    var stUrl = require.toUrl("shirt");
	return function(){$("<div>{color:"+ st.color +",size:" + st.size + "} <br/> and stUrl="+ stUrl +"</div>").appendTo($("body"));};
});

