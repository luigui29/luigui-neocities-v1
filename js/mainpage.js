const poke_button = document.querySelector('#click-me-btn')
const poke_image = document.querySelector('#poked-image')
const normal_image = document.querySelector('#main-image')

poke_button.addEventListener('mouseenter', () => {
    poke_image.style.display = 'block';
    normal_image.style.display = 'none';
})

poke_button.addEventListener('mouseleave', () => {
    poke_image.style.display = 'none';
        normal_image.style.display = 'block';
})