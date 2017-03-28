var randomInteger = function(val) {
	var ival = Math.random()*256;
	ival = Math.floor(ival);
	return ival;
}

var rInt ;
var count = 0;
var i;
for (i = 0; i < 65536; i++){
	rInt    = randomInteger();
	if (rInt == 13)count++;
	process.stdout.write(rInt+" ");
}
process.stdout.write("\n\n\n13 hit "+count+" times.");
