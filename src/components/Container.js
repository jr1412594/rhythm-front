import { Component } from 'react'
import FavContainer from './FavContainer'
import AllContainer from './AllContainer'
const baseURL = "http://localhost:7000/favorites"

export default class Container extends Component {

    state = { 
        data: [],
        favorites: []
        }

    
        
        componentDidMount(){
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {	
            "method": "GET",	
            "headers": {		
                "x-rapidapi-key": "c5a25d613bmsh59d09e98634bad0p1445d8jsnb7fcfd27ba92",		
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"	}})
                .then(response => response.json())
                .then(data => {
                this.setState({
                    data: data.data
                });})
            }

            addToFav = (artist) => {
                this.setState({favorites: [...this.state.favorites, artist]})
                fetch(baseURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/json',
                        'Accept': 'application/json',
                        body: JSON.stringify({
                            artist_id: `${this.state.favorites}`
                            
                        }
                        ) 
                    }  
                })
                console.log(this.state.favorites,"favs")
        // .then(response => response.json())
        // .then(results => {
        //     this.setState({favorite:results})
        // })
    }
        
    
            
    render(){
        
        return (
            <div className='Container'>
        
                
                <FavContainer favorites={this.state.favorites} />
                <AllContainer artists={this.state.data} addToFav={this.addToFav}/>
                {/* <CardContainer artists={this.state.data} /> */}
            </div>
        )
    }

}
