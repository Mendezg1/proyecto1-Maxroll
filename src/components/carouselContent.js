import './carouselContent.scss'
import React from 'react'





const Container = ({title, img, date}) =>{
    return(
        <a className='car-content'>
            <img className='car-image' src={img}></img>
            <h2 className='car-title'>{title}</h2>
            <p className='car-date'>{date}</p>
            <p className='maxroll-text'>MAXROLL</p>
        </a>
    )
}

const CarouselContent = () =>{
    return(
        <div className='car-container' id='car-container'>
            <Container
                title="GET READY FOR TORCHLIGHT INFINITE SEASON 3"
                img="https://assets.maxroll.gg/wordpress/TLS3_2560_514-2560x514.jpg"
                date="May 10th, 2023 by"
            />
            <Container
                title="GET READY FOR CRUCIBLE"
                img="https://assets.maxroll.gg/wordpress/PoE_Crucible_Landing-2560x514.webp"
                date="April 6th, 2023 by"
            />
            <Container
                title="LAST EPOCH - NEW MAXROLL BRANCH"
                img="https://assets.maxroll.gg/wordpress/LE_landing-2560x514.webp"
                date="March 9th, 2023 by"
            />
            <Container
                title="GET READY FOR SEASON 28"
                img="https://assets.maxroll.gg/wordpress/Marauder_landing-2560x514.webp"
                date="February 27th, 2023 by"
            />
            <Container
                title="GET READY FOR LADDER SEASON 3"
                img="https://assets.maxroll.gg/wordpress/D2_ladder2-2560x514.jpg"
                date="February 16th, 2023 by"
            />
        </div>
    )
}

export {CarouselContent}