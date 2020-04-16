import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { createPost } from "../../services/api-helper"

class BlogInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            blog_post: {
                post_text: "",
                user_id: ""
            }

        };
    }

    newPost = async (e) => {
        e.preventDefault();
        console.log(this.state.post_text)
        const post = await createPost(this.state.post_text);
        this.readAllPost()
    }

    readAllPost = async () => {
        try {
            let response = await axios.get("http://localhost:3000/blog_posts")
            console.log(response)
            this.setState({
                posts: response.data,
                postsLoaded: true
            });
        }
        catch (error) {
            console.log(error)
        }
    };

    componentDidMount() {
        this.readAllPost()
    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        let id = localStorage.getItem('id')
        console.log("id:" + id)
        this.setState({
            post_text: {
                user_id: id,
                [name]: value
            }
        })
        console.log(value)
    }


    render() {
        return (
            
            <div className="blog-int">

                <Jumbotron fluid>
                    <Container>
                        {this.state.posts.map((post, index) => (
                            <div
                                key={index}>

                                <div>
                                    <Link to={`/post_edit/${post.id}`}>Edit/Delete</Link>
                                    <p>
                                        - {post.post_text}
                                    </p>


                                </div>
                            </div>

                        ))}
                    </Container>
                </Jumbotron>

                <>

                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={this.handleFormChange}
                            name="post_text"
                            placeholder="Type Comments Here."
                            aria-label="Post your thought's here"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button onClick={this.newPost} variant="outline-secondary">Post</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </>

            </div>

        );
    }
}

export default BlogInterface;

