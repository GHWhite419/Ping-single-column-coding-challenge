const button = document.querySelector('button');
const emailInput = document.querySelector('input');

button.addEventListener('click', () => {
    const email = emailInput.value;
    if (!validateEmail(email)) {
            emailInput.classList.add('input-error');
            document.querySelector('.error').classList.add('display-error');
    }
    else {
        emailInput.classList.remove('input-error');
        document.querySelector('.error').classList.remove('display-error');
    }
})

emailInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
})

const validateEmail = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}