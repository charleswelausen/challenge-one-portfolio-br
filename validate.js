//Seu JavaScript de validação aqui// 

const formulario = document.querySelector(".formcontato__form");
const emailInput = document.querySelector("#email");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!emailValido(emailInput.value)) {
        alert('Este e-mail não é válido');
        return;
    }

    formulario.submit()
});

function emailValido(email) {
    const regex = new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );

    if (regex.test(email)) {
        return true;
    }
    return false;
}