const symbolsData = {
    'água': {
        jung: "Representa o inconsciente e as emoções profundas. Água clara pode significar autoconhecimento, enquanto água turva indica aspectos não resolvidos.",
        popular: "Sonhar com água geralmente está relacionado ao estado emocional. Água parada pode prenunciar estagnação, água corrente significa mudanças."
    },
    'voar': {
        jung: "Simboliza a libertação de restrições e o desejo de transcendência. Pode indicar busca por autonomia ou fuga de problemas.",
        popular: "Tradições dizem que voar em sonhos prediz sucesso, mas se houver dificuldade, alerta sobre obstáculos à frente."
    },
    'dentes': {
        jung: "Associado à autoimagem e poder pessoal. Sonhos com queda de dentes podem revelar inseguranças ou medo de envelhecimento.",
        popular: "Muitas culturas acreditam que sonhar com dentes caindo anuncia doença ou perda financeira."
    },
    'cair': {
        jung: "Reflete medos de fracasso ou perda de controle. Pode simbolizar a necessidade de 'aterrar' ideias ou projetos.",
        popular: "Dizem que se você acordar antes de cair, evitará um mau presságio."
    },
    'perseguição': {
        jung: "Representa aspectos reprimidos ou sombras da personalidade que precisam ser confrontados.",
        popular: "Interpretado como sinal de ansiedade ou problemas não resolvidos na vida desperta."
    },
    'morte': {
        jung: "Simboliza transformação radical, fim de um ciclo e renovação, não morte física.",
        popular: "Muitas tradições veem como presságio de mudanças significativas ou novo começo."
    },
    'nudez': {
        jung: "Reflete vulnerabilidade, medo de exposição ou desejo de autenticidade.",
        popular: "Pode indicar vergonha, insegurança ou libertação de restrições sociais."
    },
    'serpente': {
        jung: "Simboliza transformação, energia primal e sabedoria oculta.",
        popular: "Pode ser um alerta sobre traição ou engano, mas também representa cura e renovação."
    },
    'fogo': {
        jung: "Representa paixão, destruição ou purificação. Pode simbolizar emoções intensas ou transformação espiritual.",
        popular: "Sonhar com fogo pode indicar perigo, mas também renovação e força interior."
    },
    'labirinto': {
        jung: "Reflete confusão mental, busca pelo autoconhecimento e desafios internos.",
        popular: "Indica dificuldades na tomada de decisões ou sensação de estar perdido na vida."
    },
    'animais': {
        jung: "Os animais representam instintos, emoções e aspectos inconscientes da psique.",
        popular: "Dependendo do animal, pode indicar proteção, perigo ou sorte na vida desperta."
    },
    'espelhos': {
        jung: "Simboliza autoanálise, identidade e confronto com a própria verdade.",
        popular: "Pode indicar revelações inesperadas ou enganos na vida real."
    },
    'casa': {
        jung: "Reflete a psique do sonhador, onde cada cômodo representa um aspecto diferente do seu ser.",
        popular: "Sonhar com uma casa pode indicar estabilidade, mudanças familiares ou aspectos ocultos da personalidade."
    },
    'relógio': {
        jung: "Simboliza a percepção do tempo, ansiedade ou ciclos de vida.",
        popular: "Pode representar pressa, medo de perder oportunidades ou mudanças iminentes."
    },
    'escadas': {
        jung: "Simbolizam progresso ou regressão espiritual e psicológica, dependendo da direção.",
        popular: "Subir escadas pode indicar sucesso, enquanto descer pode alertar para dificuldades."
    },
    'chave': {
        jung: "Representa acesso a novas oportunidades ou autoconhecimento.",
        popular: "Sonhar com chaves pode indicar soluções para problemas ou segredos revelados."
    },
    'porta': {
        jung: "Simboliza transições, novas fases da vida e oportunidades desconhecidas.",
        popular: "Abrir uma porta pode representar boas novas, enquanto uma porta trancada pode indicar bloqueios."
    },
    'dinheiro': {
        jung: "Representa autoestima, valor pessoal e poder.",
        popular: "Sonhar com dinheiro pode indicar prosperidade, mas também preocupações financeiras."
    },
    'céu': {
        jung: "Simboliza liberdade, espiritualidade e aspirações elevadas.",
        popular: "Um céu claro indica paz e harmonia, enquanto um céu escuro pode prenunciar desafios."
    },
    'ponte': {
        jung: "Representa transição entre fases da vida e conexão entre o consciente e o inconsciente.",
        popular: "Sonhar com uma ponte pode indicar mudanças ou decisões importantes a serem tomadas."
    },
    'floresta': {
        jung: "Simboliza o inconsciente, mistério e busca espiritual.",
        popular: "Estar perdido na floresta pode representar confusão na vida desperta, enquanto atravessá-la pode indicar superação."
    },
    'mar': {
        jung: "Representa a vastidão do inconsciente e emoções profundas.",
        popular: "Mar calmo pode indicar tranquilidade, enquanto mar agitado pode representar desafios emocionais."
    },
    'chuva': {
        jung: "Simboliza purificação, renovação emocional e transformação.",
        popular: "Chuva leve pode representar bênçãos, enquanto tempestades indicam turbulência emocional."
    },
    'trem': {
        jung: "Reflete jornada da vida, destino e propósito.",
        popular: "Estar dentro de um trem pode indicar progresso, enquanto perder um trem pode significar oportunidades perdidas."
    },
    'buraco': {
        jung: "Simboliza desafios inesperados e medos ocultos.",
        popular: "Cair em um buraco pode indicar dificuldades, enquanto sair de um representa superação."
    },
    'bebê': {
        jung: "Representa novos começos, vulnerabilidade e potencial.",
        popular: "Sonhar com um bebê pode indicar boas notícias ou preocupações com a inocência e dependência."
    },
    'vestido': {
        jung: "Reflete identidade, autoimagem e expressão emocional.",
        popular: "Um vestido bonito pode indicar felicidade, enquanto um vestido rasgado pode representar insegurança."
    }
};

