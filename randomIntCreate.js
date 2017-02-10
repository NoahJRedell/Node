var randomInteger = function(val) {
	var ival = Math.random()*256;
	//console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
var rInt ;
var i;
for(i = 0; i < 65536999999; i++){
rInt	= randomInteger();
//console.log(rInt+",");
process.stdout.write(rInt+",");
}
