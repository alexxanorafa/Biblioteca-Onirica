// script.js
// ========== CÓDIGO DO MENU ==========
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Abrir/Fechar menu
    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    // Animar itens do menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });
});

const symbolsData = {
    'abismo': {
        jung: "O abismo representa o desconhecido, o medo do vazio e do que está além do nosso controle. Sonhar com um abismo pode simbolizar um chamado para enfrentar os aspectos mais profundos e sombrios do inconsciente.",
        popular: "Ver um abismo nos sonhos pode ser um aviso de perigo iminente ou uma sensação de estar à beira de uma decisão importante. Cair no abismo indica medo e insegurança, enquanto recuar simboliza prudência."
    },
    'acidente': {
        jung: "Os acidentes nos sonhos podem simbolizar conflitos internos, choques entre diferentes partes da psique ou uma sensação de perda de controle sobre a própria vida.",
        popular: "Um acidente pode ser um alerta para perigos futuros ou um reflexo de ansiedade em relação a decisões importantes que precisam ser tomadas com cautela."
    },
    'afogamento': {
        jung: "O afogamento representa a sensação de estar emocionalmente sobrecarregado. Pode simbolizar um mergulho no inconsciente ou a incapacidade de lidar com sentimentos reprimidos.",
        popular: "Sonhar que se está a afogar pode indicar medo de perder o controlo sobre uma situação ou emoções intensas que precisam de ser libertadas."
    },
    'água': {
        jung: "A água, em seu fluxo ininterrupto, revela o inconsciente, sendo o espelho das emoções mais profundas. A água límpida é a clareza da alma, o autoconhecimento a ser conquistado; já a água turva, em sua imprevisibilidade, traz à tona os aspectos não resolvidos que ainda aguardam iluminação.",
        popular: "Sonhar com a água é uma dança com o estado emocional. A água parada é um símbolo de estagnação, como se o espírito estivesse preso, sem evolução; mas a água corrente, com sua energia que se renova constantemente, é um presságio de mudanças profundas e regeneradoras."
    },
    'alguém desconhecido': {
        jung: "O desconhecido nos sonhos representa partes reprimidas ou não reconhecidas de nós mesmos. A figura enigmática pode ser um arquétipo da sombra ou um mensageiro do inconsciente.",
        popular: "Sonhar com alguém que não conhecemos pode ser um presságio de mudanças, encontros inesperados ou até mesmo um sinal de que alguém novo entrará em nossa vida."
    },
    'animais': {
        jung: "Os animais nos sonhos são manifestações dos nossos instintos primitivos, das forças inconscientes que nos guiam. Eles trazem à tona emoções primitivas e muitas vezes ocultas, revelando aspectos de nossa psique que nos são familiares, mas que frequentemente ignoramos.",
        popular: "Os animais são presságios poderosos. Dependendo da espécie, podem ser símbolos de proteção, de perigo iminente ou de sorte que nos favorece. Eles vêm para nos alertar ou para nos guiar em momentos decisivos da nossa vida."
    },
    'aranha': {
        jung: "A aranha é um símbolo do feminino profundo e do destino, tecendo a teia da vida e do inconsciente. Pode representar criatividade ou um sentimento de estar preso em uma situação emocional complexa.",
        popular: "Uma aranha pode significar paciência e estratégia, mas também pode simbolizar medos e ameaças ocultas, dependendo da forma como aparece no sonho."
    },
    'arco-íris': {
        jung: "O arco-íris simboliza a integração de opostos, a união entre o céu e a terra. Ele representa esperança, transformação e o encontro com uma nova perspectiva espiritual.",
        popular: "Sonhar com um arco-íris é um sinal de boas notícias, harmonia e sorte. Ele representa a superação de dificuldades e a chegada de tempos melhores."
    },
    'avião': {
        jung: "O avião simboliza aspirações elevadas e o desejo de transcender limitações. Pode representar mudanças significativas, tanto internas como externas.",
        popular: "Se o avião descola, pode indicar novos começos; se cai, pode ser um sinal de preocupações ou medo do fracasso."
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
    'carro': {
        jung: "O carro representa a direcção da vida e o controlo que temos sobre ela. Um carro desgovernado pode indicar falta de controlo sobre decisões importantes.",
        popular: "Se conduzir um carro no sonho, pode significar independência; se o carro estiver avariado, pode indicar obstáculos no caminho."
    },
    'caverna': {
        jung: "A caverna é um arquétipo do inconsciente profundo, um lugar de introspecção e descoberta. Adentrar uma caverna nos sonhos simboliza o desejo de autoconhecimento e o enfrentamento dos próprios medos.",
        popular: "Estar em uma caverna pode significar isolamento e a sensação de estar perdido. Se o sonho mostra a saída da caverna, indica superação e iluminação após um período de dificuldades."
    },
    'céu': {
        jung: "O céu, vasto e infinito, é a representação das nossas aspirações, da liberdade espiritual e da busca por um significado maior na vida. O céu claro é a paz interior alcançada, enquanto o céu carregado de nuvens reflete as dificuldades emocionais e espirituais que precisamos superar.",
        popular: "O céu é o símbolo da tranquilidade e da harmonia. Quando está claro e sem nuvens, ele indica serenidade, mas se está escuro ou tempestade, alerta para desafios e momentos de incerteza que se aproximam."
    },
    'céu estrelado': {
        jung: "Um céu estrelado é símbolo do infinito, da conexão com o divino e com o inconsciente coletivo. Ele representa inspiração, sabedoria e a busca por respostas maiores.",
        popular: "Ver estrelas no céu nos sonhos pode ser um presságio de esperança e realizações futuras. Se as estrelas caem, pode significar o fim de um ciclo ou uma grande mudança pela frente."
    },
    'chave': {
        jung: "A chave simboliza o acesso a novos mundos, tanto no sentido literal quanto metafórico. Ela é o instrumento de revelação, o desbloqueio de novas oportunidades e de autoconhecimento. A chave abre portas para a transformação e para o entendimento mais profundo de si mesmo.",
        popular: "A chave é vista como uma solução para os problemas, a resposta que finalmente encontramos após longas buscas. Em sonhos, ela pode indicar que uma solução está ao nosso alcance, ou que segredos importantes estão prestes a ser revelados."
    },
    'chuva': {
        jung: "A chuva simboliza a purificação emocional, a renovação que se segue à tempestade interna. Ela lava a alma, trazendo renovação e um novo começo.",
        popular: "Chuva em sonhos é vista de formas contrastantes. A chuva leve é bênção, um sinal de prosperidade e serenidade, enquanto a tempestade simboliza dificuldades, emoções intensas que precisam ser expressas e liberadas."
    },
    'cobra': {
        jung: "A cobra é um símbolo de transformação, energia instintiva e o inconsciente. Pode representar tanto sabedoria como perigos ocultos.",
        popular: "Dependendo do contexto, sonhar com uma cobra pode indicar traição, medo ou cura e renovação espiritual."
    },
    'comboio': {
        jung: "O comboio é o símbolo da jornada da vida, da busca por destino e propósito. Ele nos leva, sem que possamos controlar totalmente o caminho, mas nos ensina a confiar na direção que tomamos.",
        popular: "Estar em um comboio pode significar progresso, uma sensação de movimento em direção ao futuro, enquanto perder o comboio pode representar oportunidades que foram desperdiçadas ou o medo de não conseguir alcançar nossas metas."
    },
    'dentes': {
        jung: "Os dentes, peças fundamentais na nossa expressão de força, são reflexos do nosso poder pessoal e da nossa autopercepção. Quando caem, indicam o medo do envelhecimento e a insegurança sobre a nossa capacidade de enfrentar o mundo.",
        popular: "Muitas culturas veem o sonho com dentes caindo como um aviso sombrio, prevendo doenças ou perdas materiais. É a sensação de fragilidade que se manifesta no inconsciente, como um reflexo de nossos medos e vulnerabilidades."
    },
    'deserto': {
        jung: "O deserto é um arquétipo da solidão e da busca espiritual. Ele representa a necessidade de autossuficiência, o vazio interior que pode levar à renovação e ao crescimento pessoal.",
        popular: "Sonhar com um deserto pode indicar solidão ou desafios áridos na vida. Se há um oásis, é um sinal de que uma solução inesperada pode surgir em meio às dificuldades."
    },
    'dinheiro': {
        jung: "O dinheiro, além de ser um símbolo de valor material, também representa a autoestima, o poder e o controle que exercemos sobre a nossa vida. A relação com o dinheiro é reflexo da nossa própria percepção de valor e do nosso lugar no mundo.",
        popular: "Sonhar com dinheiro pode ser um símbolo de prosperidade, mas também pode trazer à tona as preocupações financeiras e as ansiedades que temos sobre nossa segurança e estabilidade."
    },
    'escadas': {
        jung: "As escadas representam progresso e evolução espiritual. Subir pode indicar crescimento pessoal, enquanto descer pode significar um mergulho no inconsciente.",
        popular: "Se sobe escadas com facilidade, pode indicar sucesso; se tem dificuldades, pode ser um aviso de desafios futuros."
    },
    'escola': {
        jung: "A escola representa a aprendizagem contínua e a necessidade de amadurecimento emocional e intelectual. Sonhar com uma escola pode indicar uma busca por autoconhecimento ou um sentimento de inadequação perante desafios.",
        popular: "Esse sonho pode estar ligado à nostalgia, ao medo de avaliação ou ao desejo de crescimento pessoal e profissional."
    },
    'escuro': {
        jung: "A escuridão simboliza o desconhecido, os aspectos ocultos da psique que precisam ser iluminados. Sonhar com a escuridão pode representar medos reprimidos ou uma fase de transição e incerteza.",
        popular: "O escuro nos sonhos pode ser um sinal de confusão ou perigo oculto. Se no sonho a luz aparece, é um indício de clareza e solução para um problema."
    },
    'espelhos': {
        jung: "O espelho é o reflexo da nossa própria alma. Ele nos confronta com nossa identidade, com o que somos ou com o que tememos ser. Ele revela a verdade que às vezes preferimos ignorar, o reflexo oculto do nosso ser interior.",
        popular: "Nos sonhos, os espelhos podem representar revelações inesperadas ou enganos, reflexos distorcidos de nossa realidade. O que vemos no espelho pode ser um aviso de que nem tudo é o que parece ser à primeira vista."
    },
    'escadas': {
        jung: "As escadas são o símbolo da ascensão ou da queda espiritual. Subir é o movimento de evolução, de progresso interior, enquanto descer representa um retrocesso, um mergulho nas profundezas da nossa alma para confrontar os nossos medos.",
        popular: "Sonhar com escadas é um presságio claro do caminho a seguir. Subir escadas indica sucesso e crescimento, enquanto descer é um alerta de que dificuldades estão por vir ou que estamos perdendo o controle da situação."
    },
    'fantasma': {
        jung: "O fantasma simboliza memórias reprimidas, questões inacabadas do passado ou aspectos não resolvidos da psique que assombram o sonhador.",
        popular: "Ver um fantasma pode significar mensagens do além, presenças espirituais ou simplesmente um aviso de que algo do passado precisa ser resolvido."
    },
    'festa': {
        jung: "Uma festa nos sonhos pode representar o desejo de conexão social, celebração da vida ou, em alguns casos, uma tentativa de escapar de questões internas importantes.",
        popular: "Participar de uma festa pode indicar alegria e boas novas, enquanto uma festa desagradável pode refletir sentimentos de exclusão ou solidão."
    },
    'floresta': {
        jung: "A floresta é o território do inconsciente, um espaço de mistério e busca espiritual. Caminhar por ela é o enfrentamento dos nossos medos, o confronto com o desconhecido dentro de nós mesmos.",
        popular: "Perder-se na floresta pode simbolizar confusão e a sensação de estar perdido na vida, enquanto atravessá-la com sucesso indica superação, coragem e a descoberta de uma verdade mais profunda."
    },
    'fogo': {
        jung: "O fogo é a chama do desejo, da paixão incontrolável. Ele simboliza tanto a destruição quanto a purificação. Em seu calor ardente, podemos nos consumir ou nos renovar, tal como uma fênix que ressuscita das cinzas, mais forte do que antes.",
        popular: "O fogo nos sonhos é uma metáfora para os desafios que nos consomem ou para a força interior que nos impulsiona a superar. Enquanto o fogo nos queima, também pode trazer renovação, força e clareza, revelando o que precisa ser purificado."
    },
    'fuga': {
        jung: "Fugir em um sonho simboliza a negação de um aspecto da psique que se recusa a ser enfrentado. Pode representar um desejo de evitar responsabilidades ou o medo de algo interno que precisa ser integrado.",
        popular: "Se você foge de algo em um sonho, pode significar que está tentando escapar de problemas na vida real. Se consegue se esconder ou escapar com sucesso, é um bom presságio de superação."
    },
    'hospital': {
        jung: "O hospital é um símbolo de cura e transformação. Ele representa a necessidade de autocuidado e de um processo de regeneração emocional e psicológica.",
        popular: "Sonhar com hospital pode significar preocupação com a saúde ou um aviso para prestar mais atenção ao bem-estar físico e emocional."
    },
    'ilha': {
        jung: "A ilha simboliza o isolamento, mas também a introspecção. Ela pode representar um refúgio ou a sensação de estar desconectado do resto do mundo.",
        popular: "Ver uma ilha nos sonhos pode significar a necessidade de um tempo sozinho para reflexão. Se a ilha está deserta, pode simbolizar solidão, mas se há vegetação e vida, é um sinal de renovação."
    },
    'inundação': {
        jung: "A inundação simboliza emoções reprimidas que vêm à superfície. Pode indicar uma necessidade de libertar sentimentos intensos.",
        popular: "Sonhar com uma inundação pode ser um aviso para não deixar que as emoções tomem conta da vida ou que uma situação está a escapar ao controlo."
    },
    'labaredas': {
        jung: "As labaredas representam a intensidade emocional, a destruição e a purificação. Elas podem simbolizar paixões ardentes ou uma necessidade urgente de transformação.",
        popular: "Se as labaredas estão fora de controle, pode ser um alerta de emoções reprimidas. Se são contidas ou controladas, indicam que uma transformação está sendo bem direcionada."
    },
    'labirinto': {
        jung: "O labirinto é o espaço do inconsciente onde nos perdemos e nos encontramos. Ele reflete a complexidade da nossa psique, a busca interminável por autoconhecimento e a constante tentativa de resolver os dilemas internos que nos afligem.",
        popular: "Estar perdido no labirinto é uma representação das dificuldades de decidir e o sentimento de desorientação que às vezes tomam conta da nossa vida. Contudo, atravessá-lo pode ser uma metáfora para a superação, a busca por respostas no coração da confusão."
    },
    'lobo': {
        jung: "O lobo representa instintos primitivos, solidão e a necessidade de conexão com a própria natureza selvagem.",
        popular: "Se o lobo é amigável, pode representar proteção e orientação; se for ameaçador, pode simbolizar medo ou traição."
    },
    'mar': {
        jung: "O mar é a vastidão do inconsciente, um espaço de profundas emoções e mistérios. Suas águas calmas indicam serenidade interior, enquanto as águas revoltas refletem os desafios emocionais e a turbulência que nos afeta.",
        popular: "Sonhar com o mar é frequentemente um reflexo das nossas emoções. O mar calmo é um presságio de tranquilidade e harmonia, enquanto o mar agitado nos alerta para os desafios que precisamos enfrentar."
    },
    'montanha': {
        jung: "A montanha é o arquétipo do desafio e da ascensão espiritual. Subir uma montanha representa crescimento pessoal, enquanto estar no topo simboliza realização e iluminação.",
        popular: "Sonhar que escala uma montanha é um sinal de perseverança e conquista. Se a montanha é intransponível, pode ser um aviso de obstáculos difíceis de superar."
    },
    'morte': {
        jung: "A morte, no simbolismo de Jung, é uma poderosa metáfora de transformação. Não a morte física, mas a morte de um ciclo, a necessidade de deixar ir para que algo novo possa surgir. A morte nos sonhos é o convite para o renascimento espiritual.",
        popular: "Para as tradições populares, a morte é um presságio de mudança significativa. Não uma perda, mas um marco de recomeço, uma viragem nas nossas vidas que se apresenta como uma oportunidade disfarçada de fim."
    },
    'neve': {
        jung: "A neve simboliza o congelamento emocional, um período de introspecção e pausa. Também pode representar pureza e renovação, como um renascimento após o inverno da alma.",
        popular: "Ver neve nos sonhos pode indicar um período de tranquilidade ou solidão. Se a neve está derretendo, pode simbolizar a resolução de um problema ou uma mudança positiva iminente."
    },
    'nudez': {
        jung: "A nudez é o espelho da nossa vulnerabilidade. Ao nos despojarmos das máscaras que usamos, encaramos a nossa essência mais pura, muitas vezes com medo da exposição. É a busca pela autenticidade e o confronto com os próprios receios.",
        popular: "Sonhar com a nudez é, na maioria das vezes, um símbolo de vergonha e insegurança. Contudo, pode também representar a libertação das convenções sociais, um desejo profundo de ser verdadeiro consigo mesmo e com o mundo."
    },
    'olhos': {
        jung: "Os olhos são o reflexo da alma, um símbolo de percepção e consciência. Sonhar com olhos pode representar a necessidade de enxergar a verdade ou uma nova perspectiva sobre a vida.",
        popular: "Se no sonho os olhos estão fechados, pode indicar negação ou falta de clareza. Olhos brilhantes simbolizam intuição aguçada e sabedoria."
    },
    'passaporte': {
        jung: "O passaporte simboliza a identidade e a jornada para o autoconhecimento. Ele pode representar uma transição ou uma oportunidade de mudança significativa na vida.",
        popular: "Sonhar com um passaporte pode indicar desejo de viajar, mudanças iminentes ou a necessidade de explorar novas oportunidades."
    },
    'perseguição': {
        jung: "A perseguição nos sonhos é a manifestação de aspectos reprimidos, sombras da nossa psique que nos assombram e nos forçam a confrontá-las. Aquele que foge dos outros, na verdade, foge de si mesmo.",
        popular: "O ato de ser perseguido é uma representação da ansiedade latente, dos problemas não resolvidos que se tornam monstros que nos caçam, na tentativa de chamar nossa atenção para algo que não podemos mais ignorar."
    },
    'ponte': {
        jung: "A ponte é o elo entre dois mundos, a transição de um estado para outro. Ela simboliza o ponto de partida para uma nova jornada, a conexão entre o consciente e o inconsciente, entre a realidade e os nossos sonhos.",
        popular: "Sonhar com uma ponte é muitas vezes um sinal de que mudanças significativas estão a caminho. As pontes nos ajudam a atravessar os abismos da vida, a enfrentar os desafios e as decisões que se impõem à nossa frente."
    },
    'pontes quebradas': {
        jung: "Uma ponte quebrada simboliza dificuldades na transição de um estado para outro. Representa barreiras psicológicas e desafios a serem superados.",
        popular: "Se no sonho a ponte está quebrada, pode ser um aviso de dificuldades em alcançar um objetivo. Se você consegue atravessar, indica que conseguirá superar os desafios."
    },
    'porta': {
        jung: "A porta é o limiar entre dois mundos: o conhecido e o desconhecido. Ela simboliza transições, novas fases da vida, escolhas a serem feitas. A porta fechada indica restrições, limitações que devemos enfrentar, enquanto a porta aberta oferece novas possibilidades.",
        popular: "Abrir uma porta nos sonhos é sinal de boas novas, de mudanças positivas, enquanto uma porta trancada simboliza barreiras que ainda não conseguimos superar. O que se encontra do outro lado é um mistério que aguarda ser descoberto."
    },
    'prisão': {
        jung: "A prisão representa sentimentos de confinamento e repressão. Pode simbolizar limitações autoimpostas ou pressões externas que impedem o crescimento pessoal.",
        popular: "Ser preso em um sonho pode indicar medo de perder a liberdade ou sentimentos de culpa e restrição em alguma área da vida."
    },
    'relógio': {
        jung: "O relógio, com sua medição do tempo, simboliza nossa relação com os ciclos da vida, com os momentos de transição. A ansiedade que o tempo desperta reflete nossos medos em relação ao futuro, às oportunidades que escorrem pelas nossas mãos.",
        popular: "O relógio é muitas vezes um sinal de pressa, da sensação de que estamos correndo contra o tempo. Pode também ser um reflexo das mudanças iminentes, da necessidade de tomar decisões importantes antes que seja tarde."
    },
    'rio': {
        jung: "O rio representa o fluxo da vida, o movimento do inconsciente e a jornada pessoal. Um rio calmo indica harmonia, enquanto um rio turbulento reflete conflitos internos.",
        popular: "Se no sonho o rio está sereno, é um sinal de paz e equilíbrio. Se está agitado, pode indicar dificuldades emocionais ou desafios inesperados."
    },
    'serpente': {
        jung: "A serpente, com sua energia primordial, simboliza a transformação, o despertar da sabedoria oculta e os instintos primitivos. Ela representa o ciclo eterno da vida, a cura que surge após a dor, o mistério que aguarda nossa compreensão.",
        popular: "Em algumas culturas, a serpente é um sinal de traição e engano, mas sua presença também pode ser uma mensagem de cura, renovação e proteção espiritual, como se ela nos oferecesse o veneno necessário para a cura do nosso espírito."
    },
    'sombra': {
        jung: "A sombra representa os aspectos reprimidos da psique, partes de nós que evitamos reconhecer. Enfrentar a própria sombra nos sonhos é um convite ao autoconhecimento e à aceitação.",
        popular: "Ver uma sombra pode ser um sinal de medo do desconhecido ou de algo oculto em sua vida. Se a sombra persegue você, pode indicar ansiedade sobre algo que está tentando evitar."
    },
    'telefone': {
        jung: "O telefone representa a comunicação entre o consciente e o inconsciente. Pode simbolizar uma mensagem importante que precisa ser ouvida ou um desejo de conexão.",
        popular: "Sonhar com um telefone pode indicar que alguém tentará entrar em contato ou que uma notícia importante está a caminho."
    },
    'tempestade': {
        jung: "A tempestade simboliza o caos emocional, conflitos internos que precisam ser resolvidos. Representa momentos de crise que podem levar a um crescimento significativo.",
        popular: "Sonhar com uma tempestade pode indicar problemas iminentes ou emoções intensas. Se a tempestade passa e o sol surge, significa que tempos melhores virão após dificuldades."
    },
    'terremoto': {
        jung: "O terremoto simboliza mudanças internas profundas e a necessidade de reconstrução emocional e psicológica. Ele representa o colapso de velhas estruturas para dar espaço ao novo.",
        popular: "Sonhar com um terremoto pode ser um aviso de eventos inesperados ou de transformações radicais que estão por vir."
    },
    'trovão': {
        jung: "O trovão representa forças poderosas do inconsciente. Pode simbolizar uma revelação súbita ou um aviso sobre emoções intensas.",
        popular: "Um trovão pode ser um sinal de perigo iminente ou de mudanças inesperadas que podem trazer transformação."
    },
    'túmulo': {
        jung: "O túmulo representa o fim de um ciclo, um símbolo de transformação e renascimento. Ele pode indicar a necessidade de deixar algo para trás para seguir adiante.",
        popular: "Ver um túmulo pode significar mudanças ou o encerramento de uma fase da vida. Se o túmulo está aberto, pode indicar a necessidade de revisitar questões do passado."
    },
    'vento': {
        jung: "O vento simboliza forças invisíveis que influenciam a vida. Pode representar mudanças internas e a necessidade de adaptação ao que não se pode controlar.",
        popular: "Se o vento é suave, pode indicar mudanças positivas. Se é uma ventania forte, pode ser um alerta para desafios turbulentos no caminho."
    },
    'vestido': {
        jung: "O vestido reflete a identidade e a autoimagem, sendo a veste da alma que nos revela ao mundo. A forma como o usamos diz muito sobre como nos vemos e como desejamos ser vistos.",
        popular: "Sonhar com um vestido bonito pode ser um reflexo de felicidade e realização, enquanto um vestido rasgado simboliza insegurança, a perda da nossa própria confiança e autoestima."
    },
    'viagem': {
        jung: "A viagem simboliza a jornada interior e o crescimento pessoal. Pode representar uma busca por respostas ou uma mudança significativa na vida.",
        popular: "Se a viagem é tranquila, pode indicar progresso e sucesso; se há dificuldades, pode significar desafios no caminho."
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
