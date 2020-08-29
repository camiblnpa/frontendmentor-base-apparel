let input = document.getElementById('input-email');
let button = document.getElementById('input-btn');
let span = document.getElementById('input-error');
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
        input.style.border = 'none';
    }
}

function checkEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}