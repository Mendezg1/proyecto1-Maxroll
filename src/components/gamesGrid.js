import React from "react"
import './gamesGrid.scss'



const Game = ({url,img,clas,clas1}) =>{
    return(
        <a className={clas} href={url}>
            <div className={clas1} ></div>
            <img src={img} className="game-img"></img>
        </a>
    )
}

const GamesGrid = () =>{
    return(
        <div className="game-grid">
            <Game
                url="https://maxroll.gg/d3/"
                img="https://assets.maxroll.gg/wp-content/assets/img/d3-banner-240x320.jpg"
                clas="game-container-1"
                clas1="blue-hover-1"
            />
            <Game
                url="https://maxroll.gg/d4/"
                img="https://assets.maxroll.gg/wp-content/assets/img/d4-banner-240x320.jpg"
                clas="game-container-2"
                clas1="blue-hover-2"
            />
            <Game
                url="https://maxroll.gg/last-epoch/"
                img="https://assets.maxroll.gg/wp-content/assets/img/le-banner-240x320.jpg"
                clas="game-container-3"
                clas1="blue-hover-3"
            />
            <Game
                url="https://maxroll.gg/lost-ark/"
                img="https://assets.maxroll.gg/wp-content/assets/img/lostark-banner-240x320.jpg"
                clas="game-container-4"
                clas1="blue-hover-4"
            />
            <Game
                url="https://maxroll.gg/d2/"
                img="https://assets.maxroll.gg/wp-content/assets/img/d2r-banner-240x320.jpg"
                clas="game-container-5"
                clas1="blue-hover-5"
            />
            <Game
                url="https://maxroll.gg/poe/"
                img="https://assets.maxroll.gg/wp-content/assets/img/poe-banner-240x320.jpg"
                clas="game-container-6"
                clas1="blue-hover-6"
            />
            <Game
                url="https://maxroll.gg/torchlight-infinite/"
                img="https://assets.maxroll.gg/wp-content/assets/img/TLI_game_selector3.jpeg"
                clas="game-container-7"
                clas1="blue-hover-7"
            />
        </div>
    )
}



export {GamesGrid}