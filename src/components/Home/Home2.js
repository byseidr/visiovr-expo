import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutMain1 from "../../Assets/about-main1.png";
import aboutMain2 from "../../Assets/about-main2.png";
import Tilt from "react-parallax-tilt";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={3} className="myAvtar d-none d-md-flex">
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
                            Somos uma {" "}
                            <i>
                                <b>startup</b>
                            </i>{" "}
                            especializada no desenvolvimento de aplicações
                            voltada para a educação utilizando realidade virtual e
                            realidade aumentada.
                            <br />
                            <br />
                            Os <span className="purple">Ambientes Virtuais de Aprendizagem (AVAs)</span> apresentam algumas limitações, oferecendo uma estrutura linear e estática para a organização de
                            disciplinas e conteúdos, sem explorar o potencial das tecnologias imersivas para promover interatividade,
                            personalização e engajamento profundo no processo de aprendizagem. 
                            <br />
                            <br />
                            Explorando o potencial dessas tecnologias imersivas, o <span className="purple">VISIOVR</span> oferece novas possibilidades para a
                            organização de conteúdos educacionais, propondo uma reestruturação das metodologias de ensino e da
                            interação dos alunos com o material didático. 
                        </p>

                        <p className="home-about-body">
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
                    <Col md={3} className="myAvtar d-none d-md-flex">
                        <Tilt>
                            <img
                                src={aboutMain2}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                    <Col md={3} className="myAvtar d-flex d-md-none px-4">
                        <Tilt>
                            <img
                                src={aboutMain1}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
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
                                    href="https://www.linkedin.com/in/visiovr"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/visio.vr"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
