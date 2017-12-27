function repeat(operation,num)
{	
	while(num!=0)
{
	operation(num);
	num--;
}
}
repeat(operation,10);
function operation(n)
{
	console.log(n);
}
module.exports = repeat;