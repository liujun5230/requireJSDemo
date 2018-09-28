requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
		jquery: 'jquery-1.7.2.min',
        app: '../app',
		shirt: '../app/shirt',
		wire: '../app/wire',
		person: '../app/person',
		bar: '../app/bar',
		baz: '../app/baz',
		blueborder: '../app/blueborder',
		bluetext: '../app/bluetext'
	},

	config: {
		'bar': {
			c_size: 'large',
			c_age: '52',
			c_name: '乔峰'
		},

		'baz': {
			c_color: 'skyblue'
		}
	},

	//shim配置的键名是path配置里的键名，也就是模块名，如果模块不是在baseUrl下，就需要在path里配置模块名和模块路径
	//shim 的exports没有搞明白，简写里不要exports也可以行得通啊
	shim: {

		'blueborder': {
            deps: ['jquery'],
            exports: 'blueBorder'
        },

		'bluetext': {
            deps: ['jquery'],
            exports: 'blueText'
        }

	},

	//这是另外一种shim配置的写法
	shim: {
        'blueborder': ['jquery'],
        'bluetext': ['jquery']
    },

	map: {
        'some/newmodule': {
            'foo': 'foo1.2'
        },
        'some/oldmodule': {
            'foo': 'foo1.0'
        }
    },

	//清浏览器缓存的，在js文件链接后面加时间字符串，生产环境里应该去掉
	urlArgs: "bust=" +  (new Date()).getTime(),
	scriptType: "text/javascript"

});

// Start the main app logic.
require(["jquery","shirt","bluetext","blueborder"], function($,shirt,blueText,blueBorder) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
		var ts = shirt;
		$("#mcover").html(ts.size);
		$("#mcover").blueText().blueBorder();
		console.log(333);
});


// Start the main app logic.
require(["person","wire",'baz','bar'], function(p,w,baz,bar) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
		w();
		var kk = bar;
		var ks = baz;
		console.log(kk);
		console.log(ks);
		//baz();

});