import React from 'react';
import {Card, CardDeck, Row, Col, Image} from 'react-bootstrap'
import './Skills.style.css'
import {skills} from './SkillsData'

const Skills = () => {
    return (
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                    {/* Front End */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Frond End
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {skills.frontend.map((skill, index) => (
                                        <span className="p-2" key={`${skill.skillName}${index}`}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                {skill.skillsName}
                                            </a>
                                        </span>
                                        ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Programming Language */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Programming Languages
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        skills.programmingLanguage.map((skill, index) => (
                                            <span className="p-2" key={`${skill.skillName}${index}`}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                    {skill.skillsName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Hosting Platform */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Hosting Platforms
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {
                                        skills.hostingPlatforms.map((skill, index) => (
                                            <span className="p-2" key={`${skill.skillName}${index}`}>
                                                <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                    {skill.skillsName}
                                                </a>
                                            </span>
                                        ))
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Front End */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">
                                    Frond End
                                </Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {skills.frontend.map((skill, index) => (
                                        <span className="p-2" key={`${skill.skillName}${index}`}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                                                {skill.skillsName}
                                            </a>
                                        </span>
                                        ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
        </div>
    )
}

export default Skills
