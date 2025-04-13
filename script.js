// Mensagens fixas
const messages = [
    "Você é uma pessoa muito forte",
    "Eu te admiro demais",
    "Amo cada conversa, risada e assuntos aleatorios que você sempre me proporciona",
    "Em tão pouco tempo você se tornou uma pessoa muito especial pra mim",
    "Nunca esquece o quanto você vale e da mulher incrivel que você é"
  ];
  
  // Função que exibe a mensagem ao clicar na nuvem
  function showMessage(message) {
    const messageBox = document.getElementById("message");
    messageBox.style.display = "block";
    messageBox.innerHTML = message;
    
    // Simula a mensagem especial escondida
    if (message === "Nunca esquece o quanto você vale e da mulher incrivel que você é") {
      setTimeout(() => {
        messageBox.innerHTML += "<br><br><strong>Mesmo longe, eu sempre vou querer te ver bem. Não importa o motivo ou qualquer razão que seja, pode contar cmg pra tudo! ❤️ obs: no momento dinheiro nao muito mas juro que quando estiver melhor eu tmb te ajudo KKKKKK </strong>";
        messageBox.style.backgroundColor = "#ff4081"; // Muda a cor para destaque
        messageBox.classList.add('special-message');
      }, 1000);
    }
  }

  