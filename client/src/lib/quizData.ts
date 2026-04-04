export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  theme: string;
}

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// QUESTÕES DE TÓRAX (40 questões)
const toraxQuestions: Question[] = [
  {
    id: "torax-1",
    question: "Em casos de neoplasias esofágicas avançadas, observa-se frequentemente um diagnóstico tardio. Do ponto de vista anatômico, isso ocorre predominantemente porque as vísceras torácicas:",
    options: ["Devido à pressão subatmosférica constante no mediastino posterior.", "Porque são protegidas pelo arcabouço ósseo e muscular, tornando as doenças oligossintomáticas [1, 2].", "Pelo fato de a pleura visceral possuir alta sensibilidade dolorosa, mascarando o tumor.", "Porque o esôfago localiza-se no mediastino médio, área de difícil visualização."],
    correctAnswer: 1,
    explanation: "A proteção óssea torna as doenças oligossintomáticas.",
    theme: "Tórax"
  },
  {
    id: "torax-2",
    question: "O mediastino é definido como o compartimento central da cavidade torácica, situado entre as duas cavidades pleurais. Qual estrutura anatômica representa o limite superior dessa região?",
    options: ["Cartilagem cricoide.", "Manúbrio do esterno.", "Fúrcula esternal (abertura torácica superior) [3, 4].", "Vértebra cervical C7."],
    correctAnswer: 2,
    explanation: "O limite superior é definido pela fúrcula esternal [3, 4].",
    theme: "Tórax"
  },
  {
    id: "torax-3",
    question: "O mediastino inferior é subdividido em compartimentos anterior, médio e posterior. Qual estrutura anatômica é utilizada como principal referência para essa compartimentalização?",
    options: ["O esôfago torácico.", "O pericárdio [3, 5].", "A traqueia torácica.", "A quarta vértebra torácica (T4)."],
    correctAnswer: 1,
    explanation: "O pericárdio serve como referência anatômica para a divisão do o mediastino inferior [3, 5].",
    theme: "Tórax"
  },
  {
    id: "torax-4",
    question: "Em exames de imagem do mediastino superior em adultos, além do timo, qual das seguintes estruturas pode ser encontrada esporadicamente nesta topografia?",
    options: ["Veia ázigos.", "Tronco simpático.", "Bócio mergulhante da glândula tireoide [3, 6, 7].", "Coração e pericárdio."],
    correctAnswer: 2,
    explanation: "O bócio mergulhante é uma estrutura que pode ocupar o mediastino superior [3, 6, 7].",
    theme: "Tórax"
  },
  {
    id: "torax-5",
    question: "Assinale a alternativa que apresenta estruturas localizadas estritamente no compartimento do mediastino posterior:",
    options: ["Timo e raízes dos grandes vasos.", "Veia ázigos e ducto torácico [6, 8-10].", "Hilos pulmonares e pericárdio.", "Traqueia torácica e nervo frênico."],
    correctAnswer: 1,
    explanation: "A veia ázigos e o ducto torácico são conteúdos típicos do mediastino posterior [6, 8-10].",
    theme: "Tórax"
  },
  {
    id: "torax-6",
    question: "No mediastino médio, os pulmões se localizam lateralmente, mas o professor menciona uma estrutura específica deste compartimento onde os pulmões \"se beijam\". Que estrutura é essa?",
    options: ["Carina da traqueia.", "Hilo dos pulmões [8, 11].", "Pleura mediastínica.", "Grande vaso da base."],
    correctAnswer: 1,
    explanation: "O hilo é onde os pulmões \"se beijam\" no mediastino médio [8, 11].",
    theme: "Tórax"
  },
  {
    id: "torax-7",
    question: "Anatomicamente, o timo (ou seus remanescentes adiposos no adulto) pode ser encontrado em quais compartimentos mediastinais?",
    options: ["Apenas no mediastino superior.", "No superior e no inferior anterior [6, 8, 12].", "No inferior médio e posterior.", "Apenas no mediastino posterior."],
    correctAnswer: 1,
    explanation: "Topograficamente, o timo situa-se nos compartimentos superior e inferior anterior [6, 8, 12].",
    theme: "Tórax"
  },
  {
    id: "torax-8",
    question: "O professor afirma que \"tudo que está embaixo do diafragma está no abdômen\". Qual o limite posterior do mediastino que vai de T1 a T12?",
    options: ["Arcos costais.", "Esterno.", "Coluna vertebral torácica (coluna dorsal) [3, 6, 13].", "Músculos intercostais."],
    correctAnswer: 2,
    explanation: "A coluna vertebral torácica constitui o limite posterior do mediastino [3, 6, 13].",
    theme: "Tórax"
  },
  {
    id: "torax-9",
    question: "A divisão entre o mediastino superior e inferior é estabelecida pelo plano transverso do tórax. Sobre este plano, é correto afirmar:",
    options: ["Ocorre no nível do processo xifoide.", "É feita por uma linha imaginária no nível da 4ª vértebra torácica (T4) [6, 14].", "O mediastino inferior termina no nível de T10.", "O mediastino superior contém o esôfago torácico em toda sua extensão."],
    correctAnswer: 1,
    explanation: "O plano transverso do tórax (ângulo de Louis) situa-se ao nível de T4 [6, 14].",
    theme: "Tórax"
  },
  {
    id: "torax-10",
    question: "A inervação motora do músculo diafragma é suprida por qual estrutura nervosa?",
    options: ["Nervo vago.", "Nervo frênico [3, 15, 16].", "Nervo intercostal.", "Nervo hipoglosso."],
    correctAnswer: 1,
    explanation: "O nervo frênico fornece a inervação motora para o diafragma [3, 15, 16].",
    theme: "Tórax"
  },
  {
    id: "torax-11",
    question: "Sobre as características anatômicas da pleura visceral, é correto afirmar que:",
    options: ["Ela reveste a parede interna da caixa torácica.", "É sensível à dor através dos nervos intercostais.", "É aderida intrinsecamente ao parênquima pulmonar e não pode ser descolada [6, 17, 18].", "É vascularizada exclusivamente pela artéria torácica interna."],
    correctAnswer: 2,
    explanation: "A pleura visceral é intimamente aderida ao parênquima pulmonar [6, 17, 18].",
    theme: "Tórax"
  },
  {
    id: "torax-12",
    question: "O espaço entre as pleuras parietal e visceral é normalmente virtual. O que caracteriza o \"pneumotórax\" citado em aula?",
    options: ["Acúmulo de líquido por desequilíbrio de absorção.", "Presença de sangue por trauma.", "Presença de ar, tornando o espaço real [6, 17, 19].", "Acúmulo de linfa por lesão do ducto torácico."],
    correctAnswer: 2,
    explanation: "A presença de ar no espaço pleural converte a cavidade virtual em real [6, 17, 19].",
    theme: "Tórax"
  },
  {
    id: "torax-13",
    question: "No mecanismo da mecânica respiratória, a principal função fisiológica da pressão intrapleural negativa (subatmosférica) é:",
    options: ["Manter a pressão positiva para facilitar a expiração.", "Manter a pressão negativa (subatmosférica) para evitar o colabamento pulmonar [6, 17, 20].", "Igualar a pressão pulmonar à pressão atmosférica.", "Produzir 1000 ml de líquido pleural por minuto."],
    correctAnswer: 1,
    explanation: "A pressão intrapleural negativa é essencial para prevenir o colabamento pulmonar [6, 17, 20].",
    theme: "Tórax"
  },
  {
    id: "torax-14",
    question: "Um paciente apresenta uma \"dor pleurítica\". Segundo os materiais, qual camada da pleura é sensível à dor e por quais nervos?",
    options: ["Pleura visceral; plexo pulmonar.", "Pleura parietal; nervos intercostais e nervo frênico [16, 21].", "Pleura parietal mediastínica; apenas nervo vago.", "Ambas as pleuras são igualmente sensíveis."],
    correctAnswer: 1,
    explanation: "A pleura parietal possui inervação somática, sendo a camada sensível à dor [16, 21].",
    theme: "Tórax"
  },
  {
    id: "torax-15",
    question: "De acordo com as anotações sobre os recessos pleurais, qual deles \"some\" ou desaparece especificamente em casos de pneumotórax (ar)?",
    options: ["Recesso costofrênico.", "Recesso cardiofrênico.", "Recesso apical [22-24].", "Recesso diafragmático."],
    correctAnswer: 2,
    explanation: "No pneumotórax, o recesso apical é tipicamente o primeiro a ser obliterado [22-24].",
    theme: "Tórax"
  },
  {
    id: "torax-16",
    question: "O \"selo d'água\" é um mecanismo mencionado na aula para drenagem torácica. Sua função principal é:",
    options: ["Lavar a cavidade pleural.", "Impedir a comunicação do meio exterior com a cavidade (evitar que o ar entre) [25].", "Produzir líquido pleural artificial.", "Aumentar a pressão negativa durante a inspiração."],
    correctAnswer: 1,
    explanation: "O sistema de selo d'água atua como uma válvula unidirecional que impede o refluxo de ar para o tórax [25].",
    theme: "Tórax"
  },
  {
    id: "torax-17",
    question: "O suprimento arterial da porção diafragmática da pleura parietal é provido predominantemente por qual vaso?",
    options: ["Artéria torácica interna.", "Artéria intercostal.", "Artéria brônquica.", "Artéria musculofrênica [6, 8, 26]."],
    correctAnswer: 3,
    explanation: "A artéria musculofrênica é responsável pela irrigação desta área [6, 8, 26].",
    theme: "Tórax"
  },
  {
    id: "torax-18",
    question: "O hemotórax define-se pelo acúmulo de sangue na cavidade pleural. Qual é a etiologia mais frequente para esta condição em serviços de emergência?",
    options: ["Pneumonia.", "Insuficiência cardíaca.", "Trauma (acidentes de carro, arma branca) [17, 27].", "Câncer de pulmão avançado."],
    correctAnswer: 2,
    explanation: "O trauma torácico é a principal etiologia do hemotórax [17, 27].",
    theme: "Tórax"
  },
  {
    id: "torax-19",
    question: "A irrigação arterial da pleura parietal em sua face mediastinal é derivada de qual vaso?",
    options: ["Artéria torácica interna [6, 8, 26].", "Artéria brônquica.", "Artéria musculofrenica.", "Artéria aorta descendente."],
    correctAnswer: 0,
    explanation: "A irrigação da pleura mediastínica provém da artéria torácica interna [6, 8, 26].",
    theme: "Tórax"
  },
  {
    id: "torax-20",
    question: "Como o professor descreve os \"recessos pleurais\"?",
    options: ["Espaços que nunca somem, mesmo em doenças.", "Cavidades no espaço pleural que aparecem durante a expiração [23, 28].", "Estruturas que fixam o pulmão ao diafragma.", "Locais de entrada dos brônquios principais."],
    correctAnswer: 1,
    explanation: "Os recessos pleurais funcionam como espaços de reserva durante a mecânica respiratória [23, 28].",
    theme: "Tórax"
  },
  {
    id: "torax-21",
    question: "Anatomicamente, o pulmão direito diferencia-se do esquerdo por apresentar:",
    options: ["Possui 2 lobos e é mais leve.", "Possui 3 lobos e 2 fissuras (horizontal e oblíqua) [23, 29].", "Apresenta incisura cardíaca e língula.", "É mais longo e estreito."],
    correctAnswer: 1,
    explanation: "Morfologicamente, o pulmão direito é composto por três lobos e duas fissuras [23, 29].",
    theme: "Tórax"
  },
  {
    id: "torax-22",
    question: "\"Estrutura no lobo superior esquerdo que representa anatomicamente o que seria o lobo médio\". Esta definição refere-se à:",
    options: ["Carina.", "Incisura cardíaca.", "Língula [17, 23, 30].", "Base pulmonar."],
    correctAnswer: 2,
    explanation: "A língula é a projeção do lobo superior esquerdo análoga ao lobo médio direito [17, 23, 30].",
    theme: "Tórax"
  },
  {
    id: "torax-23",
    question: "Ao analisar o hilo pulmonar direito em uma vista lateral, qual a sequência anatômica das estruturas no sentido superoinferior?",
    options: ["Artéria, Brônquio, Veia (ABV).", "Brônquio, Artéria, Veia (BAV) [23, 31].", "Veia, Artéria, Brônquio (VAB).", "Veia, Brônquio, Artéria (VBA)."],
    correctAnswer: 1,
    explanation: "No hilo pulmonar direito, a disposição craniocaudal é Brônquio, Artéria e Veia [23, 31].",
    theme: "Tórax"
  },
  {
    id: "torax-24",
    question: "No hilo pulmonar esquerdo, qual a organização anatômica das estruturas principais no sentido superoinferior?",
    options: ["Artéria, Brônquio, Veia (ABV) [23, 32].", "Brônquio, Artéria, Veia (BAV).", "Veia, Brônquio, Artéria.", "Artéria, Veia, Brônquio."],
    correctAnswer: 0,
    explanation: "No hilo pulmonar esquerdo, a disposição craniocaudal é Artéria, Brônquio e Veia [23, 32].",
    theme: "Tórax"
  },
  {
    id: "torax-25",
    question: "A maior incidência de aspiração de corpos estranhos para o brônquio principal direito deve-se a quais características anatômicas desta estrutura?",
    options: ["Por ele ser mais longo e horizontal.", "Por ele ser mais curto e verticalizado [6, 23, 33].", "Devido à presença da carina desviada para a direita.", "Porque o brônquio esquerdo é mais calibroso."],
    correctAnswer: 1,
    explanation: "O brônquio principal direito apresenta maior verticalidade e menor comprimento que o esquerdo [6, 23, 33].",
    theme: "Tórax"
  },
  {
    id: "torax-26",
    question: "A traqueia é um conduto fibrocartilaginoso que se estende longitudinalmente entre quais níveis anatômicos?",
    options: ["Da laringe até T12.", "Da cartilagem tireoide até os brônquios lobares.", "Da cartilagem cricoide até a carina [6, 13].", "Do osso hioide até o manúbrio."],
    correctAnswer: 2,
    explanation: "A traqueia estende-se da cartilagem cricoide até a sua bifurcação na carina [6, 13].",
    theme: "Tórax"
  },
  {
    id: "torax-27",
    question: "Assinale a alternativa que descreve a sequência anatômica correta da árvore brônquica, da traqueia até as unidades funcionais de troca gasosa:",
    options: ["Traqueia → Carina → Brônquio Principal → Brônquio Lobar → Brônquio Segmentar → Bronquíolos → Alvéolos [6, 23, 34].", "Traqueia → Brônquio Segmentar → Brônquio Lobar → Bronquíolo.", "Carina → Bronquíolo Terminal → Brônquio Principal.", "Brônquio Principal → Alvéolo → Bronquíolo."],
    correctAnswer: 0,
    explanation: "Representa a segmentação anatômica correta da árvore brônquica [6, 23, 34].",
    theme: "Tórax"
  },
  {
    id: "torax-28",
    question: "A hematose, ou troca gasosa alvéolo-capilar, ocorre predominantemente em quais estruturas do parênquima pulmonar?",
    options: ["Nos brônquios principais.", "Nos brônquios lobares.", "Nos bronquíolos terminais e alvéolos [6, 34].", "Na carina."],
    correctAnswer: 2,
    explanation: "A troca gasosa ocorre nas unidades alveolares e bronquíolos respiratórios [6, 34].",
    theme: "Tórax"
  },
  {
    id: "torax-29",
    question: "O professor menciona a \"Asma Brônquica\". Qual o problema anatômico descrito por ele nessa condição?",
    options: ["Ruptura dos alvéolos por pressão negativa.", "Dificuldade na passagem do ar devido ao edema da árvore brônquica [21, 35].", "Presença de líquido no espaço pleural.", "Fibrose das artérias pulmonares."],
    correctAnswer: 1,
    explanation: "A asma brônquica caracteriza-se por inflamação e broncoconstrição reversível [21, 35].",
    theme: "Tórax"
  },
  {
    id: "torax-30",
    question: "No pulmão direito, a fissura horizontal estabelece o limite anatômico entre quais lobos?",
    options: ["Lobo médio do inferior.", "Lobo superior do inferior.", "Lobo superior do médio [23, 36].", "Não existe fissura horizontal no pulmão direito."],
    correctAnswer: 2,
    explanation: "A fissura horizontal delimita os lobos superior e médio do pulmão direito [23, 36].",
    theme: "Tórax"
  },
  {
    id: "torax-31",
    question: "Sobre o sistema linfático, qual a definição de \"Cisterna do Quilo\"?",
    options: ["Local onde desemboca o ducto torácico.", "Parte mais dilatada do sistema linfático, onde se forma o ducto torácico [17, 22, 37, 38].", "Conjunto de linfonodos localizados no hilo pulmonar.", "Vaso que drena a linfa da face e pescoço."],
    correctAnswer: 1,
    explanation: "A cisterna do quilo é a origem dilatada do ducto torácico [17, 22, 37, 38].",
    theme: "Tórax"
  },
  {
    id: "torax-32",
    question: "O ducto torácico, principal vaso linfático do corpo, drena para o sistema venoso especificamente na seguinte topografia:",
    options: ["Veia cava superior.", "Veia ázigos.", "Junção das veias subclávia e jugular interna esquerdas [17, 22, 39, 40].", "Átrio direito."],
    correctAnswer: 2,
    explanation: "O ducto torácico drena para a confluência venosa jugulo-subclávia esquerda [17, 22, 39, 40].",
    theme: "Tórax"
  },
  {
    id: "torax-33",
    question: "A veia hemiázigos, componente do sistema ázigos à esquerda, tem sua origem anatômica a partir da junção de quais vasos?",
    options: ["Veia renal e veia porta.", "Veia lombar ascendente e subcostal esquerda [6, 17, 41].", "Veia intercostal anterior e posterior.", "Veia cava inferior e superior."],
    correctAnswer: 1,
    explanation: "Descreve os vasos que convergem para formar a veia hemiázigos [6, 17, 41].",
    theme: "Tórax"
  },
  {
    id: "torax-34",
    question: "O hiato esofágico é uma abertura no pilar direito do diafragma (nível T10). Quais estruturas atravessam este hiato concomitantemente ao esôfago?",
    options: ["Ducto torácico.", "Troncos vagais anterior e posterior [42-44].", "Veia ázigos.", "Artéria aorta."],
    correctAnswer: 1,
    explanation: "O esôfago e os troncos vagais atravessam o diafragma ao nível de T10 [42-44].",
    theme: "Tórax"
  },
  {
    id: "torax-35",
    question: "O hiato aórtico é a abertura mais posterior do diafragma (nível T12). Quais estruturas anatômicas utilizam esta passagem?",
    options: ["Aorta, ducto torácico e veia ázigos [42-44].", "Aorta e nervo frênico.", "Veia cava inferior e nervos vagos.", "Apenas a artéria aorta."],
    correctAnswer: 0,
    explanation: "A aorta, o ducto torácico e a veia ázigos utilizam o hiato aórtico (T12) [42-44].",
    theme: "Tórax"
  },
  {
    id: "torax-36",
    question: "A artéria torácica interna, utilizada frequentemente em cirurgias de revascularização do miocárdio, é ramo de qual vaso?",
    options: ["Artéria aorta torácica.", "Artéria subclávia [45-47].", "Artéria carótida comum.", "Artéria brônquica."],
    correctAnswer: 1,
    explanation: "A artéria torácica interna é um ramo descendente da artéria subclávia [45-47].",
    theme: "Tórax"
  },
  {
    id: "torax-37",
    question: "A maioria das artérias intercostais posteriores (do 3º ao 11º espaço) origina-se diretamente de qual vaso?",
    options: ["Artéria torácica interna.", "Artéria musculofrênica.", "Artéria aorta descendente (torácica) [21, 48, 49].", "Veia ázigos."],
    correctAnswer: 2,
    explanation: "As artérias intercostais posteriores originam-se da face posterior da aorta torácica [21, 48, 49].",
    theme: "Tórax"
  },
  {
    id: "torax-38",
    question: "Qual é a terminologia oncológica correta para designar as neoplasias malignas primárias do sistema linfático?",
    options: ["Carcinoma.", "Linfoma [17, 50, 51].", "Sarcoma.", "Linfadenite."],
    correctAnswer: 1,
    explanation: "O termo linfoma designa neoplasias malignas do tecido linfoide [17, 50, 51].",
    theme: "Tórax"
  },
  {
    id: "torax-39",
    question: "O forame da veia cava inferior é uma abertura situada no centro tendíneo do diafragma. Em qual nível vertebral esta estrutura se localiza?",
    options: ["T4.", "T8-T9 [11, 42-44].", "T10.", "T12."],
    correctAnswer: 1,
    explanation: "O forame da veia cava inferior localiza-se ao nível de T8 [11, 42-44].",
    theme: "Tórax"
  },
  {
    id: "torax-40",
    question: "Qual vaso é responsável pela drenagem venosa da parede posterior do tórax à direita e drena diretamente para a veia cava superior?",
    options: ["Veia hemiázigos.", "Veia torácica interna.", "Veia ázigos [6, 17, 52].", "Veia jugular externa."],
    correctAnswer: 2,
    explanation: "A veia ázigos é o principal vaso de drenagem da parede torácica direita para a veia cava superior [6, 17, 52].",
    theme: "Tórax"
  }
];

