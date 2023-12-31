
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPerfil from "../../components/CardPerfil";
import Tabela from "../../components/Tabela";


const Perfil = () => {
    const { id } = useParams();
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
            <div id="formulario" >
                <CardPerfil usuario={usuario} links={links}></CardPerfil>
                <Tabela links={links}></Tabela>

            </div>
        </>
}



export default Perfil