let historyStack = [];

function init() {
    const symbolsContainer = document.getElementById('symbols');
    Object.keys(symbolsData).forEach(symbol => {
        const btn = document.createElement('button');
        btn.className = 'symbol-btn';
        btn.textContent = symbol;
        btn.onclick = () => showInterpretation(symbol);
        symbolsContainer.appendChild(btn);
    });
}

function showInterpretation(symbol) {
    historyStack.push(symbol);
    
    document.getElementById('symbols-section').classList.remove('visible');
    setTimeout(() => {
        document.getElementById('symbols-section').classList.add('hidden');
        document.getElementById('interpretation-section').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('interpretation-section').classList.add('visible');
            
            document.getElementById('symbol-title').textContent = `✧ ${symbol.charAt(0).toUpperCase() + symbol.slice(1)} ✧`;
            typeEffect(document.getElementById('jung-text'), symbolsData[symbol].jung);
            typeEffect(document.getElementById('popular-text'), symbolsData[symbol].popular);
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 10);
    }, 500);
}

function resetGame() {
    historyStack = [];
    document.getElementById('interpretation-section').classList.remove('visible');
    setTimeout(() => {
        document.getElementById('interpretation-section').classList.add('hidden');
        document.getElementById('symbols-section').classList.remove('hidden');
        setTimeout(() => document.getElementById('symbols-section').classList.add('visible'), 10);
    }, 500);
}

function typeEffect(element, text, speed = 30) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('keydown', (e) => {
    const sectionVisible = document.getElementById('interpretation-section').classList.contains('visible');
    if (e.key === 'Escape' && sectionVisible) {
        resetGame();
    }
});

// Inicialização
init();