// QUESTÕES DE CORAÇÃO (40 questões)
const coracaoQuestions: Question[] = [
  {
    id: "coracao-1",
    question: "Um paciente de 22 anos apresenta um quadro de AVC isquêmico. O ecocardiograma revela um Forame Oval Patente (FOP). Anatomicalmente, essa condição representa uma falha no fechamento da comunicação entre:",
    options: ["O ventrículo direito e o ventrículo esquerdo.", "O átrio direito e o átrio esquerdo.", "A aorta e o tronco pulmonar.", "A veia cava superior e o átrio direito."],
    correctAnswer: 1,
    explanation: "O FOP é uma falha no fechamento do forame oval, que comunica os átrios no feto.",
    theme: "Coração"
  },
  {
    id: "coracao-2",
    question: "Durante um exame físico, o médico localiza o ictus cordis no 5º espaço intercostal esquerdo, na linha hemiclavicular. Essa estrutura corresponde ao:",
    options: ["Ápice do coração, formado pelo ventrículo esquerdo.", "Ápice do coração, formado pelo átrio esquerdo.", "Base do coração, formada pelo ventrículo direito.", "Margem inferior do coração, formada pelo átrio direito."],
    correctAnswer: 0,
    explanation: "O ápice é o ponto inferolateral do VE, no 5º EIC.",
    theme: "Coração"
  },
  {
    id: "coracao-3",
    question: "Um paciente com insuficiência da valva mitral apresenta um sopro característico. De acordo com a anatomia e os princípios da circulação, o principal defeito dessa condição é o refluxo de sangue do:",
    options: ["Ventrículo direito para o átrio direito.", "Átrio esquerdo para o ventrículo esquerdo.", "Ventrículo esquerdo para o átrio esquerdo.", "Ventrículo esquerdo para a aorta."],
    correctAnswer: 2,
    explanation: "A valva mitral (bicúspide) separa AE de VE; sua insuficiência causa refluxo para o AE.",
    theme: "Coração"
  },
  {
    id: "coracao-4",
    question: "Um infarto agudo do miocárdio causado pela obstrução da artéria interventricular anterior (descendente anterior) provoca a morte de células musculares em qual região?",
    options: ["Átrio direito e nó sinoatrial.", "Septo interventricular anterior e ventrículo esquerdo.", "Face diafragmática do ventrículo direito.", "Base do coração e átrio esquerdo."],
    correctAnswer: 1,
    explanation: "A artéria descendente anterior supre a face anterior e o septo interventricular.",
    theme: "Coração"
  },
  {
    id: "coracao-5",
    question: "O seio coronário é a principal veia de drenagem do coração. Anatomicalmente, ele recebe a confluência das veias cardíacas magna e parva e se abre diretamente no:",
    options: ["Átrio esquerdo.", "Ventrículo direito através do cone arterial.", "Átrio direito através do óstio do seio coronário.", "Veia cava inferior."],
    correctAnswer: 2,
    explanation: "Toda a drenagem venosa do miocárdio converge para o seio coronário, que se abre no AD.",
    theme: "Coração"
  },
  {
    id: "coracao-6",
    question: "Sobre o pericárdio, a camada que está diretamente aderida ao miocárdio, também chamada de epicárdio, é a:",
    options: ["Lâmina parietal do pericárdio seroso.", "Lâmina visceral do pericárdio seroso.", "Camada externa do pericárdio fibroso.", "Endocárdio."],
    correctAnswer: 1,
    explanation: "O epicárdio é a lâmina visceral do pericárdio seroso.",
    theme: "Coração"
  },
  {
    id: "coracao-7",
    question: "No átrio direito, a estrutura que separa a parede anterior rugosa (músculos pectíneos) da parede posterior lisa (seio das veias cavas) é a:",
    options: ["Fossa oval.", "Crista terminal.", "Trabécula septomarginal.", "Válvula de Eustáquio."],
    correctAnswer: 1,
    explanation: "A crista terminal é a linha de separação entre as partes lisa e rugosa do AD.",
    theme: "Coração"
  },
  {
    id: "coracao-8",
    question: "Um cirurgião manipula o coração e identifica um feixe muscular curvo que atravessa a cavidade do ventrículo direito, indo do septo interventricular até a base do músculo papilar anterior. Trata-se da:",
    options: ["Crista supraventricular.", "Trabécula septomarginal (banda moderadora).", "Corda tendínea.", "Valva tricúspide."],
    correctAnswer: 1,
    explanation: "A banda moderadora é exclusiva do VD e conduz o ramo direito do fascículo AV.",
    theme: "Coração"
  },
  {
    id: "coracao-9",
    question: "Assinale a alternativa CORRETA sobre a pequena circulação (pulmonar):",
    options: ["Inicia no ventrículo esquerdo e termina no átrio direito.", "O sangue sai do ventrículo direito pelo tronco pulmonar em direção aos pulmões.", "As artérias pulmonares carregam sangue rico em oxigênio.", "O sangue retorna ao átrio direito pelas veias pulmonares."],
    correctAnswer: 1,
    explanation: "A pequena circulação leva sangue venoso do VD aos pulmões para hematose.",
    theme: "Coração"
  },
  {
    id: "coracao-10",
    question: "O esqueleto fibroso do coração possui diversas funções. Assinale a alternativa que indica uma função que NÃO pertence a essa estrutura:",
    options: ["Fornecer fixação para as válvulas das valvas.", "Atuar como isolante elétrico entre átrios e ventrículos.", "Impedir a distensão excessiva dos óstios das valvas.", "Iniciar o impulso elétrico como marca-passo natural."],
    correctAnswer: 3,
    explanation: "O esqueleto fibroso é colágeno denso; o marca-passo é o tecido nodal (nó SA).",
    theme: "Coração"
  },
  {
    id: "coracao-11",
    question: "As artérias coronárias são os primeiros ramos da aorta. O óstio da artéria coronária direita localiza-se no:",
    options: ["Seio da aorta direito (acima da valva aórtica).", "Arco aórtico, entre o tronco braquiocefálico e a carótida comum.", "Ventrículo esquerdo, logo abaixo da valva mitral.", "Tronco pulmonar."],
    correctAnswer: 0,
    explanation: "As coronárias nascem nos seios da aorta, logo acima das válvulas semilunares.",
    theme: "Coração"
  },
  {
    id: "coracao-12",
    question: "Um ferimento por arma branca no 4º espaço intercostal esquerdo, imediatamente lateral ao esterno, tem maior probabilidade de atingir a face esternocostal do coração, formada principalmente pelo:",
    options: ["Ventrículo esquerdo.", "Átrio esquerdo.", "Ventrículo direito.", "Átrio direito."],
    correctAnswer: 2,
    explanation: "A face anterior (esternocostal) é formada majoritariamente pelo VD.",
    theme: "Coração"
  },
  {
    id: "coracao-13",
    question: "O nó sinoatrial (SA), responsável por iniciar os batimentos cardíacos, localiza-se na:",
    options: ["Região posteroinferior do septo interatrial.", "Junção da veia cava superior com o átrio direito.", "Trabécula septomarginal do ventrículo direito.", "Base do ventrículo esquerdo."],
    correctAnswer: 1,
    explanation: "O nó SA fica subepicardicamente na junção da VCS com o AD.",
    theme: "Coração"
  },
  {
    id: "coracao-14",
    question: "Qual estrutura anatômica impede o prolapso das válvulas das valvas atrioventriculares para dentro dos átrios durante a sístole ventricular?",
    options: ["Músculos pectíneos.", "Trabéculas cárneas.", "Cordas tendíneas e músculos papilares.", "Crista supraventricular."],
    correctAnswer: 2,
    explanation: "Músculos papilares tensionam as cordas tendíneas para evitar o prolapso das valvas AV.",
    theme: "Coração"
  },
  {
    id: "coracao-15",
    question: "No arco aórtico, o primeiro grande tronco arterial a emergir (da direita para a esquerda) é o:",
    options: ["Tronco braquiocefálico.", "Artéria carótida comum esquerda.", "Artéria subclávia esquerda.", "Tronco pulmonar."],
    correctAnswer: 0,
    explanation: "Sequência no arco: Tronco braquiocefálico, Carótida Comum E e Subclávia E.",
    theme: "Coração"
  },
  {
    id: "coracao-16",
    question: "A \"Base do Coração\" é a sua face posterior, situada oposta ao ápice. Anatomicalmente, ela é formada predominantemente pelo:",
    options: ["Átrio direito.", "Átrio esquerdo.", "Ventrículo direito.", "Ventrículo esquerdo."],
    correctAnswer: 1,
    explanation: "A base do coração é posterior e formada quase toda pelo AE.",
    theme: "Coração"
  },
  {
    id: "coracao-17",
    question: "Um trombo que se forma no átrio esquerdo e passa para o ventrículo esquerdo deve atravessar a valva:",
    options: ["Tricúspide.", "Semilunar pulmonar.", "Mitral (bicúspide).", "Semilunar aórtica."],
    correctAnswer: 2,
    explanation: "Mitral = lado esquerdo; Tricúspide = lado direito.",
    theme: "Coração"
  },
  {
    id: "coracao-18",
    question: "Sobre o ventrículo esquerdo, assinale a alternativa INCORRETA:",
    options: ["Possui paredes 2 a 3 vezes mais espessas que o ventrículo direito.", "Forma o ápice do coração.", "Sua via de saída é o cone arterial.", "Contém músculos papilares anterior e posterior."],
    correctAnswer: 2,
    explanation: "O cone arterial (infundíbulo) é do VD; o do VE é o vestíbulo da aorta.",
    theme: "Coração"
  },
  {
    id: "coracao-19",
    question: "A veia cardíaca que acompanha a artéria interventricular anterior no sulco de mesmo nome é a:",
    options: ["Veia cardíaca média.", "Veia cardíaca parva.", "Veia cardíaca magna.", "Veia oblíqua do átrio esquerdo."],
    correctAnswer: 2,
    explanation: "A veia cardíaca magna percorre o sulco interventricular anterior com a artéria homônima.",
    theme: "Coração"
  },
  {
    id: "coracao-20",
    question: "O local de ausculta da valva pulmonar situa-se no:",
    options: ["2º espaço intercostal esquerdo, junto à margem esternal.", "2º espaço intercostal direito, junto à margem esternal.", "5º espaço intercostal esquerdo, na linha hemiclavicular.", "5º espaço intercostal esquerdo, junto ao esterno."],
    correctAnswer: 0,
    explanation: "Foco pulmonar: 2º EIC esquerdo; Foco aórtico: 2º EIC direito.",
    theme: "Coração"
  },
  {
    id: "coracao-21",
    question: "Qual componente do complexo estimulante do coração representa a única ponte elétrica entre o miocárdio atrial e ventricular?",
    options: ["Nó sinoatrial.", "Fascículo atrioventricular (Feixe de His).", "Fibras de Purkinje.", "Músculos pectíneos."],
    correctAnswer: 1,
    explanation: "O fascículo AV (Feixe de His) atravessa o esqueleto fibroso para chegar aos ventrículos.",
    theme: "Coração"
  },
  {
    id: "coracao-22",
    question: "O tamponamento cardíaco ocorre quando o espaço entre o coração e o pericárdio é preenchido por líquido. Esse espaço é chamado de:",
    options: ["Espaço endocárdico.", "Cavidade pericárdica.", "Seio transverso.", "Átrio direito."],
    correctAnswer: 1,
    explanation: "O espaço entre as lâminas parietal e visceral do pericárdio seroso.",
    theme: "Coração"
  },
  {
    id: "coracao-23",
    question: "As veias pulmonares (em número de quatro) transportam sangue oxigenado e desembocam no:",
    options: ["Átrio direito.", "Átrio esquerdo.", "Ventrículo esquerdo.", "Pulmão."],
    correctAnswer: 1,
    explanation: "As 4 veias pulmonares trazem sangue oxigenado para o AE.",
    theme: "Coração"
  },
  {
    id: "coracao-24",
    question: "A face diafragmática (inferior) do coração repousa sobre o diafragma e é formada principalmente pelo:",
    options: ["Ventrículo esquerdo e parte do ventrículo direito.", "Átrio direito.", "Átrio esquerdo e grandes vasos.", "Ventrículo direito exclusivamente."],
    correctAnswer: 0,
    explanation: "A face diafragmática é a base de apoio inferior, formada pelos ventrículos.",
    theme: "Coração"
  },
  {
    id: "coracao-25",
    question: "A artéria coronária esquerda divide-se em dois ramos principais logo após sua origem. São eles:",
    options: ["Ramo marginal direito e ramo interventricular posterior.", "Ramo interventricular anterior e ramo circunflexo.", "Artéria do nó sinoatrial e ramo marginal esquerdo.", "Artéria carótida e artéria subclávia."],
    correctAnswer: 1,
    explanation: "A ACE se bifurca em IV anterior (descendente anterior) e circunflexa.",
    theme: "Coração"
  },
  {
    id: "coracao-26",
    question: "Qual estrutura é o remanescente da circulação fetal que comunicava o tronco pulmonar com o arco da aorta?",
    options: ["Fossa oval.", "Ligamento arterial (Ducto arterial).", "Óstio do seio coronário.", "Crista terminal."],
    correctAnswer: 1,
    explanation: "O ducto arterial fetal oblitera-se e torna-se o ligamento arterial.",
    theme: "Coração"
  },
  {
    id: "coracao-27",
    question: "Sobre a margem direita do coração, é correto afirmar que ela é:",
    options: ["Formada pelo ventrículo esquerdo.", "Reta e vertical, formada pelo átrio direito.", "Convexa e formada pelo átrio direito entre a VCS e VCI.", "Oblíqua e formada pelo ventrículo direito."],
    correctAnswer: 2,
    explanation: "A margem direita é formada pelo átrio direito entre as duas cavas.",
    theme: "Coração"
  },
  {
    id: "coracao-28",
    question: "O sangue que sai do ventrículo direito em direção aos pulmões passa pela valva:",
    options: ["Mitral.", "Tricúspide.", "Pulmonar (semilunar).", "Aórtica."],
    correctAnswer: 2,
    explanation: "Do VD, o sangue passa pela valva semilunar pulmonar para o tronco pulmonar.",
    theme: "Coração"
  },
  {
    id: "coracao-29",
    question: "Na anatomia interna do átrio direito, a depressão semilunar no septo interatrial é a:",
    options: ["Crista terminal.", "Fossa oval.", "Óstio da veia cava superior.", "Aurícula direita."],
    correctAnswer: 1,
    explanation: "A fossa oval é a marca do forame oval fetal no septo interatrial.",
    theme: "Coração"
  },
  {
    id: "coracao-30",
    question: "O \"Vestíbulo da Aorta\" é uma região de parede lisa que leva à valva da aorta e localiza-se no:",
    options: ["Átrio esquerdo.", "Ventrículo direito.", "Ventrículo esquerdo.", "Tronco pulmonar."],
    correctAnswer: 2,
    explanation: "O vestíbulo da aorta é a via de saída lisa do VE.",
    theme: "Coração"
  },
  {
    id: "coracao-31",
    question: "A artéria que irriga o nó atrioventricular (AV) geralmente surge próximo à Crux Cordis e é ramo da:",
    options: ["Artéria coronária esquerda.", "Artéria coronária direita (na maioria dos casos).", "Artéria marginal anterior.", "Artéria carótida interna."],
    correctAnswer: 1,
    explanation: "Na dominância direita (85% das pessoas), a ACD supre o nó AV.",
    theme: "Coração"
  },
  {
    id: "coracao-32",
    question: "As fibras de Purkinje (ramos subendocárdicos) distribuem o impulso elétrico para:",
    options: ["Os átrios.", "O nó sinoatrial.", "As paredes dos ventrículos e músculos papilares.", "O esôfago."],
    correctAnswer: 2,
    explanation: "As fibras de Purkinje são os ramos subendocárdicos terminais nos ventrículos.",
    theme: "Coração"
  },
  {
    id: "coracao-33",
    question: "As valvas semilunares (aórtica e pulmonar) diferem das atrioventriculares por:",
    options: ["Possuírem cordas tendíneas mais resistentes.", "Não possuírem cordas tendíneas para sustentação.", "Serem formadas por apenas duas válvulas.", "Estarem localizadas na base dos átrios."],
    correctAnswer: 1,
    explanation: "Valvas semilunares não possuem cordas tendíneas; fecham por pressão de refluxo.",
    theme: "Coração"
  },
  {
    id: "coracao-34",
    question: "O tronco braquiocefálico venoso esquerdo é formado pela junção da:",
    options: ["Veia jugular interna esquerda e veia subclávia esquerda.", "Veia cava superior e veia cava inferior.", "Veia cardíaca magna e parva.", "Veia ázigos e veia hemiázigos."],
    correctAnswer: 0,
    explanation: "Junção da jugular interna e subclávia forma o tronco braquiocefálico venoso.",
    theme: "Coração"
  },
  {
    id: "coracao-35",
    question: "Na grande circulação (sistêmica), o sangue sai do ventrículo esquerdo e retorna ao:",
    options: ["Átrio esquerdo através das veias pulmonares.", "Átrio direito através das veias cavas.", "Pulmão para oxigenação.", "Ventrículo direito."],
    correctAnswer: 1,
    explanation: "A circulação sistêmica termina no AD, recebendo sangue venoso pelas cavas.",
    theme: "Coração"
  },
  {
    id: "coracao-36",
    question: "Qual câmara cardíaca apresenta a \"aurícula\" (orelha), uma bolsa muscular cônica que aumenta sua capacidade?",
    options: ["Apenas os ventrículos.", "Ambos os átrios (direito e esquerdo).", "Apenas o átrio direito.", "Apenas o ventrículo esquerdo."],
    correctAnswer: 1,
    explanation: "Ambos os átrios possuem aurículas (projeções musculares).",
    theme: "Coração"
  },
  {
    id: "coracao-37",
    question: "Os músculos papilares septais do ventrículo direito fixam cordas tendíneas nas válvulas:",
    options: ["Anterior e posterior da valva mitral.", "Anterior e septal da valva tricúspide.", "Semilunares da aorta.", "Pectíneas do átrio."],
    correctAnswer: 1,
    explanation: "O VD possui 3 músculos papilares que controlam as 3 válvulas da tricúspide.",
    theme: "Coração"
  },
  {
    id: "coracao-38",
    question: "O \"Cone Arterial\" (infundíbulo) é a via de saída do:",
    options: ["Átrio direito.", "Ventrículo direito para o tronco pulmonar.", "Ventrículo esquerdo para a aorta.", "Átrio esquerdo."],
    correctAnswer: 1,
    explanation: "O infundíbulo ou cone arterial é a parte superior lisa do VD.",
    theme: "Coração"
  },
  {
    id: "coracao-39",
    question: "A veia cardíaca parva drena as áreas supridas pela artéria coronária direita e drena para o:",
    options: ["Átrio esquerdo.", "Veia cava superior.", "Seio coronário (extremidade direita).", "Veia jugular."],
    correctAnswer: 2,
    explanation: "A veia cardíaca parva corre no sulco coronário e entra no seio coronário.",
    theme: "Coração"
  },
  {
    id: "coracao-40",
    question: "Assinale a alternativa que apresenta a sequência CORRETA do fluxo sanguíneo no coração:",
    options: ["AD -> Mitral -> VD -> Tronco Pulmonar.", "AE -> Tricúspide -> VE -> Aorta.", "AD -> Tricúspide -> VD -> Tronco Pulmonar -> Pulmão -> Veias Pulmonares -> AE -> Mitral -> VE -> Aorta.", "VCI -> AE -> Mitral -> VE -> Tronco Pulmonar."],
    correctAnswer: 2,
    explanation: "Caminho completo e correto da pequena e grande circulação.",
    theme: "Coração"
  }
];

