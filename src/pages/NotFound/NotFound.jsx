import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div id="formulario">
            <h1>Página não encontrada</h1>
            <Link to="/login" style={{ color: "black" }}>Voltar para login</Link>
        </div>
    );
}

export default NotFound;