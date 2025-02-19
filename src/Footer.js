import { Alert } from "bootstrap";
import React, { useState } from "react";

function Footer(props) {

    const [contagem, setContagem] = useState(1)
    
    const apresentaMenu = () => {
        setContagem(contagem + 1)
        Alert.alert('Titulo alerta', 'Deu certo?', [
            {
                text: 'Sim',
                onPress: () => console.log('Deu certo..'),
                style: 'cancel',
            },
            { text: 'Não', onPress: () => console.log('Não deu certo') },
        ]);
    }

    return (
        <div class="geral">
            <div class="alert alert-primary" role="alert">
                Rodapé Alerta!

                <p>Instagram: {props.insta} </p>
                <p>Whats: {props.whats} </p>
            </div>

            <button onClick={apresentaMenu}>Contar</button>
            <p> Total de visitas ao App: {contagem} </p>

        </div>
    );
}

export default Footer;