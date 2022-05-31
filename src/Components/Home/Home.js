import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import shape from '../../Assets/Images/curveAsymmetrical.svg';
import Contact from '../Contact/Contact';
import ReviewSlider from '../Dashboard/Review/ReviewSlider';
import useTools from '../Hooks/useTools';
import Loader from '../Loader/Loader';
import ToolsCard from '../ToolsCard/ToolsCard';
import Accordion from './Accordion/Accordion';
import BusinessSummary from './BusinessSummary';
import Slider from './Slider';

const Home = () => {
    const [tools] = useTools();
    const toolsCopy = [...tools];
    const reversedTools = toolsCopy?.reverse();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/tools/${id}`)
    }
    if (!tools) {
        return <Loader></Loader>
    }
    return (
        <div className='mb-10'>
            <Slider></Slider>
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4'>Our Latest Gears</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20'>
                {
                    reversedTools.slice(0, 6).map(tool => <ToolsCard handlePurchase={handlePurchase} tool={tool} key={tool._id}></ToolsCard>)
                }
            </div>
            <section class="overflow-hidden text-gray-700 mb-24">
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4'>Our Gears Gallary</h1>
                <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-1/2 p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.pexels.com/photos/9607203/pexels-photo-9607203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.pexels.com/photos/824300/pexels-photo-824300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </div>
                        <div class="w-full p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.pexels.com/photos/5095285/pexels-photo-5095285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="w-full p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.pexels.com/photos/5768107/pexels-photo-5768107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                            src="https://images.pexels.com/photos/6528786/pexels-photo-6528786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
           {/* Review */}
            <div className="bg-gradient-to-b from-success to-secondary pb-24 mb-16 p-16 w-9/12 mx-auto rounded-3xl">
                <div className='container mx-auto'>
                    <h1 className='text-uppercase text-center text-white text-6xl md:text-7xl font-semibold w-fit mx-auto pb-4 mb-8 pt-8 md:pt-0 md:mb-16 logo'>Customer's Say</h1>
                    <ReviewSlider ></ReviewSlider>
                </div>
            </div>
            
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4 mb-5'>Questions Most Often Asked</h1>

            <div className='container mx-auto pt-4'>
                <Accordion title="What Kind of Goods Do You Provide?" 
                content="If your ego starts out, 'I am important, I am big, I am special,' you're in for some disappointments when you look around at what we've discovered about the universe. No, you're not big. No, you're not. You're small in time and in space. And you have this frail vessel called the human body that's limited on Earth.See, when you drive home today, you've got a big windshield on the front of your car. And you've got a little bitty rearview mirror. And the reason the windshield is so large and the rearview mirror is so small is because what's happened in your past is not near as important as what's in your future." />
                <Accordion
                    title="Do You Ship Products Beyond Bangladesh?"
                    content="If your ego starts out, 'I am important, I am big, I am special,' you're in for some disappointments when you look around at what we've discovered about the universe. No, you're not big. No, you're not. You're small in time and in space. And you have this frail vessel called the human body that's limited on Earth.See, when you drive home today, you've got a big windshield on the front of your car. And you've got a little bitty rearview mirror. And the reason the windshield is so large and the rearview mirror is so small is because what's happened in your past is not near as important as what's in your future.
                    "/>
                <Accordion
                    title="Do You Deliver Throughout Bangladesh?"
                    content="If your ego starts out, 'I am important, I am big, I am special,' you're in for some disappointments when you look around at what we've discovered about the universe. No, you're not big. No, you're not. You're small in time and in space. And you have this frail vessel called the human body that's limited on Earth.See, when you drive home today, you've got a big windshield on the front of your car. And you've got a little bitty rearview mirror. And the reason the windshield is so large and the rearview mirror is so small is because what's happened in your past is not near as important as what's in your future."
                />
            </div>
                        <div className='bg-gradient-to-t from-primary to-secondary mt-0 md:mt-16'>
                <div className="custom-shape-divider-top-1653206227">
                    <img src={shape} alt="" />
                </div>
                <h1 className='text-uppercase text-center text-white text-4xl md:text-5xl font-semibold pb-4'>" Our Commitment "</h1>
                <h1 className='text-uppercase text-center text-white text-2xl  w-fit mx-auto mt-2 pb-4'>We understand our users expectation</h1>
                <div className="business-summery mt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                    <BusinessSummary
                        icon={<BiWorld></BiWorld>}
                        end={87}
                        title="To Make Door"
                        image= {"https://images.pexels.com/photos/848203/pexels-photo-848203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    />
                    <BusinessSummary
                        icon={<BsPeopleFill></BsPeopleFill>}
                        end={1200}
                        title="Clients Happiness"
                        image={"https://images.pexels.com/photos/3536424/pexels-photo-3536424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    />
                    <BusinessSummary
                        icon={<MdOutlineComputer></MdOutlineComputer>}
                        end={3000}
                        title="Top Works"
                        image={"https://images.pexels.com/photos/3811843/pexels-photo-3811843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    />
                </div>
            </div>
            <Contact>Contact Us</Contact>
        </div>
    );
};

export default Home;