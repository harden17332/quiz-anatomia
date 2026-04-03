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

// QUESTÕES DE VASCULARIZAÇÃO - Primeiras 10
const vascularizacao1: Question[] = [
  {
    id: "vasc-1",
    question: "A **artéria tireoidea superior** é o primeiro ramo da carótida externa (ACE). Qual é a sua principal função?",
    options: ["Irrigar a glândula tireoide.", "Irrigar os músculos do pescoço.", "Irrigar a faringe.", "Irrigar o esôfago."],
    correctAnswer: 0,
    explanation: "A tireoidea superior é o 1º ramo da ACE e irriga a glândula de mesmo nome.",
    theme: "Vascularização"
  },
  {
    id: "vasc-2",
    question: "A **artéria lingual** é um ramo importante da ACE. Qual é o seu principal ramo terminal?",
    options: ["Artéria profunda da língua.", "Artéria labial inferior.", "Artéria angular.", "Artéria submental."],
    correctAnswer: 0,
    explanation: "O ramo profundo da artéria lingual irriga os músculos do assoalho oral.",
    theme: "Vascularização"
  },
  {
    id: "vasc-3",
    question: "A **artéria submental** é um ramo importante para a irrigação do assoalho da boca. De qual artéria ela é ramo?",
    options: ["Artéria lingual.", "Artéria facial.", "Artéria maxilar.", "Artéria temporal superficial."],
    correctAnswer: 1,
    explanation: "A artéria submental é um ramo importante da artéria facial para o assoalho da boca.",
    theme: "Vascularização"
  },
  {
    id: "vasc-4",
    question: "A **artéria angular** é o terminal da artéria facial. Qual estrutura ela irriga principalmente?",
    options: ["O músculo masseter.", "A região lacrimal e pálpebra inferior.", "O palato duro.", "A nasofaringe."],
    correctAnswer: 1,
    explanation: "A artéria angular é o terminal da facial, irrigando a região lacrimal e pálpebra inferior.",
    theme: "Vascularização"
  },
  {
    id: "vasc-5",
    question: "Quais são os principais ramos da artéria facial na face?",
    options: ["Ramos labiais e submental.", "Ramos massetérico e infraorbital.", "Ramos esfenopalatino e temporal.", "Ramos occipital e auricular."],
    correctAnswer: 0,
    explanation: "As labiais e a submental são ramos diretos da artéria facial na face.",
    theme: "Vascularização"
  },
  {
    id: "vasc-6",
    question: "A **artéria infraorbital** é um ramo da artéria maxilar. Qual é a sua principal estrutura de passagem?",
    options: ["Forame esfenopalatino.", "Canal infraorbital.", "Forame espinhoso.", "Forame redondo."],
    correctAnswer: 1,
    explanation: "A infraorbital passa pelo canal homônimo e supre o seio maxilar e dentes.",
    theme: "Vascularização"
  },
  {
    id: "vasc-7",
    question: "A **artéria esfenopalatina** é um ramo terminal importante da artéria maxilar. Qual estrutura ela irriga principalmente?",
    options: ["O músculo masseter.", "A mucosa nasal e nasofaringe.", "O palato mole.", "A orelha externa."],
    correctAnswer: 1,
    explanation: "A esfenopalatina é um dos ramos terminais/profundos da artéria maxilar.",
    theme: "Vascularização"
  },
  {
    id: "vasc-8",
    question: "A **artéria temporal superficial** é o menor ramo terminal da ACE. Quais são seus ramos terminais?",
    options: ["Ramos frontal e parietal.", "Ramos labiais e angular.", "Ramos massetérico e infraorbital.", "Ramos occipital e auricular."],
    correctAnswer: 0,
    explanation: "A temporal superficial termina dividindo-se em ramos frontal e parietal para o escalpo.",
    theme: "Vascularização"
  },
  {
    id: "vasc-9",
    question: "A **artéria facial transversa** é um ramo importante durante cirurgias de parótida. Qual é a sua origem?",
    options: ["Artéria facial.", "Artéria temporal superficial.", "Artéria maxilar.", "Artéria lingual."],
    correctAnswer: 1,
    explanation: "A facial transversa nasce da temporal superficial dentro da parótida e cruza o masseter.",
    theme: "Vascularização"
  },
  {
    id: "vasc-10",
    question: "A **artéria auricular posterior** irriga principalmente qual região?",
    options: ["O pavilhão auricular anterior.", "A região retroauricular e orelha.", "O couro cabeludo anterior.", "A região temporal."],
    correctAnswer: 1,
    explanation: "A auricular posterior segue entre o processo mastoide e a orelha, irrigando a região retroauricular.",
    theme: "Vascularização"
  }
];

