import { Component } from 'react'
import CardContainer from './CardContainer'

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
                    data
                });})
            }
            
    render(){
        
        return (
            <div>
                Container
                <CardContainer artists={this.state.data} />
            </div>
        )
    }

}
