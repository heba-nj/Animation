import React from 'react'
import body2 from '../../assets/body2.png';
import CodeLiveDemoIcons from '../Icons/CodeLiveDemoIcons';
function PortCoffee() {
    return (
        <div className="flex gap-60 text-[18px] font-bold mt-10 font-jost">
            <img className="w-[350px] h-[300px]" src={body2} alt='' />
            <div className="text-center">
                <h1 className="text-black w-44 font-extrabold">Erick Coffee</h1>
                <p className="w-56">The website features a modern and sleek design, showcasing Erick Coffee's products and brand story.</p>
                <div className="flex justify-center gap-10 text-black font-bold mt-5">
                    <h1>React</h1>
                    <h1>Scss</h1>
                </div>
                <CodeLiveDemoIcons/>
            </div>
        </div>
    )
}

export default PortCoffee
