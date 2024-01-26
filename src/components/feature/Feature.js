import React from 'react'
import './feature.css'


function Feature({title, text}) {
    return (

        <div className='gpt_features-container_features'>
        <div className='gpt_features_heading'>
            <div />
            <h1>{title}</h1>
        </div>
        <div className='gpt_features_text'>
           <p>
            {text}
            </p> 
        </div>
    </div>
      
    )
}

export default Feature
