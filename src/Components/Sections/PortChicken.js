import React from 'react'
import body3 from '../../assets/body3.png';
import CodeLiveDemoIcons from '../Icons/CodeLiveDemoIcons';
function PortChicken() {
    return (
        <div className="flex gap-60 text-[18px] font-bold mt-10 font-jost">
            <div className="text-center">
                <h1 className="text-black w-44 font-extrabold">Chicken</h1>
                <p className="w-56">I designed a website for the restaurant Chicken, featuring an elegant and user-friendly interface to showcase their menu offerings and services.</p>
                <div className="flex justify-center gap-10 text-black font-bold mt-5">
                    <h1>React</h1>
                    <h1>Scss</h1>
                </div>
                <CodeLiveDemoIcons/>
            </div>
            <img className="w-[350px] h-[300px]" src={body3} alt='' />
        </div>
    )
}

export default PortChicken
