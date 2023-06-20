// Função para contabilizar o tempo do usuário
function contabilizarTempo() {
    // Obtendo o elemento onde o tempo será exibido
    let tempoElemento = document.getElementById('tempo');

    // Obtendo o horário atual em milissegundos
    let horarioAtual = new Date().getTime();

    // Calculando a diferença de tempo em segundos
    let diferencaTempo = Math.floor((tempoLimite - (horarioAtual - horarioInicial)) / 1000);

    // Verificando se o tempo acabou
    if (diferencaTempo <= 0) {
        // Desabilitando todos os inputs de rádio
        let inputsRadio = document.querySelectorAll('input[type="radio"]');
        inputsRadio.forEach(function (input) {
            input.disabled = true;
        });

        // Exibindo mensagem de tempo esgotado
        tempoElemento.textContent = 'Tempo esgotado!';
        return;
    }

    // Exibindo o tempo restante
    tempoElemento.textContent = 'Tempo restante: ' + diferencaTempo + ' segundos';

    // Atualizando o tempo a cada segundo
    setTimeout(contabilizarTempo, 1000);
}

// Obtendo o horário inicial em milissegundos
let horarioInicial = new Date().getTime();

// Definindo o limite de tempo em milissegundos (30 segundos)
const tempoLimite = 30000;

// Iniciando a contabilização do tempo
contabilizarTempo();

function verificarRespostas() {
    // Verificando se o tempo já acabou
    let tempoRestante = Math.floor((tempoLimite - (new Date().getTime() - horarioInicial)) / 1000);
    if (tempoRestante <= 0) {
        alert('Tempo esgotado! Não é possível enviar mais respostas.');
        return;
    }

    // Definindo as respostas corretas para cada pergunta
    let respostasCertas = {
        pergunta1: 'a',
        pergunta2: 'c',
        pergunta3: 'a',
    };

    // Obtendo o elemento onde será exibido o resultado
    let resultadoElemento = document.getElementById('resultado');

    // Obtendo as respostas selecionadas pelo usuário
    let respostasSelecionadas = obterRespostasSelecionadas();

    // Variável para contar o número de acertos
    let acertos = 0;

    // Iterando sobre as perguntas
    for (let pergunta in respostasSelecionadas) {
        // Verificando se a resposta selecionada é igual à resposta correta
        if (respostasSelecionadas[pergunta] === respostasCertas[pergunta]) {
            acertos++;
        }
    }

    // Exibindo o resultado
    resultadoElemento.textContent = 'Você acertou ' + acertos + ' de ' + Object.keys(respostasCertas).length + ' perguntas.';
}

function obterRespostasSelecionadas() {
    // Objeto para armazenar as respostas selecionadas pelo usuário
    let respostasSelecionadas = {};

    // Obtendo todas as perguntas do quiz
    let perguntas = document.querySelectorAll('.quiz-section > div');

    // Iterando sobre as perguntas
    perguntas.forEach(function (pergunta) {
        // Obtendo o nome da pergunta
        let nomePergunta = pergunta.id;
        // Obtendo a opção de resposta selecionada
        let respostaSelecionada = pergunta.querySelector('input[type="radio"]:checked');

        // Verificando se há uma resposta selecionada
        if (respostaSelecionada) {
            // Armazenando a resposta selecionada no objeto respostasSelecionadas
            respostasSelecionadas[nomePergunta] = respostaSelecionada.value;
        }
    });

    // Retornando o objeto com as respostas selecionadas
    return respostasSelecionadas;
}