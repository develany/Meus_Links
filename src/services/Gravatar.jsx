
function getGravatarUrl(email, size = 130) {
    const hash = email.trim().toLowerCase();
    const baseUrl = 'https://www.gravatar.com/avatar/';
    const gravatarUrl = `${baseUrl}${hash}?s=${size}`;

    if (size < 1 || size > 2048) {
        throw new Error('Tamanho de imagem Gravatar inválido');
    }
    return gravatarUrl;
}

export { getGravatarUrl };