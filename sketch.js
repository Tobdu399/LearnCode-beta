let theme = true;

function changeTheme() {
    if (theme) {
        theme = false;
        document.documentElement.style.setProperty('--bg-primary', '#cbb9b9');
        document.documentElement.style.setProperty('--bg-secondary', '#9e9e9e');
        document.documentElement.style.setProperty('--text-primary', '#000000');
        document.documentElement.style.setProperty('--primary-color', '#3a64c9');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--body-bg', '#e7e7e7');
    } else {
        theme = true;
        document.documentElement.style.setProperty('--bg-primary', '#23232e');
        document.documentElement.style.setProperty('--bg-secondary', '#141418');
        document.documentElement.style.setProperty('--text-primary', '#b6b6b6');
        document.documentElement.style.setProperty('--primary-color', '#5894ff');
        document.documentElement.style.setProperty('--text-color', '#b6b6b6');
        document.documentElement.style.setProperty('--body-bg', '#313140');
    }
}