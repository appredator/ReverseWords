function reverseWords(str) 
{
  // Split string into array, reverse, and then join
  let newArray = str.split("").reverse().join("")
  
  //Split new string, reverse with spaces added
  return newArray.split(" ").reverse().join(" ")
}