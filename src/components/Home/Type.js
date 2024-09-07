import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Realidade Virtual",
                    "Realidade Aumentada",
                    "Aplicações Educacionais",
                    "Aplicações de Saúde",
                    "Aplicações Empresariais",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
