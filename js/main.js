//Modo oscuro
const btnModo = document.getElementById("boton");

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    const modoActivo = document.body.classList.contains("modo-oscuro");
    btnModo.textContent = modoActivo ? "☀️ Modo claro" : "🌙 Modo oscuro";
})

/* Validación del formulario de contacto */

const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputPrograma = document.getElementById('programa');
const inputMensaje = document.getElementById('mensaje');
const respuestaFormulario = document.getElementById('respuesta-formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = inputNombre.value;
    const email = inputEmail.value;
    const programa = inputPrograma.value;
    const mensaje = inputMensaje.value;

    if (nombre === "" || email === "" || programa === "" || mensaje === "") {
        respuestaFormulario.textContent = 'Por favor, completa todos los campos.';
        respuestaFormulario.className = "error";
        return;
    }

    respuestaFormulario.innerHTML = `¡Gracias, ${nombre}! tu respuesta se ha enviado con éxito.<br>Te contactaremos a ${email} para darte mas información sobre el programa "${programa}".`;
    respuestaFormulario.className = "exito";

    formulario.reset();
});