// QUESTÕES DE VASCULARIZAÇÃO (20 questões)
const vascularizacao1: Question[] = [
  {
    id: "vasc-1",
    question: "Um paciente apresenta uma oclusão arterial no **tronco braquiocefálico**. Com base na origem das carótidas, qual vaso terá seu fluxo diretamente comprometido?",
    options: ["Artéria carótida comum esquerda.", "Artéria carótida comum direita.", "Artéria carótida interna esquerda.", "Artéria vertebral esquerda."],
    correctAnswer: 1,
    explanation: "O tronco braquiocefálico origina a carótida comum direita e a subclávia direita.",
    theme: "Vascularização"
  },
  {
    id: "vasc-2",
    question: "Durante uma tireoidectomia, o cirurgião deve ligar o **primeiro ramo** da artéria carótida externa. Assinale a alternativa que identifica corretamente esse vaso:",
    options: ["Artéria faríngea ascendente.", "Artéria lingual.", "Artéria tireoidea superior.", "Artéria facial."],
    correctAnswer: 2,
    explanation: "A tireoidea superior é o primeiro ramo da carótida externa.",
    theme: "Vascularização"
  },
  {
    id: "vasc-3",
    question: "Um paciente sofre um ferimento profundo na região do triângulo carotídeo. O médico observa uma lesão em um vaso que corre **medial ao músculo hioglosso**. Este vaso é a:",
    options: ["Artéria facial.", "Artéria lingual.", "Artéria maxilar.", "Artéria temporal superficial."],
    correctAnswer: 1,
    explanation: "A artéria lingual corre medialmente ao músculo hioglosso.",
    theme: "Vascularização"
  },
  {
    id: "vasc-4",
    question: "Sobre a **artéria lingual**, assinale a alternativa **INCORRETA**:",
    options: ["É cruzada lateralmente pelo nervo hipoglosso (NC XII).", "Origina-se da face anterior da carótida externa ao nível do osso hioide.", "Seu ramo terminal é a artéria profunda da língua.", "Situa-se lateralmente ao músculo hioglosso em todo o seu trajeto."],
    correctAnswer: 3,
    explanation: "A artéria lingual situa-se medialmente ao músculo hioglosso.",
    theme: "Vascularização"
  },
  {
    id: "vasc-5",
    question: "Ao realizar o exame físico de um paciente, o estudante de medicina busca palpar o pulso da **artéria facial**. O local anatômico correto para essa palpação é:",
    options: ["Imediatamente posterior ao músculo masseter, na margem inferior da mandíbula.", "Imediatamente anterior ao músculo masseter, na margem inferior da mandíbula.", "No ângulo da boca, superficial ao músculo zigomático maior.", "No forame infraorbital, abaixo da margem da órbita."],
    correctAnswer: 1,
    explanation: "A artéria facial é palpável na margem inferior da mandíbula, anterior ao masseter.",
    theme: "Vascularização"
  },
  {
    id: "vasc-6",
    question: "Um trauma na região do **assoalho da boca** atinge a artéria submental. Segundo as fontes, este vaso é ramo de qual artéria principal?",
    options: ["Artéria lingual.", "Artéria maxilar.", "Artéria facial.", "Artéria tireoidea superior."],
    correctAnswer: 2,
    explanation: "A artéria submental é ramo da artéria facial.",
    theme: "Vascularização"
  },
  {
    id: "vasc-7",
    question: "Um processo inflamatório grave no **saco lacrimal** e na pálpebra inferior envolve a irrigação da:",
    options: ["Artéria angular.", "Artéria labial superior.", "Artéria temporal medial.", "Artéria maxilar."],
    correctAnswer: 0,
    explanation: "A artéria angular (ramo terminal da facial) irriga o saco lacrimal e pálpebra inferior.",
    theme: "Vascularização"
  },
  {
    id: "vasc-8",
    question: "Paciente com sangramento nasal intenso (epistaxe) na região do **septo nasal**. Qual ramo da artéria facial é frequentemente responsável pela irrigação dessa área?",
    options: ["Artéria labial inferior.", "Ramo septal da artéria labial superior.", "Artéria submental.", "Artéria infraorbital."],
    correctAnswer: 1,
    explanation: "O ramo septal da labial superior irriga a parte anterior do septo nasal.",
    theme: "Vascularização"
  },
  {
    id: "vasc-9",
    question: "Uma fratura no **colo da mandíbula** pode lesionar a origem da artéria maxilar. Sobre esse vaso, assinale a alternativa **CORRETA**:",
    options: ["É o menor ramo terminal da carótida externa.", "Origina-se anteriormente ao colo da mandíbula.", "Divide-se em porções mandibular, pterigóidea e pterigopalatina.", "Irriga exclusivamente a musculatura superficial da face."],
    correctAnswer: 2,
    explanation: "A artéria maxilar divide-se em porções mandibular, pterigóidea e pterigopalatina.",
    theme: "Vascularização"
  },
  {
    id: "vasc-10",
    question: "Durante a mastigação, um paciente sente dor isquêmica no **músculo masseter**. Qual ramo da artéria maxilar provê a irrigação principal para este músculo?",
    options: ["Artéria infraorbital.", "Artéria esfenopalatina.", "Artéria massetérica.", "Artéria temporal profunda."],
    correctAnswer: 2,
    explanation: "A artéria massetérica irriga o músculo masseter.",
    theme: "Vascularização"
  }
];

const vascularizacao2: Question[] = [
  {
    id: "vasc-11",
    question: "Um ferimento perfurante que atinge o **forame infraorbital** pode comprometer a artéria infraorbital. Além da pálpebra inferior e bochecha, qual estrutura este vaso irriga?",
    options: ["Mucosa da nasofaringe.", "Seio maxilar e dentes (arcada dentária).", "Músculo temporal.", "Glândula tireoide."],
    correctAnswer: 1,
    explanation: "A artéria infraorbital irriga o seio maxilar e dentes superiores.",
    theme: "Vascularização"
  },
  {
    id: "vasc-12",
    question: "Em uma cirurgia para remoção de tumor na **nasofaringe**, o cirurgião deve ter cautela com a artéria:",
    options: ["Angular.", "Esfenopalatina.", "Facial transversa.", "Auricular posterior."],
    correctAnswer: 1,
    explanation: "A artéria esfenopalatina é o principal suprimento para a cavidade nasal e nasofaringe.",
    theme: "Vascularização"
  },
  {
    id: "vasc-13",
    question: "Assinale a alternativa que descreve corretamente a **artéria facial transversa**:",
    options: ["Origina-se da artéria facial e cruza o masseter.", "Origina-se da artéria temporal superficial dentro da glândula parótida.", "Corre superiormente ao arco zigomático.", "Irriga apenas os músculos intrínsecos da língua."],
    correctAnswer: 1,
    explanation: "A facial transversa nasce da temporal superficial na parótida.",
    theme: "Vascularização"
  },
  {
    id: "vasc-14",
    question: "Qual artéria é responsável pela irrigação do **couro cabeludo** na região frontal e temporal, sendo frequentemente utilizada para biópsias em casos de arterite?",
    options: ["Artéria maxilar.", "Artéria temporal superficial.", "Artéria occipital.", "Artéria auricular posterior."],
    correctAnswer: 1,
    explanation: "A temporal superficial irriga o couro cabeludo frontal e temporal.",
    theme: "Vascularização"
  },
  {
    id: "vasc-15",
    question: "A **veia jugular interna** inicia-se como continuação de qual seio venoso da duramáter?",
    options: ["Seio sagital superior.", "Seio cavernoso.", "Seio sigmoide.", "Seio reto."],
    correctAnswer: 2,
    explanation: "A jugular interna continua o seio sigmoide no forame jugular.",
    theme: "Vascularização"
  },
  {
    id: "vasc-16",
    question: "Sobre a **veia jugular externa**, assinale a alternativa CORRETA:",
    options: ["É formada pela união da veia auricular posterior com a veia retromandibular.", "Drena diretamente para a veia cava superior.", "Situa-se profundamente ao músculo esternocleidomastoideo.", "É a principal drenagem do encéfalo."],
    correctAnswer: 0,
    explanation: "A jugular externa forma-se pela união da auricular posterior e retromandibular.",
    theme: "Vascularização"
  },
  {
    id: "vasc-17",
    question: "Um cateterismo da **veia subclávia** é realizado frequentemente. Anatomicalmente, esta veia é a continuação de qual vaso?",
    options: ["Veia braquiocefálica.", "Veia axilar.", "Veia jugular interna.", "Veia cefálica."],
    correctAnswer: 1,
    explanation: "A veia subclávia é a continuação da veia axilar.",
    theme: "Vascularização"
  },
  {
    id: "vasc-18",
    question: "A união da **veia jugular interna** com a **veia subclávia** forma qual estrutura venosa?",
    options: ["Veia cava superior.", "Veia braquiocefálica.", "Veia ázigos.", "Veia retromandibular."],
    correctAnswer: 1,
    explanation: "A união da jugular interna e subclávia forma a veia braquiocefálica.",
    theme: "Vascularização"
  },
  {
    id: "vasc-19",
    question: "Qual vaso venoso é frequentemente utilizado para acesso venoso central devido ao seu trajeto retilíneo em direção ao átrio direito?",
    options: ["Veia jugular externa.", "Veia jugular interna.", "Veia facial.", "Veia tireoidea superior."],
    correctAnswer: 1,
    explanation: "A jugular interna é preferida para acesso central pelo trajeto direto.",
    theme: "Vascularização"
  },
  {
    id: "vasc-20",
    question: "Qual é a principal função da **artéria carótida externa**?",
    options: ["Irrigar o encéfalo.", "Irrigar o viscerocrânio (face).", "Irrigar o neurocrânio.", "Irrigar a medula espinal."],
    correctAnswer: 1,
    explanation: "A carótida externa é a principal fonte para o viscerocrânio (face).",
    theme: "Vascularização"
  }
];

// Embaralhar as questões de Vascularização
const vascularizacaoShuffled = shuffleArray([...vascularizacao1, ...vascularizacao2]);

