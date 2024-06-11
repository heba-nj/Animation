import { Fragment } from "react";
import body1 from '../assets/body1.png';
import button from '../assets/button.png'
import contact from '../assets/contact.png'
import mail from '../assets/mail.jpg'
import { LuCopyright } from "react-icons/lu";
import PortCoffee from "./Sections/PortCoffee";
import PortChicken from "./Sections/PortChicken";
import PortElevat from "./Sections/PortElevat";
import SpecIcons from "./Icons/HeadIcons";
import FootIcons from "./Icons/FootIcons";
import '../App.css'
import Navbar from "./LandingSection/Navbar";
import AnimatedIcons from "./LandingSection/AnimatedIcons";
function Landing() {

    return (
        <Fragment>
            <Navbar />
            <AnimatedIcons />
            <div className="pl-52 text-xl w-[650px] text-[#666666] ">
                <p>Hi, I am Heba Al-Najjar, a passionate Front-End Developer from Syria </p>
                <SpecIcons />
                <div className="pt-12 text-black font-bold">
                    Tech stack
                    <span className="border border-1 border-[#666666] ml-6"></span>
                    <div className="stack-items"></div>
                </div>
                <div className="pt-24 flex text-[18px] gap-60 font-bold">
                    <img className="w-[200px] h-[200px]" src={body1} alt="" />
                    <div className="">
                        <h1 className="text-[#006AB8] font-extrabold">About me</h1>
                        <p className="mt-10 w-[370px]">Hello, I'm Heba, a Frontend Developer who is dedicated to crafting sleek UI/UX experiences for users. Currently, I primarily work with React.js, Tailwind CSS, and JavaScript in my projects.</p>
                    </div>
                </div>
                <h1 className="text-[#006AB8] text-[18px] mt-14 font-extrabold">Potfolio</h1>
                <p className="text-black font-bold text-[18px] mb-14">I would like to present my portfolio for your consideration.</p>
                <PortCoffee />
                <PortChicken />
                <PortElevat />
                <img className="text-center mx-[400px] mt-10 w-40" src={button} alt='' />
                <h1 className="text-[#006AB8] font-extrabold text-[18px] font-jost">Contact</h1>
                <p className="text-black font-bold text-[18px] font-jost">Don’t hesitate to call me</p>
                <div>
                    <div className="flex items-center text-[18px] text-black mt-10 font-jost">
                        <img className="w-16" src={contact} alt='' />
                        <div className="ml-4">
                            <h1 className="font-bold w-52">Phone Number</h1>
                            <p>+966 576187008</p>
                        </div>
                        <img className="w-16 ml-80" src={mail} alt='' />
                        <div className="ml-4">
                            <h1 className="font-bold">Email</h1>
                            <p>alnajjarheba.22@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-7 mt-14 pb-7 pl-28 bg-[#3D3D3D] rounded-t-2xl flex items-center text-white font-bold font-jost shadow-[0_-4px_20px_rgb(0,0,0,1)]">Copyright  <LuCopyright />  2024.All rights are reserved.
                <FootIcons />
            </div>
        </Fragment>
    );
}

export default Landing
