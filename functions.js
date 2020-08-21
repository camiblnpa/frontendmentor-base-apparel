let input = document.getElementById('email-input');
let button = document.getElementById('email-btn');
let span = document.getElementById('span__error');
let icon = document.getElementById('input-icon');
button.addEventListener('click', changeState);

function changeState() {
    if (!checkEmail(input.value)) {
        input.style.border = '2px solid hsl(0, 93%, 68%)';
        span.style.display = 'block';
        icon.style.display = 'block';
    } else {
        span.style.display = 'none';
        icon.style.display = 'none';
    }
}

function checkEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}