// QUESTÕES DE VASCULARIZAÇÃO - Segundas 10
const vascularizacao2: Question[] = [
  {
    id: "vasc-11",
    question: "Qual é a principal artéria responsável pela irrigação da **nasofaringe**?",
    options: ["Artéria facial.", "Artéria esfenopalatina.", "Artéria maxilar.", "Artéria temporal superficial."],
    correctAnswer: 1,
    explanation: "A esfenopalatina irriga a mucosa nasal e a nasofaringe.",
    theme: "Vascularização"
  },
  {
    id: "vasc-12",
    question: "Qual artéria irriga principalmente o **seio maxilar e arcada dentária superior**?",
    options: ["Artéria facial.", "Artéria infraorbital.", "Artéria lingual.", "Artéria temporal superficial."],
    correctAnswer: 1,
    explanation: "A infraorbital irriga o seio maxilar e a arcada dentária superior.",
    theme: "Vascularização"
  },
  {
    id: "vasc-13",
    question: "Qual é o trajeto da **artéria facial transversa**?",
    options: ["Profundamente ao músculo masseter.", "Superficialmente ao masseter.", "Medialmente ao músculo hioglosso.", "Lateralmente ao músculo bucinador."],
    correctAnswer: 1,
    explanation: "A facial transversa cruza a face superficialmente ao masseter.",
    theme: "Vascularização"
  },
  {
    id: "vasc-14",
    question: "Qual artéria irriga principalmente o **couro cabeludo posterior**?",
    options: ["Artéria temporal superficial.", "Artéria occipital.", "Artéria auricular posterior.", "Artéria frontal."],
    correctAnswer: 1,
    explanation: "A artéria occipital irriga principalmente o couro cabeludo posterior.",
    theme: "Vascularização"
  },
  {
    id: "vasc-15",
    question: "Qual é a origem da **artéria occipital**?",
    options: ["Artéria carótida interna.", "Artéria carótida externa.", "Artéria subclávia.", "Artéria vertebral."],
    correctAnswer: 1,
    explanation: "A artéria occipital é um ramo posterior da carótida externa.",
    theme: "Vascularização"
  },
  {
    id: "vasc-16",
    question: "Qual artéria irriga principalmente a **glândula parótida**?",
    options: ["Artéria facial.", "Artéria temporal superficial.", "Artéria maxilar.", "Artéria lingual."],
    correctAnswer: 1,
    explanation: "A artéria temporal superficial irriga principalmente a glândula parótida.",
    theme: "Vascularização"
  },
  {
    id: "vasc-17",
    question: "Qual é o principal ramo da **artéria maxilar**?",
    options: ["Artéria infraorbital.", "Artéria esfenopalatina.", "Artéria massetérica.", "Todos os anteriores."],
    correctAnswer: 3,
    explanation: "A maxilar possui vários ramos importantes incluindo infraorbital, esfenopalatina e massetérica.",
    theme: "Vascularização"
  },
  {
    id: "vasc-18",
    question: "Qual nervo acompanha a **artéria facial** em seu trajeto?",
    options: ["Nervo trigêmeo.", "Nervo facial.", "Nervo vago.", "Nervo acessório."],
    correctAnswer: 1,
    explanation: "O nervo facial acompanha a artéria facial em seu trajeto pela face.",
    theme: "Vascularização"
  },
  {
    id: "vasc-19",
    question: "Qual artéria irriga principalmente o **músculo masseter**?",
    options: ["Artéria facial.", "Artéria massetérica.", "Artéria temporal superficial.", "Artéria maxilar."],
    correctAnswer: 1,
    explanation: "A artéria massetérica é um ramo da maxilar que irriga o músculo masseter.",
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
    question: "Um paciente não consegue \"enrolar\" a língua ou alterar seu formato para realizar movimentos finos durante a deglutição, embora consiga movê-la para fora e para dentro. Quais músculos estão provavelmente comprometidos?",
    options: ["Músculos extrínsecos da língua.", "Músculo orbicular da boca.", "Músculos intrínsecos da língua.", "Músculos do diafragma oral."],
    correctAnswer: 2,
    explanation: "Os músculos intrínsecos controlam a forma e os movimentos finos da língua.",
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
    explanation: "Os arcos palatoglosso e palatofaríngeo formam os pilares laterais do istmo das fauces.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-24",
    question: "Um paciente apresenta uma infecção nas tonsilas palatinas. Onde exatamente estas tonsilas estão localizadas?",
    options: ["No assoalho da boca, sob a língua.", "Na fossa tonsilar, entre os arcos palatoglosso e palatofaríngeo.", "No vestíbulo da boca, próximo ao ducto parotídeo.", "Na parte pós-sulcal do dorso da língua."],
    correctAnswer: 1,
    explanation: "As tonsilas palatinas estão localizadas na fossa tonsilar, entre os arcos.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-25",
    question: "Qual músculo atua simultaneamente para tornar a língua longa e estreita, empurrando-a contra os incisivos?",
    options: ["Músculo longitudinal superior.", "Músculo longitudinal inferior.", "Músculos transverso e vertical.", "Músculo hioglosso."],
    correctAnswer: 2,
    explanation: "Os músculos transverso e vertical atuam para tornar a língua longa e estreita.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-26",
    question: "Sobre a vascularização do palato mole, assinale a alternativa CORRETA:",
    options: ["É suprido predominantemente pela artéria carótida interna.", "Recebe sangue da artéria palatina menor e artéria palatina ascendente.", "Sua drenagem venosa é feita diretamente para a veia jugular externa.", "A artéria palatina maior é sua única fonte de suprimento."],
    correctAnswer: 1,
    explanation: "O palato mole recebe sangue da artéria palatina menor e artéria palatina ascendente.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-27",
    question: "Um paciente sofreu um trauma na face e apresenta dificuldade em elevar a parte posterior da língua. Qual músculo, que atua tanto como extrínseco da língua quanto como músculo do palato mole, pode estar afetado?",
    options: ["Músculo tensor do véu palatino.", "Músculo palatoglosso.", "Músculo estiloglosso.", "Músculo genioglosso."],
    correctAnswer: 1,
    explanation: "O músculo palatoglosso atua como extrínseco da língua e músculo do palato mole.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-28",
    question: "No exame da cavidade oral, o médico observa pequenas massas de tecido linfoide na base da língua. Estas massas constituem a:",
    options: ["Tonsila palatina.", "Tonsila faríngea.", "Tonsila lingual.", "Glândula sublingual acessória."],
    correctAnswer: 2,
    explanation: "A tonsila lingual está localizada na base da língua.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-29",
    question: "Qual nervo fornece inervação sensorial tátil e proprioceptiva para as gengivas?",
    options: ["Nervo facial (VII).", "Nervo trigêmeo (V).", "Nervo glossofaríngeo (IX).", "Nervo hipoglosso (XII)."],
    correctAnswer: 1,
    explanation: "O nervo trigêmeo (V) fornece inervação sensorial tátil e proprioceptiva para as gengivas.",
    theme: "Cavidade Oral"
  },
  {
    id: "oral-30",
    question: "Assinale a alternativa que contém apenas músculos intrínsecos da língua:",
    options: ["Genioglosso, Hioglosso e Estiloglosso.", "Milo-hioideo, Gênio-hioideo e Palatoglosso.", "Longitudinal superior, Longitudinal inferior, Transverso e Vertical.", "Tensor do véu palatino e Levantador do véu palatino."],
    correctAnswer: 2,
    explanation: "Os músculos intrínsecos são: Longitudinal superior, Longitudinal inferior, Transverso e Vertical.",
    theme: "Cavidade Oral"
  }
];

