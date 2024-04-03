import React from 'react'

import { About, Footer, Header, Skills, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <Skills />
            <Work />
            <About />
            {/* <Testimonial /> */}
            <Footer />
        </div>
    );
}

export default App;