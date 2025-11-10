function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("mensagem");

  if (!usuario || !senha) {
    msg.textContent = "Preencha todos os campos.";
    msg.style.color = "red";
    return;
  }

  if (usuario === "arthur" && senha === "1234") {
    msg.textContent = "Login realizado com sucesso!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Usuário ou senha incorretos.";
    msg.style.color = "red";
  }
}
