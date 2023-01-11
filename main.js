const botaoMenu = document.querySelector('.toggler_button')
const menu = document.querySelector('.menu_lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_lateral--ativo')
})