// Lista dos 25 pares de Escrituras Chave
const keyScriptures = [
    { id: 1, type: 'referencia', content: 'D&C 1:30' },
    { id: 1, type: 'tema', content: 'A Única Igreja Verdadeira' },
    
    { id: 2, type: 'referencia', content: 'D&C 1:38' },
    { id: 2, type: 'tema', content: 'A Voz do Senhor e de Seus Servos' },
    
    { id: 3, type: 'referencia', content: 'D&C 3:5–10' },
    { id: 3, type: 'tema', content: 'O Temor a Deus (Perda das 116 Páginas)' },
    
    { id: 4, type: 'referencia', content: 'D&C 4:1–7' },
    { id: 4, type: 'tema', content: 'Requisitos para o Serviço Missionário (Fé, Esperança, Caridade)' },
    
    { id: 5, type: 'referencia', content: 'D&C 6:36' },
    { id: 5, type: 'tema', content: 'O Olhar e o Foco em Cristo' },
    
    { id: 6, type: 'referencia', content: 'D&C 8:2–3' },
    { id: 6, type: 'tema', content: 'O Espírito de Revelação (Mente e Coração)' },
    
    { id: 7, type: 'referencia', content: 'D&C 13:1' },
    { id: 7, type: 'tema', content: 'Restauração do Sacerdócio Aarônico' },
    
    { id: 8, type: 'referencia', content: 'D&C 18:10–11' },
    { id: 8, type: 'tema', content: 'O Grande Valor das Almas' },
    
    { id: 9, type: 'referencia', content: 'D&C 19:16–19' },
    { id: 9, type: 'tema', content: 'O Sofrimento Pessoal de Cristo na Expiação' },
    
    { id: 10, type: 'referencia', content: 'D&C 20:37' },
    { id: 10, type: 'tema', content: 'Princípios Fundamentais do Batismo' },
    
    { id: 11, type: 'referencia', content: 'D&C 21:4–6' },
    { id: 11, type: 'tema', content: 'A Lei da Recepção de Profetas' },
    
    { id: 12, type: 'referencia', content: 'D&C 29:10–11' },
    { id: 12, type: 'tema', content: 'A Segunda Vinda' },
    
    { id: 13, type: 'referencia', content: 'D&C 49:15–17' },
    { id: 13, type: 'tema', content: 'O Casamento: Ordenança de Deus' },
    
    { id: 14, type: 'referencia', content: 'D&C 58:26–28' },
    { id: 14, type: 'tema', content: 'Iniciativa e Zeloso em uma Boa Causa' },
    
    { id: 15, type: 'referencia', content: 'D&C 76:22–24' },
    { id: 15, type: 'tema', content: 'O Testemunho de Cristo ("que ele vive!")' },
    
    { id: 16, type: 'referencia', content: 'D&C 76:40–44' },
    { id: 16, type: 'tema', content: 'O Plano de Salvação e a Expiação' },
    
    { id: 17, type: 'referencia', content: 'D&C 82:10' },
    { id: 17, type: 'tema', content: 'O Convênio e a Promessa ("Eu, o Senhor, estou obrigado...")' },
    
    { id: 18, type: 'referencia', content: 'D&C 84:20–22' },
    { id: 18, type: 'tema', content: 'O Poder da Deidade no Sacerdócio' },
    
    { id: 19, type: 'referencia', content: 'D&C 88:15' },
    { id: 19, type: 'tema', content: 'Corpo e Espírito: A Alma do Homem' },
    
    { id: 20, type: 'referencia', content: 'D&C 89:18–21' },
    { id: 20, type: 'tema', content: 'As Promessas da Palavra de Sabedoria' },
    
    { id: 21, type: 'referencia', content: 'D&C 107:8' },
    { id: 21, type: 'tema', content: 'A Autoridade do Sacerdócio de Melquisedeque' },
    
    { id: 22, type: 'referencia', content: 'D&C 121:36–37' },
    { id: 22, type: 'tema', content: 'Perda do Poder do Sacerdócio' },
    
    { id: 23, type: 'referencia', content: 'D&C 121:41–42' },
    { id: 23, type: 'tema', content: 'Persuasão no Exercício do Sacerdócio (Amor Não Fingido)' },
    
    { id: 24, type: 'referencia', content: 'D&C 130:22–23' },
    { id: 24, type: 'tema', content: 'O Princípio da Inteligência e Glória' },
    
    { id: 25, type: 'referencia', content: 'D&C 132:19–20' },
    { id: 25, type: 'tema', content: 'O Convênio Eterno e a Exaltação' }
];

let gameBoard = document.getElementById('game-board');
let messageDisplay = document.getElementById('message');
let cardsFlipped = []; // Armazena os dois cards virados
let lockBoard = false; // Impede novos cliques durante a checagem

// Função para embaralhar o array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Inicia ou Reinicia o jogo
function startGame() {
    // 1. Limpa o tabuleiro
    gameBoard.innerHTML = '';
    messageDisplay.textContent = '';
    
    // 2. Embaralha os cards
    shuffle(keyScriptures);

    // 3. Cria e adiciona os elementos card ao tabuleiro
    keyScriptures.forEach(item => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = item.id;
        cardElement.dataset.type = item.type;
        
        // Cria a estrutura interna do card com frente e verso
        cardElement.innerHTML = `
            <div class="card-front">
                <p>D&C</p>
            </div>
            <div class="card-back">
                <p>${item.content}</p>
            </div>
        `;
        
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });

    cardsFlipped = [];
    lockBoard = false;
}

// Lógica de virar um card
function flipCard() {
    if (lockBoard) return;
    // Impede o clique no mesmo card duas vezes
    if (this === cardsFlipped[0]) return; 

    this.classList.add('flipped');
    cardsFlipped.push(this);

    if (cardsFlipped.length === 2) {
        lockBoard = true;
        checkForMatch();
    }
}

// Checa se os dois cards virados são um par
function checkForMatch() {
    let [card1, card2] = cardsFlipped;
    let isMatch = card1.dataset.id === card2.dataset.id;

    if (isMatch) {
        // Par encontrado
        disableCards(card1, card2);
        messageDisplay.textContent = 'Par Encontrado! 🎉';
        checkWin();
    } else {
        // Não é par, desvira após um tempo
        messageDisplay.textContent = 'Tente novamente...';
        unflipCards(card1, card2);
    }
}

// Desabilita os cards que formaram par
function disableCards(card1, card2) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    
    // Remove os listeners de clique para que não possam ser virados novamente
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
    
    resetBoard();
}

// Desvira os cards que não formaram par
function unflipCards(card1, card2) {
    setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        resetBoard();
    }, 1200); // 1.2 segundos para memorização
}

// Reinicia o estado da checagem
function resetBoard() {
    cardsFlipped = [];
    lockBoard = false;
    // Limpa a mensagem após a virada
    setTimeout(() => {
        messageDisplay.textContent = '';
    }, 1500); 
}

// Checa se o jogo terminou
function checkWin() {
    const matchedCards = document.querySelectorAll('.card.matched');
    if (matchedCards.length === keyScriptures.length) {
        messageDisplay.textContent = '🏆 Parabéns! Você encontrou todos os 25 pares! 🥳';
        lockBoard = true;
    }
}

// Inicia o jogo automaticamente ao carregar a página
startGame();
