/***************************************************************
 ************ LIBRARY: String List Helper Vs. 1.0.0 ************
 ***************************************************************/
var StringListHelper = function(string) {
	this.list = string ? string.split(StringListHelper.SEP) : [];
};
(function() {
	StringListHelper.SEP = ',';
	function search(list, value) {
		return list.lastIndexOf(value);
	}
	function contains(list, value) {
		var index = search(list, value);
		return index >= 0;
	}
	function remove(list, value) {
		var index = search(list, value);
		if (index >= 0) {
			list.splice(index, 1);
		}
	}
	StringListHelper.prototype.add = function(value) {
		if (!contains(this.list, value)) {
			this.list.push(value);
		}
	};
	StringListHelper.prototype.remove = function(value) {
		remove(this.list, value);
	};
	StringListHelper.prototype.toString = function() {
		return this.list.join(StringListHelper.SEP);
	};
})();
/***************************************************************
 ***************************************************************/
