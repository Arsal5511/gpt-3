import React from 'react'
import { Brand, Cta, Navbar } from './components'
import { Header, Features, WhatGPT3, Possibility, Footer, Blog } from './containers'
import './App.css'

function App() {
    return (
        <div className='app'>
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <Cta />
                <Blog />
                <Footer />

            </div>

        </div>
    )
}

export default App
