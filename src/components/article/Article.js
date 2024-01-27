import React from 'react'
import './article.css'


function Article({imageUrl, date, title}) {
    return (
        <div className='gpt_article'>
            <div className='gpt_article_container'>
                <img src={imageUrl} alt='blog' />
            </div>
                <div className='gpt_article_content'>
                    <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    </div>
                    <p>Read Full Article</p>

                </div>
        </div>
    )
}

export default Article
