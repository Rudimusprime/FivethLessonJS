const input = document.getElementById('pass');
const password = "user";
const message = "wyjechałam na zawsze";
const div = document.querySelector('.message')
input.addEventListener('keyup', (e) => {
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value="";
    } else {
        div.textContent = "";
    }
    console.log(e.target.value);
})

input.addEventListener('focus',(e)=>{
    e.target.classList.add('active');
})
input.addEventListener('blur',(e)=>{
    e.target.classList.remove('active');
})