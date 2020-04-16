import React, { Component } from 'react'
import PlayerListView from '../Views/PlayerListView'
import NavigationBar from "../Shared/NavigationBar"
import axios from "axios"
import BlogInterface from '../Shared/BlogInterface'


export class PlayerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [],
            playersLoaded: false,
        }
    }

    getAllPlayers = async () => {
        try {
            let response = await axios.get("http://localhost:3000/players")
            console.log(response)
            
            this.setState({
                players: response.data,
                playersLoaded: true,
            });
        }
        catch (error) {
            console.log(error)
        }
        // await axios.get("http://localhost:3000/players").then(jsonRes => {
        // });
    };

    componentDidMount() {
        this.getAllPlayers()
        console.log(this.state.players)
        console.log(this.state.playersLoaded)
    }
    
    render() {
        console.log(this.state.players)
        console.log(this.state.playersLoaded)
        return (
            <div>
                <NavigationBar />
                <PlayerListView players={this.state.players} />
                <BlogInterface />
                

                {/* <BlogInterface players={this.state.players}/> */}
            </div>
            
        )
        
    }
    
}


export default PlayerList




