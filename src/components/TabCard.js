import React from "react"
import './TabCard.scss'

const Card = ({img,title,author,update,opt,link}) =>{
    return(
        <a className="card-content" href={link}>
            <img className="card-img" src={img}></img>
            <h3 className="card-title">{title}</h3>
            <div className="by-group">
                <p className="by">By</p>
                <p className="card-author">{author}</p>
            </div>
            <p className="card-update">{update}</p>
            <p className="optional-season">{opt}</p>
        </a>
    )
}
export {Card}