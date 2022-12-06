const hamburgerbutton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerbutton.addEventListener('click', toggleButton)