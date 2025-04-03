import './CardContador.css';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function CardContador(props) {
    const [contagem, setContagem] = useState(0)
    const [pontos, setPontos] = useState(0)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
      if (contagem % 10 === 0 && contagem !== 0) {
        apresentarAlerta()
        setPontos(pontos => (pontos + 2))
      }
    }, [contagem]);

    useEffect(() => {
      if (pontos === 6) {
        alert('Passou em FrontEnd, te vejo no TCC')
      }
    }, [pontos]);

    const apresentaMenu = () => {
      setContagem(contagem + 1);
      if (props.alertaCommit) {
        props.alertaCommit();
      }
    }
    
    const apresentarAlerta = () => {
      alert('Você deu 10 commits, tome aqui 2 pontos!')
    }

    const alertaZerar = () => {
      if (pontos > 0) {
        return (
          setShowModal(true));
      }else{
        alert('Vocẽ não tem pontos!')
    }}

    // const alertaZerar = () => {
    //   setShowModal(true)};

    return (

    <>
    <h1 style={{CardContador}}>SIMULADOR DE COMMIT</h1>

    <Card alertaCommit={() => alert('Commit realizado!')} style={{ width: '30rem' }}>
      <Card.Img style={{width: '384px'}}className='CardIcon' variant="top" src="/CardIcon.png" alt="Logo" />
      <Card.Body>
        <Card.Text className="CardText">
          Commits: {contagem}<br />
          Pontos: {pontos}
        </Card.Text>
        <Card.Body>
          <div className="d-grid gap-2">
            <Button size="lg" style={{fontSize:'1.5rem', fontWeight: 900}} variant="success" onClick={apresentaMenu}>
              DAR COMMIT
            </Button>
            <Button size="sm" style={{fontSize:'1rem'}} variant="danger" onClick={alertaZerar} pontos={pontos}>
              ZERAR
            </Button>
          </div>
        </Card.Body>
        
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>CUIDADO!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Você tem certeza que deseja zerar seus commits e pontos?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={() => { setContagem(0); setPontos(0); setShowModal(false)}}>
                    Zerar
                </Button>
            </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
    </>
    );
}

export default CardContador;