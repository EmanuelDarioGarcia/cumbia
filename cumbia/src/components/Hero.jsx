import videoCPT from '../assets/cptVideo.mp4'
import React, { Component } from 'react'

const Hero = () => {
    return (
        <div>
            <section classname="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div classname="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video 
                        classname="min-w-full min-h-full absolute object-cover" 
                        autoplay muted loop
                    >      
                        <source src={videoCPT} type="video/mp4"/>
                    </video>
                </div>
                <div classname="video-content space-y-2">
                    <h1 classname="font-light text-6xl">full Hero Video</h1>
                    <h3 classname="font-light text-3xl">with TailwindCSS</h3>
                </div>
            </section>
        </div>
    )
}

export default Hero