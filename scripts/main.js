const input = document.getElementById('pass');
const passwords = ["user", "wiosna", "Ania"];
const messages = ["wyjechałam na zawsze", "piękna pora roku", "fajny styl masz"];
const div = document.querySelector('.message')

input.addEventListener('keyup', (e) => {

    div.textContent = "";

    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
})
input.addEventListener('focus', (e) => {

    e.target.classList.add('active');

})
input.addEventListener('blur', (e) => {

    e.target.classList.remove('active');

})
