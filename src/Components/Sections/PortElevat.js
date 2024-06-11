import React from 'react'
import body4 from '../../assets/body4.png';
import CodeLiveDemoIcons from '../Icons/CodeLiveDemoIcons';
function PortElevat() {
    return (
        <div className="flex gap-60 text-[18px] font-bold mt-10 font-jost">
            <img className="w-[350px] h-[300px]" src={body4} alt='' />
            <div className="text-center">
                <h1 className="text-black w-44 font-extrabold">Elevate</h1>
                <p className="w-56">I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options.</p>
                <div className="flex justify-center gap-10 text-black font-bold mt-5">
                    <h1>React</h1>
                    <h1>Scss</h1>
                </div>
                <CodeLiveDemoIcons/>
            </div>
        </div>
    )
}

export default PortElevat
