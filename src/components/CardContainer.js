import React from 'react'
import Card from './Card'
export default function CardContainer(props) {


const eachSong = () => {
    return props.artists.map(
        artist => {
            return (
                <Card artist={artist} addToFav={props.addToFav}/>
            )
        } 
        )
}

    return (
        <div className="card-container">
            {/* CardContainer */}
            {eachSong()}
        </div>
    )
}
