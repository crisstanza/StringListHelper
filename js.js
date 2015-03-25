(function() {

	function start() {
		var jsus = new JSUS(StringListHelperTest);
		jsus.start('display');
		jsus.end();
	}

	window.addEventListener('load', start, false);

})();
