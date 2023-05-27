import React from 'react'
import './TabCard.scss'
import PropTypes from 'prop-types'

function Card({
  img, title, author, update, opt, link,
}) {
  return (
    <a className="card-content" href={link}>
      <img className="card-img" src={img} alt="Game News" />
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
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  update: PropTypes.string,
  opt: PropTypes.string,
  link: PropTypes.string,
}
export default Card
