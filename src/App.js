import React from "react"
import { useState } from "react"
import './App.scss'
import { DisplayableGames } from "./components/displayGames"
import { CarouselContent } from "./components/carouselContent"
import { GamesGrid } from "./components/gamesGrid"
import { TabContent } from "./components/Tabs"
import { TeamsGames, TeamsHovers } from "./components/teamsGames"

function App(){



    const [opened, setOpened] = useState(false)
    const [index, setIndex] = useState(0)
    const [toggle, setToggle] = useState(1)
    const [TeamGame, setTeamGame] = useState(0)

    const transitionConfig = (x) =>{
        x.style.transition="0.3s"
    }

setInterval(() =>{
    const d3 = document.getElementById('D3')
    const d2 = document.getElementById('D2')
    const d4 = document.getElementById('D4')
    const le = document.getElementById('LE')
    const la = document.getElementById('LA')
    const poe = document.getElementById('POE')
    const  tli= document.getElementById('TLI')
    const d3h = document.getElementById('D3H')
    const d2h = document.getElementById('D2H')
    const d4h = document.getElementById('D4H')
    const leh = document.getElementById('LEH')
    const lah = document.getElementById('LAH')
    const tlih = document.getElementById('POEH')
    const  poeh= document.getElementById('TLIH')
    if(d3 != null && d2 != null && d4 != null && le != null && la != null && tli != null && poe != null){
        transitionConfig(d3)
        transitionConfig(d2)
        transitionConfig(d4)
        transitionConfig(le)
        transitionConfig(la)
        transitionConfig(tli)
        transitionConfig(poe)
        switch(TeamGame){
            case 1:
                d4.style.left='-426px'
            break

            case 2:
            break

            case 3:
            break

            case 4:
            break

            case 5:
            break

            case 6:
            break
        }
    }
    setIndex(index + 1)
},5000)

    const rotateOpener = () =>{
        setOpened(!opened)
        let arrow = document.getElementById('opener')
        arrow.classList.toggle("rotar")
    }

   /**
    *  setInterval(() =>{
        const carousel = document.getElementById('car-container')
        if(carousel != null){
            console.log(index)
            let string = "translateX(-" + ((index + 1) * 2560).toString() + "px)"
            carousel.style.transform=string
            carousel.style.transition="transform 0.6s"
            if(index < 3)
                setIndex(index + 1)
            else{
                carousel.style.transform="transaleX(15360px)"
                carousel.style.transition="transform 0.3s"
                setIndex(-1)
            }
                
        }
    }, 7000)
    */

    
    return(
        <div className="App">
            <div className="top">
                <div className="carousel">
                    <CarouselContent/>
                </div>
                <div className="top-wrap">
                    <a href="https://maxroll.gg">
                        <button className="logo"></button>
                    </a>
                    <div className="top-right-wrap">
                        <a className="top-holder-1" onClick={rotateOpener}>
                            <p>GAMES</p>
                            <p className="opener" id="opener">^</p>
                        </a>
                        <a className="top-holder" href="https://maxroll.gg/team">
                            <p>TEAM</p>
                        </a>
                        <a className="top-holder" href="https://maxroll.gg/contact">
                            <p>CONTACT</p>
                        </a>
                        <DisplayableGames opened={opened}/>
                    </div>
                </div>
                
            </div>

            <div className="mid-upper-wrap">
                <h2 className="select">SELECT YOUR GAME</h2>
                <GamesGrid/>
                <h2 className="hp">HOT TOPICS</h2>
                <div className="header-tab">
                <div className="bloc-tabs">
                    <button className={`tabs ${toggle === 1 ? 'active' : ''}`} onClick={() => setToggle(1)}>DIABLO III</button>
                    <button className={`tabs ${toggle === 2 ? 'active' : ''}`} onClick={() => setToggle(2)}>DIABLO IV</button>
                    <button className={`tabs ${toggle === 3 ? 'active' : ''}`} onClick={() => setToggle(3)}>LAST EPOCH</button>
                    <button className={`tabs ${toggle === 4 ? 'active' : ''}`} onClick={() => setToggle(4)}>LOST ARK</button>
                    <button className={`tabs ${toggle === 5 ? 'active' : ''}`} onClick={() => setToggle(5)}>DIABLO II</button>
                    <button className={`tabs ${toggle === 6 ? 'active' : ''}`} onClick={() => setToggle(6)}>PATH OF EXILE</button>
                    <button className={`tabs ${toggle === 7 ? 'active' : ''}`} onClick={() => setToggle(7)}>TORCHLIGHT INFINITE</button>
                </div>
                </div>
                <div className={`container ${toggle === 1 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Natalya Spike Trap Demon Hunter Guide"
                        img1="https://assets.maxroll.gg/wordpress/D3_Demon_Hunter_Strafe_Hot_Topic.jpg"
                        link1="https://maxroll.gg/d3/guides/natalya-spike-trap-demon-hunter-guide"
                        author1="WUDIJO"
                        update1="Last updated on February 24th, 2023"
                        opt1="Non-seasonal, Season 28"
                        title2="Solo Tier List"
                        img2="https://assets.maxroll.gg/wordpress/Hot_topic_tierlists_v2.jpg"
                        link2="https://maxroll.gg/d3/tierlists/solo-tierlist"
                        author2="MAXROLL"
                        update2="Last updated on March 7th, 2023"
                        opt2="Non-seasonal, Season 28"
                        title3="Season 28 Start 1-70 Leveling Guide"
                        img3="https://assets.maxroll.gg/wordpress/Hot_topic_template_spellbook.jpg"
                        link3="https://maxroll.gg/d3/resources/season-start-1-70-leveling-guide"
                        author3="WUDIJO"
                        update3="Last updated on February 22nd, 2023"
                        opt3="Season 28"
                        title4="Altar of Rites Seal Unlocking Guide"
                        img4="https://assets.maxroll.gg/wordpress/Altar_Unlocking_1_Hot_Topic.webp"
                        link4="https://maxroll.gg/d3/resources/altar-of-rites-seal-unlocking-guide"
                        author4="RAXXANTERAX"
                        update4="Last updated on March 2nd, 2023"
                        opt4="Season 28"
                    />
                </div>
                <div className={`container1 ${toggle === 2 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Tornado Druid Leveling Guide"
                        img1="https://assets.maxroll.gg/wordpress/D4_HT_Druid-2.webp"
                        link1="https://maxroll.gg/d4/build-guides/tornado-druid-leveling-guide"
                        author1="TEO1904"
                        update1="Last updated on May 12th, 2023"
                        opt1=""
                        title2="Corpse Explosion Necromancer Leveling..."
                        img2="https://assets.maxroll.gg/wordpress/D4_HT_Necromancer.webp"
                        link2="https://maxroll.gg/d4/build-guides/corpse-explosion-necromancer-leveling-guide"
                        author2="MACROBIOBOI"
                        update2="Last updated on March 12th, 2023"
                        opt2=""
                        title3="Upheaval Barbarian Leveling Guide"
                        img3="https://assets.maxroll.gg/wordpress/D4_HT_Barbarian-2.webp"
                        link3="https://maxroll.gg/d4/build-guides/upheaval-barbarian-leveling-guide"
                        author3="RAXXANTERAX"
                        update3="Last updated on May 12th, 2023"
                        opt3=""
                        title4="Hydra Lightning Sorcerer Leveling Guide"
                        img4="https://assets.maxroll.gg/wordpress/D4_HT_Sorcerer-2.webp"
                        link4="https://maxroll.gg/d4/build-guides/hydra-lightning-sorcerer-leveling-guide"
                        author4="NORTHWAR"
                        update4="Last updated on March 12th, 2023"
                        opt4=""
                    />
                </div>
                <div className={`container2 ${toggle === 3 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Hammerdin Paladin Guide"
                        img1="https://assets.maxroll.gg/wordpress/Paladin-Hot-Topic.webp"
                        link1="https://maxroll.gg/last-epoch/build-guides/hammerdin-guide"
                        author1="MCFLUFFIN"
                        update1="Last updated on April 20th, 2023"
                        opt1=""
                        title2="Death Seal Lich Guide"
                        img2="https://assets.maxroll.gg/wordpress/Lich-Hot-Topic.webp"
                        link2="https://maxroll.gg/last-epoch/build-guides/death-seal-lich-guide"
                        author2="LIZARD_IRL"
                        update2="Last updated on April 1st, 2023"
                        opt2=""
                        title3="Squirrel Beastmaster Guide"
                        img3="https://assets.maxroll.gg/wordpress/Beastmaster-Hot-Topic.webp"
                        link3="https://maxroll.gg/last-epoch/build-guides/squirrel-beastmaster-guide"
                        author3="LIZARD_IRL"
                        update3="Last updated on April 1st, 2023"
                        opt3=""
                        title4="Class and Mastery Introduction"
                        img4="https://assets.maxroll.gg/wordpress/Class-Wheel-Hot-Topic.webp"
                        link4="https://maxroll.gg/last-epoch/resources/class-and-mastery-introductions"
                        author4="MCFLUFFIN"
                        update4="Last updated on March 8th, 2023"
                        opt4=""
                    />
                </div>
                <div className={`container3 ${toggle=== 4 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Ebony Cube Guide"
                        img1="https://assets.maxroll.gg/wordpress/New_Cube_hottopic.webp"
                        link1="https://maxroll.gg/lost-ark/resources/ebony-cube-guide"
                        author1="STARLAST"
                        update1="Last updated on May 14th, 2023"
                        opt1=""
                        title2="Predator Slayer Raid Build"
                        img2="https://assets.maxroll.gg/wordpress/Slayer_hottopic.webp"
                        link2="https://maxroll.gg/lost-ark/build-guides/predator-slayer-raid-build-guide"
                        author2="REITEAR"
                        update2="Last updated on May 14th, 2023"
                        opt2=""
                        title3="Punisher Slayer Build Buide"
                        img3="https://assets.maxroll.gg/wordpress/Slayer_hottopic.webp"
                        link3="https://maxroll.gg/lost-ark/build-guides/punisher-slayer-raid-build-guide"
                        author3="REITEAR"
                        update3="Last updated on May 8th, 2023"
                        opt3=""
                        title4="Sidereal Weapon Guide"
                        img4="https://assets.maxroll.gg/wordpress/Siderel.webp"
                        link4="https://maxroll.gg/lost-ark/resources/sidereal-weapon-guide"
                        author4="CHOILICIOUS"
                        update4="Last updated on April 24th, 2023"
                        opt4=""
                    />
                </div>
                <div className={`container4 ${toggle === 5 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Valuable Magic Items"
                        img1="https://assets.maxroll.gg/wordpress/Hot_topic_Leveling_2.jpg"
                        link1="https://maxroll.gg/d2/items/valuable-magic-items"
                        author1="DARKHUMILITY"
                        update1="Last updated on May 4th, 2023"
                        opt1=""
                        title2="Terror Zone Tier List"
                        img2="https://assets.maxroll.gg/wordpress/Hot_topic_D2R_Tierlists.jpg"
                        link2="https://maxroll.gg/d2/tierlists/terror-zone-tier-list"
                        author2="MAXROLL"
                        update2="Last updated on March 12th, 2023"
                        opt2=""
                        title3="Phoenix Strike Assasin Guide"
                        img3="https://assets.maxroll.gg/wordpress/assassin_hot_topic_dark.jpg"
                        link3="https://maxroll.gg/d2/guides/phoenix-strike-assassin-guide"
                        author3="TEO1904"
                        update3="Last updated on May 4th, 2023"
                        opt3=""
                        title4="Blizzard Sorceress Guide"
                        img4="https://assets.maxroll.gg/wordpress/Hot_topic_sorcdark_sorc.jpg"
                        link4="https://maxroll.gg/d2/guides/blizzard-sorceress"
                        author4="TEO1904"
                        update4="Last updated on May 4th, 2023"
                        opt4=""
                    />
                </div>
                <div className={`container5 ${toggle=== 6 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Toxic Rain Ballista Pathfinder"
                        img1="https://assets.maxroll.gg/wordpress/webp_PATHFINDER_final-1.webp"
                        link1="https://maxroll.gg/poe/build-guides/toxic-rain-ballista-pathfinder"
                        author1="PALSTERON"
                        update1="Last updated on April 7th, 2023"
                        opt1="Crucible 3.21"
                        title2="Impending Doom Occultist"
                        img2="https://assets.maxroll.gg/wordpress/webp_OCCULTIST_final-1.webp"
                        link2="https://maxroll.gg/poe/build-guides/impending-doom-occultist"
                        author2="CROUCHING_TUNA"
                        update2="Last updated on April 8th, 2023"
                        opt2="Crucible 3.21"
                        title3="Cold DoT Elementalist"
                        img3="https://assets.maxroll.gg/wordpress/webp_ELEMENTALIST_final-1.webp"
                        link3="https://maxroll.gg/poe/build-guides/cold-dot-elementalist"
                        author3="TRIPOLARBEAR"
                        update3="Last updated on April 7th, 2023"
                        opt3="Crucible 3.21"
                        title4="Explosive Trap Saboteur"
                        img4="https://assets.maxroll.gg/wordpress/webp_SABOTEUR_final-1.webp"
                        link4="https://maxroll.gg/poe/build-guides/endgame/explosive-trap/explosive-trap-saboteur"
                        author4="TRIPOLARBEAR"
                        update4="Last updated on April 6th, 2023"
                        opt4="Crucible 3.21"
                    />
                </div>
                <div className={`container6 ${toggle === 7 ? 'shown' : ''}`}>
                    <TabContent
                        title1="Hero Trait Tier List"
                        img1="https://assets.maxroll.gg/wordpress/Hot_topic_template_spellbook.jpg"
                        link1="https://maxroll.gg/torchlight-infinite/resources/hero-trait-tier-list"
                        author1="MAXROLL"
                        update1="Last updated on May 11th, 2023"
                        opt1="Season 3 - Cube of Rapacity"
                        title2="Seething Rehan Leveling Guide"
                        img2="https://assets.maxroll.gg/wordpress/Hot_Topic_Rehan.webp"
                        link2="https://maxroll.gg/torchlight-infinite/build-guides/seething-rehan-leveling-guide"
                        author2="MILKYBK"
                        update2="Last updated on May 15th, 2023"
                        opt2="Season 3 - Cube of Rapacity"
                        title3="Blast Nova Bing Leveling Guide"
                        img3="https://assets.maxroll.gg/wordpress/Bing_ht_atp2.jpg"
                        link3="https://maxroll.gg/torchlight-infinite/build-guides/blast-nova-bing-leveling-guide"
                        author3="MILKYBK"
                        update3="Last updated on May 10th, 2023"
                        opt3="Season 3 - Cube of Rapacity"
                        title4="Charge Calling Moto Boss Killer Guide"
                        img4="https://assets.maxroll.gg/wordpress/Hot_Topic_Motto.webp"
                        link4="https://assets.maxroll.gg/wordpress/Hot_Topic_Motto.webp"
                        author4="ZEN_M"
                        update4="Last updated on May 19th, 2023"
                        opt4="Season 3 - Cube of Rapacity"
                    />
                </div>
                <div className="socials-container">
                        <button className="twitch" href="https://www.twitch.tv/maxrollgg" value={""}></button>
                        <button className="twitter" href="https://twitter.com/maxrollgg" value={""}></button>
                        <button className="YT" href="https://www.youtube.com/maxrollgg" value={""}></button>
                        <button className="IG" href="https://www.instagram.com/maxrollgg/" value={""}></button>
                        <button className="disc" href="https://discord.gg/WBBwg5X" value={""}></button>
                </div>
                <div className="connect">
                    <h2 className="conect-text">CONNECT WITH US</h2>
                </div>
                <div className="teams-container">
                    <div className="teams-head">
                        <h2 className="teams-text">MEET OUR TEAMS</h2>
                    </div>
                    <div className="teams-content">
                        <TeamsGames/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <a href="https://maxroll.gg/"><img src="https://assets.maxroll.gg/wp-content/assets/img/mxr-logo-1color-01.png" className="bottom-max"></img></a>
                <div className="bottom-socials"></div>
                <div className="socials-refs">
                    <a href="https://twitter.com/maxrollgg" className="social-ref"></a>
                    <a href="https://twitter.com/maxrollgg" className="social-ref"></a>
                    <a href="https://www.youtube.com/maxrollgg" className="social-ref"></a>
                    <a href="https://discord.gg/WBBwg5X" className="social-ref"></a>
                    <a href="https://discord.gg/WBBwg5X" className="social-ref"></a>
                </div>
                <div className="bottom-texts">
                    <div className="links">
                        <h4 className="bottom-ttl">OTHER LINKS</h4>
                        <a className="bottom-txt" href="https://maxroll.gg/team">Team</a>
                        <a className="bottom-txt" href="https://maxroll.gg/contact">Contact</a>
                        <a className="bottom-txt" href="https://maxroll.gg/contact">Donate</a>
                    </div>
                    <div className="bottom-text-games">
                        <h4 className="bottom-ttl">GAMES</h4>
                        <a className="bottom-txt" href="https://d2.maxroll.gg/">Diablo II</a>
                        <a className="bottom-txt" href="https://d3.maxroll.gg/">Diablo III</a>
                        <a className="bottom-txt" href="https://maxroll.gg/d4/">Diablo IV</a>
                        <a className="bottom-txt" href="https://lost-ark.maxroll.gg/">Lost Ark</a>
                        <a className="bottom-txt" href="https://poe.maxroll.gg/">Path of Exile</a>
                        <a className="bottom-txt" href="https://maxroll.gg/torchlight-infinite/">Torchlight Infinite</a>
                        <a className="bottom-txt" href="https://maxroll.gg/torchlight-infinite/">Last Epoch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App