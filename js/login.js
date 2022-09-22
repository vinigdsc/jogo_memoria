const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login-form");

// função pra validar a digitação de 3 caracteres
const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }
  button.setAttribute("disabled", "");
};

// enviar formulario com o nome do jogador
const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("player", input.value); // salva o input no local storage
  window.location = "pages/game.html"; // redireciona pra tela do jogo
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
