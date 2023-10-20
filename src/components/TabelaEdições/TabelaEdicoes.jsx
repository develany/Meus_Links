import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { API } from '../../services/Api';
import { useState } from "react";

const TabelaEdicoes = ({ links }) => {
    const [titulo, setTitulo] = useState("");
    const [url, setUrl] = useState("");
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const [editingId, setEditingId] = useState(null);

    async function criar(evento) {
        try {
            evento.preventDefault();

            const dados = { titulo, url, token };

            const response = await API.post(`http://localhost:8080/links/${id}`,
                dados, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });


            console.log(response)
            window.location.reload();
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    function editar(id_link) {
        const linkEditado = {
            titulo: titulo,
            url: url,
        };
        editarLink(id_link, linkEditado);
        setEditingId(null);
    }
    async function editarLink(id_link, linkEditado) {
        try {

            const response = await API.put(`http://localhost:8080/links/${id_link}`,
                linkEditado, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response)
            window.location.reload();
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    async function deletar(id_link) {
        try {
            const response = await API.delete(`http://localhost:8080/links/${id_link}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            console.log(response)
            window.location.reload();
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    return (
        <>
            <Form onSubmit={criar} method="POST"
            style={{marginBottom:"5%"}}>
                <hr />
                <h3 style={{marginBottom:"8%"}}>Novo Link</h3>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Titulo
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Digite o titulo do link " onChange={(evento) => setTitulo(evento.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        URL
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Digite a URL do link " onChange={(evento) => setUrl(evento.target.value)} />
                    </Col>
                </Form.Group>
                <Button variant="light" type="submit">
                    Adicionar Novo Link
                </Button>
                <hr />
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>URL</th>
                        <th>EDITAR</th>
                        <th>DELETAR</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link) => (
                        <tr key={link.id}>
                            <td>
                                {editingId === link.id ? (
                                    <input
                                        type="text"
                                        value={titulo}
                                        onChange={(evento) => setTitulo(evento.target.value)}
                                    />
                                ) : (
                                    link.titulo
                                )}
                            </td>
                            <td>
                                {editingId === link.id ? (
                                    <input
                                        type="text"
                                        value={url}
                                        onChange={(evento) => setUrl(evento.target.value)}
                                    />
                                ) : (
                                    link.url
                                )}
                            </td>
                            <td>
                                {editingId === link.id ? (
                                    <button style={{ border: "none" }} onClick={() => editar(link.id)}>✅</button>
                                ) : (
                                    <button style={{ border: "none" }} onClick={() => setEditingId(link.id)}>✏️</button>
                                )}
                            </td>
                            <td><button style={{ border: "none" }} onClick={() => deletar(link.id)}>❌</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </>
    )
}
export default TabelaEdicoes;
