import React from 'react'
import NavigationBar from "../Shared/NavigationBar"
import WelcomeMessage from "../Views/WelcomeMessage"
import BlogInterface from "../Shared/BlogInterface"

const HomePage = () => {

    // onSubmit = async (evt) => {
    //     evt.preventDefault()
    //     // post request submitting the form data
    //     // TODO put/post and also a different url
    //     const idParams = this.props.match.params.id
    //     const res = this.props.isUpdateForm ?
    //         await axios.get('http://localhost:3000/players/' + this.state) :
    //     // ...which gives us back the new teacher object

    //     const player = res.data.player
    //     // ...which we will then set to app state
    //     this.props.setPlayer(player)
    //     // redirect to the new teacher 
    //     this.props.history.push('/players/' + player.id)

    return (
        <div>
            <NavigationBar />
            <WelcomeMessage />
            <BlogInterface />  
        </div>
    )
}

export default HomePage
