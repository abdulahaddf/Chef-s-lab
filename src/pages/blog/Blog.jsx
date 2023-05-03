import React from 'react';

const Blog = () => {
    return (
        <div>
      <h1 className="text-5xl font-bold text-center h-32">
        Welcome to my Blog
      </h1>
      <div className="grid md:grid-cols-2 gap-5 p-10">
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">The differences between uncontrolled and controlled components.</h1>
          <p>
           
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">How to validate React props using PropTypes</h1>
          <p>
         
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">The difference between nodejs and express js</h1>
          <p>
           
          </p>
        </div>
        <div className="card glass p-5">
          <h1 className="text-xl font-semibold">What is a custom hook, and why will you create a custom hook?</h1>
          <p>
          
          </p>
        </div>
      </div>
    </div>
    );
};

export default Blog;