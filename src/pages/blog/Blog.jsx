import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">
        Welcome to my Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-5 p-10">
        <div className="card p-5 border shadow-lg border-purple-600">
          <h1 className="text-xl font-semibold">
            The differences between uncontrolled and controlled components.
          </h1>
          <p>
            In React, there are two ways to manage form inputs: through
            controlled and uncontrolled components. Controlled components are
            React components that render form elements whose values are
            controlled by React state. This means that the component's state is
            the source of truth for the current value of the form element. When
            the user types something into the form element, the value is updated
            in state and the component re-renders. This way, React maintains
            complete control over the form input values. Controlled components
            are typically used when you need to validate or manipulate the input
            values before submitting the form. On the other hand, uncontrolled
            components are form elements that manage their own state internally.
            In other words, the form element manages its own state, rather than
            React controlling the state. The value of the form element can still
            be accessed using the DOM, but it is not controlled by React state.
            Uncontrolled components are typically used when you just need to
            grab the input values after the user submits the form, without
            manipulating or validating them. To summarize, the main difference
            between controlled and uncontrolled components is that controlled
            components are managed by React state, while uncontrolled components
            manage their own state internally. Controlled components are useful
            when you need to manipulate or validate the input values before
            submitting the form, while uncontrolled components are useful when
            you just need to grab the input values without any additional logic.
          </p>
        </div>
        <div className="card  p-5 border shadow-lg border-purple-600">
          <h1 className="text-xl font-semibold">
            How to validate React props using PropTypes
          </h1>
          <p>
            React is a powerful and widely-used JavaScript library for building
            user interfaces. One of the key benefits of using React is its
            component-based architecture, which allows developers to create
            modular, reusable pieces of code that can be combined to build
            complex UIs. When working with components, it's important to ensure
            that the data being passed between them is of the correct type and
            shape. This is where PropTypes comes in. PropTypes is a library that
            enables typechecking in React applications. With PropTypes,
            developers can define the expected data types for each prop that is
            passed to a component. This includes data types such as strings,
            numbers, and booleans, as well as more complex types like objects
            and arrays. Additionally, PropTypes allows developers to specify
            whether a prop is required or optional, and to provide default
            values for props that are not specified. One of the key benefits of
            using PropTypes is that it can help catch errors early in
            development. By defining the expected types and shapes of props,
            developers can catch errors related to incorrect data types or
            missing props before they cause issues in the application. This can
            save time and effort in debugging and testing, and can lead to more
            reliable code. To use PropTypes in a React application, developers
            need to import the PropTypes library and add it to their component.
            They can then define the expected types and shapes of props using
            the PropTypes API. For example, to define a prop that is expected to
            be a string, developers can use PropTypes.string. To define an
            object prop with specific keys and values, developers can use
            PropTypes.shape. In summary, PropTypes is a valuable tool for
            ensuring the reliability and robustness of React applications. By
            enabling typechecking, developers can catch errors early and build
            more resilient applications. While it does require some additional
            code and effort, the benefits of using PropTypes can ultimately save
            time and effort in debugging and testing, and lead to more
            maintainable code over the long term.
          </p>
        </div>
        <div className="card  p-5 border shadow-lg border-purple-600">
          <h1 className="text-xl font-semibold">
            The difference between nodejs and express js
          </h1>
          <p>
            Node.js and Express.js are two widely used web development
            technologies that work together to build powerful and scalable web
            applications. Node.js is a server-side runtime environment that
            allows developers to write server-side applications in JavaScript.
            It provides a platform for building fast, scalable, and
            high-performance applications. Express.js, on the other hand, is a
            minimalist web framework built on top of Node.js that makes it easy
            to build web applications and APIs. One of the key differences
            between Node.js and Express.js is that Node.js is a runtime
            environment, whereas Express.js is a framework. Node.js provides a
            runtime environment that allows JavaScript code to be executed
            outside of a web browser. It provides a set of core modules that
            allow developers to build server-side applications using JavaScript.
            Express.js, on the other hand, is built on top of Node.js and
            provides a set of tools and features that make it easier to build
            web applications and APIs. Another key difference between Node.js
            and Express.js is that Node.js is a low-level platform, while
            Express.js is a high-level framework. Node.js provides a set of
            low-level APIs that allow developers to build complex applications
            from scratch. This gives developers a lot of control over the
            application architecture and implementation. Express.js, on the
            other hand, is a high-level framework that provides a set of
            pre-built features and tools that make it easier to build web
            applications and APIs. This can be a great advantage for developers
            who need to build applications quickly or who do not have the
            expertise to build everything from scratch.
          </p>
        </div>
        <div className="card  p-5 border shadow-lg border-purple-600">
          <h1 className="text-xl font-semibold">
            What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            In React, a custom hook is a function that allows you to reuse logic
            and stateful functionality across multiple components. Custom hooks
            are a way to extract common functionality into a reusable module
            that can be used by other components. They enable developers to
            create a more modular and reusable codebase by abstracting away
            complex logic and state management into a single function. Custom
            hooks are created to abstract away complex or repetitive logic that
            is used across multiple components. By using a custom hook, the
            logic can be written once and reused across different components.
            Custom hooks can be used for any kind of logic that needs to be
            reused, including state management, API calls, event listeners, and
            more. One of the primary benefits of custom hooks is that they
            enable developers to create more reusable and modular code. By
            abstracting away complex logic into a custom hook, the codebase
            becomes easier to maintain and update over time. Additionally,
            custom hooks can be shared across different projects or within a
            team, making it easier for developers to collaborate and build upon
            each other's work. To create a custom hook in React, you simply
            define a function that uses React's built-in hooks or other custom
            hooks to encapsulate logic that can be reused across multiple
            components. The function should return any state or values that need
            to be shared with the component that is using the hook.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
