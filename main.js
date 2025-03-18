const style_sheet = document.getElementById('style_sheet')
const switch_button = document.getElementById('switch_button')

window.onload = function() {
    const stored_css = localStorage.getItem('current_css');
    if (stored_css) {
        style_sheet.setAttribute('href', stored_css)
    }
}

switch_button.addEventListener('click', function() {
    const current_css = style_sheet.getAttribute('href');

    if (current_css === '../css/dark_styles.css') {
        style_sheet.setAttribute('href', 'light_styles.css');
        localStorage.setItem('current_css', 'light_styles.css');
    }
    else {
        style_sheet.setAttribute('href', 'dark_styles.css');
        localStorage.setItem('current_css', 'dark_styles.css');
    }
});
