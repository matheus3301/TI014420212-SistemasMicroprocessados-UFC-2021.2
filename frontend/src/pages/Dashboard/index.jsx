import React from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Dashboard = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Dashboard SmartHome
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}


export default Dashboard