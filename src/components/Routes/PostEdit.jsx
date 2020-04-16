import React, { Component } from 'react'
import axios from "axios"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { verifyUser, updatePost, destroyPost } from "../../services/api-helper"

class PostEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_text: {
                post_text: "",
                user_id: ""
            }
        };
    }

    editPost = async (e) => {
        e.preventDefault();
        console.log(this.state.post_text)
        let postId = this.props.match.params.id
        const response = await updatePost(this.state.post_text, postId);

        // REDIRECT BACK
        this.props.history.push("/homepage")
    }

    readPost = async () => {
        try {
            let postId = this.props.match.params.id
            console.log(postId)
            let response = await axios.get(`http://localhost:3000/blog_posts/${postId}`)
            console.log(response.data)
            this.setState({
                post_text: response.data
            })
        }
        catch (error) {
            console.log(error)
        }
    };

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

    async destroyPostAndBackToHomepage() {
       await destroyPost(this.props.match.params.id)
            this.props.history.push("/homepage")

    }

    componentDidMount() {
        this.readPost()
        verifyUser()
    }

    render() {
        return (
            <div>

                <>

                    <InputGroup className="mb-3">
                        <FormControl
                            onChange={this.handleFormChange}
                            name="post_text"
                            placeholder="Type Comments Here."
                            aria-label="Post your thought's here"
                            aria-describedby="basic-addon2"
                            value={this.state.post_text && this.state.post_text.post_text}
                        />
                        <InputGroup.Append>
                            <Button onClick={() => { this.destroyPostAndBackToHomepage() }} variant="outline-secondary">Delete</Button>
                            <Button onClick={this.editPost} variant="outline-secondary">Edit</Button>

                        </InputGroup.Append>
                    </InputGroup>

                </>

            </div>

        );
    }
}

export default PostEdit;

