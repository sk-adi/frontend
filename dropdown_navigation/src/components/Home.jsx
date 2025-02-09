import React from 'react';
import backgroundImage from '../assets/images/image-hero-desktop.png';
import firstClient from '../assets/images/client-audiophile.svg';
import secondClient from '../assets/images/client-databiz.svg';
import thirdClient from '../assets/images/client-maker.svg';
import fourthClient from '../assets/images/client-meet.svg';
import logo from '../assets/images/logo.svg';

function Home() {
    return (
        <>
            <div className="bg-white text-black p-4">
                <nav className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <img src={logo} alt="logo" />
                        <div className="flex items-center space-x-4">
                            <select className="text-black p-2 rounded bg-white">
                                <option value="todolist">ToDo List</option>
                                <option value="Calender">Calendar</option>
                                <option value="Reminders">Reminders</option>
                                <option value="Planning">Planning</option>
                            </select>
                            <select className="text-black p-2 rounded bg-white">
                                <option value="History">History</option>
                                <option value="Our Team">Our Team</option>
                                <option value="Blog">Blog</option>
                            </select>
                            <div className="flex space-x-4">
                                <a href="/" className="hover:text-gray-600">Careers</a>
                                <a href="/" className="hover:text-gray-600">About</a>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-4">
                        <a href="Login" className="hover:text-gray-600">Login</a>
                        <a href="Register" className="bg-white px-4 py-2 border rounded-2xl text-black hover:bg-black hover:text-white">Register</a>
                    </div>
                </nav>
            </div>
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between mt-2 px-6">
                <div className="md:w-1/2 pl-8 text-center md:text-left space-y-6">
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight">Make <br />remote work</h1>
                    <p className="text-gray-600">
                        Get your team in sync, no matter your location. <br />Streamline processes, create team rituals, and <br /> watch productivity soar.
                    </p>
                    <button className="bg-black text-white px-6 py-3 border rounded-lg hover:bg-white hover:text-black">Learn More</button><br />
                    <div className="flex items-center space-x-6 mt-6">
                        <img src={secondClient} alt="Client Databiz" className="h-8" />
                        <img src={firstClient} alt="Client Audiophile" className="h-8" />
                        <img src={fourthClient} alt="Client Meet" className="h-8" />
                        <img src={thirdClient} alt="Client Maker" className="h-8" />
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={backgroundImage} alt="bgimage" className="w-full max-w-lg" />
                </div>
            </div>
        </>
    );
}

export default Home;
