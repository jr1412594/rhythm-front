import React from 'react'

export default function Card(props) {

const handleClick = () => {
    props.addToFav(props.artist.album.title)
}

    return (
        <div className='card' onClick={handleClick}>
            <h1>{props.artist.album.title}</h1>
            <img src={props.artist.album.cover_medium} alt={props.artist.name}/>
        </div>
    )
}
