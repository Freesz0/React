import './CardContador.css';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardContador() {
    const [contagem, setContagem] = useState(0)

    useEffect(() => {
      if (contagem === 20) {
        apresentarAlerta()
      }
    }, [contagem]);

    const apresentaMenu = () => {
      setContagem(contagem + 1)
    }
    
    const apresentarAlerta = () => {
      alert("Você deu 20 commits, tome aqui 5 pontos!")
    }

    const alertaZerar = () => {
      alert('Você tem certeza que deseja zerar seus commits?')
    }
    

    return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/CardIcon.png" alt="Logo" />
      <Card.Body>
        <Card.Title className="CardTitle">Simulador de Commit</Card.Title>
        <Card.Text className="CardText">
          Commits: {contagem}
        </Card.Text>
        <Card.Body>
          <div className="ButtonCard">
            <Button style={{fontSize:'1.5rem', fontWeight: 900}} variant="success" onClick={apresentaMenu}>Dar Commit</Button>
            <Button style={{fontSize:'1.5rem'}} variant="danger" onClick={() => setContagem(0)}>Zerar</Button>
          </div>
        </Card.Body>
      </Card.Body>
    </Card>
    );
}

export default CardContador;