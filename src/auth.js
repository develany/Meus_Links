export const isLogado = () => {
    const token = localStorage.getItem('token');
    return !!token;
}