import React from 'react'
import { Fragment } from 'react'
import { motion } from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import me from '../../assets/me.jpg'

function AnimatedIcons() {
    return (
        <Fragment>
            <div className="flex text-[50px] ml-52 gap-32">
                <motion.a
                    initial={{ y: 20 }}
                    animate={{ y: 380, x: 320 }}
                    transition={{ duration: 3 }}
                ><RiTailwindCssFill className="text-[#44A8B3] relative top-20 right-24" /></motion.a>
                <motion.a
                    initial={{ y: 20 }}
                    animate={{ y: 460, x: 220 }}
                    transition={{ duration: 3 }}
                ><IoLogoJavascript className="text-[#F5DE19]" /></motion.a>
            </div>
            <div className="pt-14 pl-52 text-7xl font-semibold tracking-widest flex items-center">
                <h1 className="">Front-End React Developer</h1>
                <motion.a
                    initial={{ y: 900, rotate: '165deg' }}
                    animate={{ y: 280, x: 50, rotate: '0deg' }}
                    transition={{ duration: 3 }}
                ><FaHtml5 className="text-[#E44D26] relative right-[400px]" />
                </motion.a>
                <motion.a
                    initial={{ y: 450, rotate: '40deg' }}
                    animate={{ y: 150, x: -170, rotate: '0deg' }}
                    transition={{ duration: 3 }}
                ><IoLogoCss3 className="text-[#1572B6] relative right-[400px] top-32" />
                </motion.a>
                <img className="heba mr-38" src={me} alt='' />
                <motion.a
                    initial={{ y: 20, rotate: '60deg' }}
                    animate={{ y: 430, x: -350, rotate: '0deg' }}
                    transition={{ duration: 3 }}
                ><FaReact className="text-[#00D8FF] relative right-[100px] bottom-[150px]" /></motion.a>
                <motion.a
                    initial={{ y: 20, rotate: '50deg' }}
                    animate={{ y: 280, x: -370, rotate: '0deg' }}
                    transition={{ duration: 3 }}
                ><FaSass className="text-[#CD6799] relative right-[30px]" /></motion.a>
            </div>
        </Fragment>
    )
}

export default AnimatedIcons
