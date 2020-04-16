import React from 'react'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
    return (

        <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/players">Players</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/team" eventKey="link-1">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/photo_gallery" eventKey="link-2">Photo Gallery</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        
    )
}

export default NavigationBar
