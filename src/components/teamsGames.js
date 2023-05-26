import React from "react"
import './teamsGames.scss'



const Game = ({link,img,title,name0,name1,name2,name3,name4,name5,name6,name7,name8,name9,id,id1}) =>{
    return(
        <div className="teams-carousel">
            <div className="teams-game" id={id}>
                <a href={link}>
                    <img src={img} className="teams-img" ></img>
                </a>
            </div>
            <div className="teams-game-hover" id={id1}>
                <a href={link} style={{textDecoration: 'none'}}>
                    <h3 className="teams-title">{title}</h3>
                    <p className="separator">__</p>
                    <p className="n">{name0}</p>
                    <p className="n">{name1}</p>
                    <p className="n">{name2}</p>
                    <p className="n">{name3}</p>
                    <p className="n">{name4}</p>
                    <p className="n">{name5}</p>
                    <p className="n">{name6}</p>
                    <p className="n">{name7}</p>
                    <p className="n">{name8}</p>
                    <p className="n">{name9}</p>
                </a>
            </div>
            
        </div>
    )
}

const TeamsGames = () =>{
    return(
        <div className="teams-carousel-games">
            <Game
                link="https://maxroll.gg/team?team=d3"
                img="https://assets.maxroll.gg/wp-content/assets/img/d3-team-color.png"
                title="Diablo III"
                name0="Max 'Wudijo' R."
                name1="Sergei 'Northwar' Z."
                name2="Jonathan 'Chewi' M."
                name3="Lee 'Facefoot' S."
                name4="CJ 'Rhykker' M." 
                id="D3"
                id1="D3H"
            />
            <Game
                link="https://maxroll.gg/team?team=d4"
                img="https://assets.maxroll.gg/wp-content/assets/img/diablo4-teams-asset.webp"
                title="Diablo IV"
                name0="Max 'Wudijo' R."
                name1="Ryan 'Raxxanterax' S."
                name2="Robert 'dredscythe' G."
                name3="David 'echohack' E."
                name4="Marco 'MacroBioBoi' C." 
                name5="Jonathan 'Chewi' M."
                name6="Sergei 'Northwar' Z."
                name7="Pascal 'Teo1904' F."
                name8="Travis 'DiExidE' S."
                name9="Barry 'Jymnasium' M."
                id="D4"
                id1="D4H"
            />
            <Game
                link="https://maxroll.gg/team?team=le"
                img="https://assets.maxroll.gg/wp-content/assets/img/le-team-color.png"
                title="Last Epoch"
                name0="Joan 'LizardIRL' F.V."
                name1="Raith 'McFluffin' B."
                name2="Romain 'Terek' V."
                id="LE"
                id1="LEH"
            />
            <Game
                link="https://maxroll.gg/team?team=la"
                img="https://assets.maxroll.gg/wp-content/assets/img/lostark-team-color.png"
                title="Lost Ark"
                name0="Darlsan 'Perciculum' A."
                name1="Richard 'Yaen' C."
                name2="Edmunds 'Choilicious' R."
                name3="Patrick 'Saintone' N."
                name4="Ong 'Reitear' H."
                name5="Kevin 'Starlast' L."
                id="LA"
                id1="LAH"
            />
            <Game
                link="https://maxroll.gg/team?team=d2"
                img="https://assets.maxroll.gg/wp-content/assets/img/d2r-team-color.png"
                title="Diablo II"
                name0="Pascal 'Teo1904' F."
                name1="Marco 'MacroBioBoi' C."
                name2="Timothy 'BTNeandertha1' S."
                name3="David 'dbrunski125' B."
                name4="Jeffrey 'DarkHumility' H."
                name5="Barry 'Jymnasium' M."
                id="D2"
                id1="D2H"
            />
            <Game
                link="https://maxroll.gg/team?team=poe"
                img="https://assets.maxroll.gg/wp-content/assets/img/poe-team-color.png"
                title="Path of Exile"
                name0="Daniel 'Palsteron' S."
                name1="TriPolarBear"
                name2="Joshua 'Crouching_Tuna' C."
                name3="Tyler 'tytykiller' P."
                name4="Daniel 'Grimro' H."
                name5="Mario 'mbXtreme' B."
                name6="Ian 'spicysushi' S."
                name7="aer0"
                id="POE"
                id1="POEH"
            />
            <Game
                link="https://maxroll.gg/team?team=tli"
                img="https://assets.maxroll.gg/wp-content/assets/img/tli-team-color.png"
                title="Torchlight Infinite"
                name0="Tenkiei"
                name1="Josh 'Milkybk_' K."
                name2="Xtra3737"
                name3="Przemyslaw 'Zen_M' P."
                id="TLI"
                id1="TLIH"
            />
        </div>
    )
}

export {TeamsGames}