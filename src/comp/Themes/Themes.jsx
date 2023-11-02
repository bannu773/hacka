import { Card } from '@mui/material'
import React from 'react'
import Card1 from '../Utility/Card1'
import { useParallax } from 'react-scroll-parallax';
import Game from '../../assets/svg/gamesvg.svg';
import Brain from '../../assets/svg/brainsvg.svg';
import Mobile from '../../assets/svg/mobilesvg.svg';
import './../Utility/card.css'


const Themes = ({ themesRef }) => {
    const head = useParallax({
        translateX: [-60, 20],
    });
    return (
        <div className=''>
            < div className="col-md-12 text-center " ref={head.ref} >
                <h3 className="animate-character">THEMES</h3>
            </div >
            <div className='flex flex-row flex-wrap container gradie gradie1 gap-14 pt-9 pb-14 justify-center' ref={themesRef}>
                <div>
                    <Card1 Images={Game} text={"Gaming"} content={"Gaming refers to the activity of playing electronic or video games, which can be done on computers, gaming consoles, smartphones, or other devices. These games often involve challenges, strategy, competition, or exploration and are designed for entertainment and enjoyment.Gaming is a dynamic medium encompassing diverse experiences and interactions."} />
                </div>
                <div>
                    <Card1 Images={Brain} text={"Coding"} content={"Coding, or programming, is the process of giving computers step-by-step instructions in a language they understand. These instructions help computers perform tasks, solve problems, and create software, websites, and more. It's like writing a recipe for a computer to follow and make things happen.Giving computers language for tasks and assignments."} />
                </div>
                <div>
                    <Card1 Images={Mobile} text={"Designing"} content={"Designing involves creating visual and functional solutions for various purposes. Designers use their creativity and skills to craft everything from logos to websites, aiming to make things look good and work effectively. Designing is a versatile field that influences the appearance and usability of products, spaces, and experiences.Creating visual and functional solutions artfully."}/>
                </div>
                <div>
                    <Card1 Images={Mobile} text={"Mobile"} content={"Most of web3 is still desktop-first. It’s time that changed - this track is all about meeting the users where they are: on their phones. Special judging bonus for users using Swift, Kotlin, React Native SDKs."} />
                </div>
                <div>
                    <Card1 Images={Mobile} text={"Heritage and Culture"}  content={"Anything goes in this track – a blank canvas to experiment with on-chain logic and the future of Web3. IoT, Manufacturing,  all is welcome! hi Everyone come and join with us to witness the technology"}/>
                </div>
                <div>
                    <Card1 Images={Mobile} text={"Agriculture"}  content={"Closely tied to Flow grants, this track is dedicated to working on foundational innovations that will unlock new use-cases and opportunities. There will also be specific wishlist items ."}/>
                </div>
            </div>
        </div>
    )
}

export default Themes

