import "./Header.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Header(props) {
    const [form, setForm] = useState({ login: "", senha: "" });

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        if(form.login === "teste" && form.senha === "senha"){
            alert("Logado com sucesso")
            window.location = "/"
        } else {
            alert("Usuario e senha inválidos")
        }
    };

    if(props.menu === "não"){
        return (
            <h1> Sem Header </h1>
        )
    }else{
    return (
        <>
        <h1 className='header1'>AUTENTICAÇÃO NECESSÁRIA</h1>

        <Form className="formularioHeader">
            <Form.Group className="mb-3" controlId="formBasicLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control onChange={handleChangeForm} type="login" placeholder="Login" name="login" />
                <Form.Text className="text-muted">
                    Não divulgaremos seus dados com ninguém.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSenha">
                <Form.Label>Senha</Form.Label>
                <Form.Control onChange={handleChangeForm} type="password" placeholder="Senha" name="senha"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button onClick={handleSubmitForm} variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        </>
    );
    }
}

export default Header;