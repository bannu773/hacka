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
                <h3 className="animate-character">OUR THEMES</h3>
            </div >
            <div className='flex flex-row flex-wrap container gradie gap-14 pt-9 pb-14 justify-center' ref={themesRef}>
                <div>
                    <Card1 Images={Game} text={"Gaming"}/>
                </div>
                <div>
                    <Card1 Images={Brain} text={"Coding"}/>
                </div>
                <div>
                    <Card1 Images={Mobile} text={"Designing"}/>
                </div>
            </div>
        </div>
    )
}

export default Themes

