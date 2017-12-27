function countWords(inputWords)
{
	return inputWords.reduce(function(object,index)
	{
		if(index in object)
		{
			object[index]++;
		}
		else
		{
			object[index]=1;
		}
		return object;
	},{});
}
module.exports = countWords;