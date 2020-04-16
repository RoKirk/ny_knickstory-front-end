import React, { Component } from 'react'
import axios from "axios"
import PlayerView from "../Views/PlayerView";
import NavigationBar from "../Shared/NavigationBar"
import BlogInterface from "../Shared/BlogInterface"


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null
        };
    }


    getPlayer = async () => {
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        try {
            let response = await axios.get(`http://localhost:3000/players/${id}`)
            console.log(response)
            this.setState({
                player: response.data,
                playerLoaded: true
            });
        }
        catch (error) {
            console.log(error)
        }
        // await axios.get("http://localhost:3000/players").then(jsonRes => {
        // });
    };

    componentDidMount() {
        this.getPlayer()
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Player Page Present</h1>
                <PlayerView player={this.state.player} />
                <BlogInterface />
            </div>

        );
    }
}

export default Player

