function createIncrement()
 {
    letcount=0;
    function increment()
     {
        count++;
    }
 let message=`Count is${count}`; 
    
    functionlog()
     {
        console.log(message);
     }
  return[increment,log];
 }
    const[increment,log] =createIncrement();
    increment();
    increment();
    increment();
    log();// What is logged?

When we are logging the message we are getting the output as “0”.
But, if we login the count we will get the output as “3”.

We execute the function at this line 16

There is a count variable which is initialize as zero, then there is a increment function which closes upon the count variable.
then the message  string is created, it does not have anything to do with the count variable, the count variable is created immediately and it is “zero” which is complete string.
Then the log function logges the message.

Then we increment 3 times this means it only increases the count variable not the message.
As the “count++” is under the scope of increment function.

