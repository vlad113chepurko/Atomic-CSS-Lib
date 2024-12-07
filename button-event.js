// ? Variables
const font_styles = document.getElementById('font-styles');
const list_styles = document.getElementById('list-styles');
const font_family = document.getElementById('font-family');
const font_weight = document.getElementById('font-weight');
const test_area = document.getElementById('test-area');

// ? Events For Buttons
font_styles.addEventListener('click', () => {
    window.location.href = './HTML/font-styles.html'
})

list_styles.addEventListener('click', () => {
    window.location.href = './HTML/list-styles.html'
})

font_family.addEventListener('click', () => {
    window.location.href = './HTML/font-family.html'
})

font_weight.addEventListener('click', () => {
    window.location.href = './HTML/font-weight.html'
})

test_area.addEventListener('click', () => {
    window.location.href = './HTML/test-area.html'
})