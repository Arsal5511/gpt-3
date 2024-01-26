import React from 'react'
import Features from '../features/Features'
import './whatGPT3.css'

function WhatGPT3() {
    return (
        <div className='gpt_wgpt section_margin' id='wgpt3'>
            <div className='gpt_wgpt_features'>
                <Features title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."  />
            </div>
            <div className='gpt_wgpt_heading'>
                <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>

            </div>
            <div className='gpt_wgpt_container'>
                <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                <Features title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
                <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments." />
            </div>
            
        </div>
    )
}

export default WhatGPT3
