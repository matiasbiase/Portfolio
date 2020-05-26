const cuadro = document.getElementById("test")

const preguntas = [
    {
         pregunta: "1. ¿Quién diseñó la silla wassily",
         respuestas: {
             a: "Breuer",
             b: "Wassilly Kandinsky",
             c: "Le Corbusier"
         },
         respuestaCorrecta: "a"

    },
    {
        pregunta:"2. ¿Quién escribio el libro fantasía?",
        respuestas: {
            a: "Bruno Munari",
            b: "Philippe Starck",
            c: "Arne Jacobsen"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "3. ¿En que año se creó el primer automóvil ",
        respuestas: {
            a: "1901",
            b: "1836",
            c: "1886"
        },
        respuestaCorrecta: "c"
    },
    {
       pregunta: "4. ¿Cómo se llama el primer Astronauta?",
       respuestas: {
         a:"Neil Armstrong",
         b:"Yuri Gagarin",
         c:"Usuf kalagan"
        },
        respuestaCorrecta: "b"
    },
    {
        pregunta: "5. ¿Quién diseño el iphone",
        respuestas: {
            a:"jony Ive",
            b:"Steve Jobs",
            c:"Steve Wozniak"
        },
        respuestaCorrecta: "a"
    }
];

function mostrarTest(){
    const preguntasyrespuestas = [];

    preguntas. forEach((preguntaactual, numerodepregunta) => {
        const respuestas = [];
        for(letrarespuesta in preguntaactual.respuestas){
            respuestas.push(
                `<label>
                    <imput type="radio" name=" ${numerodepregunta}" value)="${letrarespuesta}"
                    ${letrarespuesta} : ${preguntaactual.respuestas[letrarespuesta]}
                
                </label>`

            );
            
        }
        preguntasyrespuestas.push(
            `<div class="cuestion">   ${preguntaactual.pregunta} </div>
             <div class="respuestas"> ${respuestas.join('')} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasyrespuestas.join('');
}

mostrarTest();