import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { API } from "../../services/Api";
import { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [token, setToken] = useState();
    const [usuario, setUsuario] = useState(null);

    async function autenticar(evento) {
        try {
            evento.preventDefault();

            const dados = { email, senha, token };

            const response = await API.post("/usuarios/login",
                dados
            );
            console.log(response)
            localStorage.setItem("logado", true);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.usuario.id);

            setToken(response.data.token)
            setUsuario(response.data.usuario);
            window.location.href = `/perfil/${response.data.usuario.id}`;
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    return (
        <>
            {usuario && <h2>Bem vindo, {usuario.nome}</h2>}
            <Form className={styles['form-container']} onSubmit={autenticar} method="POST">
                <h1>Login</h1>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
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
                    Entrar
                </Button>
                <p>Cadastre-se</p>
            </Form>
        </>

    )

}
export default Login;
