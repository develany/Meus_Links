import Table from 'react-bootstrap/Table';

const Tabela = ({ links }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>TÍTULO</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                {links.map((link) => (
                    <tr key={link.id}>
                        <td>{link.titulo}</td>
                        <td>{link.url}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default Tabela;
