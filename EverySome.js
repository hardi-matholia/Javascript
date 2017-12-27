function checkUsersValid(goodUsers)
{     
	return function allUsersValid(element)       	{	 
	       return element.every(function(element)	   
		{	 				 return goodUsers.some(function(goodUser)
 	 	 {
		 	return goodUser.id === element.id;	      					 });
		 })
      };
}        module.exports = checkUsersValid 