// QUESTÕES DE CAVIDADE ORAL (30 questões)
const cavidadeOralQuestions: Question[] = [
  {
    id: "oral-1",
    question: "Durante um exame físico de rotina, um médico observa a saída de saliva na região do vestíbulo da boca, oposta ao segundo molar superior. Qual estrutura está sendo avaliada?",
    options: ["Óstio do ducto sublingual.", "Óstio do ducto submandibular.", "Óstio do ducto parotídeo.", "Carúncula sublingual."],
    correctAnswer: 2,
    explanation: "O ducto parotídeo (de Stensen) abre-se no vestíbulo oral no nível do 2º molar superior.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-2",
    question: "Um paciente de 25 anos sofre uma laceração profunda na bochecha. O cirurgião precisa identificar o principal músculo que forma a parede móvel dessa região. Assinale a alternativa CORRETA:",
    options: ["Músculo masseter.", "Músculo bucinador.", "Músculo orbicular da boca.", "Músculo milo-hioideo."],
    correctAnswer: 1,
    explanation: "As bochechas têm como principal componente muscular os bucinadores.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-3",
    question: "Uma criança de 5 anos apresenta \"língua presa\", o que dificulta a fala. O médico diagnostica anquiloglossia. Qual estrutura anatômica está excessivamente curta ou fixada anteriormente nesse caso?",
    options: ["Prega sublingual.", "Frênulo labial inferior.", "Sulco terminal da língua.", "Frênulo da língua."],
    correctAnswer: 3,
    explanation: "O frênulo da língua fixa a língua ao assoalho; sua brevidade causa a língua presa.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-4",
    question: "Durante uma cirurgia de remoção de um tumor no palato duro, ocorre um sangramento arterial intenso. Sabendo que o palato duro é formado pelos processos palatinos da maxila e lâminas horizontais do palatino, qual artéria é a principal responsável pela sua irrigação?",
    options: ["Artéria palatina menor.", "Artéria palatina maior.", "Artéria palatina ascendente.", "Artéria lingual profunda."],
    correctAnswer: 1,
    explanation: "A artéria palatina maior (ramo da a. maxilar) irriga o palato duro através do forame palatino maior.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-5",
    question: "Um paciente apresenta perda da sensibilidade especial (paladar) nos 2/3 anteriores da língua, mas a sensibilidade geral (tato e temperatura) está preservada. Qual nervo foi especificamente lesionado?",
    options: ["Nervo lingual (ramo do V3).", "Nervo corda do tímpano (ramo do VII).", "Nervo glossofaríngeo (IX).", "Nervo hipoglosso (XII)."],
    correctAnswer: 1,
    explanation: "A sensibilidade especial (paladar) dos 2/3 anteriores é levada pelo nervo corda do tímpano (VII).",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-6",
    question: "Assinale a alternativa INCORRETA sobre os limites da cavidade oral:",
    options: ["O limite anterior é formado pelos lábios.", "O assoalho é constituído pelos músculos milo-hioideo e gênio-hioideo.", "O limite posterior é o istmo das fauces.", "O teto é formado exclusivamente pelo palato mole."],
    correctAnswer: 3,
    explanation: "O teto (limite superior) é formado pelo palato (duro e mole).",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-7",
    question: "Um paciente apresenta disfagia (dificuldade de deglutição). O médico observa que o palato mole não se eleva adequadamente para ocluir a nasofaringe. Qual músculo, inervado pelo nervo mandibular (V3), é responsável por tensionar o palato mole?",
    options: ["Músculo levantador do véu palatino.", "Músculo da úvula.", "Músculo tensor do véu palatino.", "Músculo palatoglosso."],
    correctAnswer: 2,
    explanation: "O músculo tensor do véu palatino é inervado pelo V3 e tensiona o palato mole.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-8",
    question: "Durante a inspeção do dorso da língua, um estudante de medicina identifica papilas organizadas em formato de \"V\" imediatamente anteriores ao sulco terminal. Estas estruturas são as:",
    options: ["Papilas filiformes.", "Papilas fungiformes.", "Papilas folhadas.", "Papilas circunvaladas."],
    correctAnswer: 3,
    explanation: "As papilas circunvaladas estão organizadas em V anterior ao sulco terminal.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-9",
    question: "Um paciente com sialolitiase (cálculo salivar) apresenta dor e inchaço no assoalho da boca. O cálculo está obstruindo o ducto submandibular. Onde este ducto se abre na cavidade oral?",
    options: ["Na papila do ducto parotídeo.", "No forame cego da língua.", "Na carúncula sublingual, ao lado da base do frênulo da língua.", "Ao longo das pregas palatinas transversas."],
    correctAnswer: 2,
    explanation: "O ducto submandibular abre-se na carúncula sublingual.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-10",
    question: "Qual músculo extrínseco da língua é o principal responsável por protrair (colocar para fora) o órgão, e qual nervo o inerva?",
    options: ["Músculo estiloglosso – Nervo Glossofaríngeo (IX).", "Músculo genioglosso – Nervo Hipoglosso (XII).", "Músculo hioglosso – Nervo Vago (X).", "Músculo palatoglosso – Nervo Facial (VII)."],
    correctAnswer: 1,
    explanation: "O genioglosso protrai a língua e é inervado pelo nervo hipoglosso (XII).",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-11",
    question: "Em uma emergência, um paciente apresenta sangramento na base da língua (1/3 posterior). Qual nervo é responsável tanto pela sensibilidade geral quanto pela especial (paladar) nesta região específica?",
    options: ["Nervo lingual.", "Nervo glossofaríngeo (IX).", "Nervo vago (X).", "Nervo facial (VII)."],
    correctAnswer: 1,
    explanation: "O nervo glossofaríngeo (IX) fornece sensibilidade geral e especial ao 1/3 posterior da língua.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-12",
    question: "Assinale a alternativa CORRETA sobre as glândulas salivares:",
    options: ["A glândula parótida é a menor das glândulas maiores.", "A glândula sublingual situa-se entre a mandíbula e o músculo genioglosso.", "A glândula submandibular secreta saliva exclusivamente mucosa.", "O ducto parotídeo atravessa o músculo masseter para entrar na boca."],
    correctAnswer: 1,
    explanation: "A glândula sublingual situa-se entre a mandíbula e o músculo genioglosso.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-13",
    question: "Um paciente não consegue \"enrolar\" a língua ou alterar seu formato para realizar movimentos finos durante a deglutição, embora consiga movê-la para fora e para dentro. Quais muscles estão provavelmente comprometidos?",
    options: ["Músculos extrínsecos da língua.", "Músculo orbicular da boca.", "Músculos intrínsecos da língua.", "Músculos do diafragma oral."],
    correctAnswer: 2,
    explanation: "Os muscles intrínsecos controlam a forma e os movimentos finos da língua.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-14",
    question: "Sobre a irrigação e drenagem da língua, é correto afirmar que:",
    options: ["A irrigação provém de ramos da artéria carótida interna.", "A drenagem venosa é feita por tributárias da veia jugular interna.", "A artéria sublingual é um ramo da artéria maxilar.", "A artéria profunda da língua supre apenas a raiz da língua."],
    correctAnswer: 1,
    explanation: "A drenagem venosa da língua é feita por tributárias da veia jugular interna.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-15",
    question: "Um paciente apresenta inflamação na gengiva inserida. De acordo com as características anatômicas normais desta região descritas nas fontes, espera-se encontrar um tecido:",
    options: ["Vermelho-brilhante e não queratinizado.", "Róseo, pontilhado e queratinizado.", "Móvel e não aderido ao periósteo.", "Localizado acima da linha de oclusão."],
    correctAnswer: 1,
    explanation: "A gengiva inserida é rósea, pontilhada e queratinizada.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-16",
    question: "Qual estrutura anatômica é considerada o remanescente inativo do ducto tireoglosso embrionário?",
    options: ["Sulco mediano.", "Forame cego.", "Úvula.", "Sulco terminal."],
    correctAnswer: 1,
    explanation: "O forame cego é o remanescente inativo do ducto tireoglosso embrionário.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-17",
    question: "Assinale a alternativa INCORRETA sobre os músculos do palato mole:",
    options: ["O músculo palatofaringeu traciona as paredes da faringe durante a deglutição.", "O músculo da úvula encurta a úvula e a traciona superiormente.", "O músculo palatoglosso eleva a parte posterior da língua.", "Todos os músculos do palato mole são inervados pelo nervo trigêmeo (V)."],
    correctAnswer: 3,
    explanation: "Nem todos os músculos do palato mole são inervados pelo V; alguns são inervados pelo X (vago).",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-18",
    question: "Um paciente apresenta um abscesso no espaço retromolar. Anatomicamente, este espaço é importante porque comunica:",
    options: ["O vestíbulo da boca com a cavidade oral própria.", "A cavidade oral com a nasofaringe.", "O palato duro com o palato mole.", "A região parotídea com a fossa infratemporal."],
    correctAnswer: 0,
    explanation: "O espaço retromolar comunica o vestíbulo da boca com a cavidade oral própria.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-19",
    question: "Durante um procedimento odontológico, o profissional precisa anestesiar o nervo que supre a mucosa da parte anterior do palato duro. Qual nervo deve ser o alvo?",
    options: ["Nervo palatino maior.", "Nervo nasopalatino.", "Nervo palatino menor.", "Nervo alveolar superior."],
    correctAnswer: 0,
    explanation: "O nervo palatino maior supre a mucosa da parte anterior do palato duro.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-20",
    question: "Qual músculo forma o \"diafragma oral\" ou assoalho da boca, separando a cavidade oral das estruturas cervicais inferiores?",
    options: ["Músculo genioglosso.", "Músculo milo-hioideo.", "Músculo estilohioideo.", "Músculo digástrico."],
    correctAnswer: 1,
    explanation: "O músculo milo-hioideo forma o diafragma oral ou assoalho da boca.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-21",
    question: "Assinale a alternativa que descreve corretamente a função das rugas palatinas (pregas transversais):",
    options: ["Proteção contra o refluxo alimentar nasofaríngeo.", "Auxílio na manipulação do alimento durante a mastigação.", "Secretar saliva serosa no palato duro.", "Fixação do músculo tensor do véu palatino."],
    correctAnswer: 1,
    explanation: "As rugas palatinas auxiliam na manipulação do alimento durante a mastigação.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-22",
    question: "Um paciente apresenta uma lesão que afeta o nervo hipoglosso (XII). Qual sinal clínico seria esperado na avaliação da língua?",
    options: ["Perda de paladar no ápice da língua.", "Perda de sensibilidade tátil no dorso da língua.", "Desvio da língua para o lado lesionado ao protraí-la.", "Incapacidade de sentir o amargo nas papilas valadas."],
    correctAnswer: 2,
    explanation: "Lesão do XII causa desvio da língua para o lado lesionado ao protraí-la.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-23",
    question: "O istmo das fauces (ou da garganta) é o limite posterior da cavidade oral. Quais estruturas formam seus pilares laterais?",
    options: ["Pregas sublinguais.", "Arcos palatoglosso e palatofaríngeo.", "Músculos bucinadores.", "Tonsila lingual e palatina."],
    correctAnswer: 1,
    explanation: "Os arcos palatoglosso e palatofaríngeo formam os pilares do istmo das fauces.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-24",
    question: "Qual glândula salivar maior possui o ducto mais longo, que contorna a margem posterior do músculo milo-hioideo?",
    options: ["Glândula parótida.", "Glândula sublingual.", "Glândula submandibular.", "Glândulas palatinas."],
    correctAnswer: 2,
    explanation: "A glândula submandibular possui o ducto que contorna o milo-hioideo.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-25",
    question: "Sobre a inervação da gengiva, é correto afirmar que a gengiva lingual dos dentes incisivos inferiores é suprida pelo:",
    options: ["Nervo bucal.", "Nervo lingual.", "Nervo mentoniano.", "Nervo alveolar superior posterior."],
    correctAnswer: 1,
    explanation: "O nervo lingual supre a gengiva lingual dos dentes inferiores.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-26",
    question: "Um paciente apresenta xerostomia (boca seca) devido à redução da secreção da glândula parótida. Qual nervo carrega as fibras parassimpáticas pré-ganglionares para esta glândula?",
    options: ["Nervo facial (VII).", "Nervo glossofaríngeo (IX).", "Nervo vago (X).", "Nervo trigêmeo (V)."],
    correctAnswer: 1,
    explanation: "O nervo glossofaríngeo (IX) provê a inervação parassimpática da parótida.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-27",
    question: "Qual estrutura separa o dorso da língua em corpo (2/3 anteriores) e raiz (1/3 posterior)?",
    options: ["Frênulo da língua.", "Sulco terminal.", "Pregas fimbriadas.", "Septo lingual."],
    correctAnswer: 1,
    explanation: "O sulco terminal separa o corpo da raiz da língua.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-28",
    question: "As tonsilas palatinas (amígdalas) estão localizadas em qual espaço anatômico?",
    options: ["Fossa tonsilar, entre os arcos palatoglosso e palatofaríngeo.", "Vestíbulo da boca.", "Recesso piriforme.", "Espaço sublingual."],
    correctAnswer: 0,
    explanation: "As tonsilas palatinas ficam na fossa tonsilar entre os arcos do palato.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-29",
    question: "Qual músculo do palato mole é o único inervado pelo nervo mandibular (V3), enquanto os demais são inervados pelo plexo faríngeo (nervo vago)?",
    options: ["Músculo levantador do véu palatino.", "Músculo tensor do véu palatino.", "Músculo palatofaríngeo.", "Músculo da úvula."],
    correctAnswer: 1,
    explanation: "O tensor do véu palatino é o único inervado pelo V3.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-30",
    question: "Durante a deglutição, qual estrutura impede que o alimento entre na cavidade nasal?",
    options: ["Língua.", "Epiglote.", "Palato mole (véu palatino).", "Músculo bucinador."],
    correctAnswer: 2,
    explanation: "O palato mole eleva-se para fechar a comunicação com a nasofaringe.",
    theme: "Cavidade Oral"
  }
];

