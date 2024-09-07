import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Somos estudantes do curso de{" "}
                        <b>Engenharia da Computação</b> entusiasmados para
                        desenvolver e apresentar ao mundo as mais variadas e
                        inovadoras ideias com relação a{" "}
                        <b>realidades virtuais ou aumentadas</b>. É nosso dever
                        utilizar das tecnologias existes o máximo possível para
                        trazer eficácia, dinamismo e originalidade às ações
                        simples do dia a dia.
                        <br />
                        <br />
                        Algumas informações sobre nossa equipe:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Formandos em Engenharia da
                            Computação
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Estudantes da Unilab
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Amantes das tecnologias VR/AR
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Virtual reality is not a media experience; it’s an
                        empathy generator. We can step into the shoes of another
                        person in another place and experience their reality."{" "}
                    </p>
                    <footer className="blockquote-footer">Chris Milk</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
