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
			c_name: '�Ƿ�'
		},

		'baz': {
			c_color: 'skyblue'
		}
	},

	//shim���õļ�����path������ļ�����Ҳ����ģ���������ģ�鲻����baseUrl�£�����Ҫ��path������ģ������ģ��·��
	//shim ��exportsû�и����ף���д�ﲻҪexportsҲ�����е�ͨ��
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

	//��������һ��shim���õ�д��
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

	//�����������ģ���js�ļ����Ӻ����ʱ���ַ���������������Ӧ��ȥ��
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