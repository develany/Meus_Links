import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { API } from "../../services/Api";
import { useState } from "react";
import styles from './Cadastro.module.css';


const Cadastro = () => {
    const [usuario, setUsuario] = useState(null);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    async function cadastrar(evento) {
        try {
            evento.preventDefault();
            const dados = { nome, email, senha };

            const response = await API.post("/usuarios",
                dados);

            localStorage.setItem("logado", true);

            setUsuario(response.data.usuario);

            window.location.href = "/login";
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    return (
        <>
            {usuario && <h2>Bem vindo, {usuario.nome}</h2>}
            <Form className={styles['form-container']} onSubmit={cadastrar} method="POST">
                <h1>Cadastre-se</h1>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Nome
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Digite seu nome" onChange={(evento) => setNome(evento.target.value)} />
                    </Col>
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="Digite seu email" onChange={(evento) => setEmail(evento.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Senha
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Digite sua senha" onChange={(evento) => setSenha(evento.target.value)} />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
                <p>Login</p>
            </Form>
        </>

    )

}
export default Cadastro;
