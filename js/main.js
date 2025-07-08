const style_sheet = document.getElementById('style_sheet')
const switch_button = document.getElementById('switch_button')
const dropdown_ul = document.getElementById('dropdown_ul')

window.onload = function() {
    const stored_css = localStorage.getItem('current_css');
    if (stored_css) {
        style_sheet.setAttribute('href', stored_css)
    }
}

switch_button.addEventListener('click', function() {
    const current_css = style_sheet.getAttribute('href');

    if (current_css === '../css/dark_styles.css') {
        style_sheet.setAttribute('href', '../css/light_styles.css');
        localStorage.setItem('current_css', '../css/light_styles.css');
    }
    else {
        style_sheet.setAttribute('href', '../css/dark_styles.css');
        localStorage.setItem('current_css', '../css/dark_styles.css');
    }
});

dropdown_ul.addEventListener('click', function(event) {
    dropdown_ul.style.display = 'none';

    event.stopPropagation();
});