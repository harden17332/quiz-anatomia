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
export const quizData = [
  {
    id: "coracao",
    title: "Coração",
    description: "Anatomia do coração e grandes vasos",
    emoji: "❤️",
    questions: coracaoQuestions
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
        question: "Um paciente de 25 anos apresenta uma laceração no terço lateral do meato acústico externo após uso inadequado de haste flexível. Durante o exame, o médico observa sangramento. Qual a constituição anatômica predominante dessa região atingida e sua provável nutrição arterial?",
        options: ['Óssea; artéria caroticotimpânica.', 'Cartilagínea; ramos da artéria carótida externa.', 'Fibrosa; artéria timpânica anterior.', 'Membranácea; artéria labiríntica.'],
        correctAnswer: 1,
        explanation: "O terço lateral do meato é cartilagíneo e nutrido por ramos da carótida externa (temporal superficial e auricular posterior) [1-3].",
        theme: "Orelha"
      },
      {
        id: "orelha-2",
        question: "Durante uma cirurgia de mastoidectomia, o cirurgião deve ter cautela com o músculo estapédio. Sobre esse músculo, assinale a alternativa CORRETA:",
        options: ['É suprido pelo ramo mandibular do nervo trigêmeo (V3).', 'Atua na regulação da tensão da membrana timpânica.', 'É suprido pelo nervo facial (VII par).', 'Encontra-se ancorado ao cabo do martelo.'],
        correctAnswer: 2,
        explanation: "O músculo estapédio é suprido pelo nervo facial (VII) e regula a tensão do estribo [4-6].",
        theme: "Orelha"
      },
      {
        id: "orelha-3",
        question: "Uma criança apresenta otite média com acúmulo de secreção purulenta na cavidade timpânica. Anatomicamente, em qual osso se localiza essa câmara e qual estrutura a conecta à nasofaringe?",
        options: ['Porção escamosa do osso temporal; meato acústico interno.', 'Porção petrosa do osso temporal; tuba auditiva.', 'Porção mastóidea do osso temporal; aqueduto do vestíbulo.', 'Canal carótico; recesso epitimpânico.'],
        correctAnswer: 1,
        explanation: "A orelha média fica na porção petrosa e a tuba auditiva a conecta à nasofaringe [5, 7].",
        theme: "Orelha"
      },
      {
        id: "orelha-4",
        question: "Um paciente queixa-se de dor intensa na região da aurícula após um trauma. O médico explica que a inervação sensitiva dessa área é complexa. Qual dos seguintes nervos NÃO participa da inervação sensitiva da aurícula?",
        options: ['Nervo vago.', 'Nervo auriculotemporal (V3).', 'Nervo facial.', 'Nervo hipoglosso (XII par).'],
        correctAnswer: 3,
        explanation: "O hipoglosso é motor para a língua; a aurícula é inervada por V3, VII, X e ramos cervicais (C2/C3) [3, 8, 9].",
        theme: "Orelha"
      },
      {
        id: "orelha-5",
        question: "Durante um exame de otoscopia, o médico visualiza a membrana timpânica e identifica o \"cone de luz\". Sobre a anatomy desta membrana, assinale a alternativa INCORRETA:",
        options: ['Possui cerca de 1 cm de diâmetro.', 'É recoberta por pele externamente e por mucosa internamente.', 'Divide o meato acústico externo da cavidade timpânica.', 'É uma estrutura puramente óssea da porção timpânica do temporal.'],
        correctAnswer: 3,
        explanation: "A membrana timpânica é uma membrana fina e semitransparente, não um osso [3, 9].",
        theme: "Orelha"
      },
      {
        id: "orelha-6",
        question: "Um paciente apresenta um quadro de vertigem severa após trauma craniano. O médico suspeita de lesão no labirinto membranáceo. Quais estruturas compõem essa parte da orelha interna e qual líquido contêm?",
        options: ['Cóclea e vestíbulo; perilinfa.', 'Ducto coclear, utrículo e sáculo; endolinfa.', 'Canais semicirculares e cóclea; perilinfa.', 'Meato acústico interno e janela oval; cerume.'],
        correctAnswer: 1,
        explanation: "O labirinto membranáceo contém endolinfa e inclui o ducto coclear, utrículo, sáculo e ductos semicirculares [8, 10, 11].",
        theme: "Orelha"
      },
      {
        id: "orelha-7",
        question: "Um tumor glômico na orelha média pode afetar a vascularização local. Quais são as principais fontes arteriais da orelha média conforme os slides?",
        options: ['Ramos das artérias carótida externa e carótida interna.', 'Apenas ramos da artéria maxilar.', 'Artéria labiríntica e artéria basilar.', 'Artérias vertebrais e subclávias.'],
        correctAnswer: 0,
        explanation: "A nutrição vem de ramos da carótida externa (maxilar, auricular posterior, etc.) e caroticotimpânicas da carótida interna [5, 12, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-8",
        question: "Após um mergulho profundo, um mergulhador sente dificuldade em equilibrar a pressão nos ouvidos. Qual estrutura é responsável por manter o equilíbrio pressórico entre a orelha média e a atmosfera?",
        options: ['Meato acústico externo.', 'Tuba auditiva.', 'Canais semicirculares.', 'Janela redonda.'],
        correctAnswer: 1,
        explanation: "A tuba auditiva mantém o equilíbrio pressórico conectando a orelha média à nasofaringe [4, 7].",
        theme: "Orelha"
      },
      {
        id: "orelha-9",
        question: "Em um caso de surdez de condução, o problema pode estar nos ossículos da audição. Qual a sequência correta de transmissão do som entre esses ossículos?",
        options: ['Estribo → Bigorna → Martelo.', 'Martelo → Estribo → Bigorna.', 'Martelo → Bigorna → Estribo.', 'Bigorna → Martelo → Estribo.'],
        correctAnswer: 2,
        explanation: "A ordem é Martelo (no tímpano) → Bigorna → Estribo (na janela oval) [4, 5, 12].",
        theme: "Orelha"
      },
      {
        id: "orelha-10",
        question: "Um paciente apresenta perda de audição, mas mantém o equilíbrio preservado. Anatomicamente, qual estrutura da orelha interna é especificamente responsável pela audição?",
        options: ['Utrículo.', 'Sáculo.', 'Ducto coclear.', 'Ductos semicirculares.'],
        correctAnswer: 2,
        explanation: "O ducto coclear responde pela audição, enquanto utrículo/sáculo/canais pelo equilíbrio [10, 11].",
        theme: "Orelha"
      },
      {
        id: "orelha-11",
        question: "Qual artéria é responsável pela nutrição da orelha interna e de qual vaso ela é ramo?",
        options: ['Artéria timpânica posterior; ramo da auricular posterior.', 'Artéria labiríntica; ramo da artéria basilar.', 'Artéria maxilar; ramo da carótida externa.', 'Artéria meníngea média; ramo da maxilar.'],
        correctAnswer: 1,
        explanation: "A artéria labiríntica é ramo da basilar (formada pelas vertebrais) [10, 14, 15].",
        theme: "Orelha"
      },
      {
        id: "orelha-12",
        question: "Assinale a alternativa CORRETA sobre a drenagem venosa da orelha interna:",
        options: ['A veia labiríntica drena para a veia jugular externa.', 'A veia labiríntica drena para a veia cerebelar anterior, conectando-se aos seios cavernoso e transverso.', 'Drena diretamente para a veia subclávia.', 'Não possui drenagem venosa própria, apenas linfática.'],
        correctAnswer: 1,
        explanation: "A drenagem venosa segue esse caminho específico para os seios durais [14, 15].",
        theme: "Orelha"
      },
      {
        id: "orelha-13",
        question: "Um paciente apresenta paralisia do nervo trigêmeo (ramo mandibular). Qual função muscular da orelha média será afetada?",
        options: ['Contração do músculo estapédio.', 'Tensão do músculo tensor do tímpano.', 'Dilatação da tuba auditiva.', 'Vibração da membrana timpânica secundária.'],
        correctAnswer: 1,
        explanation: "O n. mandibular (V3) inerva o músculo tensor do tímpano [4, 8, 12].",
        theme: "Orelha"
      },
      {
        id: "orelha-14",
        question: "A orelha média divide-se em duas partes principais. Quais são elas?",
        options: ['Labirinto ósseo e membranoso.', 'Pavilhão auricular e meato acústico.', 'Cavidade timpânica propriamente dita e recesso epitimpânico.', 'Cóclea e vestíbulo.'],
        correctAnswer: 2,
        explanation: "Divide-se em cavidade timpânica e recesso epitimpânico [4, 5, 7].",
        theme: "Orelha"
      },
      {
        id: "orelha-15",
        question: "Sobre a inervação do meato acústico externo, qual nervo supre o território póstero-inferior?",
        options: ['Nervo vago (X par).', 'Nervo auriculotemporal (V3).', 'Nervo auricular magno (C2-C3).', 'Nervo occipital menor (C2).'],
        correctAnswer: 0,
        explanation: "O nervo vago inerva o território póstero-inferior do meato [2, 3].",
        theme: "Orelha"
      },
      {
        id: "orelha-16",
        question: "Onde se encaixa a base do estribo para transmitir as vibrações para a orelha interna?",
        options: ['Janela redonda.', 'Janela oval (do vestíbulo).', 'Membrana timpânica secundária.', 'Promontório.'],
        correctAnswer: 1,
        explanation: "A base do estribo se encaixa na janela oval do vestíbulo [11, 15, 16].",
        theme: "Orelha"
      },
      {
        id: "orelha-17",
        question: "Qual a função primordial da orelha média descrita nos materiais?",
        options: ['Captar as ondas sonoras.', 'Transformar sinais mecânicos em elétricos.', 'Transformar uma onda sonora de alta em baixa amplitude.', 'Detectar a posição e o movimento da cabeça.'],
        correctAnswer: 2,
        explanation: "Função central de transformar som de alta em baixa amplitude [7, 8, 16].",
        theme: "Orelha"
      },
      {
        id: "orelha-18",
        question: "As glândulas ceruminosas e sebáceas, responsáveis pela produção de cerume, estão localizadas em qual parte da orelha?",
        options: ['Cavidade timpânica.', 'Meato acústico externo.', 'Recesso epitimpânico.', 'Utrículo e sáculo.'],
        correctAnswer: 1,
        explanation: "Presentes no meato acústico externo para produzir cerume [3, 9, 16].",
        theme: "Orelha"
      },
      {
        id: "orelha-19",
        question: "Qual nervo é responsável por levar os sinais elétricos da orelha interna ao córtex temporal?",
        options: ['Nervo facial (VII).', 'Nervo trigêmeo (V).', 'Nervo vestibulococlear (VIII).', 'Nervo vago (X).'],
        correctAnswer: 2,
        explanation: "O VIII par (vestibulococlear) leva os estímulos ao córtex temporal [4, 13].",
        theme: "Orelha"
      },
      {
        id: "orelha-20",
        question: "A orelha externa é constituída por:",
        options: ['Martelo, bigorna e estribo.', 'Cóclea e canais semicirculares.', 'Aurícula e meato acústico externo.', 'Tuba auditiva e cavidade timpânica.'],
        correctAnswer: 2,
        explanation: "Composta por aurícula (pavilhão) e meato acústico externo [1, 8, 16].",
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
        options: ['Elevação com abdução.', 'Depressão com abdução.', 'Adução pura.', 'Fechamento da pálpebra.'],
        correctAnswer: 1,
        explanation: "O reto inferior realiza depressão com abdução [6, 22, 23].",
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
      }
    ]
  }
];
