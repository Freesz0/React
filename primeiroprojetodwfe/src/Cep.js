import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";


function Cep() {
    const [form, setForm] = useState({ cep: "", nro: "", logradouro: "", bairro: "", localidade: "", estado: "" });

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value
        })
    }

    const submit = (event) => {
        alert("Dados gravados com sucesso")
    };

    const consultarCep = (event) => {
        const cepNum = form.cep.replace(/\D/g, "");
        if (cepNum.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cepNum}/json/`)
            .then((res) => {
                if (res.data.erro && res.data.erro === "true") {
                    alert("Cep não encontrado");
                } else {
                    const { logradouro, bairro, localidade, estado }
                        = res.data
                    setForm({"logradouro": logradouro, "bairro": bairro, "localidade": localidade, "estado": estado})

                    alert("Achei seu CEP");
                }
            });
        } else {
            alert("CEP inválido")
        }
}

  return (
    <Card className="cardCEP" style={{ width: 400}}>
        <Card.Body>
            <Form onSubmit={submit} className="formCEP">
                <Form.Group className="formGroupCEP" controlId="formBasicLogin">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu CEP"
                        name="cep"
                        value={form.cep}
                        onChange={handleChangeForm}
                    />

                    <Button
                        variant="primary"
                        onClick={consultarCep}
                    >
                        Consultar CEP
                    </Button>
                </Form.Group>

                <Form.Group className="formGroupCEP">
                    <Form.Text className="text-muted">
                        Logradouro: {form.logradouro}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="d-flex align-items-center mb-3" style={{gap: 5}}>
                        <Form.Label>Nro</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Informe o nro"
                            name="nro"
                            value={form.nro}
                            onChange={handleChangeForm}
                        />
                    </Form.Group>

                <Form.Group className="formGroupCEP">
                    <Form.Text className="text-muted">
                        Bairro: {form.bairro}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="formGroupCEP">
                    <Form.Text className="text-muted">
                        Localidade: {form.localidade}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="formGroupCEP">
                    <Form.Text className="text-muted">
                        Estado: {form.estado}
                    </Form.Text>
                </Form.Group>

                <Button
                    variant="success"
                    size="lg"
                    className="w-100"
                    type="submit"
                >
                    Gravar
                </Button>

            </Form>
        </Card.Body>
    </Card>
  );
}

export default Cep;