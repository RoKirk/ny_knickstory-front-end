import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaUserEdit } from "react-icons/fa";


const UserSignUp = (props) => {
    return (
        <div className="login-signup-page">

            <Link className="back-links" to="/">Back</Link>

            <span className="login-signUp-icons">
                <FaUserEdit /><span className="welcome-page-links">Sign Up</span>
            </span>

            <div>
                <h1 className="login-signup-header">User Sign Up</h1>
            </div>

            <div>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    props.handleRegister();
                }} >
                    <div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
                            <Form.Text className="text-muted">
                                Enter Username.
                            </Form.Text>
                        </Form.Group>
                    </div>

                    <div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail Address</Form.Label>
                            <Form.Control name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
                            <Form.Text className="text-muted">
                                Enter E-mail Address.
                            </Form.Text>
                        </Form.Group>
                    </div>

                    <div>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Enter password.
                    </Form.Text>
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                    </div>
                    <div>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default UserSignUp
