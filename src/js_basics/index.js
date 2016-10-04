
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
  if(i%2 == 0)
  {
  	return true;
  }
  else
  {
  	return false;
  }
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false

  let extension = str.split('.');

  if(extension.length > 1)
  {
  	return extension[extension.length-1];
  }
  else
  {
  	return false;
  }

};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
  var longest = "";

  for (var i = 0; i < arr.length; i++) 
  {
	if (typeof arr[i] == "string" && longest.length < arr[i].length) 
	{
    	longest = arr[i];
  	}
  }

  return longest;

};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.

  return str.split("").reverse().join("");
  
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.

  let i;

  for(i = 0; i < str.length/2; i++)
  {
  	if(str[i].toUpperCase() != str[str.length-i-1].toUpperCase())
  	{
  		return false;
  	}
  }

  return true;
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.

  var sum = 0;

  for (var i = 0; i < arr.length; i++) 
  {
    if (typeof arr[i] == "object")
    {
      sum += nestedSum(arr[i]);
    }
    else if(typeof arr[i] != 'number')
    {
    	sum += 0;
    }
    else
    {
      sum += arr[i];
    }
  }
  return sum;
};
