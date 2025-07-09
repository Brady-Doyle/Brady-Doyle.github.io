const style_sheet = document.getElementById('style_sheet')
const switch_button = document.getElementById('switch_button')
const dropdown = document.getElementById('dropdown')
const dropdown_wrapper = document.getElementById('dropdown_wrapper')
const dropdown_title = document.getElementById('dropdown_title')

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

function dropdown_open(event) {
    dropdown.style.display = 'block';
    event.stopPropagation();
}

function dropdown_close(event) {
    dropdown.style.display = 'none';
    event.stopPropagation();
}

dropdown_title.addEventListener('click', dropdown_open);
dropdown_title.addEventListener('pointerenter', dropdown_open);

window.addEventListener('click', dropdown_close);
dropdown_wrapper.addEventListener('pointerleave', dropdown_close)