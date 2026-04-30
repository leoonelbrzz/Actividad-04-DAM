
const CLAVE_CORRECTA = "1234";
let intentos = 3;


const inputClave = document.getElementById('claveUsuario');
const btnEntrar = document.getElementById('btnEntrar');
const txtMensaje = document.getElementById('mensaje');
const txtContador = document.getElementById('contador');

btnEntrar.addEventListener('click', () => {
    
    if (intentos <= 0) return;

    const claveIngresada = inputClave.value;

    if (claveIngresada === CLAVE_CORRECTA) {
        
        txtMensaje.textContent = "✅ Acceso otorgado";
        txtMensaje.style.color = "green";
        desactivarLogin();
    } else {
        
        intentos--;
        actualizarInterfazPersistente();

        if (intentos > 0) {
            txtMensaje.textContent = "❌ Clave incorrecta. Vuelva a intentar.";
            txtMensaje.style.color = "orange";
        } else {
            txtMensaje.textContent = "🚫 Acceso denegado. Cuenta bloqueada.";
            txtMensaje.style.color = "red";
            desactivarLogin();
        }
    }
    

    inputClave.value = "";
    inputClave.focus();
});


function actualizarInterfazPersistente() {
    txtContador.textContent = intentos;
}

function desactivarLogin() {
    inputClave.disabled = true;
    btnEntrar.disabled = true;
}