// QUESTÕES DE ORELHA E OLHO (40 questões)
const cavidadeNasalQuestions: Question[] = [
  {
    "id": "cavidade-nasal-1",
    "question": "Um paciente apresenta uma fratura na base do crânio que compromete a **lâmina crivosa do osso etmoide**. Além do risco de fístula liquórica, qual déficit sensorial é esperado devido à localização das fibras nervosas nessa região?",
    "options": [
      "Perda da sensibilidade tátil da face.",
      "Anosmia.",
      "Perda da gustação no terço posterior da língua.",
      "Diminuição da secreção lacrimal."
    ],
    "correctAnswer": 1,
    "explanation": "A lâmina crivosa contém os forames por onde passam os filetes do nervo olfatório (I par).",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-2",
    "question": "Durante um exame físico, o médico observa a pirâmide nasal de um paciente. Sobre a constituição do **nariz externo**, assinale a alternativa **CORRETA**:",
    "options": [
      "O ápice do nariz é formado pelos ossos nasais.",
      "A parte óssea corresponde aos 2/3 inferiores do nariz.",
      "O terço superioré formado pelos ossos nasais e processos frontais da maxila.",
      "As cartilagens alares menores são as principais responsáveis pelo formato da ponta do nariz."
    ],
    "correctAnswer": 2,
    "explanation": "O dorso é ósseo (ossos nasais e maxila), enquanto a ponta é cartilaginosa.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-3",
    "question": "Um estudante de medicina descreve as paredes da cavidade nasal. Ao falar sobre o **assoalho**, quais estruturas ele deve citar obrigatoriamente?",
    "options": [
      "Lâmina crivosa e osso esfenóide.",
      "Processo palatino da maxila e lâmina horizontal do osso palatino.",
      "Vômer e cartilagem septal.",
      "Concha nasal inferior e osso lacrimal."
    ],
    "correctAnswer": 1,
    "explanation": "O assoalho é formado pelos processos palatinos das maxilas e lâminas horizontais dos palatinos.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-4",
    "question": "Um paciente apresenta um sangramento nasal persistente na região do septo anterior (**Área de Kiesselbach**). Sobre a **parede medial** da cavidade nasal, é correto afirmar que:",
    "options": [
      "É puramente óssea, formada pelo vômer e osso etmoide.",
      "É formada pela cartilagem do septo, lâmina perpendicular do etmoide e pelo vômer.",
      "Não possui suprimento vascular importante.",
      "Separa a cavidade nasal do seio maxilar."
    ],
    "correctAnswer": 1,
    "explanation": "O septo é osteocartilaginoso (cartilagem septal + lâmina perpendicular do etmoide + vômer).",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-5",
    "question": "Sobre as **conchas nasais**, assinale a alternativa que apresenta uma classificação **INCORRETA** quanto à origem óssea:",
    "options": [
      "Concha nasal superior: acidente do osso etmoide.",
      "Concha nasal média: acidente do osso etmoide.",
      "Concha nasal inferior: osso par independente do viscerocrânio.",
      "Concha nasal média: osso par independente do neurocrânio."
    ],
    "correctAnswer": 3,
    "explanation": "As conchas superior e média são acidentes do etmoide; a inferior é um osso independente.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-6",
    "question": "Uma criança chega ao consultório com queixa de lacrimejamento constante em apenas um olho após um trauma nasal. O médico suspeita de obstrução da drenagem da lágrima. Qual estrutura da cavidade nasal recebe o **ducto nasolacrimal**?",
    "options": [
      "Meato nasal médio.",
      "Meato nasal superior.",
      "Meato nasal inferior.",
      "Recesso esfenoetmoidal."
    ],
    "correctAnswer": 2,
    "explanation": "O ducto nasolacrimal drena para o meato nasal inferior.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-7",
    "question": "Um paciente com sinusite frontal crônica apresenta obstrução no seu local de drenagem principal. De acordo com a anatomia, o **seio frontal** drena para o:",
    "options": [
      "Meato nasal médio, via infundíbulo.",
      "Recesso esfenoetmoidal.",
      "Meato nasal superior.",
      "Átrio do meato médio."
    ],
    "correctAnswer": 0,
    "explanation": "O seio frontal drena para o meato médio via ducto nasofrontal/infundíbulo.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-8",
    "question": "Assinale a alternativa **CORRETA** sobre o **seio esfenoidal**:",
    "options": [
      "É o maior dos seios paranasais.",
      "Localiza-se anteriormente ao seio frontal.",
      "Sua drenagem ocorre diretamente no meato nasal inferior.",
      "Localiza-se no corpo do osso esfenóide, posteriormente à cavidade nasal."
    ],
    "correctAnswer": 3,
    "explanation": "O seio esfenoidal está no corpo do osso esfenóide, sendo o mais posterior.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-9",
    "question": "Em uma **rinoscopia posterior**, o examinador visualiza a comunicação da cavidade nasal com a nasofaringe. Essa abertura é denominada:",
    "options": [
      "Narina.",
      "Coana.",
      "Istmo das fauces.",
      "Ádito da laringe."
    ],
    "correctAnswer": 1,
    "explanation": "As coanas são as comunicações posteriores com a faringe.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-10",
    "question": "Qual estrutura anatômica é responsável por marcar o limite entre o nariz externo e a cavidade nasal propriamente dita, localizada logo após o vestíbulo?",
    "options": [
      "Coana.",
      "Limiar do nariz.",
      "Meato médio.",
      "Septo ósseo."
    ],
    "correctAnswer": 1,
    "explanation": "O limiar do nariz divide o vestíbulo da cavidade nasal propriamente dita.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-11",
    "question": "Sobre o **seio maxilar**, é **INCORRETO** afirmar:",
    "options": [
      "É o maior dos seios paranasais.",
      "Sua drenagem principal ocorre no meato nasal médio.",
      "Localiza-se superiormente à órbita.",
      "Possui íntima relação com as raízes dos dentes molares superiores."
    ],
    "correctAnswer": 2,
    "explanation": "O seio maxilar localiza-se *inferiormente* à órbita.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-12",
    "question": "Um paciente apresenta quadro de epistaxe intensa e o médico decide realizar um **tamponamento posterior**. Onde o tampão deve ser fixado para interromper o fluxo sanguíneo nessa região?",
    "options": [
      "Na narina.",
      "No vestíbulo nasal.",
      "Na coana.",
      "No meato inferior."
    ],
    "correctAnswer": 2,
    "explanation": "O tamponamento posterior é feito na região das coanas.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-13",
    "question": "A parede lateral da cavidade nasal é caracterizada pela presença de conchas e meatos. Qual seio paranasal drena especificamente para o **meato nasal superior**?",
    "options": [
      "Seio frontal.",
      "Seio maxilar.",
      "Células etmoidais posteriores.",
      "Seio esfenoidal."
    ],
    "correctAnswer": 2,
    "explanation": "O meato superior recebe as células etmoidais posteriores.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-14",
    "question": "O **teto da cavidade nasal** é uma estrutura complexa dividida em três partes. Quais são elas?",
    "options": [
      "Maxilar, palatina e lacrimal.",
      "Frontonasal, etmoidal e esfenoidal.",
      "Anterior, média e posterior.",
      "Cartilaginosa, óssea e mucosa."
    ],
    "correctAnswer": 1,
    "explanation": "O teto é dividido em partes frontonasal, etmoidal e esfenoidal.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-15",
    "question": "Durante uma cirurgia de acesso hipofisário, o cirurgião utiliza a cavidade nasal para atingir a sela turca. Qual seio paranasal deve ser atravessado para acessar essa região?",
    "options": [
      "Seio Maxilar.",
      "Seio Etmoidal.",
      "Seio Esfenoidal.",
      "Seio Frontal."
    ],
    "correctAnswer": 2,
    "explanation": "O seio esfenoidal está logo abaixo da sela turca (hipófise).",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-16",
    "question": "Considere as funções da mucosa nasal. A região responsável pela **percepção de odores** está localizada em qual porção da cavidade nasal?",
    "options": [
      "No assoalho nasal.",
      "Na mucosa respiratória do meato inferior.",
      "No teto e porção superior da cavidade.",
      "Exclusivamente no vestíbulo nasal."
    ],
    "correctAnswer": 2,
    "explanation": "A mucosa olfatória está no teto e concha superior.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-17",
    "question": "Sobre a vascularização, qual artéria é um ramo da **Artéria Carótida Externa** que contribui para o suprimento da face e nariz?",
    "options": [
      "Artéria Oftálmica.",
      "Artéria Facial.",
      "Artéria Cerebral Anterior.",
      "Artéria Tireóidea Inferior."
    ],
    "correctAnswer": 1,
    "explanation": "A artéria facial é ramo da carótida externa e irriga o nariz externo.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-18",
    "question": "O **meato nasal médio** recebe a drenagem de diversas estruturas. Assinale a alternativa que contém apenas estruturas que drenam para este meato:",
    "options": [
      "Ducto nasolacrimal e seio esfenoidal.",
      "Seio frontal e seio maxilar.",
      "Seios etmoidais posteriores e seio frontal.",
      "Ducto nasolacrimal e seio frontal."
    ],
    "correctAnswer": 1,
    "explanation": "Frontal e maxilar drenam para o meato médio.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-19",
    "question": "A estrutura que separa a cavidade nasal da cavidade oral é o **palato**. Anatomicamente, o palato duro constitui:",
    "options": [
      "O teto da cavidade nasal.",
      "O assoalho da cavidade nasal.",
      "A parede lateral da cavidade nasal.",
      "O septo nasal."
    ],
    "correctAnswer": 1,
    "explanation": "O palato separa a boca do nariz, sendo o assoalho deste último.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-20",
    "question": "As **vibrissas** (pelos do nariz) têm função de filtro mecânico. Em qual região do nariz elas são encontradas?",
    "options": [
      "Meato médio.",
      "Coanas.",
      "Vestíbulo nasal.",
      "Recesso esfenoetmoidal."
    ],
    "correctAnswer": 2,
    "explanation": "As vibrissas estão na entrada do nariz (vestíbulo).",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-21",
    "question": "Sobre os **seios paranasais**, assinale a alternativa que define corretamente sua natureza:",
    "options": [
      "São cavidades sólidas preenchidas por medula óssea.",
      "São cavidades pneumáticas revestidas por mucosa que se comunicam com a cavidade nasal.",
      "São órgãos linfóides responsáveis pela produção de anticorpos.",
      "São espaços preenchidos por líquido cefalorraquidiano."
    ],
    "correctAnswer": 1,
    "explanation": "São cavidades pneumáticas no interior de ossos do crânio.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-22",
    "question": "Um desvio de septo nasal acentuado pode dificultar a respiração e forçar a respiração bucal. O **septo nasal** divide a cavidade em:",
    "options": [
      "Meatos superior e inferior.",
      "Metades direita e esquerda.",
      "Nariz externo e interno.",
      "Cavidade nasal e nasofaringe."
    ],
    "correctAnswer": 1,
    "explanation": "O septo é a parede medial que divide a cavidade em duas metades.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-23",
    "question": "O **recesso esfenoetmoidal** é uma pequena fenda situada acima da concha superior. Qual estrutura drena para este local?",
    "options": [
      "Seio frontal.",
      "Seio maxilar.",
      "Seio esfenoidal.",
      "Ducto nasolacrimal."
    ],
    "correctAnswer": 2,
    "explanation": "O óstio do seio esfenoidal abre-se no recesso esfenoetmoidal.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-24",
    "question": "Qual osso do viscerocrânio contribui para a formação da parte posterior e inferior do **septo nasal**?",
    "options": [
      "Etmoide.",
      "Vômer.",
      "Maxila.",
      "Palatino."
    ],
    "correctAnswer": 1,
    "explanation": "O vômer forma a porção postero-inferior do septo.",
    "theme": "Cavidade Nasal"
  },
  {
    "id": "cavidade-nasal-25",
    "question": "Em um exame de imagem (Radiografia de Waters), observa-se um velamento no seio paranasal localizado abaixo da órbita. Este é o:",
    "options": [
      "Seio frontal.",
      "Seio maxilar.",
      "Seio esfenoidal.",
      "Seio etmoidal."
    ],
    "correctAnswer": 1,
    "explanation": "O seio maxilar situa-se no corpo da maxila, abaixo da órbita.",
    "theme": "Cavidade Nasal"
  }
];

