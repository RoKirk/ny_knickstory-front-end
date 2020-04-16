import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import LandingPage from './components/Routes/LandingPage';
import HomePage from "./components/Routes/HomePage"
import UserLogin from "./components/Routes/UserLogin"
import UserSignUp from "./components/Routes/UserSignUp"
import Team from "./components/Routes/Team";
import PlayerList from "./components/Routes/PlayerList"
import Player from "./components/Routes/Player"
import PostEdit from "./components/Routes/PostEdit"
import PhotoGallery from "./components/Routes/PhotoGallery"
import { verifyUser, loginUser, registerUser } from "./services/api-helper"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      post_text: ""
    }
  };

  componentDidMount() {
    verifyUser()
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    })
    this.props.history.push("/homepage")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  handleRegister = async (e) => {
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({
      currentUser
    });
    this.props.history.push("/homepage")
  }


  render() {
    return (

      <div className="App">
        <Switch>

          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
              />
            )}
          />

          <Route
            exact
            path="/homepage"
            render={() => (
              <HomePage
              />
            )}
          />

          <Route exact path="/user_login" render={() => (
            <UserLogin
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)}
          />

          <Route
            exact
            path="/user_sign_up"
            render={() => (
              <UserSignUp
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />

          <Route
            exact
            path="/team"
            render={() => (
              <Team
              />
            )}
          />

          <Route
            exact
            path="/players"
            render={() => (
              <PlayerList

              />
            )}
          />

          <Route
            exact
            path="/players/:id"
            render={(props) => (
              <Player
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/post_edit/:id"
            render={(props) => (
              <PostEdit
                {...props}
              />
            )}
          />

          <Route
            exact
            path="/photo_gallery"
            render={() => (
              <PhotoGallery
              />
            )}
          />

        </Switch>
      </div>

    );
  }
}

export default withRouter(App);
