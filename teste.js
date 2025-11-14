const img = document.getElementById('foto');

img.tabIndex = 0;

img.addEventListener('click', () => {
    img.classList.toggle('is-expanded')
})

img.addEventListener('keydown', () => {
    img.classList.toggle('is-expanded')
})

img.addEventListener('mouseenter', () => img.classList.add('is-expanded'))
img.addEventListener('mouseleave', () => img.classList.remove('is-expanded'))