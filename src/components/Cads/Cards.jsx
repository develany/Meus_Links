import { getGravatarUrl } from "../../services/Gravatar";
import styles from './Cards.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Importe o Link

function Cards({ usuario }) {
    const img = usuario.email ? getGravatarUrl(usuario.email) : '';

    return (
        <div className={styles['container']} style={{ width: '10rem', marginRight: '2%' }}>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{usuario.nome_de_usuario}</Card.Title>
                    {/* Use o componente Link para navegar para a página de perfil com o ID do usuário */}
                    <Link to={`/perfil/${usuario.id}`}>
                        <Button variant="primary">Ver Links</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;
