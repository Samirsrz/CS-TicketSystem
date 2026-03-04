1) What is JSX, and why is it used?
Ans: JSX is Javascripts XML where we can write Javascript functions and html codes in the same file so that its easier and more efficient to build web applications. We can see which functions we are dealing and we can also put values dynamically by fetching the data

2) What is the difference between State and Props?
Ans: State can be changed and can be toggled, it is basically used to toggle or handle UI according to our conditions 
     whereas props are properties or objects that we sent to other components to show the values dynamically to re-render the components , state can be declared and       later changed but props cannnot be changed by any of the child component

3) What is the useState hook, and how does it work?
   Ans: useState is a builtin react hook or functions which can be use to control a state of a component, we declare it first const[count,setCount] = useState(0) at first the value of the count we have set to 0, we can handle a event and in onclick we can use setCount to change the value of the count

4) How can you share state between components in React?
   Ans: We can use lifting up the state, if we think that this values of the state is needed in both components we declare them in the common components, then we pass the state into the components. 2nd way -> We use Prop drilling when we see that the state values should be changed by the children components so we can give child components as a prop then destructure them in the child component and later use them    

5) How is event handling done in React?
   Ans: In React, event handling works almost like regular HTML, but with a cleaner and more JavaScript-focused approach. We use camelCase names such as onClick and calls a function directly . When we think we need to click a button or type in an input,React runs that function and gives us an event object to work with. Inside the function, we can read values , stop default actions using preventDefault(), or update state. When the state changes, React automatically re-renders the component so the UI updates smoothly.




