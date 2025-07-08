document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const passwordInput = document.querySelector("#clave");
  const toggleCheckbox = document.querySelector("#toggle-password");

  // Mostrar/ocultar contraseña
  toggleCheckbox.addEventListener("change", () => {
    passwordInput.type = toggleCheckbox.checked ? "text" : "password";
  });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.querySelector("#usuario").value.trim();
    const pass = passwordInput.value.trim();

    if (user === "" || pass === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    alert(`¡Bienvenido, ${user}!`);
  });
});
