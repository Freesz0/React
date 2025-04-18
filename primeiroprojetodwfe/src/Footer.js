import React, { useEffect, useState } from "react";
import './Footer.css'

function Footer(props) {

    //Troca de estado 
    const [contagem, setContagem] = useState(1)

    //Escuta o estado 
    useEffect(() => {
        if (contagem === 10) {
            apresentarAlerta()
        }
    }, [contagem]);

    const apresentaMenu = () => {
        setContagem(contagem + 1)
        // alert("Cheguei aqui....")
    }

    const apresentarAlerta = () => {
        alert("Cheguei aqui e sou igual a 10....")
    }


    /* 

    return (
<>
ternario  
{contagem < 10 ? (
    <div className="geral">
        <div className="alert alert-primary" role="alert">
            Rodapé Alerta!

            <p>Instagram: {props.insta} </p>
            <p>Whats: {props.whats} </p>
        </div>

        <button onClick={apresentaMenu}>Contar</button>
        <p> Total de visitas ao App: {contagem} </p>

    </div>

) : <p> maior que 10</p>
}
</>
);
    */

    return (
        contagem < 10 ? (
            <div className="footer">
                <h1>FOOTER</h1>
                <div className="alert alert-primary" role="alert">
                    Rodapé Alerta!

                    <p>Instagram: {props.insta} </p>
                    <p>Whats: {props.whats} </p>
                </div>

                <button onClick={apresentaMenu}>Contar</button>
                <p> Total de visitas ao App: {contagem} </p>

            </div>

        ) : <p> maior que 10</p>
    );
}

export default Footer;