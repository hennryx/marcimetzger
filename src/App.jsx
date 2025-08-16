import React from 'react';
import Header from './components/header';
import Home from './sections/home';
import BG_IMAGE from './assets/bg-Image.png'
import Profile from './sections/profile';
import Service from './sections/service';
import Achivements from './sections/achivements';
import Gallery from './sections/gallery';
import Contacts from './sections/contacts';
import Map from './sections/map';
import Footer from './components/footer';

const App = () => {

    return (
        <div className={`min-h-screen overflow-hidden bg-white text-black w-dvw`}>
            <Header />
            <div>
                <img src={BG_IMAGE} className='absolute inset-0 object-cover h-full w-full' />
                <div className='absolute inset-0 h-full bg-black/15' />
            </div>
            <div id='home' className="relative h-dvh w-full min-w-dvw">
                <Home />
            </div>
            <section className='min-w-dvw min-h-full mt-8 md:mt-16'>
                <Profile />
            </section>

            <section className='min-w-dvw min-h-full mt-8 md:mt-16'>
                <Service />
            </section>

            <section className='min-w-dvw min-h-full mt-8 md:mt-16'>
                <Achivements />
            </section>

            <section className='min-w-dvw min-h-full mt-8 md:mt-16'>
                <Gallery />
            </section>

            <section className='min-w-dvw min-h-full mt-8 md:mt-16'>
                <Contacts />
            </section>

            <section className='min-w-dvw min-h-full mt-8 md:mt-16'>
                <Map />
            </section>
            <Footer />
        </div>
    );
};

export default App;