/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import firstImage from '../../Assets/Images/1st.png';
import secondImage from '../../Assets/Images/2nd.png';
import thirdImage from '../../Assets/Images/3rd.png';
import myImage from '../../Assets/Images/MyPicture.jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <>
            <div className='md:flex justify-between container mx-auto px-4 md:px-0 md:my-14'>
                <div className="auto-type flex-1 text-black">
                    <span>My Name is </span>
                    <AutoTyping
                        active
                        textRef="Nur Adnan"
                        writeSpeed={150}
                        deleteSpeed={150}
                        delayToWrite={1000}
                        delayToDelete={2000} 
                    />
                    <BlinkCursor
                        active
                        blinkSpeed={500}
                    />
                    <div class="mockup-code pt-4 mt-10 mb-10">
                        <pre data-prefix="$">
                        <code>
                            <p className='text-white px-12 font-semibold p-4'>
                                I am a Bangladeshi web developer who works with the MERN stack.<br />For clients all across the world, I work as a freelance web developer to offer excellent results. <br />Interning as a software developer at Some Foundations was a great experience for me, <br />
                                and I'm always on the lookout for new challenges.
                            </p>
                        </code></pre> 
                        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre> 
                        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
                    </div>

                    <p className='text-black font-semibold my-3'>
                        Strong background in Data Structures and Algorithms with excellent problem-solving skills in C++ and JAVA, HTML/CSS/Bootstrap/TailwindCSS/Javascript(ES6) and MERN (Mongo DB/Express/React/Node) stacks.
                    </p>

                    <p className='text-black font-semibold'>
                        To put it another way, I'm a fast learner who enjoys both learning and unlearning. That is, I'm always up to date on the latest technologies and skills. I also bring some new ideas with me, and I'm convinced that you'll find many of them beneficial and innovative.
                    </p>

                </div>
                <div className="image flex-1 md:ml-5 mt-12 pt-24 md:mt-0">
                    <img className='md:w-1/2 md:ml-auto rounded-lg shadow-xl' src={myImage} alt="" />
                </div>
            </div>
            {/* Skills */}

            <div className="container mx-96">
                <div className="px-20">
                    <progress class="progress w-56"></progress>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-12 pb-12 p-4 mx-60'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={firstImage} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">1st Website</h2>
                    <div class="card-actions justify-end">
                    <a href="https://assignment11-8de4c.web.app/">
                        <button class="btn btn-primary text-white">Visit</button>
                    </a>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={secondImage} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">2nd Website</h2>
                    <div class="card-actions justify-end">
                    <a href="https://assignment-10-4cc4e.firebaseapp.com/">
                        <button class="btn btn-primary mt-6 text-white">Visit</button>
                    </a>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={thirdImage} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">3rd Website</h2>
                    <div class="card-actions justify-end">
                    <a href="https://assignment03-convetion-center.netlify.app//">
                        <button class="btn btn-primary mt-6 text-white">Visit</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Portfolio;