import React from 'react'

function Navbar() {
    return (
        <div className="flex justify-between p-4 shadow-xl font-jost">
            <a className="text-2xl font-bold italic" href="/">Heba.Dev</a>
            <div className="flex gap-10 text-[#666666] items-center font-semibold">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contacts">Contacts</a>
            </div>
        </div>
    )
}

export default Navbar