// Combinar todas as questões
export const quizzes = [
  {
    id: "coracao",
    title: "Coração e Grandes Vasos",
    description: "Anatomia do coração, circulação e grandes vasos",
    emoji: "❤️",
    questions: coracaoQuestions
  },
  {
    id: "vascularizacao",
    title: "Vascularização do Viscerocrânio e Pescoço",
    description: "Artérias e veias da cabeça e pescoço",
    emoji: "🫀",
    questions: vascularizacaoShuffled
  },
  {
    id: "cavidade-oral",
    title: "Cavidade Oral",
    description: "Anatomia da boca e estruturas relacionadas",
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
        question: "Qual estrutura forma o pavilhão auricular?",
        options: ["Cartilagem elástica", "Osso temporal", "Tecido adiposo", "Fibras musculares"],
        correctAnswer: 0,
        explanation: "O pavilhão auricular é formado por cartilagem elástica.",
        theme: "Orelha"
      },
      {
        id: "orelha-2",
        question: "Quantos ossículos existem na orelha média?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "Existem 3 ossículos: martelo, bigorna e estribo.",
        theme: "Orelha"
      },
      {
        id: "orelha-3",
        question: "Qual é a função da trompa de Eustáquio?",
        options: ["Amplificar sons", "Equilibrar pressão", "Produzir cerúmen", "Proteger o tímpano"],
        correctAnswer: 1,
        explanation: "A trompa de Eustáquio equilibra a pressão entre a orelha média e o ambiente.",
        theme: "Orelha"
      },
      {
        id: "orelha-4",
        question: "Qual estrutura contém os órgãos do equilíbrio?",
        options: ["Orelha externa", "Orelha média", "Orelha interna", "Trompa de Eustáquio"],
        correctAnswer: 2,
        explanation: "A orelha interna contém o labirinto, que possui os órgãos do equilíbrio.",
        theme: "Orelha"
      },
      {
        id: "orelha-5",
        question: "O que é o cerúmen?",
        options: ["Fluido da orelha interna", "Cera do ouvido", "Fluido cerebrospinal", "Linfa"],
        correctAnswer: 1,
        explanation: "O cerúmen é a cera produzida pelas glândulas ceruminosas do conduto auditivo externo.",
        theme: "Orelha"
      },
      {
        id: "orelha-6",
        question: "Qual nervo fornece inervação sensorial ao pavilhão auricular?",
        options: ["Trigêmeo", "Facial", "Vago", "Acessório"],
        correctAnswer: 0,
        explanation: "O nervo trigêmeo fornece inervação sensorial ao pavilhão auricular.",
        theme: "Orelha"
      },
      {
        id: "orelha-7",
        question: "Qual estrutura separa a orelha externa da orelha média?",
        options: ["Trompa de Eustáquio", "Membrana timpânica", "Janela oval", "Caracol"],
        correctAnswer: 1,
        explanation: "A membrana timpânica (tímpano) separa a orelha externa da orelha média.",
        theme: "Orelha"
      },
      {
        id: "orelha-8",
        question: "Qual ossículo está em contato com a membrana timpânica?",
        options: ["Bigorna", "Martelo", "Estribo", "Nenhum"],
        correctAnswer: 1,
        explanation: "O martelo está em contato com a membrana timpânica.",
        theme: "Orelha"
      },
      {
        id: "orelha-9",
        question: "Qual é a função da cóclea?",
        options: ["Equilíbrio", "Audição", "Proteção", "Amplificação"],
        correctAnswer: 1,
        explanation: "A cóclea é responsável pela audição, convertendo vibrações em sinais nervosos.",
        theme: "Orelha"
      },
      {
        id: "orelha-10",
        question: "Qual estrutura contém o órgão de Corti?",
        options: ["Tímpano", "Cóclea", "Vestíbulo", "Trompa de Eustáquio"],
        correctAnswer: 1,
        explanation: "O órgão de Corti está localizado na cóclea e é responsável pela transdução auditiva.",
        theme: "Orelha"
      },
      {
        id: "orelha-11",
        question: "Quantas voltas tem a cóclea?",
        options: ["1", "2", "2,5", "3"],
        correctAnswer: 2,
        explanation: "A cóclea tem 2,5 voltas ao redor do modiolo.",
        theme: "Orelha"
      },
      {
        id: "orelha-12",
        question: "Qual nervo fornece inervação motora aos músculos da orelha?",
        options: ["Trigêmeo", "Facial", "Vago", "Acessório"],
        correctAnswer: 1,
        explanation: "O nervo facial fornece inervação motora aos músculos da orelha.",
        theme: "Orelha"
      },
      {
        id: "orelha-13",
        question: "Qual estrutura forma a janela oval?",
        options: ["Membrana", "Osso", "Cartilagem", "Tecido fibroso"],
        correctAnswer: 0,
        explanation: "A janela oval é formada por uma membrana que separa a orelha média da orelha interna.",
        theme: "Orelha"
      },
      {
        id: "orelha-14",
        question: "Qual é a função do estribo?",
        options: ["Transmitir vibrações para a janela oval", "Amplificar sons", "Produzir cerúmen", "Equilibrar pressão"],
        correctAnswer: 0,
        explanation: "O estribo transmite vibrações para a janela oval, conectando a orelha média à interna.",
        theme: "Orelha"
      },
      {
        id: "orelha-15",
        question: "Qual estrutura contém endolinfa?",
        options: ["Orelha externa", "Orelha média", "Orelha interna", "Trompa de Eustáquio"],
        correctAnswer: 2,
        explanation: "A orelha interna contém endolinfa, um fluido que preenche o labirinto membranoso.",
        theme: "Orelha"
      },
      {
        id: "orelha-16",
        question: "Qual é a função da perilinfa?",
        options: ["Transmitir vibrações", "Lubrificar ossículos", "Preencher espaços do labirinto ósseo", "Produzir cerúmen"],
        correctAnswer: 2,
        explanation: "A perilinfa preenche os espaços entre o labirinto ósseo e o membranoso.",
        theme: "Orelha"
      },
      {
        id: "orelha-17",
        question: "Qual estrutura é responsável pelo reflexo vestibular-ocular?",
        options: ["Cóclea", "Vestíbulo", "Tímpano", "Trompa de Eustáquio"],
        correctAnswer: 1,
        explanation: "O vestíbulo é responsável pelo reflexo vestibular-ocular, que estabiliza a visão durante movimentos.",
        theme: "Orelha"
      },
      {
        id: "orelha-18",
        question: "Quantos canais semicirculares existem?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation: "Existem 3 canais semicirculares: anterior, posterior e lateral.",
        theme: "Orelha"
      },
      {
        id: "orelha-19",
        question: "Qual nervo é responsável pela audição?",
        options: ["Trigêmeo", "Facial", "Vestibulococlear", "Vago"],
        correctAnswer: 2,
        explanation: "O nervo vestibulococlear (VIII par craniano) é responsável pela audição e equilíbrio.",
        theme: "Orelha"
      },
      {
        id: "orelha-20",
        question: "Qual estrutura protege a orelha interna?",
        options: ["Cartilagem", "Osso temporal", "Membrana timpânica", "Cerúmen"],
        correctAnswer: 1,
        explanation: "O osso temporal protege a orelha interna, que está localizada em seu interior.",
        theme: "Orelha"
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
        id: "olho-1",
        question: "Qual é a camada mais externa do olho?",
        options: ["Coróide", "Retina", "Esclera", "Íris"],
        correctAnswer: 2,
        explanation: "A esclera é a camada mais externa do olho, formada por tecido fibroso branco.",
        theme: "Olho"
      },
      {
        id: "olho-2",
        question: "Qual estrutura é responsável pela refração de luz?",
        options: ["Retina", "Córnea", "Íris", "Cristalino"],
        correctAnswer: 1,
        explanation: "A córnea é a principal estrutura responsável pela refração de luz no olho.",
        theme: "Olho"
      },
      {
        id: "olho-3",
        question: "Qual é a função da íris?",
        options: ["Refração de luz", "Controlar o tamanho da pupila", "Focar imagens", "Absorver luz"],
        correctAnswer: 1,
        explanation: "A íris controla o tamanho da pupila para regular a quantidade de luz que entra no olho.",
        theme: "Olho"
      },
      {
        id: "olho-4",
        question: "Qual estrutura contém os fotorreceptores?",
        options: ["Coróide", "Retina", "Esclera", "Cristalino"],
        correctAnswer: 1,
        explanation: "A retina contém os fotorreceptores (bastonetes e cones) responsáveis pela visão.",
        theme: "Olho"
      },
      {
        id: "olho-5",
        question: "Qual é a função do cristalino?",
        options: ["Absorver luz", "Focar imagens na retina", "Controlar a pupila", "Produzir lágrimas"],
        correctAnswer: 1,
        explanation: "O cristalino muda de forma para focar imagens na retina, permitindo a visão clara.",
        theme: "Olho"
      },
      {
        id: "olho-6",
        question: "Qual estrutura produz o humor aquoso?",
        options: ["Retina", "Coróide", "Corpo ciliar", "Esclera"],
        correctAnswer: 2,
        explanation: "O corpo ciliar produz o humor aquoso, que mantém a pressão intraocular.",
        theme: "Olho"
      },
      {
        id: "olho-7",
        question: "Qual é a função da coróide?",
        options: ["Refração de luz", "Nutrir a retina", "Controlar a pupila", "Produzir lágrimas"],
        correctAnswer: 1,
        explanation: "A coróide fornece nutrição e oxigênio para a retina.",
        theme: "Olho"
      },
      {
        id: "olho-8",
        question: "Qual estrutura é responsável pela visão em cores?",
        options: ["Bastonetes", "Cones", "Bastões", "Células ganglionares"],
        correctAnswer: 1,
        explanation: "Os cones são responsáveis pela visão em cores e pela visão em alta luminosidade.",
        theme: "Olho"
      },
      {
        id: "olho-9",
        question: "Qual é a função dos bastonetes?",
        options: ["Visão em cores", "Visão em baixa luminosidade", "Refração de luz", "Controlar a pupila"],
        correctAnswer: 1,
        explanation: "Os bastonetes são responsáveis pela visão em baixa luminosidade (visão noturna).",
        theme: "Olho"
      },
      {
        id: "olho-10",
        question: "Qual estrutura contém o ponto cego?",
        options: ["Fóvea central", "Disco óptico", "Mácula", "Cristalino"],
        correctAnswer: 1,
        explanation: "O disco óptico (ponto cego) é onde o nervo óptico sai do olho, não tendo fotorreceptores.",
        theme: "Olho"
      },
      {
        id: "olho-11",
        question: "Qual é a função da fóvea central?",
        options: ["Visão periférica", "Visão central de alta resolução", "Produzir lágrimas", "Controlar a pupila"],
        correctAnswer: 1,
        explanation: "A fóvea central é responsável pela visão central de alta resolução e cores.",
        theme: "Olho"
      },
      {
        id: "olho-12",
        question: "Qual nervo é responsável pela visão?",
        options: ["Trigêmeo", "Facial", "Óptico", "Oculomotor"],
        correctAnswer: 2,
        explanation: "O nervo óptico (II par craniano) é responsável pela transmissão de sinais visuais ao cérebro.",
        theme: "Olho"
      },
      {
        id: "olho-13",
        question: "Qual estrutura lubrifica o olho?",
        options: ["Humor aquoso", "Humor vítreo", "Lágrimas", "Cerúmen"],
        correctAnswer: 2,
        explanation: "As lágrimas lubrificam e protegem a superfície do olho.",
        theme: "Olho"
      },
      {
        id: "olho-14",
        question: "Qual é a função do humor vítreo?",
        options: ["Manter a pressão intraocular", "Manter a forma do olho e permitir a passagem de luz", "Lubrificar o olho", "Produzir lágrimas"],
        correctAnswer: 1,
        explanation: "O humor vítreo mantém a forma do olho e permite a passagem de luz até a retina.",
        theme: "Olho"
      },
      {
        id: "olho-15",
        question: "Qual estrutura forma a câmara anterior do olho?",
        options: ["Entre a córnea e o cristalino", "Entre o cristalino e a retina", "Entre a esclera e a coróide", "Entre a retina e o nervo óptico"],
        correctAnswer: 0,
        explanation: "A câmara anterior é o espaço entre a córnea e o cristalino, preenchido com humor aquoso.",
        theme: "Olho"
      },
      {
        id: "olho-16",
        question: "Qual estrutura forma a câmara posterior do olho?",
        options: ["Entre a córnea e o cristalino", "Entre o cristalino e a retina", "Entre a esclera e a coróide", "Entre a retina e o nervo óptico"],
        correctAnswer: 1,
        explanation: "A câmara posterior é o espaço entre o cristalino e a retina, preenchido com humor vítreo.",
        theme: "Olho"
      },
      {
        id: "olho-17",
        question: "Qual glândula produz lágrimas?",
        options: ["Glândula salivar", "Glândula lacrimal", "Glândula sebácea", "Glândula sudorípara"],
        correctAnswer: 1,
        explanation: "A glândula lacrimal produz lágrimas que lubrificam e protegem o olho.",
        theme: "Olho"
      },
      {
        id: "olho-18",
        question: "Qual estrutura drena as lágrimas?",
        options: ["Pálpebra", "Canalículo lacrimal", "Conjuntiva", "Córnea"],
        correctAnswer: 1,
        explanation: "Os canalículos lacrimais drenam as lágrimas para o saco lacrimal.",
        theme: "Olho"
      },
      {
        id: "olho-19",
        question: "Qual é a função da conjuntiva?",
        options: ["Refração de luz", "Proteção e lubrificação", "Focar imagens", "Absorver luz"],
        correctAnswer: 1,
        explanation: "A conjuntiva protege e lubrifica a superfície anterior do olho.",
        theme: "Olho"
      },
      {
        id: "olho-20",
        question: "Qual estrutura protege o olho mecanicamente?",
        options: ["Retina", "Pálpebras", "Coróide", "Esclera"],
        correctAnswer: 1,
        explanation: "As pálpebras protegem o olho mecanicamente e ajudam a lubrificá-lo.",
        theme: "Olho"
      }
    ]
  }
];
