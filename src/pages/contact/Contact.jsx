import React from 'react'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'
import './Contact.style.css'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        {/* Email */}
                        <div className="m-2">
                            <a href="gilangocon@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="gilangocon@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="m-2">
                            <a href="gilangocon@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-success" title="gilangocon@gmail.com">
                                    <i className="fab fa-whatsapp-square"></i> WhatsApp
                                </Button>
                            </a>
                        </div>

                        {/* Facebook */}
                        <div className="m-2">
                            <a href="gilangocon@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="gilangocon@gmail.com">
                                    <i className="fa fa-facebook-square"></i> Facebook
                                </Button>
                            </a>
                        </div>

                        {/* Github */}
                        <div className="m-2">
                            <a href="gilangocon@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="gilangocon@gmail.com">
                                    <i className="fa fa-github-square"></i> Github
                                </Button>
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className="m-2">
                            <a href="gilangocon@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="gilangocon@gmail.com">
                                    <i className="fab fa-instagram-square"></i> Instagram
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact
