import React from 'react'
import CardContainer from './CardContainer'

export default function AllContainer(props) {

    console.log(props)
    return (
        <div className='all-container'>
            <CardContainer artists ={props.artists} addToFav={props.addToFav} />
        </div>
    )
}
