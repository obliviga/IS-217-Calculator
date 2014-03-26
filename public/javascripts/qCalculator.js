test( "Input empty test", function() {
	ok( "non-empty", "non-empty string succeeds" );
});

test( "Check if input values are the same", function() {
	input = 1;
	value = 1;
	ok( input == value, "Input and values are the same." );
});

test( "Test if values are entered in input", function() {
	equal( 1, "1", "String '1' was entered as the value" );
});

test( "Testing two opposite values do not have the same value", function() {
	notEqual( 1, -1, "Positive 1 and negative 1 do not have the same the value." );
});