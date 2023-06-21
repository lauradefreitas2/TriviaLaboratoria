function iniciarQuiz() {
     nome = document.getElementById("nome").value;
    
    // Redirecionar para a página do quiz, passando o nome como parâmetro na URL
    window.location.href = "quiz.html?nome=" + encodeURIComponent(nome);
  }
  