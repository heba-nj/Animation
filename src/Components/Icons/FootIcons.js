import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

function FootIcons() {
    return (
        <div className="flex ml-[700px]">
            <FiGithub className="text-xl" />
            <FaLinkedin className="text-xl ml-5" />
        </div>
    )
}

export default FootIcons
