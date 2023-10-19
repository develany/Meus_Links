import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPerfil from "../../components/CardPerfil";
import TabelaEdicoes from "../../components/TabelaEdições/TabelaEdicoes";


const Configuracoes = () => {
    const id = localStorage.getItem('id');
    const [usuario, setUsuario] = useState([]);
    const [loading, setLoading] = useState(false);
    const [links, setLink] = useState([]);

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getUser() {
        try {
            setLoading(true);
            const responseLinks = await axios.get(
                `http://localhost:8080/usuarios/${id}/links`
            );
            const response = await axios.get(
                `http://localhost:8080/usuarios/${id}`
            );
            setUsuario(response.data);
            setLink(responseLinks.data)
        } catch (error) {
            alert("Deu erro");
        } finally {
            setLoading(false);
        }
    }
    return loading ? <>carregando...</> :
        <>
            <div>
                <CardPerfil usuario={usuario} links={links}></CardPerfil>
                <TabelaEdicoes links={links}></TabelaEdicoes>

            </div>
        </>
}

export default Configuracoes