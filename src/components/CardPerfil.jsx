import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { getGravatarUrl } from "../services/Gravatar";
import styles from './CardPerfil.module.css';
import { Col } from 'react-bootstrap';

function CardPerfil({ usuario }) {
    const img = usuario.email ? getGravatarUrl(usuario.email) : ''; // Verifique se usuario.email está definido

    return (
        <>
            <Container className={styles['container']}>
                <Row>
                    <Col xs={10} md={4} className="mx-auto text-center">
                        <Image src={img} alt="imagem de perfil" roundedCircle />
                    </Col>
                </Row>
                <h1>{usuario.nome_de_usuario}</h1>
            </Container>

        </>
    );
}

export default CardPerfil;
