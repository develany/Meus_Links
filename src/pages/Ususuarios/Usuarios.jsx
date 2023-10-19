import React, { useEffect, useState } from "react";
import Cards from "../../components/Cads/Cards";
import axios from "axios";
import { Button } from "react-bootstrap";

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 6; // Quantidade de usuários por página

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        const response = await axios.get("http://localhost:8080/usuarios");
        const sortedUsers = response.data.sort((a, b) =>
            a.nome_de_usuario.localeCompare(b.nome_de_usuario, undefined, { sensitivity: 'base' })
        );
        setUsuarios(sortedUsers);
    }

    // Função para calcular os usuários a serem exibidos na página atual
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usuarios.slice(indexOfFirstUser, indexOfLastUser);

    // Função para alterar a página atual
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h1>Usuários</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {currentUsers.map((usuario) => (
                    <Cards key={usuario.id} usuario={usuario} />
                ))}
            </div>

            {/* Botões de paginação */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {Array(Math.ceil(usuarios.length / usersPerPage))
                    .fill()
                    .map((_, i) => (
                        <Button key={i} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </Button>
                    ))}
            </div>
        </div>
    );
};

export default Usuarios;
