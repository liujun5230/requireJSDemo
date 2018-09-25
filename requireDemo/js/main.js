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
		wire: '../app/wire'
	}
});

// Start the main app logic.
require(["jquery","shirt"], function($,shirt) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
		var ts = shirt;
		$("#mcover").html(ts.size);
});


// Start the main app logic.
require(["jquery","wire"], function($,w) {
        //jQuery, canvas and the app/sub module are all
        //loaded and can be used here now.
		w();
});