export const quizzes = [
  {
    id: "cavidade-nasal",
    title: "Cavidade Nasal",
    description: "Anatomia do nariz e cavidade nasal",
    emoji: "👃",
    questions: cavidadeNasalQuestions
  },

  {
    id: "coracao",
    title: "Coração",
    description: "Anatomia do coração e grandes vasos",
    emoji: "❤️",
    questions: coracaoQuestions
  },
  {
    id: "torax",
    title: "Tórax",
    description: "Mediastino, Pulmões, Pleuras e Vascularização",
    emoji: "🫁",
    questions: toraxQuestions
  },
  {
    id: "vascularizacao",
    title: "Vascularização",
    description: "Vascularização do viscerocrânio e pescoço",
    emoji: "🩸",
    questions: vascularizacaoShuffled
  },
  {
    id: "cavidade-oral",
    title: "Cavidade Oral",
    description: "Anatomia da boca, língua e glândulas salivares",
    emoji: "👄",
    questions: cavidadeOralQuestions
  },
  {
    id: "orelha",
    title: "Orelha",
    description: "Anatomia da orelha externa, média e interna",
    emoji: "👂",
    questions: [
      {
        id: "orelha-1",
        question: "Durante um exame físico, um médico aplica pressão na pequena projeção cartilaginosa situada à frente da abertura do meato acústico externo. O paciente relata dor aguda, sugerindo uma inflamação externa. Qual estrutura foi pressionada e para qual diagnóstico esse sinal é indicativo?",
        options: ['Lóbulo; otite média.', 'Trago; otite externa.', 'Hélice; labirintite.', 'Antirramo da hélice; plenitude auricular.'],
        correctAnswer: 1,
        explanation: "O trago é a saliência à frente do meato; dor à pressão (sinal do trago) indica otite externa [1-3].",
        theme: "Orelha"
      },
      {
        id: "orelha-2",
        question: "Um paciente idoso queixa-se de perda auditiva progressiva. O médico nota que o paciente tende a virar um lado específico da cabeça para captar melhor os sons. Anatomicamente, qual estrutura funciona como esse receptor primário de ondas sonoras?",
        options: ['Membrana timpânica.', 'Pavilhão auricular (ou aurícula).', 'Meato acústico interno.', 'Janela oval.'],
        correctAnswer: 1,
        explanation: "O pavilhão auricular capta e direciona as ondas sonoras para o meato [3-5].",
        theme: "Orelha"
      },
      {
        id: "orelha-3",
        question: "Um estudante de medicina observa uma otoscopia e identifica o conduto que leva o som até o tímpano. Sobre o meato acústico externo, qual a proporção correta entre suas partes cartilaginosa e óssea?",
        options: ['Todo o meato é puramente cartilaginoso.', 'Dois terços iniciais são cartilaginosos e o terço final é ósseo.', 'Um terço inicial é cartilaginoso e os dois terços internos são ósseos.', 'Metade é cartilagem e metade é osso temporal.'],
        correctAnswer: 2,
        explanation: "O meato acústico externo tem o terço lateral cartilagíneo e os dois terços mediais ósseos [3, 6].",
        theme: "Orelha"
      },
      {
        id: "orelha-4",
        question: "Um paciente apresenta uma \"rolha de cerume\" que está impedindo a condução do som. O médico explica que essa cera é produzida por glândulas específicas. Onde essas glândulas estão localizadas?",
        options: ['Na cavidade timpânica.', 'No meato acústico externo.', 'No recesso epitimpânico.', 'Na tuba auditiva.'],
        correctAnswer: 1,
        explanation: "Glândulas ceruminosas e sebáceas no meato acústico externo produziram o cerume [3, 5, 7].",
        theme: "Orelha"
      },
      {
        id: "orelha-5",
        question: "Durante uma cirurgia, o especialista precisa identificar o limite exato que divide a orelha externa da orelha média. Qual estrutura anatômica define esse limite?",
        options: ['Tuba auditiva.', 'Janela redonda.', 'Membrana timpânica.', 'Promontório.'],
        correctAnswer: 2,
        explanation: "A membrana timpânica é o limite físico entre a orelha externa e a média [3, 5, 8].",
        theme: "Orelha"
      },
      {
        id: "orelha-6",
        question: "Uma criança é levada ao posto de saúde para coleta de sangue capilar para teste de glicemia, e a enfermeira utiliza a região inferior da aurícula. Por que essa região é escolhida anatomicamente?",
        options: ['Por ser composta puramente por osso denso.', 'Pelo lóbulo ser altamente vascularizado e desprovido de cartilagem.', 'Por ser a entrada para o labirinto ósseo.', 'Por conter os ossículos da audição.'],
        correctAnswer: 1,
        explanation: "O lóbulo é vascularizado e não possui cartilagem, sendo ideal para coletas rápidas [1, 3].",
        theme: "Orelha"
      },
      {
        id: "orelha-7",
        question: "Ao realizar uma otoscopia, o médico visualiza a membrana timpânica. Sobre sua constituição, assinale a alternativa CORRETA:",
        options: ['É recoberta apenas por mucosa em ambos os lados.', 'É composta por tecido ósseo da porção petrosa.', 'É recoberta por pele externamente e por mucosa internamente.', 'É uma estrutura puramente muscular inervada pelo nervo vago.'],
        correctAnswer: 2,
        explanation: "O tímpano tem revestimento cutâneo externo e mucoso interno [3, 4, 7].",
        theme: "Orelha"
      },
      {
        id: "orelha-8",
        question: "Um mergulhador sente uma sensação de \"ouvido entupido\" (plenitude auricular) ao descer a grandes profundidades. Ele realiza a manobra de Valsalva para equilibrar a pressão. Qual estrutura anatômica permite esse equilíbrio pressórico?",
        options: ['Meato acústico externo.', 'Canais semicirculares.', 'Tuba auditiva.', 'Ducto coclear.'],
        correctAnswer: 2,
        explanation: "A tuba auditiva equaliza a pressão da orelha média com a atmosférica [1, 3, 4, 9].",
        theme: "Orelha"
      },
      {
        id: "orelha-9",
        question: "Na orelha média, uma onda sonora de alta amplitude deve ser convertida para proteger as estruturas internas. Qual a função primordial do conjunto tímpano-ossículos descrita nos materiais?",
        options: ['Transformar sinais mecânicos em elétricos.', 'Captar ondas eletromagnéticas.', 'Transformar uma onda de alta amplitude em baixa amplitude.', 'Produzir endolinfa para o vestíbulo.'],
        correctAnswer: 2,
        explanation: "A orelha média modula o som, transformando alta em baixa amplitude [3-5, 9].",
        theme: "Orelha"
      },
      {
        id: "orelha-10",
        question: "Um paciente sofre um trauma na face lateral do crânio. O médico explica que o esqueleto que sustenta a orelha está em um osso específico. Em quais porções deste osso situam-se essas estruturas?",
        options: ['Porções escamosa e mastóidea do osso parietal.', 'Porções timpânica e petrosa do osso temporal.', 'Asa maior e menor do osso esfenoide.', 'Processo zigomático do osso frontal.'],
        correctAnswer: 1,
        explanation: "As estruturas da orelha estão nas porções timpânica e petrosa do osso temporal [3, 4, 10].",
        theme: "Orelha"
      },
      {
        id: "orelha-11",
        question: "Um cirurgião acessa a cavidade timpânica e identifica os três menores ossos do corpo humano. Qual a sequência correta de transmissão da vibração desde o tímpano até a orelha interna?",
        options: ['Estribo → Bigorna → Martelo.', 'Martelo → Bigorna → Estribo.', 'Bigorna → Martelo → Estribo.', 'Martelo → Estribo → Bigorna.'],
        correctAnswer: 1,
        explanation: "A sequência é Martelo (no tímpano), Bigorna (intermediário) e Estribo (na janela oval) [4, 10, 11].",
        theme: "Orelha"
      },
      {
        id: "orelha-12",
        question: "A tuba auditiva é um canal vital para a fisiologia da orelha média. Anatomicamente, ela conecta a cavidade timpânica a qual outra região?",
        options: ['Meato acústico externo.', 'Orofaringe.', 'Nasofaringe (faringe superior).', 'Seio maxilar.'],
        correctAnswer: 2,
        explanation: "A tuba auditiva liga a orelha média à nasofaringe (faringe superior) [3, 4, 10].",
        theme: "Orelha"
      },
      {
        id: "orelha-13",
        question: "Um paciente apresenta hiperacusia (sensibilidade excessiva a sons) devido à paralisia de um músculo que ancora o estribo. Qual é esse músculo e qual nervo o supre?",
        options: ['Músculo tensor do tímpano; nervo facial.', 'Músculo estapédio; nervo facial (VII par).', 'Músculo tensor do tímpano; nervo trigêmeo.', 'Músculo auricular posterior; nervo vago.'],
        correctAnswer: 1,
        explanation: "O músculo estapédio ancora-se no estribo e é suprido pelo nervo facial (VII) [1, 3, 4, 12].",
        theme: "Orelha"
      },
      {
        id: "orelha-14",
        question: "Durante uma aula prática, o monitor aponta para um músculo que regula a tensão da membrana timpânica, ancorado ao martelo. Qual é esse músculo e sua inervação?",
        options: ['Músculo estapédio; VII par.', 'Músculo tensor do tímpano; ramo mandibular do trigêmeo (V3).', 'Músculo temporal; V3.', 'Músculo da hélice; ramos cervicais.'],
        correctAnswer: 1,
        explanation: "O tensor do tímpano ancora-se no martelo e é suprido pelo trigêmeo (V3) [1, 3, 4, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-15",
        question: "A orelha interna é responsável pela audição e equilíbrio. Qual nervo craniano é o responsável por levar essas informações ao sistema nervoso central?",
        options: ['Nervo Facial (VII par).', 'Nervo Glossofaríngeo (IX par).', 'Nervo Vestibulococlear (VIII par).', 'Nervo Vago (X par).'],
        correctAnswer: 2,
        explanation: "O nervo vestibulococlear (VIII) coordena a audição e o equilíbrio [1, 3, 4].",
        theme: "Orelha"
      },
      {
        id: "orelha-16",
        question: "O labirinto está escavado na porção petrosa do temporal e divide-se em ósseo e membranáceo. O que preenche o espaço entre o labirinto ósseo e o membranáceo?",
        options: ['Endolinfa.', 'Cerume.', 'Perilinfa.', 'Ar atmosférico.'],
        correctAnswer: 2,
        explanation: "A perilinfa preenche o espaço entre o labirinto ósseo e o membranáceo [2, 4, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-17",
        question: "Um paciente queixa-se de vertigem rotatória intensa e náuseas. O médico suspeita de uma inflamação no labirinto. Quais estruturas da orelha interna são especificamente responsáveis pelo equilíbrio?",
        options: ['Cóclea e ducto coclear.', 'Vestíbulo e canais semicirculares.', 'Martelo e bigorna.', 'Tuba auditiva e trago.'],
        correctAnswer: 1,
        explanation: "Vestíbulo e canais semicirculares detectam posição e movimento (equilíbrio) [2-4].",
        theme: "Orelha"
      },
      {
        id: "orelha-18",
        question: "O estribo, o último osso da cadeia ossicular, conecta-se diretamente à orelha interna. Em qual abertura do labirinto ósseo ele se encaixa?",
        options: ['Janela redonda.', 'Janela oval (do vestíbulo).', 'Meato acústico interno.', 'Forame magno.'],
        correctAnswer: 1,
        explanation: "A base do estribo encaixa-se na janela oval do vestíbulo [3, 4, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-19",
        question: "A cóclea é a estrutura em formato de caracol na orelha interna. Qual é a sua função anatômica principal?",
        options: ['Detecção de movimento rotatório da cabeça.', 'Produção de cerume.', 'Responsável pela audição (transforma sinais mecânicos em elétricos).', 'Equalizar a pressão com a nasofaringe.'],
        correctAnswer: 2,
        explanation: "A cóclea transforma sinais mecânicos em elétricos para a audição [2-4].",
        theme: "Orelha"
      },
      {
        id: "orelha-20",
        question: "O labirinto membranáceo contém células especializadas com cílios. Qual fluido preenche o interior deste labirinto e banha essas células?",
        options: ['Perilinfa.', 'Endolinfa.', 'Humor aquoso.', 'Sangue arterial.'],
        correctAnswer: 1,
        explanation: "O interior do labirinto membranáceo é preenchido por endolinfa [2-4, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-21",
        question: "Sobre a inervação sensitiva do pavilhão auricular e do meato acústico externo, assinale a alternativa que contém apenas nervos participantes dessa sensibilidade conforme o material:",
        options: ['Nervo óptico e nervo hipoglosso.', 'Nervo trigêmeo (V3), nervo vago (X) e raízes cervicais (C2/C3).', 'Apenas o nervo vestibulococlear.', 'Apenas o nervo facial.'],
        correctAnswer: 1,
        explanation: "A inervação externa envolve V3, X e ramos cervicais (C2/C3) [3, 4, 7, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-22",
        question: "A orelha média é uma câmara estreita e cheia de ar. Ela é dividida anatomicamente em duas partes. Quais são elas?",
        options: ['Labirinto ósseo e membranáceo.', 'Pavilhão e meato.', 'Cavidade timpânica propriamente dita e recesso epitimpânico.', 'Sáculo e utrículo.'],
        correctAnswer: 2,
        explanation: "Divide-se em cavidade timpânica propriamente dita e recesso epitimpânico [1, 10, 11].",
        theme: "Orelha"
      },
      {
        id: "orelha-23",
        question: "Um paciente com labirintite apresenta sintomas de desequilíbrio. O professor explica que dentro do labirinto membranáceo existem estruturas que detectam a posição da cabeça. Quais são elas?",
        options: ['Cóclea e martelo.', 'Utrículo e sáculo.', 'Bigorna e estribo.', 'Trago e antititago.'],
        correctAnswer: 1,
        explanation: "Utrículo e sáculo fazem parte do labirinto membranáceo voltado ao equilíbrio [2, 4, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-24",
        question: "O suprimento arterial da orelha interna é diferenciado do restante da orelha. De onde provém a artéria labiríntica?",
        options: ['Da artéria carótida externa.', 'Do sistema vértebro-basilar (ramo da artéria basilar).', 'Da artéria temporal superficial.', 'Da artéria auricular posterior.'],
        correctAnswer: 1,
        explanation: "A artéria labiríntica vem da artéria basilar (sistema vértebro-basilar) [2, 3, 12].",
        theme: "Orelha"
      },
      {
        id: "orelha-25",
        question: "A orelha média possui uma conexão com a orelha interna através de uma membrana chamada \"membrana timpânica secundária\". Onde ela se localiza?",
        options: ['Na janela oval.', 'Na janela redonda (da cóclea).', 'No meato acústico externo.', 'No lóbulo da orelha.'],
        correctAnswer: 1,
        explanation: "A membrana timpânica secundária localiza-se na janela redonda da cóclea [13, 14].",
        theme: "Orelha"
      },
      {
        id: "orelha-26",
        question: "Qual é o trajeto da drenagem venosa da orelha interna conforme descrito nos diagramas de aula?",
        options: ['Veia jugular interna diretamente.', 'Veia labiríntica drenando para a veia cerebelar anterior ou seios cavernoso/transverso.', 'Veia auricular posterior para a veia subclávia.', 'Não há drenagem venosa, apenas linfática.'],
        correctAnswer: 1,
        explanation: "A veia labiríntica drena para a veia cerebelar e seios durais [12, 14].",
        theme: "Orelha"
      },
      {
        id: "orelha-27",
        question: "Um paciente apresenta sensibilidade dolorosa na orelha média. Qual nervo é responsável por essa sensibilidade específica desta câmara?",
        options: ['Nervo vago.', 'Nervo glossofaríngeo (IX par).', 'Nervo trigêmeo.', 'Nervo vestibulococlear.'],
        correctAnswer: 1,
        explanation: "A sensibilidade da orelha média é feita pelo glossofaríngeo (IX) [13].",
        theme: "Orelha"
      },
      {
        id: "orelha-28",
        question: "No pavilhão auricular, a depressão que serve como entrada imediata para o meato acústico externo é denominada:",
        options: ['Hélice.', 'Escafa.', 'Concha da orelha.', 'Fossa triangular.'],
        correctAnswer: 2,
        explanation: "A concha é a depressão profunda que leva ao meato acústico externo [2, 3, 6].",
        theme: "Orelha"
      },
      {
        id: "orelha-29",
        question: "O labirinto ósseo é revestido internamente por qual estrutura?",
        options: ['Pele fina.', 'Periósteo.', 'Membrana mucosa ciliada.', 'Dura-máter.'],
        correctAnswer: 1,
        explanation: "O labirinto ósseo é revestido por periósteo [2, 9].",
        theme: "Orelha"
      },
      {
        id: "orelha-30",
        question: "Ao final da transdução sonora, os sinais elétricos gerados na orelha interna são enviados para processamento no cérebro. Qual região do córtex cerebral recebe esses estímulos?",
        options: ['Córtex occipital.', 'Córtex temporal.', 'Córtex frontal.', 'Córtex parietal.'],
        correctAnswer: 1,
        explanation: "Os sinais elétricos da audição são levados ao córtex temporal [1, 3, 11].",
        theme: "Orelha"
      }
    ]
  },
  {
    id: "faringe",
    title: "Faringe",
    description: "Anatomia da faringe (naso, oro e laringofaringe)",
    emoji: "🗣️",
    questions: [
      {
        id: "faringe-1",
        question: "Um paciente de 12 anos apresenta respiração ruidosa e roncos. O exame de imagem revela hipertrofia de tecido linfoide no teto da nasofaringe. Sobre essa região, assinale a alternativa INCORRETA:",
        options: ['É limitada superiormente pelo osso esfenoide e a parte basilar do osso occipital [2, 3].', 'A tonsila faríngea, quando aumentada, é popularmente chamada de adenoide [3, 4].', 'Sua abertura anterior se comunica com a cavidade oral através do istmo das fauces [3, 5].', 'O óstio faríngeo da tuba auditiva localiza-se na sua parede lateral [6, 7].'],
        correctAnswer: 2,
        explanation: "A abertura anterior da nasofaringe se comunica com a cavidade nasal através das coanas, não com a cavidade oral.",
        theme: "Faringe"
      },
      {
        id: "faringe-2",
        question: "Durante a passagem de uma sonda nasogástrica, o médico deve conhecer os limites da orofaringe. Assinale a alternativa CORRETA sobre essa divisão:",
        options: ['Seu limite superior é definido pela margem inferior da cartilagem cricoide [6].', 'O istmo das fauces representa sua comunicação anterior com a cavidade oral [2, 6].', 'Localiza-se posteriormente à cavidade nasal e acima do palato mole [3].', 'Sua parede posterior está relacionada ao nível das vértebras C4 a C6 [8].'],
        correctAnswer: 1,
        explanation: "O istmo das fauces é a comunicação entre a cavidade oral e a orofaringe.",
        theme: "Faringe"
      },
      {
        id: "faringe-3",
        question: "Sobre os músculos constritores da faringe, responsáveis pelo movimento peristáltico durante a deglutição, assinale a alternativa INCORRETA:",
        options: ['São três músculos intrínsecos de disposição circular [8, 9].', 'O músculo constritor superior ajuda a formar a parede lateral da nasofaringe [7, 9].', 'O músculo constritor médio insere-se no corno maior do osso hioide [8, 10].', 'Todos os três constritores são inervados exclusivamente pelo nervo glossofaríngeo [2, 11].'],
        correctAnswer: 3,
        explanation: "Os constritores são inervados pelo plexo faríngeo (nervo vago), exceto o estilofaríngeo (IX).",
        theme: "Faringe"
      },
      {
        id: "faringe-4",
        question: "Um objeto pontiagudo (espinha de peixe) fica retido em uma depressão na laringofaringe. Qual estrutura anatômica é o local mais provável desse aprisionamento?",
        options: ['Recesso faríngeo.', 'Fossa tonsilar.', 'Recesso piriforme.', 'Toro do levantador.'],
        correctAnswer: 2,
        explanation: "O recesso piriforme é uma depressão lateral ao ádito da laringe onde corpos estranhos frequentemente se alojam [2, 8, 9].",
        theme: "Faringe"
      },
      {
        id: "faringe-5",
        question: "Assinale a alternativa INCORRETA sobre a vascularização arterial da faringe:",
        options: ['A faringe superior é irrigada por ramos da artéria carótida externa [10, 11].', 'A artéria faríngea ascendente é um dos principais suprimentos da parte superior [2, 11].', 'A artéria tireóidea superior fornece ramos para a faringe inferior [2, 10].', 'A artéria subclávia é a origem direta de todos os vasos que irrigam a nasofaringe [10, 11].'],
        correctAnswer: 3,
        explanation: "A irrigação vem da carótida externa (faríngea ascendente, etc.) e carótida interna (caroticotimpânicas).",
        theme: "Faringe"
      },
      {
        id: "faringe-6",
        question: "O Anel de Waldeyer é uma barreira defensiva de tecido linfoide. Sobre seus componentes, assinale a alternativa INCORRETA:",
        options: ['As tonsilas palatinas localizam-se lateralmente na orofaringe [1, 12].', 'As tonsilas tubárias estão localizadas próximas ao óstio da tuba auditiva [1, 7].', 'A tonsila lingual compõe a parte anteroinferior na raiz da língua [1, 5].', 'Todas as tonsilas do anel estão localizadas exclusivamente na laringofaringe [9, 12].'],
        correctAnswer: 3,
        explanation: "As tonsilas estão distribuídas na nasofaringe, orofaringe e raiz da língua.",
        theme: "Faringe"
      },
      {
        id: "faringe-7",
        question: "Um paciente apresenta paralisia do músculo estilofaríngeo. Qual nervo craniano o médico deve suspeitar que esteja lesionado?",
        options: ['Nervo Vago (X).', 'Nervo Glossofaríngeo (IX).', 'Nervo Trigêmeo (V).', 'Nervo Hipoglosso (XII).'],
        correctAnswer: 1,
        explanation: "O estilofaríngeo é o único músculo da faringe inervado pelo nervo glossofaríngeo (IX); os demais são pelo vago (X) [2, 13, 14].",
        theme: "Faringe"
      },
      {
        id: "faringe-8",
        question: "Qual das seguintes estruturas NÃO faz parte da parede lateral da nasofaringe?",
        options: ['Toro tubário.', 'Prega salpingofaríngea.', 'Toro do levantador.', 'Prega vocal.'],
        correctAnswer: 3,
        explanation: "A prega vocal localiza-se na laringe, não na parede lateral da nasofaringe [7, 15].",
        theme: "Faringe"
      },
      {
        id: "faringe-9",
        question: "Assinale a alternativa que descreve CORRETAMENTE a inervação sensitiva da faringe:",
        options: ['A nasofaringe é suprida pelo ramo maxilar (V2) do nervo trigêmeo [2, 14].', 'A orofaringe é suprida pelo nervo vago [11, 14].', 'A laringofaringe é inervada pelo nervo glossofaríngeo [10, 11].', 'O nervo facial é o principal responsável pela sensibilidade da mucosa faríngea [14].'],
        correctAnswer: 0,
        explanation: "A nasofaringe é inervada pelo nervo maxilar (V2).",
        theme: "Faringe"
      },
      {
        id: "faringe-10",
        question: "Sobre a laringofaringe (hipofaringe), assinale a alternativa CORRETA:",
        options: ['Estende-se da base do crânio até o palato mole [3].', 'Comunica-se anteriormente com o ádito da laringe [2, 9].', 'Situa-se ao nível das vértebras C1 e C2 [2].', 'É irrigada principalmente pela artéria maxilar [11].'],
        correctAnswer: 1,
        explanation: "A laringofaringe comunica-se anteriormente com o ádito da laringe.",
        theme: "Faringe"
      },
      {
        id: "faringe-11",
        question: "Qual músculo longitudinal da faringe tem origem na tuba auditiva?",
        options: ['Estilofaríngeo.', 'Salpingofaríngeo.', 'Palatofaríngeo.', 'Constritor médio.'],
        correctAnswer: 1,
        explanation: "O músculo salpingofaríngeo origina-se na parte cartilaginosa da tuba auditiva [8, 10].",
        theme: "Faringe"
      },
      {
        id: "faringe-12",
        question: "A drenagem venosa da faringe é realizada pelo plexo venoso faríngeo. Para qual vaso esse plexo drena predominantemente?",
        options: ['Veia Subclávia.', 'Veia Jugular Interna.', 'Veia Braquiocefálica Esquerda.', 'Veia Tireóidea Inferior.'],
        correctAnswer: 1,
        explanation: "O plexo venoso faríngeo drena diretamente para a veia jugular interna [10, 11].",
        theme: "Faringe"
      },
      {
        id: "faringe-13",
        question: "Assinale a alternativa INCORRETA sobre o osso hioide:",
        options: ['Não se articula diretamente com outros ossos [16, 17].', 'Possui um corpo, cornos maiores e cornos menores [16, 17].', 'Participa da mastigação, fala e deglutição [15, 17].', 'Faz parte do esqueleto cartilaginoso da laringofaringe [17].'],
        correctAnswer: 3,
        explanation: "O hioide é um osso, não faz parte do esqueleto cartilaginoso da laringe.",
        theme: "Faringe"
      },
      {
        id: "faringe-14",
        question: "Qual estrutura separa a nasofaringe da orofaringe durante a deglutição?",
        options: ['Epiglote.', 'Palato mole.', 'Úvula.', 'Cartilagem cricoide.'],
        correctAnswer: 1,
        explanation: "O palato mole eleva-se para fechar o istmo faríngeo, separando as duas partes [3, 5].",
        theme: "Faringe"
      },
      {
        id: "faringe-15",
        question: "O \"istmo das fauces\" é delimitado por quais estruturas?",
        options: ['Coanas e tonsila faríngea.', 'Ádito da laringe e prega ariepiglótica.', 'Úvula, arco palatoglosso e raiz da língua.', 'Toro tubário e recesso faríngeo.'],
        correctAnswer: 2,
        explanation: "Esses são os limites anatômicos da abertura anterior da orofaringe [2, 5].",
        theme: "Faringe"
      },
      {
        id: "faringe-16",
        question: "Sobre os músculos extrínsecos da faringe, assinale a alternativa CORRETA:",
        options: ['Atuam como constritores do lúmen faríngeo [8].', 'São eles: o estilofaríngeo, salpingofaríngeo e palatofaríngeo [2, 8].', 'Todos possuem fibras circulares [8].', 'São inervados apenas pelo nervo hipoglosso [13].'],
        correctAnswer: 1,
        explanation: "Os músculos extrínsecos são o estilofaríngeo, salpingofaríngeo e palatofaríngeo.",
        theme: "Faringe"
      },
      {
        id: "faringe-17",
        question: "Qual é o comprimento médio aproximado do tubo musculomembranoso da faringe?",
        options: ['5 a 8 cm.', '12 a 14 cm.', '20 a 25 cm.', '2 a 4 cm.'],
        correctAnswer: 1,
        explanation: "A faringe mede entre 12 e 14 cm de comprimento [3, 18].",
        theme: "Faringe"
      },
      {
        id: "faringe-18",
        question: "O limite inferior da faringe, onde se torna contínua com o esôfago, corresponde a qual nível vertebral?",
        options: ['C2.', 'C4.', 'C6.', 'T2.'],
        correctAnswer: 2,
        explanation: "A transição ocorre na margem inferior da cartilagem cricoide, ao nível de C6 [2, 9].",
        theme: "Faringe"
      },
      {
        id: "faringe-19",
        question: "A prega salpingopalatina localiza-se na parede lateral de qual região?",
        options: ['Orofaringe.', 'Laringofaringe.', 'Nasofaringe.', 'Cavidade infraglótica.'],
        correctAnswer: 2,
        explanation: "Faz parte da complexa parede lateral da nasofaringe [2, 6].",
        theme: "Faringe"
      },
      {
        id: "faringe-20",
        question: "Durante a deglutição, o músculo que traciona a faringe superior e lateralmente, facilitando a passagem do bolo alimentar, é o:",
        options: ['Constritor superior.', 'Milo-hióideo.', 'Estilofaríngeo.', 'Vocal.'],
        correctAnswer: 2,
        explanation: "Os músculos extrínsecos/longitudinais (como o estilofaríngeo) elevam a faringe [8, 18].",
        theme: "Faringe"
      }
    ]
  },
  {
    id: "laringe",
    title: "Laringe",
    description: "Anatomia da laringe e fonação",
    emoji: "🎶",
    questions: [
      {
        id: "laringe-21",
        question: "A laringe é o órgão da fonação e atua como um esfíncter das vias aéreas. Sobre sua extensão, assinale a alternativa CORRETA:",
        options: ['Estende-se da base do crânio até a vértebra C3 [17].', 'Vai da margem superior da epiglote até a margem inferior da cartilagem cricoide [15, 17].', 'Localiza-se entre as vértebras T1 e T4 [19].', 'Inicia-se nas coanas e termina no istmo das fauces [3, 6].'],
        correctAnswer: 1,
        explanation: "A laringe vai da epiglote até a margem inferior da cricoide (C6).",
        theme: "Laringe"
      },
      {
        id: "laringe-22",
        question: "\"O protetor das vias aéreas\" – Esta cartilagem em formato de folha fecha o ádito da laringe na deglutição. Trata-se da:",
        options: ['Cartilagem Tireoide.', 'Cartilagem Cricoide.', 'Cartilagem Epiglote.', 'Cartilagem Aritenoide.'],
        correctAnswer: 2,
        explanation: "A epiglote atua fechando a entrada da laringe para evitar aspiração [17, 20].",
        theme: "Laringe"
      },
      {
        id: "laringe-23",
        question: "Um cirurgião realiza uma tireoidectomia e lesiona acidentalmente o NERVO LARÍNGEO EXTERNO. Qual função será prejudicada?",
        options: ['Sensibilidade da mucosa acima das pregas vocais [15, 21].', 'Abdução (abertura) das pregas vocais pelo músculo cricoaritenóideo posterior [22].', 'Tensão das pregas vocais pelo músculo cricotireóideo, afetando sons agudos [15, 21, 22].', 'Sensibilidade de toda a laringofaringe [14].'],
        correctAnswer: 2,
        explanation: "O nervo laríngeo externo inerva o músculo cricotireóideo, responsável pela tensão das pregas vocais.",
        theme: "Laringe"
      },
      {
        id: "laringe-24",
        question: "Sobre a cartilagem tireoide, assinale a alternativa INCORRETA:",
        options: ['Possui formato de escudo [17, 24].', 'É formada por duas lâminas quadriláteras [24, 25].', 'A fusão dos seus 2/3 inferiores forma a proeminência laríngea (pomo de Adão) [24, 25].', 'Articula-se inferiormente com o osso hioide por uma articulação sinovial [24].'],
        correctAnswer: 3,
        explanation: "A cartilagem tireoide articula-se com a cricoide, não diretamente com o hioide por articulação sinovial (é ligada por membrana).",
        theme: "Laringe"
      },
      {
        id: "laringe-25",
        question: "Qual cartilagem da laringe possui o formato de um \"anel de sinete\" e serve de base para o esqueleto laríngeo?",
        options: ['Epiglote.', 'Tireoide.', 'Cricoide.', 'Aritenoide.'],
        correctAnswer: 2,
        explanation: "A cricoide é caracterizada pelo arco anterior estreito e lâmina posterior larga [26, 27].",
        theme: "Laringe"
      },
      {
        id: "laringe-26",
        question: "As cartilagens aritenoides são fundamentais para a fonação. Nelas, o ligamento vocal se origina de qual estrutura específica?",
        options: ['Ápice da cartilagem.', 'Fóvea triangular (superior) [28, 29].', 'Fóvea oblonga (inferior) [28, 29].', 'Processo muscular lateral [28].'],
        correctAnswer: 2,
        explanation: "O ligamento vocal se insere na fóvea oblonga da aritenoide.",
        theme: "Laringe"
      },
      {
        id: "laringe-27",
        question: "Um paciente apresenta rouquidão persistente. O exame mostra paralisia do ÚNICO músculo capaz de abrir a rima glótica (abduzir as pregas vocais). Qual é esse músculo?",
        options: ['Cricoaritenóideo lateral [22].', 'Cricoaritenóideo posterior [21, 22].', 'Cricotireóideo [22].', 'Tireoaritenóideo [22].'],
        correctAnswer: 1,
        explanation: "O cricoaritenóideo posterior é conhecido como o \"músculo da respiração\" por ser o único abdutor [22, 30].",
        theme: "Laringe"
      },
      {
        id: "laringe-28",
        question: "Sobre a vascularização da laringe, assinale a alternativa CORRETA:",
        options: ['A artéria laríngea superior é ramo da artéria tireóidea inferior [15, 31].', 'A artéria laríngea inferior deriva do tronco tireocervical, via artéria tireóidea inferior [15, 31, 32].', 'Toda a drenagem venosa da laringe ocorre para a veia subclávia direita [31, 32].', 'A artéria tireóidea ima é o principal suprimento da laringe superior [33].'],
        correctAnswer: 1,
        explanation: "A artéria laríngea inferior é ramo da tireóidea inferior.",
        theme: "Laringe"
      },
      {
        id: "laringe-29",
        question: "O nervo laríngeo interno perfura qual membrana para prover sensibilidade à laringe superior?",
        options: ['Membrana cricovocal (cone elástico) [34].', 'Membrana tireo-hióidea [15, 24, 26].', 'Membrana quadrangular [34].', 'Membrana cricotireóidea [26].'],
        correctAnswer: 1,
        explanation: "A membrana tireo-hióidea possui uma abertura para o nervo laríngeo interno e a artéria laríngea superior [15, 24, 26].",
        theme: "Laringe"
      },
      {
        id: "laringe-30",
        question: "Qual compartimento da cavidade laríngea situa-se entre as pregas vestibulares e as pregas vocais?",
        options: ['Vestíbulo laríngeo [32].', 'Cavidade infraglótica [32].', 'Ventrículo laríngeo [32].', 'Adito da laringe [32].'],
        correctAnswer: 2,
        explanation: "O ventrículo é o espaço médio entre as pregas superiores (vestibulares) e inferiores (vocais) [32].",
        theme: "Laringe"
      },
      {
        id: "laringe-31",
        question: "Sobre a inervação sensitiva da laringe, assinale a alternativa INCORRETA:",
        options: ['Acima das pregas vocais, a sensibilidade é dada pelo nervo laríngeo interno [15, 21, 31].', 'Abaixo das pregas vocais, a sensibilidade é dada pelo nervo laríngeo recorrente [15, 21, 31].', 'O nervo glossofaríngeo é o principal responsável pela tosse laríngea [14].', 'O nervo vago é a origem comum de ambos os nervos laríngeos [21, 31].'],
        correctAnswer: 2,
        explanation: "O reflexo da tosse é mediado pelo nervo vago (laríngeo superior e recorrente).",
        theme: "Laringe"
      },
      {
        id: "laringe-32",
        question: "As cartilagens corniculadas articulam-se com qual parte da cartilagem aritenoide?",
        options: ['Base.', 'Ápice.', 'Processo vocal.', 'Face medial.'],
        correctAnswer: 1,
        explanation: "Elas situam-se sobre os ápices das aritenoides [20, 29].",
        theme: "Laringe"
      },
      {
        id: "laringe-33",
        question: "Qual músculo relaxa e encurta a prega vocal, produzindo sons mais graves?",
        options: ['Cricotireóideo [22].', 'Tireoaritenóideo (e músculo vocal) [22, 30].', 'Ariepiglótico [23].', 'Constritor superior [8].'],
        correctAnswer: 1,
        explanation: "Esses músculos agem reduzindo a tensão das pregas vocais [22].",
        theme: "Laringe"
      },
      {
        id: "laringe-34",
        question: "A margem livre inferior da \"membrana quadrangular\" espessa-se para formar qual estrutura?",
        options: ['Ligamento vocal [34].', 'Ligamento vestibular [28, 34].', 'Ligamento cricotireóideo mediano [27].', 'Prega salpingofaríngea [7].'],
        correctAnswer: 1,
        explanation: "A margem inferior da membrana quadrangular é o ligamento vestibular (prega vocal falsa) [28, 34, 35].",
        theme: "Laringe"
      },
      {
        id: "laringe-35",
        question: "A \"Rima Glótica\" ou Glote é definida como:",
        options: ['O espaço entre a epiglote e a língua [12].', 'A abertura superior da laringe (ádito) [32].', 'A fissura entre as pregas vocais e as cartilagens aritenoides [23, 32].', 'O canal entre a laringe e o esôfago [9].'],
        correctAnswer: 2,
        explanation: "É a abertura variável entre as estruturas da fonação [23, 32].",
        theme: "Laringe"
      },
      {
        id: "laringe-36",
        question: "Qual estrutura é formada pelo espessamento mediano da membrana cricotireóidea?",
        options: ['Ligamento tireo-hióideo lateral [24].', 'Ligamento cricotireóideo mediano [27, 28].', 'Ligamento vocal [28].', 'Prega ariepiglótica [23].'],
        correctAnswer: 1,
        explanation: "Local onde se realiza o acesso de urgência à via aérea [27, 28].",
        theme: "Laringe"
      },
      {
        id: "laringe-37",
        question: "Onde se localizam as cartilagens cuneiformes?",
        options: ['No interior do ligamento vocal [28].', 'No ápice da cartilagem cricoide [27].', 'Nas pregas ariepiglóticas, acima das aritenoides [20, 34].', 'No istmo da glândula tireoide [36].'],
        correctAnswer: 2,
        explanation: "São nódulos em forma de baqueta nas pregas ariepiglóticas [20, 34].",
        theme: "Laringe"
      },
      {
        id: "laringe-38",
        question: "Assinale a alternativa CORRETA sobre o músculo cricotireóideo:",
        options: ['É inervado pelo nervo laríngeo recorrente [21].', 'É o único músculo intrínseco inervado pelo nervo laríngeo externo [15, 21, 31].', 'Sua função principal é abrir a glote para a respiração [22].', 'Origina-se na cartilagem epiglote [20].'],
        correctAnswer: 1,
        explanation: "Ele é a única exceção à inervação motora do recorrente na laringe [21, 31].",
        theme: "Laringe"
      },
      {
        id: "laringe-39",
        question: "Pequenos nódulos cartilaginosos encontrados nos ligamentos tireo-hióideos laterais:",
        options: ['Corniculadas.', 'Cuneiformes.', 'Tritíceas.', 'Aritenoides.'],
        correctAnswer: 2,
        explanation: "As cartilagens tritíceas situam-se nos ligamentos laterais da membrana tireo-hióidea [15, 26, 27].",
        theme: "Laringe"
      },
      {
        id: "laringe-40",
        question: "Qual músculo fecha o ádito da laringe para evitar que alimento entre na via aérea?",
        options: ['Tireoepiglótico [23, 30].', 'Ariepiglótico [23, 30].', 'Vocal [22].', 'Estilofaríngeo [10].'],
        correctAnswer: 1,
        explanation: "O ariepiglótico fecha o ádito; o tireoepiglótico o abre [23, 30].",
        theme: "Laringe"
      }
    ]
  },
  {
    id: "tireoide",
    title: "Tireoide",
    description: "Glândulas tireoide e paratireoides",
    emoji: "🦋",
    questions: [
      {
        id: "tireoide-41",
        question: "Sobre a localização e morfologia da glândula tireoide, assinale a alternativa INCORRETA:",
        options: ['Situa-se na região anterior do pescoço [19, 37].', 'Localiza-se ao nível das vértebras C5 a T1 [19, 36, 37].', 'Consiste em dois lobos unidos por um istmo mediano [19, 36].', 'O istmo localiza-se tipicamente anterior à cartilagem tireoide [19, 37].'],
        correctAnswer: 3,
        explanation: "O istmo localiza-se anterior ao 2º e 3º anéis traqueais, abaixo da cartilagem tireoide.",
        theme: "Tireoide"
      },
      {
        id: "tireoide-42",
        question: "\"O maestro da orquestra endócrina pode ter um componente extra em 50% dos casos\". Essa variação anatômica da tireoide é o:",
        options: ['Lobo Cônico.', 'Lobo Piramidal.', 'Lobo Ectópico.', 'Istmo Acessório.'],
        correctAnswer: 1,
        explanation: "O lobo piramidal projeta-se superiormente a partir do istmo [19, 37].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-43",
        question: "As superfícies laterais dos lobos da tireoide são recobertas por qual músculo?",
        options: ['Esternocleidomastoideo.', 'Esternotireóideo.', 'Platisma.', 'Escaleno anterior.'],
        correctAnswer: 1,
        explanation: "Os lobos são cobertos pelos músculos esternotireóideos [36, 37].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-44",
        question: "Assinale a alternativa que descreve CORRETAMENTE o suprimento arterial da tireoide:",
        options: ['A artéria tireóidea superior deriva da artéria subclávia [19].', 'A artéria tireóidea inferior origina-se da artéria carótida externa [19].', 'A artéria tireóidea ima, quando presente, pode vir do tronco braquiocefálico ou arco aórtico [19, 33, 36].', 'O tronco tireocervical irriga exclusivamente o lobo piramidal [19].'],
        correctAnswer: 2,
        explanation: "A artéria tireóidea ima é uma variação que pode vir do tronco braquiocefálico ou arco aórtico.",
        theme: "Tireoide"
      },
      {
        id: "tireoide-45",
        question: "Sobre a drenagem venosa da glândula tireoide, assinale a alternativa INCORRETA:",
        options: ['As veias tireóideas superiores drenam para a jugular interna [31, 33, 36].', 'As veias tireóideas médias drenam para a jugular interna [31, 33, 36].', 'As veias tireóideas inferiores drenam para a veia jugular externa [1, 31, 33].', 'As veias tireóideas inferiores drenam para as veias braquiocefálicas [31, 36, 38].'],
        correctAnswer: 2,
        explanation: "As veias tireóideas inferiores drenam para as veias braquiocefálicas.",
        theme: "Tireoide"
      },
      {
        id: "tireoide-46",
        question: "Um paciente apresenta baixo nível de cálcio após cirurgia cervical. O médico suspeita de remoção acidental das glândulas paratireoides. Sobre elas, é INCORRETO afirmar:",
        options: ['São pequenas, marrom-amareladas e lentiformes [19, 38].', 'Tipicamente, existem duas de cada lado [19, 36].', 'Localizam-se entre a superfície posterior da tireoide e sua cápsula [19, 36, 38].', 'Localizam-se anteriormente à cartilagem tireoide [38].'],
        correctAnswer: 3,
        explanation: "As paratireoides localizam-se na face posterior dos lobos da tireoide.",
        theme: "Tireoide"
      },
      {
        id: "tireoide-47",
        question: "A artéria tireóidea inferior é ramo de qual estrutura?",
        options: ['Artéria Carótida Externa.', 'Tronco Tireocervical (da artéria subclávia).', 'Arco Aórtico diretamente.', 'Artéria Laríngea Superior.'],
        correctAnswer: 1,
        explanation: "Deriva do tronco tireocervical, ramo da subclávia [31, 32, 36].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-48",
        question: "O istmo da tireoide situa-se anterior a quais estruturas traqueais?",
        options: ['1º e 2º anéis traqueais.', '2º e 3º anéis traqueais.', '4º e 5º anéis traqueais.', 'Cartilagem cricoide.'],
        correctAnswer: 1,
        explanation: "Essa é a posição clássica do istmo [37].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-49",
        question: "A artéria laríngea superior, que irriga a parte interna da laringe, é ramo de qual vaso?",
        options: ['Artéria Tireóidea Inferior.', 'Artéria Tireóidea Superior.', 'Artéria Carótida Comum.', 'Artéria Facial.'],
        correctAnswer: 1,
        explanation: "A laríngea superior nasce da tireóidea superior [15, 23, 32].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-50",
        question: "Qual a relação íntima do nervo laríngeo recorrente com a glândula tireoide?",
        options: ['Passa anteriormente ao istmo [31].', 'Ascende no sulco traqueoesofágico, posterior aos lobos da glândula [31, 39].', 'Perfura o lobo piramidal [19].', 'Origina-se dentro da cápsula da tireoide [31].'],
        correctAnswer: 1,
        explanation: "Ascende no sulco traqueoesofágico, posterior aos lobos da glândula [31, 39].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-51",
        question: "As bases dos lobos da tireoide podem se estender inferiormente até qual nível?",
        options: ['1º anel traqueal.', '2º anel traqueal.', '4º ou 5º anéis traqueais.', 'Manúbrio do esterno.'],
        correctAnswer: 2,
        explanation: "Os lobos são cônicos e suas bases atingem o nível do 4º ou 5º anel [37].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-52",
        question: "Assinale a alternativa que contém apenas veias que drenam para a veia JUGULAR INTERNA:",
        options: ['Tireóidea Superior e Tireóidea Inferior.', 'Tireóidea Superior e Tireóidea Média.', 'Tireóidea Média e Tireóidea Ima.', 'Tireóidea Inferior e Braquiocefálica.'],
        correctAnswer: 1,
        explanation: "A superior e a média são tributárias da jugular interna; a inferior vai para a braquiocefálica [31-33, 36].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-53",
        question: "A glândula tireoide está medialmente anexada a qual estrutura laríngea?",
        options: ['Epiglote.', 'Cartilagem Cricoide.', 'Cartilagem Aritenoide.', 'Membrana tireo-hióidea.'],
        correctAnswer: 1,
        explanation: "As superfícies mediais dos lobos fixam-se à cricoide [36, 37].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-54",
        question: "Sobre a artéria tireóidea ima, é CORRETO afirmar:",
        options: ['Está presente em 100% da população.', 'É um ramo constante da artéria carótida externa.', 'Pode originar-se do tronco braquiocefálico ou arco aórtico.', 'Irriga apenas as glândulas paratireoides superiores.'],
        correctAnswer: 2,
        explanation: "É uma variação arterial importante [19, 33, 36].",
        theme: "Tireoide"
      },
      {
        id: "tireoide-55",
        question: "Assinale a alternativa INCORRETA sobre a glândula tireoide:",
        options: ['É uma glândula endócrina.', 'Produz os hormônios T3 e T4 [19].', 'Sua drenagem linfática é inexistente [19].', 'Situa-se profundamente aos músculos esternotireóideos [36, 37].'],
        correctAnswer: 2,
        explanation: "Como qualquer órgão, possui drenagem linfática (embora não detalhada nos slides curtos, a afirmação de que é inexistente é anatomicamente falsa) [19].",
        theme: "Tireoide"
      }
    ]
  },
  {
    id: "olho",
    title: "Olho",
    description: "Anatomia do olho e estruturas relacionadas",
    emoji: "👁️",
    questions: [
      {
        id: "olho-21",
        question: "Um paciente de 40 anos sofreu um trauma na face e apresenta uma fratura no assoalho da órbita. Quais ossos compõem o limite inferior (assoalho) da cavidade orbital?",
        options: ['Frontal e Asa menor do esfenoide.', 'Maxilar, Zigomático e Palatino.', 'Lacrimal, Etmoide e Frontal.', 'Asa maior do esfenoide e Zigomático.'],
        correctAnswer: 1,
        explanation: "Maxilar, zigomático e palatino formam o assoalho orbital [17-19].",
        theme: "Olho"
      },
      {
        id: "olho-22",
        question: "Durante um exame oftalmológico, observa-se que a pupila do paciente não reage à luz (miose ausente). Qual músculo e qual par craniano são responsáveis por esse movimento?",
        options: ['M. dilatador da pupila; fibras simpáticas.', 'M. constritor da pupila; nervo oculomotor (III par).', 'M. ciliar; nervo troclear (IV par).', 'M. reto medial; nervo abducente (VI par).'],
        correctAnswer: 1,
        explanation: "O m. constritor faz miose via fibras parassimpáticas do III par [6, 20, 21].",
        theme: "Olho"
      },
      {
        id: "olho-23",
        question: "Um paciente apresenta quadro de dacriocistite (inflamação do saco lacrimal). Seguindo o caminho da lágrima, para onde ela drena imediatamente após sair do saco lacrimal?",
        options: ['Canalículos lacrimais.', 'Pontos lacrimais.', 'Ducto nasolacrimal.', 'Meato nasal médio.'],
        correctAnswer: 2,
        explanation: "A lágrima vai do saco lacrimal para o ducto nasolacrimal (até o nariz) [22-24].",
        theme: "Olho"
      },
      {
        id: "olho-24",
        question: "Ao realizar o teste de motilidade ocular, o paciente demonstra incapacidade de realizar o movimento de abdução pura do olho direito. Qual músculo e nervo estão provavelmente lesionados?",
        options: ['M. reto superior; N. oculomotor.', 'M. reto lateral; N. abducente.', 'M. oblíquo superior; N. troclear.', 'M. reto medial; N. oculomotor.'],
        correctAnswer: 1,
        explanation: "O reto lateral faz abdução e é inervado pelo VI par (abducente) [6, 21, 22].",
        theme: "Olho"
      },
      {
        id: "olho-25",
        question: "O bulbo ocular é revestido por três túnicas. Qual delas é a túnica vascular (úvea)?",
        options: ['Córnea e esclera.', 'Retina.', 'Corioide, corpo ciliar e íris.', 'Cristalino e humor vítreo.'],
        correctAnswer: 2,
        explanation: "A úvea é a camada vascular média: corioide, corpo ciliar e íris [18, 25].",
        theme: "Olho"
      },
      {
        id: "olho-26",
        question: "Um paciente apresenta ptose palpebral (pálpebra caída). Além do músculo levantador da pálpebra superior, qual músculo auxilia no fechamento do olho e qual sua inervação?",
        options: ['M. orbicular do olho; nervo facial (VII par).', 'M. reto superior; nervo oculomotor.', 'M. dilatador da pupila; fibras simpáticas.', 'M. ciliar; nervo trigêmeo.'],
        correctAnswer: 0,
        explanation: "O m. orbicular fecha o olho e é inervado pelo facial (VII) [20, 23, 26].",
        theme: "Olho"
      },
      {
        id: "olho-27",
        question: "Sobre os acidentes anatômicos da órbita, por qual estrutura passam o nervo óptico e a artéria oftálmica?",
        options: ['Fissura orbital superior.', 'Fissura orbital inferior.', 'Canal óptico.', 'Forame supraorbital.'],
        correctAnswer: 2,
        explanation: "O canal óptico é a passagem do nervo óptico e artéria oftálmica [17, 18, 27].",
        theme: "Olho"
      },
      {
        id: "olho-28",
        question: "O humor aquoso é um fluido essencial para a pressão intraocular. Em quais câmaras do olho ele é encontrado?",
        options: ['Apenas na câmara anterior.', 'Câmara anterior e câmara posterior.', 'Câmara postrema.', 'Entre a corioide e a retina.'],
        correctAnswer: 1,
        explanation: "O humor aquoso preenche as câmaras anterior e posterior [21, 25, 28].",
        theme: "Olho"
      },
      {
        id: "olho-29",
        question: "Qual estrutura é considerada a lente do olho, responsável pelo foco da imagem através da acomodação?",
        options: ['Córnea.', 'Íris.', 'Cristalino.', 'Retina.'],
        correctAnswer: 2,
        explanation: "O cristalino é a lente material que ajusta o foco [18, 21, 28].",
        theme: "Olho"
      },
      {
        id: "olho-30",
        question: "Um paciente apresenta lesão no nervo troclear (IV par). Qual movimento ocular estará comprometido conforme a regra \"OS 4 RELA 6 RESTAM 3\"?",
        options: ['Elevação com adução (M. oblíquo inferior).', 'Depressão com adução (M. oblíquo superior).', 'Abdução (M. reto lateral).', 'Adução (M. reto medial).'],
        correctAnswer: 1,
        explanation: "O oblíquo superior (OS 4) faz depressão com adução [6, 21, 22].",
        theme: "Olho"
      },
      {
        id: "olho-31",
        question: "A artéria oftálmica fornece vários ramos para o bulbo ocular. Qual desses ramos é responsável pela nutrição da retina?",
        options: ['Artérias ciliares anteriores.', 'Artéria central da retina.', 'Artérias ciliares posteriores curtas.', 'Artéria lacrimal.'],
        correctAnswer: 1,
        explanation: "A artéria central da retina é o ramo vital para a túnica interna [23, 29].",
        theme: "Olho"
      },
      {
        id: "olho-32",
        question: "Assinale a alternativa INCORRETA sobre os limites da órbita:",
        options: ['O teto é formado pelo osso frontal e asa menor do esfenoide.', 'A parede lateral é formada pelo frontal, zigomático e asa maior do esfenoide.', 'A parede medial é formada pelo frontal, etmoide, lacrimal e maxilar.', 'O assoalho é formado apenas pelo osso etmoide.'],
        correctAnswer: 3,
        explanation: "O assoalho é formado por maxilar, zigomático e palatino, não etmoide [18, 19].",
        theme: "Olho"
      },
      {
        id: "olho-33",
        question: "O onde se localiza a \"câmara postrema\" e qual substância a preenche?",
        options: ['Entre a córnea e a íris; humor aquoso.', 'Entre a íris e o cristalino; humor aquoso.', 'Após o cristalino; humor vítreo.', 'Entre a esclera e a corioide; perilinfa.'],
        correctAnswer: 2,
        explanation: "A câmara postrema (ou vítrea) contém o humor vítreo [21, 25, 28].",
        theme: "Olho"
      },
      {
        id: "olho-34",
        question: "Qual músculo intrínseco do olho é responsável pela acomodação do cristalino?",
        options: ['Músculo esfíncter da pupila.', 'Músculo dilatador da pupila.', 'Músculo ciliar.', 'Músculo reto medial.'],
        correctAnswer: 2,
        explanation: "O músculo ciliar altera a conformação do cristalino para acomodação [6, 21, 30].",
        theme: "Olho"
      },
      {
        id: "olho-35",
        question: "A drenagem venosa do olho é feita principalmente para qual estrutura venosa intracraniana importante?",
        options: ['Veia jugular interna.', 'Seio cavernoso.', 'Veia basílica.', 'Seio sagital superior.'],
        correctAnswer: 1,
        explanation: "As veias oftálmicas drenam principalmente para o seio cavernoso [23, 29].",
        theme: "Olho"
      },
      {
        id: "olho-36",
        question: "Sobre as pálpebras, quais glândulas sebáceas estão localizadas nos tarsos?",
        options: ['Glândulas de Moll.', 'Glândulas de Meibomius (tarsais).', 'Glândulas de Krause.', 'Glândulas de Wolfring.'],
        correctAnswer: 1,
        explanation: "As glândulas de Meibomius são glândulas sebáceas palpebrais/tarsais [29, 31].",
        theme: "Olho"
      },
      {
        id: "olho-37",
        question: "Qual a função do músculo reto inferior conforme descrito nos materiais?",
        options: ['Elevação com abdução.', 'Depressão com adução.', 'Adução pura.', 'Fechamento da pálpebra.'],
        correctAnswer: 1,
        explanation: "O reto inferior realiza depressão com adução [6, 22, 23].",
        theme: "Olho"
      },
      {
        id: "olho-38",
        question: "O nervo trigêmeo (V par) participa da sensibilidade da face. Qual de seus ramos é especificamente relacionado à região orbital superior?",
        options: ['Nervo maxilar (V2).', 'Nervo mandibular (V3).', 'Nervo oftálmico (V1).', 'Nervo infraorbital.'],
        correctAnswer: 2,
        explanation: "O ramo V1 (oftálmico) é o responsável pela região orbital [21, 23, 26].",
        theme: "Olho"
      },
      {
        id: "olho-39",
        question: "A túnica fibrosa do olho é composta por quais estruturas?",
        options: ['Íris e pupila.', 'Córnea e esclera.', 'Corioide e retina.', 'Cristalino e corpo ciliar.'],
        correctAnswer: 1,
        explanation: "Túnica fibrosa (externa) = córnea + esclera [18, 19, 25].",
        theme: "Olho"
      },
      {
        id: "olho-40",
        question: "Qual par craniano é responsável pela inervação motora da maioria dos músculos extrínsecos do olho (Retos superior, inferior, medial e Oblíquo inferior)?",
        options: ['III - Oculomotor.', 'IV - Troclear.', 'VI - Abducente.', 'VII - Facial.'],
        correctAnswer: 0,
        explanation: "O oculomotor (III) inerva quase todos, exceto o Oblíquo Superior (IV) e Reto Lateral (VI) [20, 21, 24].",
        theme: "Olho"
      },
      {
        id: "olho-41",
        question: "Uma fratura na parede medial da órbita pode comprometer estruturas delicadas. Quais ossos formam o limite medial da cavidade orbital?",
        options: ['Frontal, Etmoide, Lacrimal e Maxilar.', 'Zigomático e Asa maior do esfenoide.', 'Palatino e Vômer.', 'Apenas o osso Etmoide e Frontal.'],
        correctAnswer: 0,
        explanation: "A parede medial é composta pelos ossos frontal, etmoide, lacrimal e maxilar [8, 9].",
        theme: "Olho"
      },
      {
        id: "olho-42",
        question: "Um paciente apresenta incapacidade de olhar para baixo quando o olho está em adução. Seguindo a regra \"OS 4 RELA 6 RESTAM 3\", qual músculo e nervo estão lesionados?",
        options: ['M. Reto Inferior; N. Oculomotor (III).', 'M. Oblíquo Superior; N. Troclear (IV).', 'M. Reto Lateral; N. Abducente (VI).', 'M. Oblíquo Inferior; N. Oculomotor (III).'],
        correctAnswer: 1,
        explanation: "O Oblíquo Superior (OS 4) é o músculo que faz depressão com adução, inervado pelo nervo Troclear [10-12].",
        theme: "Olho"
      },
      {
        id: "olho-43",
        question: "Durante a avaliação do reflexo fotomotor, a luz atinge a retina e a resposta motora (miose) é executada por qual músculo intrínseco e qual via nervosa?",
        options: ['M. Dilatador da pupila; Fibras simpáticas.', 'M. Constritor da pupila; Fibras parassimpáticas via III par.', 'M. Ciliar; Fibras simpáticas via nervo oftálmico.', 'M. Esfíncter da pupila; Fibras parassimpáticas via VII par.'],
        correctAnswer: 1,
        explanation: "A miose (constrição) é feita pelo m. constritor da pupila via fibras parassimpáticas do III par [13-15].",
        theme: "Olho"
      },
      {
        id: "olho-44",
        question: "O \"caminho da lágrima\" é um trajeto preciso. Após passar pelos canalículos lacrimais e pelo canalículo comum, o fluido lacrimal entra em qual estrutura antes de chegar ao meato nasal inferior?",
        options: ['Ponto lacrimal.', 'Glândula lacrimal.', 'Saco lacrimal.', 'Prega semilunar.'],
        correctAnswer: 2,
        explanation: "Após os canalículos, a lágrima cai no saco lacrimal antes de descer pelo ducto nasolacrimal [10, 12, 16].",
        theme: "Olho"
      },
      {
        id: "olho-45",
        question: "A túnica vascular do bulbo ocular, também chamada de úvea, é composta por quais três partes contínuas?",
        options: ['Esclera, Córnea e Retina.', 'Corioide, Corpo Ciliar e Íris.', 'Cristalino, Humor Vítreo e Humor Aquoso.', 'Retina, Nervo Óptico e Mácula.'],
        correctAnswer: 1,
        explanation: "A úvea (vascular) é composta por corioide, corpo ciliar e íris [17, 18].",
        theme: "Olho"
      },
      {
        id: "olho-46",
        question: "Um paciente apresenta um \"terçol\" (hordéolo) na margem palpebral. Anatomicamente, quais glândulas sebáceas localizadas nas pálpebras podem estar envolvidas conforme os slides?",
        options: ['Glândulas de Krause e Wolfring.', 'Glândulas de Meibomius (tarsais) e Zeis.', 'Glândulas de Moll.', 'Glândulas de Bowman.'],
        correctAnswer: 1,
        explanation: "As glândulas sebáceas palpebrais mencionadas são as de Meibomius (tarsais) e as de Zeis [19, 20].",
        theme: "Olho"
      },
      {
        id: "olho-47",
        question: "Sobre as câmaras do olho, onde se localiza a \"Câmara Posterior\" e qual fluido ela contém?",
        options: ['Entre a córnea e a íris; humor aquoso.', 'Entre a íris e o cristalino; humor aquoso.', 'Após o cristalino; humor vítreo.', 'Entre a esclera e a corioide; perilinfa.'],
        correctAnswer: 1,
        explanation: "A câmara posterior fica entre a face posterior da íris e a face anterior do cristalino, contendo humor aquoso [17, 21].",
        theme: "Olho"
      },
      {
        id: "olho-48",
        question: "Qual nervo craniano atravessa o canal óptico acompanhado pela artéria oftálmica?",
        options: ['N. Oculomotor (III).', 'N. Trigêmeo (V1).', 'N. Óptico (II).', 'N. Abducente (VI).'],
        correctAnswer: 2,
        explanation: "O canal óptico é a passagem para o nervo óptico (II) e artéria oftálmica [8, 9].",
        theme: "Olho"
      },
      {
        id: "olho-49",
        question: "O músculo que tem a função de abrir o olho (elevação da pálpebra superior) é o músculo levantador da pálpebra superior. Qual sua inervação motor?",
        options: ['Nervo Facial (VII).', 'Nervo Oculomotor (III).', 'Nervo Troclear (IV).', 'Nervo Oftálmico (V1).'],
        correctAnswer: 1,
        explanation: "O levantador da pálpebra superior é inervado pelo III par (Oculomotor) [10-12].",
        theme: "Olho"
      },
      {
        id: "olho-50",
        question: "A irrigação da retina é feita predominantemente por qual vaso, que é ramo da artéria oftálmica e corre dentro do nervo óptico?",
        options: ['Artéria Ciliar Anterior.', 'Artéria Central da Retina.', 'Artéria Lacrimal.', 'Artéria Supraorbital.'],
        correctAnswer: 1,
        explanation: "A artéria central da retina é o ramo da oftálmica que perfura o nervo óptico para nutrir a retina [16-18].",
        theme: "Olho"
      }
    ]
  }
];
// Redeploy trigger
