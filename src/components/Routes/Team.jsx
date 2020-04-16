import React, { Component } from 'react'
import { axios } from "axios"
import TeamView from '../Views/TeamView'
import NavigationBar from "../Shared/NavigationBar"
import BlogInterface from "../Shared/BlogInterface"


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            team: []

         };
    }

    getAllTeams = async () => {
        try {
            let response = await axios.get("http://localhost:3000/new_york_teams")
            console.log(response)
            this.setState({
                team: response.data,
                teamLoaded: true
            });
        }
        catch (error) {
            console.log(error)
        }
        // await axios.get("http://localhost:3000/players").then(jsonRes => {
        // });
    };

    componentDidMount() {
        this.getAllTeams()
    }


    render() {
        return (
            <div>
                <NavigationBar />
                <h1>Team Page Present</h1>
                <TeamView team={this.state.team}/>
                <BlogInterface />
            </div>
            
        );
    }
}

export default Team;

