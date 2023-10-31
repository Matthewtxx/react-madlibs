### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a powerful tool for building interactive and dynamic web applications, and it is a popular choice for many developers due to its component-based architecture, performance optimizations, and a large and supportive community. You should consider using React when you need to create user interfaces that are highly responsive, reusable, and maintainable.

- What is Babel?
Babel is a JavaScript compiler that enables developers to write modern JavaScript code while ensuring backward compatibility with older browsers and environments.

- What is JSX?
JSX stands for "JavaScript XML," and it is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.

- How is a Component created in React?
1. import react, 2. define the component, 3. render JSX, 4. export the component, 5. use the component, 6. render components

- What are some difference between state and props?
Props are used for passing data from parent to child components, while state is used for managing component-specific data and handling changes within a component. 

- What does "downward data flow" refer to in React?
"Downward data flow" in React refers to the practice of passing data from parent components to child components, creating a unidirectional or top-down flow of information within the component tree. In this architecture, data or props are generally handed down from a higher-level component to lower-level components, with the topmost component being the source of truth.

- What is a controlled component?
A controlled component in React is a form element whose value is controlled by the component's state.

- What is an uncontrolled component?

An uncontrolled component in React is a form element, such as an input field or a textarea, where the value is not controlled by the component's state. Instead, the component's value is directly managed by the DOM, and React doesn't actively keep track of the input's value. 

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is used when rendering a list of components or elements in React to help React identify and efficiently update the components in the list. It is a special and unique property that should be assigned to each item in a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using a stable and unique identifier as the key prop helps React accurately track changes, efficiently update the DOM, and maintain component state. It leads to a more reliable and predictable behavior in your application when working with dynamic lists.

- Describe useEffect.  What use cases is it used for in React components?
use it to run side effects like fetching data from an API, starting a timer, and manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef in React is primarily used for accessing and interacting with DOM elements and for holding mutable values that don't trigger component re-renders.

- When would you use a ref? When wouldn't you use one?
you would use it for accessing DOM elements or storing mutable values across renders. you wouldnt use it for replacing state or props

- What is a custom hook in React? When would you want to write one?
custom hooks in React are a way to encapsulate and share reusable logic, making your code more modular and maintainable. 
