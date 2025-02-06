const symbolsData = {
    'água': {
        jung: "A água, em seu fluxo ininterrupto, revela o inconsciente, sendo o espelho das emoções mais profundas. A água límpida é a clareza da alma, o autoconhecimento a ser conquistado; já a água turva, em sua imprevisibilidade, traz à tona os aspectos não resolvidos que ainda aguardam iluminação.",
        popular: "Sonhar com a água é uma dança com o estado emocional. A água parada é um símbolo de estagnação, como se o espírito estivesse preso, sem evolução; mas a água corrente, com sua energia que se renova constantemente, é um presságio de mudanças profundas e regeneradoras."
    },
    'animais': {
        jung: "Os animais nos sonhos são manifestações dos nossos instintos primitivos, das forças inconscientes que nos guiam. Eles trazem à tona emoções primitivas e muitas vezes ocultas, revelando aspectos de nossa psique que nos são familiares, mas que frequentemente ignoramos.",
        popular: "Os animais são presságios poderosos. Dependendo da espécie, podem ser símbolos de proteção, de perigo iminente ou de sorte que nos favorece. Eles vêm para nos alertar ou para nos guiar em momentos decisivos da nossa vida."
    },
    'bebê': {
        jung: "O bebê é o símbolo de novos começos, da pureza da alma e do potencial ainda não desenvolvido. Ele representa a vulnerabilidade, a necessidade de cuidado e a promessa de um futuro que ainda está por ser moldado.",
        popular: "Sonhar com um bebê é um sinal de boas novas, de inocência e da promessa de felicidade. No entanto, também pode trazer à tona preocupações com a dependência e a responsabilidade que a inocência exige de nós."
    },
    'buraco': {
        jung: "O buraco simboliza os medos ocultos e os desafios inesperados. Ele representa uma queda no inconsciente, onde precisamos enfrentar o que foi escondido das nossas consciências.",
        popular: "Cair em um buraco pode ser o presságio de dificuldades inesperadas, enquanto sair de um buraco simboliza a superação de obstáculos e a capacidade de se reerguer após as adversidades."
    },
    'cair': {
        jung: "Cair é o símbolo do medo da perda de controle, do fracasso iminente. É um lembrete de que precisamos aterrar nossos sonhos e ideias, confrontar nossas limitações e lidar com a sensação de impotência que nos assola.",
        popular: "Quando se acorda antes de cair, dizem as crenças populares, isso significa que se conseguiu escapar de um presságio negativo. O ato de cair é o confronto com as próprias falhas, o despertar da consciência de nossos medos mais profundos."
    },
    'casa': {
        jung: "A casa simboliza a psique do sonhador, sendo cada cômodo um espaço da alma. A cada andar e a cada porta, revelamos diferentes aspectos de nós mesmos. A casa, em sua totalidade, é um reflexo do estado interno, das questões resolvidas e das não resolvidas.",
        popular: "Sonhar com uma casa é muitas vezes um reflexo da nossa estabilidade emocional ou da falta dela. Cada cômodo, cada detalhe pode revelar algo sobre nossa vida, nossas relações familiares ou aspectos ocultos da nossa personalidade."
    },
    'céu': {
        jung: "O céu, vasto e infinito, é a representação das nossas aspirações, da liberdade espiritual e da busca por um significado maior na vida. O céu claro é a paz interior alcançada, enquanto o céu carregado de nuvens reflete as dificuldades emocionais e espirituais que precisamos superar.",
        popular: "O céu é o símbolo da tranquilidade e da harmonia. Quando está claro e sem nuvens, ele indica serenidade, mas se está escuro ou tempestade, alerta para desafios e momentos de incerteza que se aproximam."
    },
    'chave': {
        jung: "A chave simboliza o acesso a novos mundos, tanto no sentido literal quanto metafórico. Ela é o instrumento de revelação, o desbloqueio de novas oportunidades e de autoconhecimento. A chave abre portas para a transformação e para o entendimento mais profundo de si mesmo.",
        popular: "A chave é vista como uma solução para os problemas, a resposta que finalmente encontramos após longas buscas. Em sonhos, ela pode indicar que uma solução está ao nosso alcance, ou que segredos importantes estão prestes a ser revelados."
    },
    'chuva': {
        jung: "A chuva simboliza a purificação emocional, a renovação que se segue à tempestade interna. Ela lava a alma, trazendo renovação e um novo começo.",
        popular: "Chuva em sonhos é vista de formas contrastantes. A chuva leve é bênção, um sinal de prosperidade e serenidade, enquanto a tempestade simboliza dificuldades, emoções intensas que precisam ser expressas e liberadas."
    },
    'dentes': {
        jung: "Os dentes, peças fundamentais na nossa expressão de força, são reflexos do nosso poder pessoal e da nossa autopercepção. Quando caem, indicam o medo do envelhecimento e a insegurança sobre a nossa capacidade de enfrentar o mundo.",
        popular: "Muitas culturas veem o sonho com dentes caindo como um aviso sombrio, prevendo doenças ou perdas materiais. É a sensação de fragilidade que se manifesta no inconsciente, como um reflexo de nossos medos e vulnerabilidades."
    },
    'dinheiro': {
        jung: "O dinheiro, além de ser um símbolo de valor material, também representa a autoestima, o poder e o controle que exercemos sobre a nossa vida. A relação com o dinheiro é reflexo da nossa própria percepção de valor e do nosso lugar no mundo.",
        popular: "Sonhar com dinheiro pode ser um símbolo de prosperidade, mas também pode trazer à tona as preocupações financeiras e as ansiedades que temos sobre nossa segurança e estabilidade."
    },
    'espelhos': {
        jung: "O espelho é o reflexo da nossa própria alma. Ele nos confronta com nossa identidade, com o que somos ou com o que tememos ser. Ele revela a verdade que às vezes preferimos ignorar, o reflexo oculto do nosso ser interior.",
        popular: "Nos sonhos, os espelhos podem representar revelações inesperadas ou enganos, reflexos distorcidos de nossa realidade. O que vemos no espelho pode ser um aviso de que nem tudo é o que parece ser à primeira vista."
    },
    'escadas': {
        jung: "As escadas são o símbolo da ascensão ou da queda espiritual. Subir é o movimento de evolução, de progresso interior, enquanto descer representa um retrocesso, um mergulho nas profundezas da nossa alma para confrontar os nossos medos.",
        popular: "Sonhar com escadas é um presságio claro do caminho a seguir. Subir escadas indica sucesso e crescimento, enquanto descer é um alerta de que dificuldades estão por vir ou que estamos perdendo o controle da situação."
    },
    'floresta': {
        jung: "A floresta é o território do inconsciente, um espaço de mistério e busca espiritual. Caminhar por ela é o enfrentamento dos nossos medos, o confronto com o desconhecido dentro de nós mesmos.",
        popular: "Perder-se na floresta pode simbolizar confusão e a sensação de estar perdido na vida, enquanto atravessá-la com sucesso indica superação, coragem e a descoberta de uma verdade mais profunda."
    },
    'fogo': {
        jung: "O fogo é a chama do desejo, da paixão incontrolável. Ele simboliza tanto a destruição quanto a purificação. Em seu calor ardente, podemos nos consumir ou nos renovar, tal como uma fênix que ressuscita das cinzas, mais forte do que antes.",
        popular: "O fogo nos sonhos é uma metáfora para os desafios que nos consomem ou para a força interior que nos impulsiona a superar. Enquanto o fogo nos queima, também pode trazer renovação, força e clareza, revelando o que precisa ser purificado."
    },
    'labirinto': {
        jung: "O labirinto é o espaço do inconsciente onde nos perdemos e nos encontramos. Ele reflete a complexidade da nossa psique, a busca interminável por autoconhecimento e a constante tentativa de resolver os dilemas internos que nos afligem.",
        popular: "Estar perdido no labirinto é uma representação das dificuldades de decidir e o sentimento de desorientação que às vezes tomam conta da nossa vida. Contudo, atravessá-lo pode ser uma metáfora para a superação, a busca por respostas no coração da confusão."
    },
    'mar': {
        jung: "O mar é a vastidão do inconsciente, um espaço de profundas emoções e mistérios. Suas águas calmas indicam serenidade interior, enquanto as águas revoltas refletem os desafios emocionais e a turbulência que nos afeta.",
        popular: "Sonhar com o mar é frequentemente um reflexo das nossas emoções. O mar calmo é um presságio de tranquilidade e harmonia, enquanto o mar agitado nos alerta para os desafios que precisamos enfrentar."
    },
    'morte': {
        jung: "A morte, no simbolismo de Jung, é uma poderosa metáfora de transformação. Não a morte física, mas a morte de um ciclo, a necessidade de deixar ir para que algo novo possa surgir. A morte nos sonhos é o convite para o renascimento espiritual.",
        popular: "Para as tradições populares, a morte é um presságio de mudança significativa. Não uma perda, mas um marco de recomeço, uma viragem nas nossas vidas que se apresenta como uma oportunidade disfarçada de fim."
    },
    'nudez': {
        jung: "A nudez é o espelho da nossa vulnerabilidade. Ao nos despojarmos das máscaras que usamos, encaramos a nossa essência mais pura, muitas vezes com medo da exposição. É a busca pela autenticidade e o confronto com os próprios receios.",
        popular: "Sonhar com a nudez é, na maioria das vezes, um símbolo de vergonha e insegurança. Contudo, pode também representar a libertação das convenções sociais, um desejo profundo de ser verdadeiro consigo mesmo e com o mundo."
    },
    'perseguição': {
        jung: "A perseguição nos sonhos é a manifestação de aspectos reprimidos, sombras da nossa psique que nos assombram e nos forçam a confrontá-las. Aquele que foge dos outros, na verdade, foge de si mesmo.",
        popular: "O ato de ser perseguido é uma representação da ansiedade latente, dos problemas não resolvidos que se tornam monstros que nos caçam, na tentativa de chamar nossa atenção para algo que não podemos mais ignorar."
    },
    'ponte': {
        jung: "A ponte é o elo entre dois mundos, a transição de um estado para outro. Ela simboliza o ponto de partida para uma nova jornada, a conexão entre o consciente e o inconsciente, entre a realidade e os nossos sonhos.",
        popular: "Sonhar com uma ponte é muitas vezes um sinal de que mudanças significativas estão a caminho. As pontes nos ajudam a atravessar os abismos da vida, a enfrentar os desafios e as decisões que se impõem à nossa frente."
    },
    'porta': {
        jung: "A porta é o limiar entre dois mundos: o conhecido e o desconhecido. Ela simboliza transições, novas fases da vida, escolhas a serem feitas. A porta fechada indica restrições, limitações que devemos enfrentar, enquanto a porta aberta oferece novas possibilidades.",
        popular: "Abrir uma porta nos sonhos é sinal de boas novas, de mudanças positivas, enquanto uma porta trancada simboliza barreiras que ainda não conseguimos superar. O que se encontra do outro lado é um mistério que aguarda ser descoberto."
    },
    'relógio': {
        jung: "O relógio, com sua medição do tempo, simboliza nossa relação com os ciclos da vida, com os momentos de transição. A ansiedade que o tempo desperta reflete nossos medos em relação ao futuro, às oportunidades que escorrem pelas nossas mãos.",
        popular: "O relógio é muitas vezes um sinal de pressa, da sensação de que estamos correndo contra o tempo. Pode também ser um reflexo das mudanças iminentes, da necessidade de tomar decisões importantes antes que seja tarde."
    },
    'serpente': {
        jung: "A serpente, com sua energia primordial, simboliza a transformação, o despertar da sabedoria oculta e os instintos primitivos. Ela representa o ciclo eterno da vida, a cura que surge após a dor, o mistério que aguarda nossa compreensão.",
        popular: "Em algumas culturas, a serpente é um sinal de traição e engano, mas sua presença também pode ser uma mensagem de cura, renovação e proteção espiritual, como se ela nos oferecesse o veneno necessário para a cura do nosso espírito."
    },
    'trem': {
        jung: "O trem é o símbolo da jornada da vida, da busca por destino e propósito. Ele nos leva, sem que possamos controlar totalmente o caminho, mas nos ensina a confiar na direção que tomamos.",
        popular: "Estar em um trem pode significar progresso, uma sensação de movimento em direção ao futuro, enquanto perder o trem pode representar oportunidades que foram desperdiçadas ou o medo de não conseguir alcançar nossas metas."
    },
    'vestido': {
        jung: "O vestido reflete a identidade e a autoimagem, sendo a veste da alma que nos revela ao mundo. A forma como o usamos diz muito sobre como nos vemos e como desejamos ser vistos.",
        popular: "Sonhar com um vestido bonito pode ser um reflexo de felicidade e realização, enquanto um vestido rasgado simboliza insegurança, a perda da nossa própria confiança e autoestima."
    },
    'voar': {
        jung: "Voar é o símbolo supremo de libertação e transcendência. É o desejo de escapar das amarras da realidade, uma busca por autonomia, ou a tentativa de fugir dos dilemas que nos aprisionam. Voar nos sonhos é um convite à liberdade do ser.",
        popular: "O voo, nas lendas e crenças populares, é um presságio de sucesso, mas a dificuldade em alcançar as alturas é um aviso sobre obstáculos à frente, sugerindo que o caminho para a realização nem sempre é fácil."
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
