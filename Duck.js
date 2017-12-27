function duckCount(arguments)
{
	var i=0,num=0;
	if(arguments.hasOwnProperty('quack'))
	{
		num++;
		i++;
	}
	else{
		i++;
	}
	return num;
}
module.exports=duckCount
/*
function duckCount() 
 {     
 return Array.prototype.slice.call(arguments).filter(function(obj) {
	 return Object.prototype.hasOwnProperty.call(obj, 'quack')  
	 }).length   
	 }     
	 module.exports = duckCount
	 */