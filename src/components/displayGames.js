import React from "react"
import './displayGames.scss'



const Game = ({link,name,url}) =>{
    return(
        <a className='game' href={link} id="game">
            <img src={url} className='img' id="image"/>
            <p className='name'>{name}</p>
        </a>
    )
}

const DisplayableGames = ({opened}) =>{
    return(
        <div className={`games-display ${opened ? 'visible' : ''}`} id="games">
            <Game
                link="https://maxroll.gg/d3/"
                url="https://assets.maxroll.gg/wp-content/assets/img/d3logo.png"
                name="Diablo III"
            />
            <Game
                link="https://maxroll.gg/d4/"
                url="https://assets.maxroll.gg/wp-content/assets/img/d4logo.png"
                name="Diablo IV"
            />
            <Game
                link="https://maxroll.gg/last-epoch/"
                url="https://assets.maxroll.gg/wp-content/assets/img/le-logo-40x40.png"
                name="Last Epoch"
            />
            <Game
                link="https://maxroll.gg/lost-ark/"
                url="https://assets.maxroll.gg/wp-content/assets/img/LostArkLogo.png"
                name="Lost Ark"
            />
            <Game
                link="https://maxroll.gg/d2/"
                url="https://assets.maxroll.gg/wp-content/assets/img/d2logo.png"
                name="Diablo II"
            />
            <Game
                link="https://maxroll.gg/poe/"
                url="https://assets.maxroll.gg/wp-content/assets/img/poe_logo_small.png"
                name="Path of Exile"
            />
            <Game
                link="https://maxroll.gg/torchlight-infinite/"
                url="https://assets.maxroll.gg/wp-content/assets/img/tli_logo_small.png"
                name="Torchlight Infinite"
            />
        </div>
    )
}

export {DisplayableGames}