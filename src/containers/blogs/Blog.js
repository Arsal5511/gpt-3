import React from 'react'
import './blog.css'
import {Blog01, Blog02, Blog03,Blog04,Blog05,} from './Import'
import {Article} from '../../components'

function Blog() {
    return (
        <div className='gpt_blog section_padding'>
            <div className='gpt_blog_heading'>
            <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className='gpt_blog_content'>
                <div className='gpt_blog_content_grp1'>
                    <Article imageUrl={Blog01} date='12-08-2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div className='gpt_blog_content_grp2'>
                    <Article imageUrl={Blog02} date='12-08-2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imageUrl={Blog03} date='12-08-2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imageUrl={Blog04} date='12-08-2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imageUrl={Blog05} date='12-08-2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>
        </div>
    )
}

export default Blog