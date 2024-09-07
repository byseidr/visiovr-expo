import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutMain1 from "../../Assets/about-main1.png";
import aboutMain2 from "../../Assets/about-main2.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={3} className="myAvtar">
                        <Tilt>
                            <img
                                src={aboutMain1}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                    <Col md={6} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Vamos nos <span className="purple">conhecer</span>{" "}
                            melhor
                        </h1>
                        <p className="home-about-body">
                            Somos uma empresa{" "}
                            <i>
                                <b>startup</b>
                            </i>{" "}
                            especializada no desenvolvimento de aplicações
                            voltadas para a vasta área da realidade virtual e
                            realidade aumentada.
                            <br />
                            <br />
                            Acreditamos que, com o poder da <b>computação</b> é
                            possível criar mundos infinitos, com enorme
                            potencial educacional e tecnológico.
                            <br />
                            <br />A realidade virtual e a realidade aumentada
                            são, hoje me dia, uma grande fonte de{" "}
                            <b>possibilidades</b>, e planejamos explorar isso ao
                            máximo por meio de nossas criações.
                            <br />
                            <br />
                            Caso tenha se interessado, faça um orçamento conosco
                            e dê vida à sua ideia, sendo assim, você, mais um{" "}
                            <i>
                                <b>criador de mundos</b>
                            </i>{" "}
                            conosco.
                        </p>
                    </Col>
                    <Col md={3} className="myAvtar">
                        <Tilt>
                            <img
                                src={aboutMain2}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>ONDE NOS ENCONTRAR</h1>
                        <p>
                            Entre em <span className="purple">contato</span>{" "}
                            conosco pelos meios a seguir
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/soumyajit4419/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
