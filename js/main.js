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
        style_sheet.setAttribute('href', '../css/light_styles.css');
        localStorage.setItem('current_css', '../css/light_styles.css');
    }
    else {
        style_sheet.setAttribute('href', '../css/dark_styles.css');
        localStorage.setItem('current_css', '../css/dark_styles.css');
    }
});

fetch('../yaml/crime_brady_1dec22.yaml')
.then(response => response.text())
.then(yamlString => {
    const parsedData = jsyaml.load(yamlString);

    console.log(parsedData);

    document.getElementById('title').textContent = parsedData.title;
    document.getElementById('subtitle').textContent = parsedData.subtitle;
    document.getElementById('date').textContent = parsedData.date;
    document.getElementById('author').textContent = parsedData.author;
    document.getElementById('post').textContent = parsedData.post;
})
.catch(error => console.error('Error loading YAML file:', error));