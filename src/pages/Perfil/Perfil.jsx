
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const token = localStorage.getItem('token')
const id = "continua daqui"

const Perfil = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [links, setLink] = useState([]);

    useEffect(() => {
        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
async function getUser() {
    try {
        setLoading(true);
        const responseLinks = await axios.get(
            `https://usuarios.ronierlima.dev/users/${id}/links`
        );
        const response = await axios.get(
            `https://usuarios.ronierlima.dev/users/${id}`
        );
        setUser(response.data);
        setLink(responseLinks.data)
        console.log(response.data)
        console.log(responseLinks.data)
    } catch (error) {
        alert("Deu erro");
    } finally {
        setLoading(false);
    }
}

return loading ? <>carregando...</> :
    <>
        <div id="formulario" >
            <Card user={user}></Card>
            {id === userId && <AddLink />}
            <div className="links" >
                <Links links={links} />
            </div>
        </div>
    </>
}

export default Perfil