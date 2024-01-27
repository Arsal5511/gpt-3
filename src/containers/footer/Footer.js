import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

function Footer() {
    return (
        <div className='gpt_footer section_padding'>
            <div className='gpt_footer_heading'>
                <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
            </div>
            <div className='gpt_footer_btn'>
                <p>Request Early Access</p>
            </div>

            <div className='gpt_footer_links'>
            <div className='gpt_footer_links_logo'>
                <img src={logo} alt='logo' />
                <p>A4A techs, All Rights Reserved</p>
            </div>
            <div className='gpt_footer_links_div'>
                <h3>Links</h3>
                <a href='https//https://www.facebook.com/arsal5511/'>Facebook</a>
                <a href='https://github.com/Arsal5511'>Github</a>
                <a href='https//https://www.linkedin.com/in/arsal5511/'>LinkedIn</a>
                <a href='https//https://www.instagram.com/arsal5511/'>Instagram</a>
            </div>
            <div className='gpt_footer_links_div'>
            <h3>Company</h3>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className='gpt_footer_links_div'>
            <h3>Get in touch</h3>
                <p>Jhang Punjab Pakistan</p>
                <p>+92-315-7320449</p>
                <p>arslanabbas5511@gmail.com</p>
            </div>

            </div>

            <div className='gpt_footer_copyright'>
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer
