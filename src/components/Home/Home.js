import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import textLogo from "../../Assets/text-logo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
    return (
        <section>
            <Particle />
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1
                                style={{ paddingBottom: 15 }}
                                className="heading"
                            >
                                Olá!{" "}
                                <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                Nós somos a
                                <img
                                    className="text-logo"
                                    alt="VisioVR"
                                    src={textLogo}
                                />
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;
