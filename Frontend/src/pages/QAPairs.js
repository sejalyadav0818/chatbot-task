export const qaPairs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How to create a React component?",
    answer:
      "To create a React component, you can use the 'React.Component' class or functional components. Define the component's render method to return JSX.",
  },
  {
    question: "What is the latest version of React?",
    answer:
      "As of my knowledge cutoff date in January 2022, the latest stable version of React is 18.0. However, React continues to receive updates, so there may be newer versions available since then.",
  },
  {
    question: "What is the purpose of the 'key' prop in React lists?",
    answer:
      "The 'key' prop is used to give React a way to identify and differentiate between items in a list of components. It helps React efficiently update and re-render lists when items are added, removed, or reordered.",
  },
  {
    question: "What is JSX in React?",
    answer:
      "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. JSX is used in React to define the structure of user interfaces.",
  },
  {
    question: "What are React components?",
    answer:
      "React components are the building blocks of a React application. They are reusable and encapsulate a part of the user interface and its logic. Components can be class-based or functional.",
  },
  {
    question: "What is the 'state' in React components?",
    answer:
      "The 'state' in React is a JavaScript object that represents the data a component needs to render and manage. When the state changes, React re-renders the component to reflect the new data.",
  },
  {
    question: "What is a prop in React?",
    answer:
      "A 'prop' (short for 'property') is a mechanism for passing data from a parent component to a child component in React. Props allow you to configure and customize child components.",
  },
  {
    question: "What is the purpose of 'ReactDOM.render'?",
    answer:
      "'ReactDOM.render' is a method used to render a React component into the DOM. It takes two arguments: the component to render and the DOM element where the component should be rendered.",
  },
  {
    question: "What is a React Hook?",
    answer:
      "React Hooks are functions that allow you to use state and other React features in functional components. Some commonly used hooks include 'useState', 'useEffect', and 'useContext'.",
  },
  {
    question: "What is the context API in React used for?",
    answer:
      "The context API in React is used for managing global state that needs to be accessed by multiple components in an application. It provides a way to share data without having to pass props down through every level of the component tree.",
  },
  {
    question: "What is the purpose of React Router?",
    answer:
      "React Router is a library for adding routing and navigation to a React application. It allows you to create multiple 'routes' for different views or pages within a single-page application.",
  },
  {
    question: "What are controlled components in React?",
    answer:
      "Controlled components are React components in which the form elements (e.g., input, textarea, select) are controlled by React's state. Their values are derived from state and are updated via React event handlers.",
  },
  {
    question:
      "What are the key differences between React class components and functional components?",
    answer:
      "React class components are based on JavaScript classes and can have state and lifecycle methods. Functional components are simpler and use functions to define components. With the introduction of hooks, functional components can also manage state and lifecycle.",
  },
  {
    question:
      "What is the significance of the 'shouldComponentUpdate' method in React?",
    answer:
      "The 'shouldComponentUpdate' method is used to optimize rendering performance in React. It determines whether a component should re-render after a change in state or props. By default, it returns 'true', but you can customize it to prevent unnecessary renders.",
  },
  {
    question: "What is Redux in the context of React?",
    answer:
      "Redux is a state management library for JavaScript applications, often used in conjunction with React. It provides a predictable and centralized way to manage and share application state.",
  },
  {
    question: "What is a React portal?",
    answer:
      "A React portal allows you to render a component's content at a different place in the DOM hierarchy, such as outside the parent DOM element. It is useful for modals, popovers, and other scenarios where the content should be positioned differently.",
  },
  {
    question: "What are the benefits of using React for web development?",
    answer:
      "Some benefits of using React for web development include a component-based architecture for reusability, a virtual DOM for performance optimization, a large and active community, and a rich ecosystem of libraries and tools.",
  },
  {
    question: "Explain the concept of 'unidirectional data flow' in React.",
    answer:
      "Unidirectional data flow is a core concept in React, where data flows in one direction, from parent components to child components. Changes in data trigger re-renders in a top-down manner, making it easier to understand and debug application behavior.",
  },
  {
    question: "What is the purpose of the 'useState' hook in React?",
    answer:
      "The 'useState' hook is used to add state management to functional components in React. It allows you to define and update component state without the need for class-based components.",
  },
  {
    question: "What is React Native, and how does it differ from React?",
    answer:
      "React Native is a framework for building mobile applications using React. It differs from React in that it targets mobile platforms (iOS and Android) and uses native components for rendering, providing a more native-like experience.",
  },
  {
    question: "What is a higher-order component (HOC) in React?",
    answer:
      "A higher-order component is a design pattern in React that allows you to reuse component logic. It is a function that takes a component and returns a new enhanced component with additional behavior or props.",
  },
  {
    question: "What is server-side rendering (SSR) in React?",
    answer:
      "Server-side rendering is a technique in React where the initial rendering of the application is done on the server, and the resulting HTML is sent to the client. This can improve performance and SEO.",
  },
  {
    question: "What is the purpose of the 'useEffect' hook in React?",
    answer:
      "The 'useEffect' hook is used for managing side effects in functional components. It allows you to perform tasks such as data fetching, DOM manipulation, and subscriptions after the component has rendered.",
  },
  {
    question: "Explain the concept of 'component lifecycle' in React.",
    answer:
      "The component lifecycle in React refers to the sequence of phases a component goes through, including mounting, updating, and unmounting. It provides methods like 'componentDidMount' and 'componentWillUnmount' for handling..",
  },
  {
    question: "What is the purpose of the 'useContext' hook in React?",
    answer:
      "The 'useContext' hook allows functional components to access values from the nearest 'Context' provider in the component tree. It simplifies state management and prop drilling in larger applications.",
  },
  {
    question: "What is the significance of keys in React lists?",
    answer:
      "Keys are used to uniquely identify elements in a list in React. They are important for efficient updates and help React distinguish between different items when the list changes.",
  },
  {
    question: "What is the purpose of 'React.memo' in functional components?",
    answer:
      "'React.memo' is a higher-order component in React that memoizes a functional component, preventing unnecessary re-renders when its props have not changed. It can help optimize performance.",
  },
  {
    question: "Explain the concept of 'component composition' in React.",
    answer:
      "Component composition is the practice of building complex UIs by combining and reusing smaller, self-contained components. It promotes modularity and maintainability in React applications.",
  },
  {
    question: "What is the 'children' prop in React components?",
    answer:
      "The 'children' prop represents the content passed between the opening and closing tags of a component in JSX. It is used to compose components and render dynamic content within them.",
  },
  {
    question: "What are React keys, and why are they important in lists?",
    answer:
      "React keys are special attributes used to identify and differentiate elements in lists. They are crucial for optimizing list updates by helping React efficiently determine which items have been added, removed, or changed.",
  },
  {
    question: "What is a PureComponent in React?",
    answer:
      "A PureComponent is a subclass of a React component that automatically performs a shallow comparison of its props and state to determine if it needs to re-render. This can improve performance in some cases.",
  },
  {
    question: "What is the 'dangerouslySetInnerHTML' prop in React?",
    answer:
      "The 'dangerouslySetInnerHTML' prop is used to render HTML content within a React component, but it should be used with caution because it can expose the application to cross-site scripting (XSS) attacks.",
  },
  {
    question: "What is the purpose of 'PropTypes' in React?",
    answer:
      "PropTypes are used for type checking and documenting the expected types of props passed",
  },
];
