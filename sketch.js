let theme = true;
let position = 0;

function detectBrowser() {
    let isChrome = navigator.userAgent.indexOf("Chrome");

    if (isChrome === -1) {
        location.replace("bns.html");
    }
}

function changeTheme() {
    position = window.scrollY;  // Get current Y position

    if (theme) {
        theme = false;
        document.documentElement.style.setProperty('--bg-primary', '#cbb9b9');
        document.documentElement.style.setProperty('--bg-secondary', '#9e9e9e');
        document.documentElement.style.setProperty('--text-primary', '#000000');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--body-bg', '#eeeeee');
        document.documentElement.style.setProperty('--shadow-color', 'rgba(191,172,191,1)');
        document.getElementById("theme-name").innerHTML = "Light Theme";

        // Timeout to wait for the theme to change
        setTimeout(() => {
            if (position > 0) {
                window.scrollTo(0, position);
            }
        }, 10);
    } else {
        theme = true;
        document.documentElement.style.setProperty('--bg-primary', '#23232e');
        document.documentElement.style.setProperty('--bg-secondary', '#141418');
        document.documentElement.style.setProperty('--text-primary', '#b6b6b6');
        document.documentElement.style.setProperty('--text-color', '#ececec');
        document.documentElement.style.setProperty('--body-bg', '#313140');
        document.documentElement.style.setProperty('--shadow-color', 'rgba(94,67,94,1)');
        document.getElementById("theme-name").innerHTML = "Dark Theme";

        // Timeout to wait for the theme to change
        setTimeout(() => {
            if (position > 0) {
                window.scrollTo(0, position);
            }
        }, 1);
    }
}