import React from 'react'
import { BsTwitter, BsInstagram, } from 'react-icons/bs'
import { FaFacebookF, FaGithub, } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <FaFacebookF />
            </div>
            <div>
                <FaGithub />
            </div>
            <div>
                <BsTwitter />
            </div>
            <div>
                <BsInstagram />
            </div>
        </div>
    )
}

export default SocialMedia