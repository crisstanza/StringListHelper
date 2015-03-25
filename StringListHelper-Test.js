function StringListHelperTest() {
}

/*
	StringListHelperTest.beforeClass = function() {};
	StringListHelperTest.afterClass = function() {};
	StringListHelperTest.prototype.before = function() {};
	StringListHelperTest.prototype.after = function() {};
*/

StringListHelperTest.prototype.testEmpty = function() {
	var helper = new StringListHelper('');
	var expected = '';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.testUndefined = function() {
	var helper = new StringListHelper();
	var expected = '';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.test1 = function() {
	var helper = new StringListHelper('a');
	var expected = 'a';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.test1add1 = function() {
	var helper = new StringListHelper('a');
	helper.add('b');
	var expected = 'a,b';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.test1add2 = function() {
	var helper = new StringListHelper('a');
	helper.add('b');
	helper.add('c');
	var expected = 'a,b,c';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.test1add2rem1 = function() {
	var helper = new StringListHelper('a');
	helper.add('b');
	helper.add('c');
	helper.remove('b');
	var expected = 'a,c';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.testEmptyAdd1rem1 = function() {
	var helper = new StringListHelper('');
	helper.add('x');
	helper.remove('x');
	var expected = '';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.testUndefinedAdd1rem1 = function() {
	var helper = new StringListHelper();
	helper.add('x');
	helper.remove('x');
	var expected = '';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.testEmptyAdd1 = function() {
	var helper = new StringListHelper('');
	helper.add('ZZZ');
	var expected = 'ZZZ';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.testUndefinedAdd2 = function() {
	var helper = new StringListHelper();
	helper.add('Lorem');
	helper.add('Ipsum');
	var expected = 'Lorem,Ipsum';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

StringListHelperTest.prototype.testEmptyRem0 = function() {
	var helper = new StringListHelper('');
	helper.remove('inexistent');
	var expected = '';
	var current = helper.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};
