
import {Component} from 'react'


export default class Search extends Component {

    state = {
        artist: []
    }

    render() {

        return (
            <div className ='search'>
                <form>
                    <input name="search" type="text" placeholder="Search Artist" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
