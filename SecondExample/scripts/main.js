const input = document.getElementById('pass');
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
const div = document.querySelector('.message');

const showMessage = (e) => {

    div.textContent = "";

    const text = e.target.value;

    passwords.forEach((password, index) => {

        if (password.toLowerCase() === text.toLowerCase()) {
            div.textContent = messages[index];
        }
    })
}
input.addEventListener('keyup', showMessage)

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})