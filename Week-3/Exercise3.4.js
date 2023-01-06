
//using the concept of closure
function createStack() {
     
      const items = []; //items has been moved to a variable inside createStack() scope.from the outside of createStack() scope, there is no way to access or modify items array. items is now a private variable, and the stack is encapsulated: only push() and pop() method are public.
      return { 
      push(item) 
      {
        items.push(item);
      },
        pop() {
          return items.pop();
          }
      };
  }
      const stack= createStack();
      stack.push(10);
      stack.push(5);
      console.log(stack.pop());// => 5
      stack.items;  // => [10]
      
      
      