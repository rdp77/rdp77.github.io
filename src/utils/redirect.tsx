export const redirectDomain = () => {
    if (window.location.hostname === 'rdp77.github.io' || window.location.hostname === 'ravidwiputra.my.id') {
        window.location.replace('https://ravidwiputra.web.id');
    }
};