/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPicture from '../../Assets/Images/MyPicture.jpg';
import './Blog.css';
const Blog = () => {
    return (
        <div className='mx-16 md:mx-48 coli bg-white rounded shadow-inner mt-10'>
            <div className="shadow-lg p-10" >
                <div className="flex items-center mt-10 p-5">
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={MyPicture} />
                        </div>
                    </div>
                    <div >
                        <h1 className='mx-8 text-black'>Nur Adnan Chowdhury Anik</h1>
                        <h1 className='mx-8 mt-2 text-black'>Posted On 29th May,2022</h1>
                    </div>
                </div>
                <div>
                    <h1 className="sp-style text-red-800 text-center text-4xl px-5"> 
                       <span className='text-blue-700 font-bold'>i) </span> What are the different ways to manage a state in a React Application??
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl text-black">
                        Local state, global state, server state, and URL state are the four major types of state that you must track in your React projects. Local state of a component refers to the data it stores. Managing local state in React is typically achieved via the useState hook. In addition, for both local and global states, the useReducer option may be implemented in any manner. Internally, it is quite similar to useState, with the exception that it accepts a reducer rather than a starting state. For displaying or hiding a modal component and keeping track of input data for disabled forms, you would require local state. Global state refers to the shared information between multiple components. When data must be accessed and updated across multiple program components, global state is required. The state of an authenticated user is an example of a frequent global state. To retrieve or update data from an external server, you must manage multiple states, such as loading and error.
                    </p>
                </div>
            </div>
            <div className="shadow-lg p-10">
                <div className="flex items-center mt-10 p-5">
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={MyPicture} />
                        </div>
                    </div>
                    <div >
                        <h1 className='mx-8 text-black'>Nur Adnan Chowdhury Anik</h1>
                        <h1 className='mx-8 mt-2 text-black'>Posted On 29th May,2022</h1>
                    </div>
                </div>
                <div>
                    <h1 className="sp-style text-red-800 text-center text-4xl px-5">
                        <span className='text-blue-700 font-bold'>ii) </span>How does prototypical inheritance work?
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl text-black">
                        The Javascript feature Prototypal Inheritance is used to add methods and properties to objects. It is a method that allows one object to inherit the properties and methods of another. Traditionally, we use Object. getPrototypeOf and Object to retrieve and set the [[Prototype]] of an object.
                    </p>
                </div>
            </div>
            <div className="shadow-lg p-10"> 
                <div className="flex items-center mt-10 p-5">
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={MyPicture} />
                        </div>
                    </div>
                    <div >
                        <h1 className='mx-8 text-black'>Nur Adnan Chowdhury Anik</h1>
                        <h1 className='mx-8 mt-2 text-black'>Posted On 29th May,2022</h1>
                    </div>
                </div>
                <div>
                    <h1 className="sp-style text-red-800 text-center text-4xl px-5 pt-6">
                        <span className='text-blue-700 font-bold'>iii) </span>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl text-black">Using setState, it is possible to transfer a state from one component to another without altering the original. SetState is required to incorporate an item into the current state (). Components that are stateful or stateless are inaccessible to their parents and children, who should not be concerned with whether they are defined as functions or classes. State can be associated with any React component. A component's state may change in response to a user action or a system event. React will re-render a component if its state changes. Before modifying the state's value, it is necessary to establish the state's initial configuration. We utilize the setState() method to modify an object's current state. By requesting a re-render, you can verify that the current state of the component has been maintained. If a synchronous call is used to change the state of an object, the console may not be updated in a timely manner.</p>
                </div>

            </div>
            <div className="shadow-lg p-10">
                <div className="flex items-center mt-10 p-5">
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={MyPicture} />
                        </div>
                    </div>
                    <div >
                        <h1 className='mx-8 text-black'>Nur Adnan Chowdhury Anik</h1>
                        <h1 className='mx-8 mt-2 text-black'>Posted On 29th May,2022</h1>
                    </div>
                </div>
                <div>
                    <h1 className="sp-style text-red-800 text-center text-4xl px-5 pt-6">
                       <span className='text-blue-700 font-bold'>iv) </span>How will you improve the performance of a React Application??
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl text-black">
                        A React application can be made more efficient in numerous ways. Keep component state local whenever possible, for example. Memoryizing React components to avoid unnecessary re-renders is an additional effective technique. Moreover, React's dynamic imports enable code splitting (). React's virtualization of windows or lists. In React, images can be loaded in a "lazy" manner. Making use of Structural Consistency. Numerous chunk files are available.
                    </p>
                </div>
            </div>
            <div className="shadow-lg p-10">
                <div className="flex items-center mt-10 p-5">
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        <img src={MyPicture} />
                    </div>
                </div>
                <div >
                    <h1 className='mx-8 text-black'>Nur Adnan Chowdhury Anik</h1>
                    <h1 className='mx-8 mt-2 text-black'>Posted On 29th May,2022</h1>
                </div>
                </div>
                <div>
                    <h1 className="sp-style text-red-800 text-center text-4xl px-5 pt-6">
                         <span className='text-blue-700 font-bold'>v) </span>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl text-black">
                        array.find is used to locate a product by its name within an array (). The callbackFn function is invoked once for each array index to obtain a true value. If so, find returns the value of the element immediately. If this is not the case, find will return an error. callbackFn is invoked for every index in the array, not just those that have been assigned values. If you employ the callbackFn function provided by find, you can modify the array it is invoked on. Before the initial activation of callbackFn, the items discovered by find are pre-set. Using Javascript's arr.find() function, you can retrieve the value of the array's first matching member. If any of the array's elements satisfy the condition, the first one to do so will be printed. This method does not support empty array elements, and it does not modify the original array.
                    </p>
                </div>
            </div>
            <div className="shadow-lg p-10">
                <div className="flex items-center mt-10 p-5">
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        <img src={MyPicture} />
                    </div>
                </div>
                <div >
                    <h1 className='mx-8 text-black'>Nur Adnan Chowdhury Anik</h1>
                    <h1 className='mx-8 mt-2 text-black'>Posted On 29th May,2022</h1>
                </div>
                </div>
                <div>
                    <h1 className="sp-style text-red-800 text-center text-4xl px-5 pt-6">
                       <span className='text-blue-700 font-bold'>vi) </span> What is a unit test? Why should write unit tests??</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl text-black">
                        Using JavaScript code, JavaScript Unit Testing can test a web page or web application module. After that, it is included as an inline event handler in the HTML and tested in the browser to ensure that all required features are present. The unit tests are then grouped into a test suite for convenience. A number of frameworks simplify unit testing in JavaScript. For instance, the Unit.js library is a Javascript assertion library that operates on Node.js and the browser. JavaScript-based open-source testing framework for React and React Native web applications. With the Jest framework, this complexity can be substantially reduced. If you're using Mocha, Jasmine, Karma, or protractor (a testing framework for Angular projects), you can use it with any of the aforementioned frameworks. Node.js and Mocha's browser-based testing framework. This framework's serial test execution simplifies asynchronous testing.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;