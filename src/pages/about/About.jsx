import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import Profile from '../../assets/images/profile/ganteng.jpg'

import './About.style.css'

const About = () => {
    return (
        <div id="about">
        <div className='about'>
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* Profile Pict */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                            <Image className="profile justify-content-end" src={Profile} alt="Profile" thumbnail fluid />
                        </Row>
                    </Col>

                    {/* Profile me description */}
                    <Col xs={12} md={6}>
                        <Row className="align-items-start p-2 mydetails rounded">
                            {/* description */}
                            Hi everyone! I am <strong>&nbsp;Gilang Ramadhan Hatno</strong>
                            <br />
                            I was born in Jakarta 13 January 1999. 
                            {/* In 2020 and when I entered semester 8, I stopped studying because my parents could no longer afford to pay for me to study. At the same time, this Covid 19 pandemic is what actually made my parents unable to pay for my university studies */}
                        </Row>
                        <Row>
                            {/* button */}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="https://wa.me/6281210657874" target="__blank">
                                        <Button className="m-2" variant="outline-success">
                                            Let's talk
                                        </Button>
                                    </a>
                                    <a href="#contact" target="__blank">
                                        <Button className="m-2" variant="outline-primary">
                                            My Resume
                                        </Button>
                                    </a>
                                    <a href="https://github.com/gilangrmdhn13" target="__blank">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default About
