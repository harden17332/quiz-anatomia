export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  theme: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  emoji: string;
  category: "Anatomia" | "Fisiologia";
  questions: Question[];
}

export const coracaoQuestions: Question[] = [
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

export const toraxQuestions: Question[] = [
{
        id: "torax-1",
        question: "Um paciente de 60 anos é diagnosticado com tumor de esôfago em estágio avançado. De acordo com a aula transcrita, por que as vísceras torácicas costumam apresentar diagnósticos tardios?",
        options: ["Devido à pressão subatmosférica constante no mediastino posterior.", "Porque são protegidas pelo arcabouço ósseo e muscular, tornando as doenças oligossintomáticas [1, 2].", "Pelo fato de a pleura visceral possuir alta sensibilidade dolorosa, mascarando o tumor.", "Porque o esôfago localiza-se no mediastino médio, área de difícil visualização."],
        correctAnswer: 1,
        explanation: "Conforme a transcrição [1, 2], a proteção óssea torna as doenças oligossintomáticas.",
        theme: "Tórax"
      },
{
        id: "torax-2",
        question: "Durante a aula, o professor define o mediastino como o espaço entre os pulmões. Qual estrutura ele cita como o limite superior exato dessa região?",
        options: ["Cartilagem cricoide.", "Manúbrio do esterno.", "Fúrcula esternal (abertura torácica superior) [3, 4].", "Vértebra cervical C7."],
        correctAnswer: 2,
        explanation: "Limite superior definido como fúrcula esternal [3, 4].",
        theme: "Tórax"
      },
{
        id: "torax-3",
        question: "Sobre o mediastino inferior, o professor explica que ele é subdividido em anterior, médio e posterior. Qual a estrutura de referência para essa divisão?",
        options: ["O esôfago torácico.", "O pericárdio [3, 5].", "A traqueia torácica.", "A quarta vértebra torácica (T4)."],
        correctAnswer: 1,
        explanation: "O pericárdio é a referência para dividir o mediastino inferior [3, 5].",
        theme: "Tórax"
      },
{
        id: "torax-4",
        question: "Um aluno observa uma massa no mediastino superior de um paciente adulto. Além do timo, qual estrutura o professor menciona que pode aparecer esporadicamente nessa região?",
        options: ["Veia ázigos.", "Tronco simpático.", "Bócio mergulhante da glândula tireoide [3, 6, 7].", "Coração e pericárdio."],
        correctAnswer: 2,
        explanation: "O bócio mergulhante é citado como conteúdo esporádico superior [3, 6, 7].",
        theme: "Tórax"
      },
{
        id: "torax-5",
        question: "Qual das seguintes estruturas está localizada no mediastino posterior, conforme a lista de conteúdos do professor?",
        options: ["Timo e raízes dos grandes vasos.", "Veia ázigos e ducto torácico [6, 8-10].", "Hilos pulmonares e pericárdio.", "Traqueia torácica e nervo frênico."],
        correctAnswer: 1,
        explanation: "Ázigos e ducto torácico são clássicos do mediastino posterior [6, 8-10].",
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
        question: "Segundo os slides e a transcrição, em quais compartimentos o timo pode ser encontrado?",
        options: ["Apenas no mediastino superior.", "No superior e no inferior anterior [6, 8, 12].", "No inferior médio e posterior.", "Apenas no mediastino posterior."],
        correctAnswer: 1,
        explanation: "O timo ocupa o superior e o inferior anterior [6, 8, 12].",
        theme: "Tórax"
      },
{
        id: "torax-8",
        question: "O professor afirma que \"tudo que está embaixo do diafragma está no abdômen\". Qual o limite posterior do mediastino que vai de T1 a T12?",
        options: ["Arcos costais.", "Esterno.", "Coluna vertebral torácica (coluna dorsal) [3, 6, 13].", "Músculos intercostais."],
        correctAnswer: 2,
        explanation: "A coluna vertebral torácica é o limite posterior [3, 6, 13].",
        theme: "Tórax"
      },
{
        id: "torax-9",
        question: "Assinale a alternativa CORRETA sobre a divisão do mediastino entre superior e inferior:",
        options: ["Ocorre no nível do processo xifoide.", "É feita por uma linha imaginária no nível da 4ª vértebra torácica (T4) [6, 14].", "O mediastino inferior termina no nível de T10.", "O mediastino superior contém o esôfago torácico em toda sua extensão."],
        correctAnswer: 1,
        explanation: "O plano transverso do tórax passa em T4 [6, 14].",
        theme: "Tórax"
      },
{
        id: "torax-10",
        question: "Qual nervo o professor descreve como o responsável pela inervação do músculo diafragma?",
        options: ["Nervo vago.", "Nervo frênico [3, 15, 16].", "Nervo intercostal.", "Nervo hipoglosso."],
        correctAnswer: 1,
        explanation: "O nervo frênico inerva o diafragma [3, 15, 16].",
        theme: "Tórax"
      },
{
        id: "torax-11",
        question: "Sobre a pleura visceral, qual característica o professor enfatiza em sua explicação?",
        options: ["Ela reveste a parede interna da caixa torácica.", "É sensível à dor através dos nervos intercostais.", "É aderida intrinsecamente ao parênquima pulmonar e não pode ser descolada [6, 17, 18].", "É vascularizada exclusivamente pela artéria torácica interna."],
        correctAnswer: 2,
        explanation: "A pleura visceral é aderida e não descolável [6, 17, 18].",
        theme: "Tórax"
      },
{
        id: "torax-12",
        question: "O espaço entre as pleuras parietal e visceral é normalmente virtual. O que caracteriza o \"pneumotórax\" citado em aula?",
        options: ["Acúmulo de líquido por desequilíbrio de absorção.", "Presença de sangue por trauma.", "Presença de ar, tornando o espaço real [6, 17, 19].", "Acúmulo de linfa por lesão do ducto torácico."],
        correctAnswer: 2,
        explanation: "Ar no espaço pleural torna-o real (pneumotórax) [6, 17, 19].",
        theme: "Tórax"
      },
{
        id: "torax-13",
        question: "Qual é a função primordial da pleura no que tange à pressão, conforme os slides?",
        options: ["Manter a pressão positiva para facilitar a expiração.", "Manter a pressão negativa (subatmosférica) para evitar o colabamento pulmonar [6, 17, 20].", "Igualar a pressão pulmonar à pressão atmosférica.", "Produzir 1000 ml de líquido pleural por minuto."],
        correctAnswer: 1,
        explanation: "A pressão negativa evita o colapso pulmonar [6, 17, 20].",
        theme: "Tórax"
      },
{
        id: "torax-14",
        question: "Um paciente apresenta uma \"dor pleurítica\". Segundo os materiais, qual camada da pleura é sensível à dor e por quais nervos?",
        options: ["Pleura visceral; plexo pulmonar.", "Pleura parietal; nervos intercostais e nervo frênico [16, 21].", "Pleura parietal mediastínica; apenas nervo vago.", "Ambas as pleuras são igualmente sensíveis."],
        correctAnswer: 1,
        explanation: "A pleura parietal é a camada sensível [16, 21].",
        theme: "Tórax"
      },
{
        id: "torax-15",
        question: "De acordo com as anotações sobre os recessos pleurais, qual deles \"some\" ou desaparece especificamente em casos de pneumotórax (ar)?",
        options: ["Recesso costofrênico.", "Recesso cardiofrênico.", "Recesso apical [22-24].", "Recesso diafragmático."],
        correctAnswer: 2,
        explanation: "O recesso apical é o primeiro a sumir no pneumotórax [22-24].",
        theme: "Tórax"
      },
{
        id: "torax-16",
        question: "O \"selo d'água\" é um mecanismo mencionado na aula para drenagem torácica. Sua função principal é:",
        options: ["Lavar a cavidade pleural.", "Impedir a comunicação do meio exterior com a cavidade (evitar que o ar entre) [25].", "Produzir líquido pleural artificial.", "Aumentar a pressão negativa durante a inspiração."],
        correctAnswer: 1,
        explanation: "O selo d'água impede a entrada de ar [25].",
        theme: "Tórax"
      },
{
        id: "torax-17",
        question: "Qual artéria é responsável pela vascularização da pleura parietal diafragmática, conforme a lista técnica fornecida?",
        options: ["Artéria torácica interna.", "Artéria intercostal.", "Artéria brônquica.", "Artéria musculofrênica [6, 8, 26]."],
        correctAnswer: 3,
        explanation: "A artéria musculofrênica supre essa região [6, 8, 26].",
        theme: "Tórax"
      },
{
        id: "torax-18",
        question: "O professor cita que o acúmulo de sangue no espaço pleural é chamado de hemotórax. Qual a causa mais comum apresentada por ele?",
        options: ["Pneumonia.", "Insuficiência cardíaca.", "Trauma (acidentes de carro, arma branca) [17, 27].", "Câncer de pulmão avançado."],
        correctAnswer: 2,
        explanation: "Traumas são a causa principal de hemotórax [17, 27].",
        theme: "Tórax"
      },
{
        id: "torax-19",
        question: "A pleura parietal mediastínica recebe suprimento sanguíneo de qual vaso?",
        options: ["Artéria torácica interna [6, 8, 26].", "Artéria brônquica.", "Artéria musculofrenica.", "Artéria aorta descendente."],
        correctAnswer: 0,
        explanation: "A artéria torácica interna supre a pleura mediastínica [6, 8, 26].",
        theme: "Tórax"
      },
{
        id: "torax-20",
        question: "Como o professor descreve os \"recessos pleurais\"?",
        options: ["Espaços que nunca somem, mesmo em doenças.", "Cavidades no espaço pleural que aparecem durante a expiração [23, 28].", "Estruturas que fixam o pulmão ao diafragma.", "Locais de entrada dos brônquios principais."],
        correctAnswer: 1,
        explanation: "São espaços de reserva que aparecem na expiração [23, 28].",
        theme: "Tórax"
      },
{
        id: "torax-21",
        question: "Ao descrever o pulmão direito, quais características o diferenciam do esquerdo nos slides?",
        options: ["Possui 2 lobos e é mais leve.", "Possui 3 lobos e 2 fissuras (horizontal e oblíqua) [23, 29].", "Apresenta incisura cardíaca e língula.", "É mais longo e estreito."],
        correctAnswer: 1,
        explanation: "O pulmão direito tem 3 lobos e 2 fissuras [23, 29].",
        theme: "Tórax"
      },
{
        id: "torax-22",
        question: "\"Estrutura no lobo superior esquerdo que representa anatomicamente o que seria o lobo médio\". Esta definição refere-se à:",
        options: ["Carina.", "Incisura cardíaca.", "Língula [17, 23, 30].", "Base pulmonar."],
        correctAnswer: 2,
        explanation: "A língula é o equivalente ao lobo médio no pulmão esquerdo [17, 23, 30].",
        theme: "Tórax"
      },
{
        id: "torax-23",
        question: "Qual a disposição anatômica das estruturas no hilo do pulmão direito (de cima para baixo), conforme exigido para a prova?",
        options: ["Artéria, Brônquio, Veia (ABV).", "Brônquio, Artéria, Veia (BAV) [23, 31].", "Veia, Artéria, Brônquio (VAB).", "Veia, Brônquio, Artéria (VBA)."],
        correctAnswer: 1,
        explanation: "No hilo direito a ordem é BAV [23, 31].",
        theme: "Tórax"
      },
{
        id: "torax-24",
        question: "No pulmão esquerdo, qual a disposição das estruturas no hilo?",
        options: ["Artéria, Brônquio, Veia (ABV) [23, 32].", "Brônquio, Artéria, Veia (BAV).", "Veia, Brônquio, Artéria.", "Artéria, Veia, Brônquio."],
        correctAnswer: 0,
        explanation: "No hilo esquerdo a ordem é ABV [23, 32].",
        theme: "Tórax"
      },
{
        id: "torax-25",
        question: "Por que corpos estranhos aspirados tendem a se alojar no brônquio principal direito?",
        options: ["Por ele ser mais longo e horizontal.", "Por ele ser mais curto e verticalizado [6, 23, 33].", "Devido à presença da carina desviada para a direita.", "Porque o brônquio esquerdo é mais calibroso."],
        correctAnswer: 1,
        explanation: "O brônquio direito é mais vertical e curto [6, 23, 33].",
        theme: "Tórax"
      },
{
        id: "torax-26",
        question: "A traqueia estende-se anatomicamente entre quais pontos?",
        options: ["Da laringe até T12.", "Da cartilagem tireoide até os brônquios lobares.", "Da cartilagem cricoide até a carina [6, 13].", "Do osso hioide até o manúbrio."],
        correctAnswer: 2,
        explanation: "Vai da cricoide (C6) até a carina (T4) [6, 13].",
        theme: "Tórax"
      },
{
        id: "torax-27",
        question: "Qual a sequência correta da árvore brônquica até a hematose, conforme o esquema do professor?",
        options: ["Traqueia → Carina → Brônquio Principal → Brônquio Lobar → Brônquio Segmentar → Bronquíolos → Alvéolos [6, 23, 34].", "Traqueia → Brônquio Segmentar → Brônquio Lobar → Bronquíolo.", "Carina → Bronquíolo Terminal → Brônquio Principal.", "Brônquio Principal → Alvéolo → Bronquíolo."],
        correctAnswer: 0,
        explanation: "Sequência completa da árvore brônquica [6, 23, 34].",
        theme: "Tórax"
      },
{
        id: "torax-28",
        question: "Onde ocorre a hematose (troca gasosa) propriamente dita?",
        options: ["Nos brônquios principais.", "Nos brônquios lobares.", "Nos bronquíolos terminais e alvéolos [6, 34].", "Na carina."],
        correctAnswer: 2,
        explanation: "A hematose ocorre nos alvéolos e bronquíolos respiratórios [6, 34].",
        theme: "Tórax"
      },
{
        id: "torax-29",
        question: "O professor menciona a \"Asma Brônquica\". Qual o problema anatômico descrito por ele nessa condição?",
        options: ["Ruptura dos alvéolos por pressão negativa.", "Dificuldade na passagem do ar devido ao edema da árvore brônquica [21, 35].", "Presença de líquido no espaço pleural.", "Fibrose das artérias pulmonares."],
        correctAnswer: 1,
        explanation: "A asma causa edema e broncoconstrição [21, 35].",
        theme: "Tórax"
      },
{
        id: "torax-30",
        question: "No pulmão direito, a fissura horizontal separa quais lobos?",
        options: ["Lobo médio do inferior.", "Lobo superior do inferior.", "Lobo superior do médio [23, 36].", "Não existe fissura horizontal no pulmão direito."],
        correctAnswer: 2,
        explanation: "A fissura horizontal separa os lobos superior e médio [23, 36].",
        theme: "Tórax"
      },
{
        id: "torax-31",
        question: "Sobre o sistema linfático, qual a definição de \"Cisterna do Quilo\"?",
        options: ["Local onde desemboca o ducto torácico.", "Parte mais dilatada do sistema linfático, onde se forma o ducto torácico [17, 22, 37, 38].", "Conjunto de linfonodos localizados no hilo pulmonar.", "Vaso que drena a linfa da face e pescoço."],
        correctAnswer: 1,
        explanation: "Definição anatômica da cisterna do quilo [17, 22, 37, 38].",
        theme: "Tórax"
      },
{
        id: "torax-32",
        question: "O ducto torácico desemboca em qual local específico?",
        options: ["Veia cava superior.", "Veia ázigos.", "Junção das veias subclávia e jugular interna esquerdas [17, 22, 39, 40].", "Átrio direito."],
        correctAnswer: 2,
        explanation: "Desemboca no ângulo venoso esquerdo [17, 22, 39, 40].",
        theme: "Tórax"
      },
{
        id: "torax-33",
        question: "O sistema ázigos realiza a drenagem da parede posterior do tórax. A veia hemiázigos (esquerda) é formada pela junção de quais vasos?",
        options: ["Veia renal e veia porta.", "Veia lombar ascendente e subcostal esquerda [6, 17, 41].", "Veia intercostal anterior e posterior.", "Veia cava inferior e superior."],
        correctAnswer: 1,
        explanation: "Formação da veia hemiázigos [6, 17, 41].",
        theme: "Tórax"
      },
{
        id: "torax-34",
        question: "O hiato esofágico do diafragma localiza-se no nível de T10. Além do esôfago, o que mais passa por essa abertura?",
        options: ["Ducto torácico.", "Troncos vagais anterior e posterior [42-44].", "Veia ázigos.", "Artéria aorta."],
        correctAnswer: 1,
        explanation: "Esôfago e nervos vagos passam em T10 [42-44].",
        theme: "Tórax"
      },
{
        id: "torax-35",
        question: "No nível de T12, o diafragma possui o hiato aórtico. Quais estruturas passam por ele?",
        options: ["Aorta, ducto torácico e veia ázigos [42-44].", "Aorta e nervo frênico.", "Veia cava inferior e nervos vagos.", "Apenas a artéria aorta."],
        correctAnswer: 0,
        explanation: "Aorta, ducto torácico e ázigos passam em T12 [42-44].",
        theme: "Tórax"
      },
{
        id: "torax-36",
        question: "A artéria torácica interna é ramo de qual vaso importante?",
        options: ["Artéria aorta torácica.", "Artéria subclávia [45-47].", "Artéria carótida comum.", "Artéria brônquica."],
        correctAnswer: 1,
        explanation: "A torácica interna nasce da subclávia [45-47].",
        theme: "Tórax"
      },
{
        id: "torax-37",
        question: "As artérias intercostais posteriores são ramos de qual estrutura?",
        options: ["Artéria torácica interna.", "Artéria musculofrênica.", "Artéria aorta descendente (torácica) [21, 48, 49].", "Veia ázigos."],
        correctAnswer: 2,
        explanation: "As intercostais posteriores nascem da aorta [21, 48, 49].",
        theme: "Tórax"
      },
{
        id: "torax-38",
        question: "De acordo com o professor, qual o nome técnico do câncer do sistema linfático?",
        options: ["Carcinoma.", "Linfoma [17, 50, 51].", "Sarcoma.", "Linfadenite."],
        correctAnswer: 1,
        explanation: "Linfoma é o termo para câncer linfático [17, 50, 51].",
        theme: "Tórax"
      },
{
        id: "torax-39",
        question: "O orifício da veia cava inferior no diafragma encontra-se em qual nível vertebral?",
        options: ["T4.", "T8-T9 [11, 42-44].", "T10.", "T12."],
        correctAnswer: 1,
        explanation: "O forame da veia cava está em T8 [11, 42-44].",
        theme: "Tórax"
      },
{
        id: "torax-40",
        question: "Qual veia drena a parede posterior do tórax à direita e desemboca na veia cava superior?",
        options: ["Veia hemiázigos.", "Veia torácica interna.", "Veia ázigos [6, 17, 52].", "Veia jugular externa."],
        correctAnswer: 2,
        explanation: "A veia ázigos drena o lado direito e vai para a VCS [6, 17, 52].",
        theme: "Tórax"
      }
];

export const cavidadeOralQuestions: Question[] = [
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

export const faringeQuestions: Question[] = [
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
];

export const laringeQuestions: Question[] = [
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
];

export const tireoideQuestions: Question[] = [
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
];

export const vascularizacaoQuestions: Question[] = [
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
  },
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

export const olhoQuestions: Question[] = [
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
];

export const orelhaQuestions: Question[] = [
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
];

export const fisiologiaCardiacaQuestions: Question[] = [
  {
    "id": "fisiologia-card-v2-1",
    "question": "Um paciente de 65 anos apresenta um quadro de hipocalcemia grave. Considerando o acoplamento excitação-contração no miocárdio, qual o impacto direto esperado na contratilidade cardíaca?",
    "options": [
      "Aumento da força de contração devido à maior sensibilidade da troponina (via sinalização local)",
      "Redução da força de contração, pois há menor disponibilidade de cálcio para o mecanismo contrátil.",
      "Nenhum efeito, pois o coração utiliza exclusivamente o cálcio armazenado internamente bloqueando a via de fluxo iônico através do sarcolema",
      "Aumento da frequência cardíaca compensatória mediada pelo sistema parassimpático afetando diretamente a dinâmica funcional das miofibrilas"
    ],
    "correctAnswer": 1,
    "explanation": "O miocárdio depende do influxo de Ca2+ extracelular (fase de platô) para induzir a liberação de mais cálcio do retículo sarcoplasmático. Sem Ca2+ extracelular, a contração falha",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-2",
    "question": "Durante um exame de eletrocardiograma (ECG) de rotina, observa-se que a onda P está ausente em alguns batimentos. O que isso representa fisiologicamente?",
    "options": [
      "Falha na despolarização ventricular",
      "Falha na repolarização atrial devido a um comprometimento na sinalização local das células",
      "Ausência de despolarização atrial.",
      "Atraso excessivo no nó atrioventricular"
    ],
    "correctAnswer": 2,
    "explanation": "A onda P representa a despolarização atrial, o evento elétrico que precede a sístole atrial mecânica",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-3",
    "question": "Um paciente com insuficiência cardíaca apresenta edema de membros inferiores e turgência jugular. Esses sinais clínicos indicam uma falha em lidar com qual parâmetro fisiológico?",
    "options": [
      "Pós-carga excessiva",
      "Débito cardíaco elevado",
      "Pré-carga excessiva.",
      "Aumento do dromotropismo positivo"
    ],
    "correctAnswer": 2,
    "explanation": "Esses são sinais de falha da bomba direita em lidar com o retorno venoso (pré-carga), gerando acúmulo sistêmico",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-4",
    "question": "Assinale a alternativa INCORRETA sobre o potencial de ação do músculo cardíaco comum:",
    "options": [
      "A fase 0 é caracterizada pela entrada rápida de sódio (Na+) (via potencial de ação)",
      "A fase 2 é vital para prolongar a contração e permitir o esvaziamento efetivo",
      "A fase 3 representa a repolarização rápida com fechamento dos canais de cálcio e abertura dos de potássio",
      "O potencial de repouso das fibras ventriculares é de aproximadamente -60 mV."
    ],
    "correctAnswer": 3,
    "explanation": "O potencial de repouso é bem negativo (aprox. -90 mV). -60 mV é o limiar de disparo ou potencial de marcapasso em células autoexcitáveis",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-5",
    "question": "Um corredor de maratona atinge o ápice do esforço físico. Qual a sinalização autonômica predominante e seu efeito no nó sinoatrial (NSA)?",
    "options": [
      "Noradrenalina agindo em receptores beta-1, aumentando a taxa de despolarização.",
      "Acetilcolina agindo em receptores muscarínicos, aumentando o débito cardíaco",
      "Adrenalina promovendo efeito inotrópico negativo (processo fisiológico)",
      "Estímulo vagal intenso para aumentar a velocidade de condução (via sinalização local)"
    ],
    "correctAnswer": 0,
    "explanation": "O simpático libera noradrenalina que age em receptores Beta-1 no NSA para aumentar a frequência (cronotropismo)",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-6",
    "question": "No diagrama de volume-pressão do ventrículo esquerdo, o fechamento da válvula mitral marca o início de qual fase?",
    "options": [
      "Ejeção ventricular (mecanismo celular)",
      "Relaxamento isovolumétrico",
      "Enchimento passivo (regulação homeostática)",
      "Contração isovolumétrica."
    ],
    "correctAnswer": 3,
    "explanation": "Com o fechamento das valvas AV (mitral/tricúspide), o ventrículo começa a contrair com as saídas ainda fechadas, aumentando a pressão",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-7",
    "question": "Um paciente apresenta uma hemorragia aguda após acidente. Fisiologicamente, a queda do Volume Sistólico (VS) gera qual resposta compensatória imediata para manter o Débito Cardíaco (DC)?",
    "options": [
      "Aumento da resistência vascular periférica via nervo vago",
      "Elevação da Frequência Cardíaca.",
      "Redução da força de contração",
      "Diminuição da pré-carga (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "Pela fórmula DC = VS x FC, se o VS cai por perda de sangue, o corpo eleva a FC para tentar manter o DC estável",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-8",
    "question": "Qual a importância fisiológica do atraso de 0,1 segundos no Nó Atrioventricular (NAV)?",
    "options": [
      "Impedir que o impulso chegue aos ventrículos gerando uma resposta sistêmica compensatória inadequada",
      "Garantir que os átrios se esvaziem completamente antes da sístole ventricular.",
      "Aumentar a frequência cardíaca durante o repouso (regulação homeostática)",
      "Permitir a repolarização simultânea de todas as câmaras (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "O atraso é vital para que os ventrículos terminem de se encher antes de começarem sua própria sístole",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-9",
    "question": "Assinale a alternativa CORRETA sobre a Lei de Frank-Starling:",
    "options": [
      "Quanto menos o coração se enche, mais ele contrai mecanismo celular mediante regulação homeostática específica",
      "O aumento do volume diastólico final resulta em maior força de contração, até certo limite.",
      "É um mecanismo dependente exclusivamente de estimulação simpática externa bloqueando a via de fluxo iônico através do sarcolema",
      "Reflete a incapacidade do coração de ejetar sangue quando a pré-carga aumenta gerando uma resposta sistêmica compensatória inadequada"
    ],
    "correctAnswer": 1,
    "explanation": "A lei afirma que, dentro de limites fisiológicos, o coração bombeia todo o sangue que recebe (maior estiramento = maior força)",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-10",
    "question": "Durante a ausculta cardíaca, o som B1 (\"Tum\") é gerado pelo:",
    "options": [
      "Fechamento das válvulas semilunares por meio de uma alteração no mecanismo celular de transporte",
      "Abertura da válvula mitral (processo fisiológico)",
      "Fechamento das válvulas atrioventriculares.",
      "Fluxo turbulento durante o enchimento rápido"
    ],
    "correctAnswer": 2,
    "explanation": "B1 é o som do fechamento das valvas mitral e tricúspide no início da fase sistólica",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-11",
    "question": "Um paciente apresenta síncope súbita e o ECG mostra que os ventrículos estão batendo a 30 bpm. Suspeita-se de falha no NSA. Qual estrutura assumiu o controle do ritmo?",
    "options": [
      "Vias internodais devido a um comprometimento na sinalização local das células",
      "Fibras de Purkinje.",
      "Nó atrioventricular",
      "Músculo atrial comum"
    ],
    "correctAnswer": 1,
    "explanation": "As fibras de Purkinje têm um ritmo intrínseco baixo (15-40 bpm) e assumem como último recurso de reserva",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-12",
    "question": "Sobre os períodos refratários das células cardíacas, é correto afirmar que:",
    "options": [
      "O período refratário absoluto impede a tetanização do músculo cardíaco.",
      "No período refratário relativo, nenhum estímulo é capaz de gerar nova contração",
      "O período refratário cardíaco é muito curto em comparação ao músculo esquelético",
      "Eles permitem que o coração bata em contração contínua sem relaxar"
    ],
    "correctAnswer": 0,
    "explanation": "O platô estende o período refratário absoluto, garantindo que o músculo relaxe antes de uma nova contração, evitando o tétano cardíaco fatal",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-13",
    "question": "Em um caso clínico de choque cardiogênico por infarto do miocárdio, o problema principal reside em:",
    "options": [
      "Perda de volume sanguíneo (via potencial de ação)",
      "Falha mecânica da bomba cardíaca.",
      "Obstrução do fluxo por embolia pulmonar",
      "Infecção generalizada causando vasodilatação"
    ],
    "correctAnswer": 1,
    "explanation": "O choque cardiogênico é uma falha intrínseca do músculo (ex: após morte de tecido por infarto)",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-14",
    "question": "A pequena circulação (pulmonar) tem como característica funcional:",
    "options": [
      "Começar no ventrículo esquerdo e terminar no átrio direito (regulação homeostática)",
      "Transportar sangue rico em oxigênio pelas artérias pulmonares (processo fisiológico)",
      "Começar no ventrículo direito e levar sangue aos pulmões via artérias pulmonares.",
      "Ser um sistema de altíssima pressão em comparação à grande circulação por meio de uma alteração no mecanismo celular de transporte"
    ],
    "correctAnswer": 2,
    "explanation": "Sai do VD (sangue venoso), vai aos pulmões via artéria pulmonar (exceção funcional) e volta oxigenado ao AE",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-15",
    "question": "No ECG, o complexo QRS representa:",
    "options": [
      "Despolarização atrial por meio de uma alteração no mecanismo celular de transporte",
      "Repolarização ventricular",
      "Início da diástole ventricular",
      "Despolarização ventricular."
    ],
    "correctAnswer": 3,
    "explanation": "O complexo QRS é a despolarização dos ventrículos, desencadeando a sístole ventricular",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-16",
    "question": "O \"Sincício Funcional\" do miocárdio é garantido por quais estruturas histológicas?",
    "options": [
      "Sarcômeros independentes (processo fisiológico)",
      "Discos intercalados e junções comunicantes.",
      "Isolamento elétrico por tecido fibroso entre cada célula muscular",
      "Neurônios motores que inervam cada fibra individualmente"
    ],
    "correctAnswer": 1,
    "explanation": "As junções gap permitem que o potencial de ação passe instantaneamente entre as células, fazendo-as agir como uma única unidade",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-17",
    "question": "Um fármaco que bloqueia os receptores muscarínicos (M2) do coração teria qual efeito?",
    "options": [
      "Redução imediata da frequência cardíaca (via sinalização local)",
      "Aumento da frequência cardíaca, por inibir a ação parassimpática.",
      "Diminuição da força de contração atrial (processo fisiológico)",
      "Bloqueio da condução no feixe de His (via potencial de ação)"
    ],
    "correctAnswer": 1,
    "explanation": "O vago (parassimpático) libera acetilcolina para frear o coração. Bloquear seu receptor (M2) retira o \"freio\", aumentando a FC",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-18",
    "question": "Assinale a alternativa CORRETA sobre a pós-carga:",
    "options": [
      "É o volume de sangue que chega ao átrio direito (via potencial de ação)",
      "É a resistência que o ventrículo deve vencer para ejetar o sangue.",
      "Quando diminui, o volume sistólico tende a cair drasticamente",
      "É aumentada pelo uso de vasodilatadores potentes (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "É a carga contra a qual o coração ejeta. Se a resistência das artérias aumenta, a pós-carga aumenta",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-19",
    "question": "Na fase de contração isovolumétrica:",
    "options": [
      "A pressão ventricular sobe bruscamente, mas o volume permanece constante.",
      "A válvula aórtica está aberta para a ejeção (via potencial de ação)",
      "O ventrículo está em relaxamento máximo através de uma falha na regulação homeostática do sistema",
      "O sangue flui passivamente do átrio para o ventrículo (regulação homeostática)"
    ],
    "correctAnswer": 0,
    "explanation": "Todas as válvulas estão fechadas para que a pressão suba rápido o suficiente para vencer a pressão da aorta e abrir a válvula semilunar",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-20",
    "question": "A Síndrome de Stokes-Adams é caracterizada por:",
    "options": [
      "Uma via acessória entre átrios e ventrículos sob influência direta do controle autonômico desregulado",
      "Desmaio causado por bloqueio atrioventricular total.",
      "Aumento súbito do débito cardíaco durante o sono",
      "Hipertensão arterial sistêmica grave (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "Caracterizada por desmaios devido a bloqueios elétricos que interrompem temporariamente o fluxo cerebral até que o ritmo de reserva comece",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-21",
    "question": "Qual componente do ECG reflete o tempo de condução entre a despolarização atrial e a ventricular?",
    "options": [
      "Segmento S-T",
      "Intervalo P-R.",
      "Onda T (processo fisiológico)",
      "Onda Q (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "O intervalo P-R mede o tempo desde o início da ativação atrial até o início da ventricular",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-22",
    "question": "Assinale a alternativa INCORRETA sobre as veias:",
    "options": [
      "São vasos que retornam o sangue ao coração através de uma falha na regulação homeostática do sistema",
      "As veias pulmonares trazem sangue oxigenado ao átrio esquerdo por meio de uma alteração no mecanismo celular de transporte",
      "Possuem paredes muito mais espessas e pressões mais altas que as artérias.",
      "O fluxo em membros inferiores é auxiliado por compressão muscular e válvulas"
    ],
    "correctAnswer": 2,
    "explanation": "Veias são sistemas de baixa pressão e paredes finas, agindo como reservatórios de sangue",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-23",
    "question": "O dromotropismo positivo refere-se ao aumento de qual propriedade?",
    "options": [
      "Força de contração (via sinalização local)",
      "Frequência de disparos (regulação homeostática)",
      "Velocidade de condução elétrica.",
      "Capacidade de relaxamento bloqueando a via de fluxo iônico através do sarcolema"
    ],
    "correctAnswer": 2,
    "explanation": "Refere-se à condutividade elétrica do sistema",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-24",
    "question": "Um paciente com estenose da válvula aórtica apresenta hipertrofia do ventrículo esquerdo. Fisiologicamente, isso ocorre para vencer um aumento crônico na:",
    "options": [
      "Pré-carga",
      "Pós-carga.",
      "Pressão venosa central",
      "Frequência cardíaca basal"
    ],
    "correctAnswer": 1,
    "explanation": "A estenose valvular aumenta a resistência à saída do sangue, forçando o músculo a fazer mais força (pós-carga)",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-25",
    "question": "A fase de \"enchimento ativo\" do ventrículo ocorre devido a:",
    "options": [
      "Gravidade, sendo responsável pela maior parte do volume",
      "Contração atrial.",
      "Abertura das válvulas semilunares",
      "Diminuição da pressão no átrio"
    ],
    "correctAnswer": 1,
    "explanation": "A maior parte do enchimento é passiva (80%), mas a contração atrial é o \"chute\" final de 20%",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-26",
    "question": "Qual é a equação correta para o Débito Cardíaco?",
    "options": [
      "DC = VS + FC",
      "DC = VS / FC",
      "DC = VS x FC",
      "DC = Pré-carga x Pós-carga"
    ],
    "correctAnswer": 2,
    "explanation": "O débito cardíaco é o produto do volume ejetado por batimento pela quantidade de batimentos por minuto",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-27",
    "question": "Durante a fase de relaxamento isovolumétrico:",
    "options": [
      "A pressão ventricular cai abruptamente e o volume não muda.",
      "A válvula mitral se abre para o enchimento rápido bloqueando a via de fluxo iônico através do sarcolema",
      "O ventrículo está ejetando o volume residual (via potencial de ação)",
      "O complexo QRS aparece no ECG por meio de uma alteração no mecanismo celular de transporte"
    ],
    "correctAnswer": 0,
    "explanation": "Após a ejeção, o ventrículo relaxa com as válvulas fechadas para baixar a pressão antes de abrir a mitral",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-28",
    "question": "No potencial de ação das células do Nó Sinoatrial, a despolarização gradual ocorre principalmente por:",
    "options": [
      "Entrada de sódio pelos canais Funny e influxo de cálcio.",
      "Saída massiva de potássio mecanismo celular sob influência de mediadores químicos",
      "Estímulo externo do nervo vago (via sinalização local)",
      "Bloqueio total dos canais de cálcio tipo L (via potencial de ação)"
    ],
    "correctAnswer": 0,
    "explanation": "A instabilidade do potencial de repouso se deve aos canais If e à entrada lenta de cálcio, gerando automaticidade",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-29",
    "question": "O Volume Sistólico Final (VSF) é definido como:",
    "options": [
      "O volume máximo de sangue no ventrículo após o enchimento",
      "O sangue que sobra no ventrículo após a ejeção.",
      "A diferença entre o débito cardíaco e a frequência cardíaca",
      "O volume de sangue ejetado em um minuto gerando uma resposta sistêmica compensatória inadequada"
    ],
    "correctAnswer": 1,
    "explanation": "O coração nunca esvazia totalmente; o VSF é o volume de proteção que permanece no final da sístole",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-30",
    "question": "Em um paciente com taquicardia extrema, o débito cardíaco pode cair porque:",
    "options": [
      "A sístole fica muito longa (mecanismo celular)",
      "O tempo de diástole é severamente reduzido.",
      "O inotropismo torna-se excessivamente alto",
      "A resistência vascular periférica desaparece"
    ],
    "correctAnswer": 1,
    "explanation": "O enchimento ocorre na diástole. Se o coração bate rápido demais, não há tempo físico para o sangue entrar",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-31",
    "question": "A onda T no ECG representa:",
    "options": [
      "Despolarização ventricular",
      "Repolarização atrial rompendo o balanço hidrostático necessário para a fibra",
      "Repolarização ventricular.",
      "O fechamento das valvas AV"
    ],
    "correctAnswer": 2,
    "explanation": "A onda T reflete a recuperação elétrica (repolarização) dos ventrículos",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-32",
    "question": "Qual a função mecânica das válvulas cardíacas?",
    "options": [
      "Aumentar a velocidade do sangue (processo fisiológico)",
      "Garantir o fluxo unidirecional, impedindo refluxo.",
      "Realizar trocas gasosas (processo fisiológico)",
      "Filtrar coágulos provenientes da periferia gerando uma resposta sistêmica compensatória inadequada"
    ],
    "correctAnswer": 1,
    "explanation": "Atuam como comportas impulsionadas pela pressão para evitar que o sangue retorne",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-33",
    "question": "Sobre o músculo estriado cardíaco, assinale a alternativa CORRETA:",
    "options": [
      "Possui contração voluntária como o esquelético",
      "É funcionalmente um sincício.",
      "Não possui estrias transversais",
      "Depende exclusivamente de estímulo nervoso para contrair"
    ],
    "correctAnswer": 1,
    "explanation": "O miocárdio funciona como uma unidade funcional coordenada devido à comunicação iônica instantânea",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-34",
    "question": "A fase 1 do potencial de ação miocárdico é causada por:",
    "options": [
      "Fechamento dos canais de sódio e saída de potássio.",
      "Entrada lenta de cálcio (processo fisiológico)",
      "Abertura da válvula aórtica (via potencial de ação)",
      "Influxo rápido de cloreto (mecanismo celular)"
    ],
    "correctAnswer": 0,
    "explanation": "Breve saída de K+ logo após o pico do disparo de Na+",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-35",
    "question": "Pacientes com insuficiência cardíaca esquerda frequentemente apresentam edema agudo de pulmão. Isso ocorre porque:",
    "options": [
      "O sangue retorna e congestiona a circulação pulmonar.",
      "O ventrículo direito parou de bombear (via potencial de ação)",
      "A pressão arterial sistêmica caiu a zero (via sinalização local)",
      "Há excesso de glóbulos vermelhos nos pulmões sob influência direta do controle autonômico desregulado"
    ],
    "correctAnswer": 0,
    "explanation": "Se o lado esquerdo não ejeta, o sangue acumula \"para trás\" nos pulmões, aumentando a pressão capilar e gerando edema",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-36",
    "question": "Qual é a frequência intrínseca de disparo do Nó Atrioventricular quando o NSA falha?",
    "options": [
      "60-80 bpm",
      "40-60 bpm.",
      "15-40 bpm",
      "100-120 bpm"
    ],
    "correctAnswer": 1,
    "explanation": "O NAV é a primeira reserva e opera entre 40-60 bpm",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-37",
    "question": "O som cardíaco B2 (\"Tá\") marca:",
    "options": [
      "O início da sístole (via sinalização local)",
      "O fechamento das valvas semilunares.",
      "A contração atrial (mecanismo celular)",
      "O pico da pressão sistólica na aorta"
    ],
    "correctAnswer": 1,
    "explanation": "B2 ocorre quando a pressão na aorta supera a do ventrículo ao final da ejeção, fechando as semilunares",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-38",
    "question": "A Síndrome de Wolff-Parkinson-White (WPW) é um exemplo fisiológico de:",
    "options": [
      "Bloqueio de condução regulação homeostática de acordo com o processo fisiológico local",
      "Via elétrica acessória permitindo comunicação direta entre átrios e ventrículos.",
      "Infarto agudo do miocárdio mecanismo celular seguindo o padrão de resposta sistêmica",
      "Hipertrofia excêntrica regulação homeostática visando o equilíbrio hidrostático tecidual"
    ],
    "correctAnswer": 1,
    "explanation": "Presença de uma via acessória (Feixe de Kent) que pula o atraso do NAV",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-39",
    "question": "Na relação pressão-volume, se aumentarmos a contratilidade, o que ocorre?",
    "options": [
      "O volume sistólico diminui (regulação homeostática)",
      "O ventrículo ejeta mais sangue, reduzindo o VSF.",
      "A pressão sistólica máxima cai (regulação homeostática)",
      "O enchimento diastólico é interrompido bloqueando a via de fluxo iônico através do sarcolema"
    ],
    "correctAnswer": 1,
    "explanation": "Maior força de contração resulta em um esvaziamento mais completo da câmara",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-card-v2-40",
    "question": "Assinale a alternativa INCORRETA sobre o sistema de condução cardíaco:",
    "options": [
      "O impulso nasce no NSA e se espalha pelos átrios (regulação homeostática)",
      "O Feixe de His e as Fibras de Purkinje transmitem o impulso rapidamente aos ventrículos",
      "Os átrios e ventrículos são isolados eletricamente por tecido fibroso, exceto pelo NAV",
      "A contração ventricular começa na base do coração e termina no ápice"
    ],
    "correctAnswer": -1,
    "explanation": "",
    "theme": "Fisiologia"
  }
];

export const hemostasiaQuestions: Question[] = [
  {
    "id": "hemostasia-v2-1",
    "question": "Um paciente de 25 anos sofre uma laceração superficial no braço. Imediatamente após a lesão, observa-se uma redução do fluxo sanguíneo local antes mesmo da formação de um coágulo visível. Qual mecanismo é o principal responsável pelo maior grau de vasoconstrição observado nesse estágio inicial?",
    "options": [
      "Liberação de ADP pelas plaquetas (mecanismo celular)",
      "Reflexos nervosos de dor (via sinalização local)",
      "Espasmo miogênico por lesão direta à parede vascular.",
      "Liberação de serotonina mecanismo celular mantendo a dinâmica funcional do sistema"
    ],
    "correctAnswer": 2,
    "explanation": "O espasmo miogênico por lesão direta é o mecanismo que promove o maior grau de vasoconstrição inicial.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-2",
    "question": "Durante a avaliação de um paciente com sangramento gengival excessivo, o médico suspeita de uma falha na hemostasia primária. Sobre as plaquetas (trombócitos), assinale a alternativa CORRETA:",
    "options": [
      "São células completas com núcleo, originadas da fragmentação de megacariócitos",
      "Possuem uma meia-vida no sangue de aproximadamente 30 dias (via sinalização local)",
      "São retiradas da circulação principalmente por macrófagos no fígado",
      "São fragmentos anucleados com estruturas funcionais para formar ATP e ADP."
    ],
    "correctAnswer": 3,
    "explanation": "Plaquetas são fragmentos de megacariócitos, anucleadas, mas metabolicamente ativas com mitocôndrias e sistemas enzimáticos.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-3",
    "question": "Um paciente que fará uma cirurgia de fêmur é orientado a suspender o uso de Aspirina (AAS) 10 dias antes do procedimento. Com base na fisiologia plaquetária, essa recomendação se deve ao fato de que:",
    "options": [
      "As plaquetas não possuem núcleo e não podem sintetizar novas enzimas para reverter o efeito da droga durante sua vida útil.",
      "O AAS aumenta a concentração de cálcio intracelular, impedindo a agregação regulação homeostática visando o equilíbrio hidrostático tecidual",
      "As plaquetas levam 30 dias para serem renovadas totalmente regulação homeostática conforme o mecanismo de sinalização celular",
      "O fármaco impede a produção de megacariócitos regulação homeostática visando o equilíbrio hidrostático tecidual"
    ],
    "correctAnswer": 0,
    "explanation": "Como são anucleadas, não podem produzir novas proteínas. O efeito do AAS dura toda a vida da plaqueta (7-10 dias) até que novas sejam formadas.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-4",
    "question": "No processo de adesão plaquetária, uma proteína específica atua como ponte entre a plaqueta e o colágeno exposto do vaso lesionado. Identifique-a:",
    "options": [
      "Fibrinogênio (processo fisiológico)",
      "Fator de von Willebrand.",
      "Trombostenina (mecanismo celular)",
      "Fator Tecidual (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "O Fator de von Willebrand atua como uma ponte de ligação crucial entre a plaqueta e as fibras de colágeno expostas.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-5",
    "question": "Uma criança apresenta um corte no dedo. As plaquetas que entram em contato com o colágeno sofrem ativação e mudança morfológica. Qual das alternativas abaixo descreve INCORRETAMENTE um evento da ativação plaquetária?",
    "options": [
      "Dilatação da plaqueta e projeção de pseudópodos",
      "Contração intensa de proteínas como actina, miosina e trombostenina",
      "Liberação de grânulos contendo fatores ativos no plasma",
      "Bloqueio imediato dos fosfolipídios de membrana."
    ],
    "correctAnswer": 3,
    "explanation": "Os fosfolipídios de membrana são essenciais para *ativar* múltiplos estágios da coagulação, não para bloqueá-los.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-6",
    "question": "O ADP e o Tromboxano A2 (TXA2) são liberados pelas plaquetas ativadas e viajam pelo sangue circundante. Qual a principal função fisiológica dessas substâncias no local da lesão?",
    "options": [
      "Ativar a via intrínseca da cascata de coagulação via Fator XII",
      "Ativar plaquetas vizinhas, promovendo agregação e feedback positivo.",
      "Inibir a ação da trombina para limitar o tamanho do coágulo afetando diretamente a dinâmica funcional das miofibrilas",
      "Degradar o excesso de fibrina via sinalização local seguindo o padrão de resposta sistêmica"
    ],
    "correctAnswer": 1,
    "explanation": "ADP e TXA2 recrutam e ativam plaquetas vizinhas, criando um ciclo de feedback positivo para formar o tampão.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-7",
    "question": "Sobre o \"Tampão Plaquetário\", é correto afirmar que:",
    "options": [
      "É uma estrutura rígida e definitiva que dispensa a formação de fibrina (via sinalização local)",
      "Inicialmente é frouxo, mas suficiente para bloquear a perda de sangue em pequenas aberturas vasculares.",
      "Sua formação depende exclusivamente da ativação da protrombina em trombina (regulação homeostática)",
      "É formado pela invasão de fibroblastos via potencial de ação para garantir a estabilidade do meio interno"
    ],
    "correctAnswer": 1,
    "explanation": "O tampão plaquetário é uma barreira inicial frouxa, fundamental para selar milhares de micro-rupturas diárias.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-8",
    "question": "O equilíbrio da hemostasia depende do balanço entre substâncias procoagulantes e anticoagulantes. Em condições de vaso sanguíneo normal e intacto:",
    "options": [
      "Os procoagulantes predominam (processo fisiológico)",
      "O fluxo sanguíneo laminar impede o contato das plaquetas com o endotélio",
      "Os anticoagulantes predominam na corrente sanguínea.",
      "A protrombina é convertida continuamente em trombina"
    ],
    "correctAnswer": 2,
    "explanation": "No estado normal (State A), os anticoagulantes predominam para manter o sangue fluido.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-9",
    "question": "A formação do ativador da protrombina é o \"ponto crítico\" da cascata de coagulação. Qual íon é essencial para quase todas as reações dessa cascata?",
    "options": [
      "Sódio Na+ de acordo com o processo fisiológico local",
      "Potássio (K+)",
      "Cálcio (Ca++).",
      "Magnésio (Mg++)"
    ],
    "correctAnswer": 2,
    "explanation": "O cálcio é o catalisador necessário para a promoção e aceleração de quase todas as reações da cascata.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-10",
    "question": "Um paciente com insuficiência hepática grave apresenta tendência a sangramentos. Isso ocorre porque:",
    "options": [
      "O fígado é responsável pela produção de quase todos os fatores de coagulação.",
      "O fígado produz as plaquetas em resposta à trombopoietina (via sinalização local)",
      "A doença hepática impede a absorção de Vitamina C (mecanismo celular)",
      "O fígado armazena cálcio mecanismo celular para garantir a estabilidade do meio interno"
    ],
    "correctAnswer": 0,
    "explanation": "A protrombina e o fibrinogênio são proteínas formadas continuamente no fígado. Doenças hepáticas reduzem essa síntese.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-11",
    "question": "Qual a função fisiológica da Vitamina K no motor de coagulação?",
    "options": [
      "Atuar como coenzima para a agregação plaquetária (processo fisiológico)",
      "Ser necessária ao fígado para a ativação normal da protrombina e outros fatores.",
      "Catalisar a conversão de fibrinogênio em fibras de fibrina (via potencial de ação)",
      "Estabilizar as ligações cruzadas de fibrina via Fator XIII (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "A Vitamina K é um requisito essencial para o fígado ativar a protrombina e os fatores VII, IX e X.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-12",
    "question": "A Trombina é considerada uma \"ferramenta biológica\" central. Sobre sua ação proteolítica no fibrinogênio, assinale a alternativa CORRETA:",
    "options": [
      "A trombina adiciona peptídeos ao fibrinogênio para torná-lo insolúvel",
      "A trombina remove peptídeos do fibrinogênio, formando o monômero de fibrina.",
      "A trombina cliva a protrombina para formar mais ativador de protrombina",
      "A trombina impede a polimerização das fibras de fibrina (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "A trombina é uma enzima proteolítica que cliva 4 peptídeos do fibrinogênio para liberar monômeros de fibrina.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-13",
    "question": "Após a formação da malha inicial de fibrina, o coágulo ainda é frágil. Qual fator é responsável por estabilizá-lo?",
    "options": [
      "Fator V (processo fisiológico)",
      "Fator VII",
      "Fator XIII.",
      "Fator XII"
    ],
    "correctAnswer": 2,
    "explanation": "O Fator XIII, liberado por plaquetas e ativado pela trombina, estabiliza a malha de fibrina com ligações cruzadas.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-14",
    "question": "Um estudante observa que após a formação do coágulo ele começa a se contrair, expelindo um líquido claro. Sobre esse líquido (Soro), é correto afirmar que:",
    "options": [
      "É idêntico ao plasma sanguíneo gerando uma resposta sistêmica compensatória inadequada",
      "Contém altas concentrações de fibrinogênio (processo fisiológico)",
      "É essencialmente plasma sem fibrinogênio e com fatores consumidos.",
      "É rico em plaquetas ativadas via potencial de ação em resposta ao controle autonômico"
    ],
    "correctAnswer": 2,
    "explanation": "O soro é o líquido expelido após a retração; é plasma sem os componentes consumidos na coagulação (fibrinogênio/fatores).",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-15",
    "question": "O mecanismo de retração do coágulo é motorizado pelas plaquetas. O que permite essa contração física da malha de fibrina?",
    "options": [
      "A polimerização espontânea dos monômeros de fibrina (mecanismo celular)",
      "A ativação de proteínas contráteis nas plaquetas presas à fibrina.",
      "O fluxo sanguíneo empurrando as bordas do vaso (processo fisiológico)",
      "A invasão imediata de fibroblastos por meio de uma alteração no mecanismo celular de transporte"
    ],
    "correctAnswer": 1,
    "explanation": "A retração depende da contração física das espículas plaquetárias (via trombostenina, actina e miosina) presas à fibrina.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-16",
    "question": "A via EXTRÍNSECA da coagulação é iniciada por:",
    "options": [
      "Contato do sangue com o colágeno subendotelial rompendo o balanço hidrostático necessário para a fibra",
      "Trauma na parede vascular ou tecidos adjacentes, com liberação do Fator Tecidual.",
      "Ativação direta do Fator XII pelo ar regulação homeostática através da modulação do fluxo iônico",
      "Fragmentação de plaquetas em vasos de pequeno calibre (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "O gatilho da via extrínseca é o trauma na parede vascular ou tecidos vizinhos, liberando o Fator Tecidual.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-17",
    "question": "Analise a velocidade das vias de coagulação. Em um trauma grave, a via extrínseca pode ser extremamente explosiva. Qual o tempo aproximado para o início do desenvolvimento do coágulo nesses casos?",
    "options": [
      "1 a 2 minutos impedindo o correto acoplamento do potencial de ação muscular",
      "15 a 20 segundos.",
      "20 a 60 minutos",
      "1 a 2 semanas devido a um comprometimento na sinalização local das células"
    ],
    "correctAnswer": 1,
    "explanation": "Em traumas graves, a via extrínseca pode iniciar o coágulo em 15 a 20 segundos.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-18",
    "question": "A via INTRÍNSECA começa quando o trauma ocorre no próprio sangue ou há exposição ao colágeno. Qual é o primeiro fator a ser ativado nesta via?",
    "options": [
      "Fator X bloqueando a via de fluxo iônico através do sarcolema",
      "Fator VII",
      "Fator XII.",
      "Fator IX"
    ],
    "correctAnswer": 2,
    "explanation": "O trauma sanguíneo ou contato com colágeno ativa o Fator XII, mudando sua configuração molecular.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-19",
    "question": "Um paciente com Hemofilia Clássica apresenta deficiência de um componente da via intrínseca que impede a ativação do Fator X. Qual é esse componente?",
    "options": [
      "Plaquetas",
      "Fator VIII.",
      "Cálcio (mecanismo celular)",
      "Fator Tecidual"
    ],
    "correctAnswer": 1,
    "explanation": "A Hemofilia Clássica é a ausência do Fator VIII (anti-hemofílico) no Passo 4 da via intrínseca.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-20",
    "question": "O Fator X ativado (Xa) é o destino comum da coagulação. Para formar o complexo ativador da protrombina, o Fator Xa se une a qual fator?",
    "options": [
      "Fator XII",
      "Fator VII",
      "Fator V.",
      "Fator I"
    ],
    "correctAnswer": 2,
    "explanation": "O Fator V ativado é o acelerador dinâmico que, com o Fator Xa e fosfolipídios, forma o ativador da protrombina.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-21",
    "question": "Assinale a alternativa INCORRETA sobre o ciclo de feedback positivo da trombina:",
    "options": [
      "Atua sobre o fibrinogênio para formar mais coágulo rompendo o balanço hidrostático necessário para a fibra",
      "Acelera a ativação de diversos fatores da coagulação gerando uma resposta sistêmica compensatória inadequada",
      "Inibe o Fator V para evitar crescimento excessivo do coágulo.",
      "Uma vez formada em quantidade crítica, retroalimenta o processo"
    ],
    "correctAnswer": 2,
    "explanation": "A trombina tem feedback positivo: ela *ativa* o Fator V para acelerar ainda mais o processo.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-22",
    "question": "Em amostras de sangue removidas para exames laboratoriais, a coagulação pode ser evitada pela desionização de qual substância usando citrato ou oxalato?",
    "options": [
      "Fibrinogênio",
      "Vitamina K",
      "Íon cálcio.",
      "Protrombina"
    ],
    "correctAnswer": 2,
    "explanation": "Agentes bloqueadores como citrato e oxalato inibem a coagulação ao remover o cálcio disponível.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-23",
    "question": "Qual o destino biológico usual de um coágulo formado em um pequeno orifício vascular após 1 a 2 semanas?",
    "options": [
      "Dissolução imediata por enzimas teciduais o que desestabiliza o processo fisiológico de contração",
      "Organização fibrosa por invasão de fibroblastos.",
      "Transformação em placa aterosclerótica impedindo o correto acoplamento do potencial de ação muscular",
      "Migração para o baço (via potencial de ação)"
    ],
    "correctAnswer": 1,
    "explanation": "O curso usual para pequenos orifícios é a invasão por fibroblastos, transformando o coágulo em tecido fibroso (1-2 semanas).",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-24",
    "question": "Um paciente apresenta petéquias devido à falta de plaquetas. Essa condição clínica é conhecida como:",
    "options": [
      "Hemofilia A (via sinalização local)",
      "Trombocitopenia.",
      "Hipoprotrombinemia",
      "Afibrinogenemia"
    ],
    "correctAnswer": 1,
    "explanation": "Trombocitopenia é a ausência/baixa contagem de plaquetas, resultando em múltiplas áreas hemorrágicas.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-25",
    "question": "O Fator Tecidual na via extrínseca atua principalmente como:",
    "options": [
      "Um receptor de membrana para o ADP (mecanismo celular)",
      "Um complexo que participa da ativação do Fator X.",
      "Uma proteína contrátil para aproximar as bordas da lesão",
      "Um polímero estável que substitui a fibrina por meio de uma alteração no mecanismo celular de transporte"
    ],
    "correctAnswer": 1,
    "explanation": "O Fator Tecidual é um complexo que atua principalmente como enzima proteolítica para ativar o Fator X.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-26",
    "question": "Sobre o fibrinogênio (Fator I), é correto afirmar que:",
    "options": [
      "É uma proteína de baixo peso molecular (via potencial de ação)",
      "Sua concentração plasmática normal é de 100 a 700 mg/dL.",
      "É ativado diretamente pelo Fator XII (via potencial de ação)",
      "É sintetizado nos tecidos vizinhos ao trauma vascular"
    ],
    "correctAnswer": 1,
    "explanation": "O fibrinogênio é uma proteína de alto peso molecular com concentração plasmática de 100-700 mg/dL.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-27",
    "question": "A protrombina (Fator II) é uma proteína plasmática instável. Se o fígado parar de produzi-la, sua concentração cai perigosamente em quanto tempo?",
    "options": [
      "1 hora",
      "1 dia.",
      "1 semana",
      "12 dias"
    ],
    "correctAnswer": 1,
    "explanation": "A protrombina é instável e, sem produção contínua, cai a níveis perigosos em apenas 1 dia.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-28",
    "question": "No mapa da via extrínseca, qual a sequência correta até a trombina?",
    "options": [
      "Fator XII → Fator XI → Trombina o que desestabiliza o processo fisiológico de contração",
      "Trauma Tecidual → Fator Tecidual → Fator VII → Fator X ativado → Ativador da Protrombina → Trombina.",
      "Plaquetas → Fator IX → Fator VIII → Trombina regulação homeostática conforme o mecanismo de sinalização celular",
      "Colágeno → Fator XII → Fator X → Trombina mecanismo celular mantendo a dinâmica funcional do sistema"
    ],
    "correctAnswer": 1,
    "explanation": "Esta é a sequência clássica da via extrínseca baseada nos materiais.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-29",
    "question": "Na via intrínseca, o Fator IX ativado atua em conjunto com qual fator e quais lipídios para ativar o Fator X?",
    "options": [
      "Fator VII e Fosfolipídios teciduais",
      "Fator VIII e Fosfolipídios plaquetários.",
      "Fator V e Fibrinogênio (mecanismo celular)",
      "Fator XIII e Soro (processo fisiológico)"
    ],
    "correctAnswer": 1,
    "explanation": "Na via intrínseca, o complexo ativador do Fator X exige Fator IXa, Fator VIII e fosfolipídios plaquetários.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-30",
    "question": "Por que o fibrinogênio não vaza para os líquidos intersticiais em condições normais?",
    "options": [
      "Porque é repelido pelas cargas negativas do endotélio",
      "Devido ao seu grande tamanho molecular.",
      "Porque está sempre ligado às plaquetas circulantes",
      "Porque só existe dentro das mitocôndrias plaquetárias"
    ],
    "correctAnswer": 1,
    "explanation": "Devido ao seu grande tamanho molecular (340.000), o fibrinogênio não vaza para os tecidos em condições normais.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-31",
    "question": "O termo \"Hemostasia\" significa literalmente:",
    "options": [
      "Produção de sangue na medula",
      "Prevenção de perda sanguínea.",
      "Destruição de coágulos intravasculares",
      "Circulação rápida de fluidos"
    ],
    "correctAnswer": 1,
    "explanation": "Hemostasia significa a prevenção de perda sanguínea.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-32",
    "question": "Qual dos seguintes eventos NÃO faz parte dos 4 estágios sequenciais da hemostasia?",
    "options": [
      "Constrição vascular",
      "Formação do tampão plaquetário",
      "Produção de hemácias.",
      "Crescimento de tecido fibroso"
    ],
    "correctAnswer": 2,
    "explanation": "Os quatro estágios são: Constrição, Tampão Plaquetário, Coágulo e Crescimento Fibroso.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-33",
    "question": "O espasmo vascular é proporcional à gravidade do trauma. Em vasos menores, qual o principal mediador responsável por essa constrição?",
    "options": [
      "Histamina (processo fisiológico)",
      "Óxido Nítrico",
      "Tromboxano A2.",
      "Heparina (mecanismo celular)"
    ],
    "correctAnswer": 2,
    "explanation": "O Tromboxano A2, liberado por plaquetas, é o principal responsável pela constrição em vasos menores.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-34",
    "question": "Sobre a anatomia plaquetária, as glicoproteínas da camada externa têm a função fisiológica de:",
    "options": [
      "Permitir aderência ao endotélio intacto processo fisiológico de acordo com o processo fisiológico local",
      "Impedir aderência ao endotélio normal, mas favorecer adesão ao colágeno exposto.",
      "Armazenar grandes quantidades de cálcio processo fisiológico através da modulação do fluxo iônico",
      "Sintetizar fibrinogênio processo fisiológico mantendo a dinâmica funcional do sistema"
    ],
    "correctAnswer": 1,
    "explanation": "O glicocálice plaquetário impede adesão ao vaso sadio, mas tem afinidade com o colágeno do vaso lesado.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-35",
    "question": "O ciclo de feedback na agregação plaquetária resulta na construção rápida de uma barreira física. Esse processo é considerado:",
    "options": [
      "Feedback negativo",
      "Feedback positivo.",
      "Resposta hormonal sistêmica",
      "Transporte ativo"
    ],
    "correctAnswer": 1,
    "explanation": "A agregação é um ciclo de feedback positivo que atrai sucessivamente mais plaquetas.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-36",
    "question": "Na via comum da coagulação, a protease responsável pela clivagem da protrombina em trombina é:",
    "options": [
      "Fator V (processo fisiológico)",
      "Fator X ativado.",
      "Fator VII (via potencial de ação)",
      "Fator VIII (via potencial de ação)"
    ],
    "correctAnswer": 1,
    "explanation": "O Fator Xa atua como a verdadeira protease do complexo ativador da protrombina.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-37",
    "question": "Qual a diferença fundamental entre Plasma e Soro em termos de capacidade de coagular?",
    "options": [
      "O plasma não coagula porque não tem cálcio mecanismo celular para garantir a estabilidade do meio interno",
      "O soro tem capacidade total de coagular regulação homeostática mediante regulação homeostática específica",
      "O plasma possui fatores de coagulação, enquanto o soro não possui adequadamente.",
      "Ambos têm mesma capacidade mecanismo celular mediante regulação homeostática específica"
    ],
    "correctAnswer": 2,
    "explanation": "O soro não coagula pois o fibrinogênio foi removido e os fatores esgotados durante a formação do coágulo.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-38",
    "question": "Um paciente apresenta tempo de sangramento prolongado após trauma leve. O médico investiga a via intrínseca. Qual a característica dessa via?",
    "options": [
      "É muito mais rápida (via potencial de ação)",
      "É iniciada apenas por trauma externo através de uma falha na regulação homeostática do sistema",
      "É mais lenta e progressivamente amplificada.",
      "Não necessita de cálcio (via sinalização local)"
    ],
    "correctAnswer": 2,
    "explanation": "A via intrínseca é mais lenta (1 a 6 minutos), mas é um processo contínuo e amplificado.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-39",
    "question": "O Fator V é chamado de acelerador dinâmico porque:",
    "options": [
      "Sozinho converte fibrinogênio em fibrina gerando uma resposta sistêmica compensatória inadequada",
      "Potencializa a atividade do Fator Xa após ativação.",
      "Inibe a via extrínseca (regulação homeostática)",
      "Remove cálcio do sangue (regulação homeostática)"
    ],
    "correctAnswer": 1,
    "explanation": "A trombina acelera o sistema ao ativar o Fator V, que por sua vez potencializa a ação do Fator Xa.",
    "theme": "Fisiologia"
  },
  {
    "id": "hemostasia-v2-40",
    "question": "Assinale a alternativa CORRETA sobre a dissolução do coágulo:",
    "options": [
      "Ocorre apenas em traumas graves via potencial de ação através da modulação do fluxo iônico",
      "Substâncias ativadoras dentro do próprio coágulo ajudam a removê-lo quando necessário.",
      "É mediada exclusivamente por macrófagos do baço por meio de uma alteração no mecanismo celular de transporte",
      "Ocorre segundos após sua formação regulação homeostática mediante regulação homeostática específica"
    ],
    "correctAnswer": 1,
    "explanation": "A dissolução ocorre quando enzimas quebram coágulos onde não são necessários, limpando o sistema.",
    "theme": "Fisiologia"
  }
];

export const fisiologiaMuscularQuestions: Question[] = [
  {
    "id": "fisiologia-musc-2",
    "question": "Durante uma análise histopatológica de uma biópsia cardíaca, o médico observa células ramificadas, mononucleadas e com a presença de discos intercalares. Qual a função fisiológica fundamental dessas junções?",
    "options": [
      "Promover união mecânica entre células e facilitar propagação do impulso elétrico.",
      "Servir como principal local de armazenamento de cálcio extracelular através de uma falha na regulação homeostática do sistema",
      "Permitir controle voluntário direto da musculatura cardíaca (via sinalização local)",
      "Substituir estruturas responsáveis pela condução elétrica intracelular sob influência direta do controle autonômico desregulado"
    ],
    "correctAnswer": 0,
    "explanation": "Discos intercalares unem células cardíacas e possuem junções comunicantes para propagação elétrica rápida",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-3",
    "question": "Um atleta apresenta fadiga extrema. No nível molecular, o sinal intracelular que deve aumentar para que a contração muscular se inicie é:",
    "options": [
      "ATP disponível no citoplasma sob influência direta do controle autonômico desregulado",
      "Sódio presente no retículo sarcoplasmático",
      "Cálcio livre no meio intracelular.",
      "Potássio acumulado nos túbulos T"
    ],
    "correctAnswer": 2,
    "explanation": "O aumento do cálcio citosólico é o \"gatilho\" universal para a contração",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-4",
    "question": "Em um experimento laboratorial com fibras musculares isoladas, a remoção do sarcolema impediria qual processo inicial?",
    "options": [
      "Produção de proteínas contráteis (processo fisiológico)",
      "Propagação do estímulo elétrico pela superfície celular.",
      "Armazenamento intracelular de cálcio (via potencial de ação)",
      "Interação entre filamentos contráteis (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "O sarcolema é a membrana plasmática que conduz o potencial de ação",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-5",
    "question": "Uma criança com uma doença genética rara apresenta túbulos T malformados. Qual a consequência direta esperada na contração muscular?",
    "options": [
      "Incapacidade de hidrólise de ATP pela miosina mecanismo celular em resposta ao controle autonômico",
      "Dificuldade no retorno do cálcio ao retículo sarcoplasmático (via potencial de ação)",
      "Comprometimento da uniformidade contrátil pela falha de condução interna do estímulo.",
      "Rigidez muscular precoce por ausência de receptores de acetilcolina sob influência direta do controle autonômico desregulado"
    ],
    "correctAnswer": 2,
    "explanation": "Túbulos T levam o potencial de ação para o interior da fibra, garantindo contração síncrona",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-6",
    "question": "Um paciente com fraqueza muscular realiza uma ressonância magnética funcional que detecta anormalidades na \"unidade funcional da miofibrila\". O médico está se referindo ao:",
    "options": [
      "Sarcolema",
      "Retículo sarcoplasmático",
      "Sarcômero.",
      "Túbulo T"
    ],
    "correctAnswer": 2,
    "explanation": "O sarcômero é a unidade funcional onde ocorre a interação actina-miosina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-7",
    "question": "Durante a observação de um sarcômero sob microscopia eletrônica em estado de contração máxima, o pesquisador nota que uma região permaneceu com o mesmo comprimento. Qual é essa região?",
    "options": [
      "Banda I",
      "Zona H o que desestabiliza o processo fisiológico de contração",
      "Banda A.",
      "Distância entre discos Z"
    ],
    "correctAnswer": 2,
    "explanation": "Durante a contração, os filamentos deslizam; a Banda A (comprimento da miosina) não muda, mas a H e I encurtam",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-8",
    "question": "No estudo do deslizamento dos filamentos, qual proteína é responsável por impedir o acesso aos sítios ativos da actina quando o músculo está em repouso?",
    "options": [
      "Troponina C",
      "Tropomiosina.",
      "Titina (mecanismo celular)",
      "Cadeia leve de miosina"
    ],
    "correctAnswer": 1,
    "explanation": "A tropomiosina bloqueia fisicamente os sítios de ligação no repouso",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-9",
    "question": "Um paciente com hipocalcemia severa apresenta tetania. Na fisiologia normal, o cálcio deve se ligar a qual subunidade para permitir a exposição do sítio de ligação da miosina?",
    "options": [
      "Troponina T",
      "Troponina I",
      "Troponina C.",
      "Calmodulina"
    ],
    "correctAnswer": 2,
    "explanation": "A troponina C é o sensor de cálcio no músculo estriado",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-10",
    "question": "Sobre a miosina (filamento grosso), assinale a alternativa INCORRETA:",
    "options": [
      "Possui região móvel que participa do movimento contrátil rompendo o balanço hidrostático necessário para a fibra",
      "Apresenta sítios de ligação para actina e ATP (processo fisiológico)",
      "É formada por cadeias leves e pesadas (regulação homeostática)",
      "Em repouso permanece aderida firmemente à actina até receber ATP."
    ],
    "correctAnswer": 3,
    "explanation": "No repouso, a interação é fraca ou inexistente devido ao bloqueio da tropomiosina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-11",
    "question": "Um homem é encontrado morto em seu apartamento com o corpo rígido. O fenômeno de Rigor Mortis ocorre porque:",
    "options": [
      "O excesso de ATP impede o desligamento das pontes cruzadas",
      "A ausência de ATP impede a separação entre actina e miosina.",
      "Todo o cálcio é removido do citoplasma após a morte devido a um comprometimento na sinalização local das células",
      "Há destruição imediata dos receptores de acetilcolina"
    ],
    "correctAnswer": 1,
    "explanation": "Sem ATP, as pontes cruzadas não se desfazem, mantendo o músculo rígido",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-12",
    "question": "Na junção neuromuscular, a chegada do potencial de ação no terminal axonal do neurônio motor provoca inicialmente:",
    "options": [
      "Entrada de cálcio no terminal e liberação de neurotransmissor.",
      "Ligação da acetilcolina a receptores muscarínicos o que desestabiliza o processo fisiológico de contração",
      "Influxo de sódio para o interior do axônio terminal afetando diretamente a dinâmica funcional das miofibrilas",
      "Degradação imediata da acetilcolina liberada (via sinalização local)"
    ],
    "correctAnswer": 0,
    "explanation": "A entrada de cálcio no terminal pré-sináptico causa a liberação de acetilcolina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-13",
    "question": "Um paciente ingere acidentalmente \"chumbinho\" (inibidor da acetilcolinesterase). O efeito fisiológico esperado no músculo esquelético é:",
    "options": [
      "Redução completa da transmissão neuromuscular (regulação homeostática)",
      "Estimulação prolongada da fibra muscular pela permanência da acetilcolina.",
      "Bloqueio da propagação do impulso nos túbulos T (mecanismo celular)",
      "Supressão da liberação de cálcio intracelular (processo fisiológico)"
    ],
    "correctAnswer": 1,
    "explanation": "Inibir a acetilcolinesterase faz a ACh se acumular, causando superestimulação muscular",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-14",
    "question": "A proteína DHP, localizada nos túbulos T, tem a função crítica de:",
    "options": [
      "Realizar transporte ativo de cálcio extracelular o que desestabiliza o processo fisiológico de contração",
      "Detectar alterações de voltagem e ativar canais de rianodina.",
      "Promover degradação de neurotransmissores (via potencial de ação)",
      "Interagir diretamente com a troponina (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "A proteína DHP é sensível à voltagem e abre mecanicamente os canais de rianodina (RyR) no retículo",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-15",
    "question": "O relaxamento muscular completo exige obrigatoriamente:",
    "options": [
      "Abertura sustentada de canais de sódio (regulação homeostática)",
      "Retorno do cálcio ao retículo sarcoplasmático por transporte ativo.",
      "Ligação do cálcio à tropomiosina através de uma falha na regulação homeostática do sistema",
      "Depleção total de ATP intracelular por meio de uma alteração no mecanismo celular de transporte"
    ],
    "correctAnswer": 1,
    "explanation": "O relaxamento depende da remoção do cálcio citosólico pelas bombas SERCA",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-16",
    "question": "Qual o papel do ATP no processo de relaxamento?",
    "options": [
      "Promover a separação da miosina da actina.",
      "Fornecer energia para deslocamento da troponina",
      "Ativar canais de liberação de cálcio rompendo o balanço hidrostático necessário para a fibra",
      "Estimular receptores nicotínicos (via sinalização local)"
    ],
    "correctAnswer": 0,
    "explanation": "O ATP reduz a afinidade da miosina pela actina, permitindo o desligamento",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-17",
    "question": "No músculo liso, a organização dos filamentos finos ocorre através de:",
    "options": [
      "Discos Z (via sinalização local)",
      "Discos intercalares",
      "Corpos densos.",
      "Linhas M (via potencial de ação)"
    ],
    "correctAnswer": 2,
    "explanation": "Músculo liso não tem discos Z; os filamentos finos se ancoram nos corpos densos",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-18",
    "question": "Um paciente com hipertensão arterial faz uso de um bloqueador de canais de cálcio. No músculo liso vascular, o cálcio é essencial porque:",
    "options": [
      "A contração depende também de influxo extracelular significativo de cálcio.",
      "Atua ligando-se à troponina C via potencial de ação mediante regulação homeostática específica",
      "Estimula diretamente a bomba Na+/K+ processo fisiológico conforme o mecanismo de sinalização celular",
      "Determina o aparecimento das estriações devido a um comprometimento na sinalização local das células"
    ],
    "correctAnswer": 0,
    "explanation": "O músculo liso depende significativamente do cálcio extracelular para sustentar a contração",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-19",
    "question": "Diferente do músculo esquelético, no músculo liso o cálcio se liga à:",
    "options": [
      "Troponina I",
      "Calmodulina.",
      "Tropomiosina",
      "MLCK (regulação homeostática)"
    ],
    "correctAnswer": 1,
    "explanation": "Músculo liso não possui troponina; o cálcio usa a calmodulina como mediador",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-20",
    "question": "A enzima responsável por fosforilar as cadeias leves da miosina no músculo liso, permitindo a contração, é a:",
    "options": [
      "Acetilcolinesterase (regulação homeostática)",
      "Miosina fosfatase (mecanismo celular)",
      "Quinase da cadeia leve de miosina.",
      "Creatina quinase (via sinalização local)"
    ],
    "correctAnswer": 2,
    "explanation": "A MLCK fosforila a miosina para ativar sua atividade ATPase no músculo liso",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-21",
    "question": "Uma mulher de 30 anos apresenta ptose palpebral e fraqueza muscular que piora ao longo do dia. O diagnóstico de Miastenia Gravis sugere que:",
    "options": [
      "Há produção insuficiente de acetilcolina (via potencial de ação)",
      "Ocorre bloqueio imunológico dos receptores nicotínicos.",
      "Existe falha na liberação de cálcio intracelular impedindo o correto acoplamento do potencial de ação muscular",
      "Há hiperatividade da miosina quinase (regulação homeostática)"
    ],
    "correctAnswer": 1,
    "explanation": "A Miastenia Gravis é autoimune contra receptores nicotínicos de ACh",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-22",
    "question": "Sobre a toxina botulínica, seu mecanismo de ação consiste em:",
    "options": [
      "Bloquear receptores pós-sinápticos de acetilcolina",
      "Impedir a exocitose de acetilcolina pelo neurônio motor.",
      "Estimular degradação acelerada da acetilcolina bloqueando a via de fluxo iônico através do sarcolema",
      "Inibir recaptação de cálcio intracelular (regulação homeostática)"
    ],
    "correctAnswer": 1,
    "explanation": "A toxina botulínica impede a exocitose das vesículas de acetilcolina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-23",
    "question": "Durante atividade física explosiva de curta duração, qual substância auxilia na regeneração rápida de ATP?",
    "options": [
      "Calmodulina devido a um comprometimento na sinalização local das células",
      "Fosfocreatina.",
      "Acetilcolina",
      "Tropomiosina"
    ],
    "correctAnswer": 1,
    "explanation": "A fosfocreatina doa um fosfato para o ADP, gerando ATP rapidamente",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-24",
    "question": "No músculo liso, o relaxamento ocorre quando:",
    "options": [
      "A miosina quinase modifica a actina (via sinalização local)",
      "O cálcio se liga à troponina (via sinalização local)",
      "A miosina sofre desfosforilação pela fosfatase específica.",
      "O ATP é completamente consumido (processo fisiológico)"
    ],
    "correctAnswer": 2,
    "explanation": "A desfosforilação pela miosina fosfatase (MLCP) é o passo chave para cessar a contração lisa",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-25",
    "question": "Assinale a alternativa que descreve corretamente o acoplamento excitação-contração no músculo esquelético:",
    "options": [
      "Potencial de ação → Túbulos T → DHP → Rianodina → Liberação de cálcio.",
      "Potencial de ação → Entrada direta de cálcio extracelular → Calmodulina",
      "Acetilcolina → Receptor muscarínico → Potássio → Contração através de uma falha na regulação homeostática do sistema",
      "Fosforilação da miosina → Ligação ao cálcio → Movimento impedindo o correto acoplamento do potencial de ação muscular"
    ],
    "correctAnswer": 0,
    "explanation": "Sequência correta de eventos do acoplamento excitação-contração esquelético",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-26",
    "question": "Um paciente com miopatia apresenta mutação na Troponina T. Qual função está mais afetada?",
    "options": [
      "Ligação de cálcio ao complexo troponina afetando diretamente a dinâmica funcional das miofibrilas",
      "Fixação do complexo troponina à tropomiosina.",
      "Inibição direta da actina (regulação homeostática)",
      "Quebra de ATP sob influência direta do controle autonômico desregulado"
    ],
    "correctAnswer": 1,
    "explanation": "A Troponina T (TnT) fixa o complexo de troponina à tropomiosina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-27",
    "question": "Sobre a Zona H do sarcômero:",
    "options": [
      "Contém apenas actina (via potencial de ação)",
      "Reduz seu tamanho durante a contração.",
      "Abriga toda a proteína titina (mecanismo celular)",
      "Contém receptores de acetilcolina devido a um comprometimento na sinalização local das células"
    ],
    "correctAnswer": 1,
    "explanation": "A Zona H é a região central apenas com miosina; o deslizamento da actina sobre ela a faz diminuir",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-28",
    "question": "O que ocorre com a Banda I durante a contração?",
    "options": [
      "Mantém-se inalterada",
      "Diminui de extensão.",
      "Aumenta progressivamente",
      "Sai da região sarcomérica"
    ],
    "correctAnswer": 1,
    "explanation": "A Banda I contém apenas actina e encurta conforme a actina desliza sobre a miosina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-29",
    "question": "Qual estrutura permite que a contração ocorra uniformemente em toda a espessura da fibra?",
    "options": [
      "Sarcolema",
      "Túbulos T.",
      "Sarcômero",
      "Filamentos grossos"
    ],
    "correctAnswer": 1,
    "explanation": "Os túbulos T garantem que o sinal elétrico atinja as miofibrilas centrais da fibra",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-30",
    "question": "Na Miastenia Gravis, por que a despolarização muscular é insuficiente?",
    "options": [
      "Falta acetilcolina na fenda (processo fisiológico)",
      "O impulso não alcança o neurônio motor gerando uma resposta sistêmica compensatória inadequada",
      "Redução dos receptores nicotínicos disponíveis.",
      "Inibição da acetilcolinesterase (mecanismo celular)"
    ],
    "correctAnswer": 2,
    "explanation": "Menos receptores disponíveis resultam em menor entrada de sódio e falha em atingir o limiar",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-31",
    "question": "Em repouso muscular, a miosina encontra-se:",
    "options": [
      "Fortemente aderida à actina (via sinalização local)",
      "Energizada, porém impedida de se ligar pela tropomiosina.",
      "Sem nucleotídeos ligados mecanismo celular de acordo com o processo fisiológico local",
      "Degradada no citoplasma processo fisiológico mantendo a dinâmica funcional do sistema"
    ],
    "correctAnswer": 1,
    "explanation": "A miosina está energizada (ATP hidrolisado em ADP+Pi), mas bloqueada pela tropomiosina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-32",
    "question": "Qual a função da bomba SERCA?",
    "options": [
      "Liberar cálcio durante despolarização (regulação homeostática)",
      "Recolher cálcio para o retículo sarcoplasmático.",
      "Facilitar ligação actina-miosina (via sinalização local)",
      "Produzir ATP regulação homeostática conforme o mecanismo de sinalização celular"
    ],
    "correctAnswer": 1,
    "explanation": "Esta bomba usa ATP para limpar o cálcio do citoplasma, permitindo o relaxamento",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-33",
    "question": "Sobre o músculo liso, assinale a alternativa INCORRETA:",
    "options": [
      "Recebe controle autonômico (via sinalização local)",
      "Contrai-se de forma lenta e involuntária (regulação homeostática)",
      "Possui estriações decorrentes de sarcômeros organizados.",
      "Tem baixo consumo energético relativo (mecanismo celular)"
    ],
    "correctAnswer": 2,
    "explanation": "O músculo liso não possui estrias porque seus filamentos não estão organizados em sarcômeros",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-34",
    "question": "Onde se encontra predominantemente músculo liso?",
    "options": [
      "Inserido em ossos (via sinalização local)",
      "No miocárdio (regulação homeostática)",
      "Em órgãos ocos e vasos.",
      "Apenas em esfíncteres"
    ],
    "correctAnswer": 2,
    "explanation": "Localização clássica do tecido muscular liso",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-35",
    "question": "O movimento de força da miosina é desencadeado por:",
    "options": [
      "Ligação de ATP fresco (via sinalização local)",
      "Liberação de ADP e fosfato inorgânico.",
      "Entrada de sódio intracelular (processo fisiológico)",
      "Fosforilação da actina (via potencial de ação)"
    ],
    "correctAnswer": 1,
    "explanation": "A liberação de Pi inicia o movimento da cabeça da miosina; a saída de ADP completa o ciclo",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-36",
    "question": "Uma condição que impede a hidrólise do ATP pela miosina quinase afetará principalmente:",
    "options": [
      "Relaxamento esquelético",
      "Contração lisa.",
      "Liberação de ACh",
      "Titina (regulação homeostática)"
    ],
    "correctAnswer": 1,
    "explanation": "Sem miosina quinase ativa, a miosina lisa não pode ser fosforilada para iniciar a contração",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-37",
    "question": "Qual proteína é considerada motora?",
    "options": [
      "Actina bloqueando a via de fluxo iônico através do sarcolema",
      "Miosina.",
      "Tropomiosina",
      "Troponina"
    ],
    "correctAnswer": 1,
    "explanation": "A miosina é a proteína que converte energia química (ATP) em movimento",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-38",
    "question": "No relaxamento do músculo liso, o cálcio citosólico:",
    "options": [
      "É degradado impedindo o correto acoplamento do potencial de ação muscular",
      "É removido para RS ou meio extracelular.",
      "Permanece ligado à calmodulina (mecanismo celular)",
      "É convertido em ATP (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "O relaxamento sempre exige a redução do cálcio livre no citosol",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-39",
    "question": "A unidade delimitada por duas linhas Z é:",
    "options": [
      "Miofibrila",
      "Banda A rompendo o balanço hidrostático necessário para a fibra",
      "Sarcômero.",
      "Placa motora"
    ],
    "correctAnswer": 2,
    "explanation": "Definição anatômica e funcional do sarcômero",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-40",
    "question": "Assinale a alternativa que contém apenas proteínas reguladoras:",
    "options": [
      "Actina e miosina (mecanismo celular)",
      "Troponina e tropomiosina.",
      "Titina e nebulina (via potencial de ação)",
      "Colágeno e elastina o que desestabiliza o processo fisiológico de contração"
    ],
    "correctAnswer": 1,
    "explanation": "Troponina e tropomiosina controlam quando a contração pode ou não ocorrer",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-41",
    "question": "O receptor nicotínico da placa motora é permeável principalmente a:",
    "options": [
      "Cálcio",
      "Sódio.",
      "Cloreto",
      "Magnésio"
    ],
    "correctAnswer": 1,
    "explanation": "A ligação da ACh abre canais de Na+, causando a despolarização da placa motora",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-42",
    "question": "No músculo liso, pontes cruzadas se formam após:",
    "options": [
      "Ligação à troponina C (processo fisiológico)",
      "Fosforilação da miosina pela MLCK.",
      "Degradação de ATP (via potencial de ação)",
      "Formação de discos Z (mecanismo celular)"
    ],
    "correctAnswer": 1,
    "explanation": "A fosforilação da cadeia leve da miosina é o pré-requisito no músculo liso",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-43",
    "question": "A redução da afinidade da miosina pela actina provoca:",
    "options": [
      "Início da contração (via sinalização local)",
      "Encurtamento sarcomérico (mecanismo celular)",
      "Desprendimento entre filamentos.",
      "Maior liberação de cálcio através de uma falha na regulação homeostática do sistema"
    ],
    "correctAnswer": 2,
    "explanation": "A ligação de um novo ATP reduz essa afinidade, permitindo o desprendimento",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-44",
    "question": "Sobre o papel do cálcio:",
    "options": [
      "Permite exposição dos sítios ativos da actina no músculo estriado.",
      "É dispensável no músculo liso via sinalização local mantendo a dinâmica funcional do sistema",
      "Armazena-se no complexo de Golgi sob influência direta do controle autonômico desregulado",
      "Sua deficiência causa rigor mortis (regulação homeostática)"
    ],
    "correctAnswer": 0,
    "explanation": "O cálcio \"autoriza\" a contração ao mover a tropomiosina no músculo estriado",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-45",
    "question": "O aspecto estriado dos músculos depende de:",
    "options": [
      "Número de núcleos bloqueando a via de fluxo iônico através do sarcolema",
      "Organização ordenada dos filamentos contráteis.",
      "Quantidade de mitocôndrias (via potencial de ação)",
      "Tipo de inervação sob influência direta do controle autonômico desregulado"
    ],
    "correctAnswer": 1,
    "explanation": "O padrão estriado vem da repetição organizada de sarcômeros",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-46",
    "question": "Com baixos níveis de ATP, as bombas Ca2+-ATPase:",
    "options": [
      "Tornam-se hiperativas (via potencial de ação)",
      "Reduzem atividade, dificultando relaxamento.",
      "Funcionam por difusão (processo fisiológico)",
      "São substituídas pela MLCK (via sinalização local)"
    ],
    "correctAnswer": 1,
    "explanation": "Sem ATP, as bombas de cálcio falham, mantendo o cálcio alto e o músculo contraído (rigidez)",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-47",
    "question": "A fosforilação das cadeias leves da miosina ocorre tipicamente em:",
    "options": [
      "Músculo esquelético",
      "Músculo cardíaco",
      "Músculo liso.",
      "Todos igualmente"
    ],
    "correctAnswer": 2,
    "explanation": "Mecanismo regulatório exclusivo do músculo liso para ativação da miosina",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-48",
    "question": "Assinale a alternativa INCORRETA sobre relaxamento muscular:",
    "options": [
      "Tropomiosina volta a bloquear a actina afetando diretamente a dinâmica funcional das miofibrilas",
      "No músculo liso depende de miosina fosfatase",
      "ATP auxilia no desligamento actina-miosina",
      "O cálcio deve permanecer elevado no citoplasma."
    ],
    "correctAnswer": 3,
    "explanation": "O cálcio DEVE ser removido do citoplasma para que ocorra o relaxamento",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-49",
    "question": "O complexo cálcio-calmodulina ativa:",
    "options": [
      "ATPase da miosina",
      "MLCK.",
      "Acetilcolinesterase",
      "Adenilato ciclase"
    ],
    "correctAnswer": 1,
    "explanation": "O complexo Ca2+-calmodulina é o ativador direto da enzima MLCK",
    "theme": "Fisiologia"
  },
  {
    "id": "fisiologia-musc-50",
    "question": "O músculo esquelético é chamado de voluntário porque:",
    "options": [
      "Contrai independentemente de nervos (via sinalização local)",
      "Está sob controle do sistema nervoso somático.",
      "Possui junções comunicantes (mecanismo celular)",
      "Independe de cálcio (via potencial de ação)"
    ],
    "correctAnswer": 1,
    "explanation": "Controle voluntário é mediado pelo sistema nervoso somático sobre o músculo esquelético",
    "theme": "Fisiologia"
  }
];

export const snaQuestions: Question[] = [
  {
    "id": "sna-1",
    "question": "Um paciente de 68 anos com insuficiência cardíaca congestiva utiliza Digoxina. O mecanismo de ação desse fármaco envolve a inibição da bomba de sódio e potássio (Na+/K+-ATPase)\n. Qual a consequência fisiológica direta dessa inibição nas células miocárdicas?",
    "options": [
      "Aumento do efluxo de sódio, reduzindo a osmolaridade celular mediante regulação homeostática específica.",
      "Acúmulo de sódio intracelular, o que reduz a atividade do trocador Na+/Ca2+\n.",
      "Hiperpolarização imediata da membrana celular devido ao acúmulo de potássio\n.",
      "Redução da contratilidade cardíaca por depleção de cálcio intracelular."
    ],
    "correctAnswer": 1,
    "explanation": "O acúmulo de Na+ intracelular reduz o gradiente que move o trocador Na+/Ca2+, resultando em mais cálcio disponível para a contração (inotropismo positivo)",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-2",
    "question": "Durante um procedimento estético, uma paciente recebe aplicação de toxina botulínica. Fisiologicamente, essa toxina atua bloqueando a liberação de acetilcolina no neurônio motor\n. Assinale a alternativa que descreve corretamente o mecanismo molecular envolvido:",
    "options": [
      "Competição direta com a acetilcolina pelos receptores nicotínicos na placa motora via sinalização celular local.",
      "Quebra das proteínas que auxiliam a vesícula de neurotransmissor a se fundir com a membrana pré-sináptica\n.",
      "Inibição da enzima acetilcolinesterase na fenda sináptica via sinalização celular local.",
      "Bloqueio dos canais de cálcio dependentes de voltagem no terminal axônico via sinalização celular local."
    ],
    "correctAnswer": 1,
    "explanation": "A toxina botulínica cliva proteínas de fusão (SNAREs), impedindo a exocitose da acetilcolina",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-3",
    "question": "Um homem de 45 anos apresenta quadro de fraqueza muscular progressiva e ptose palpebral, com suspeita de Miastenia Gravis. Nessa patologia, anticorpos atacam os receptores nicotínicos da placa motora\n. Sobre esses receptores, é CORRETO afirmar:",
    "options": [
      "São receptores metabotrópicos acoplados à proteína Gq\n por meio de um processo fisiológico adaptativo.",
      "Funcionam como canais iônicos (ionotrópicos), permitindo a entrada rápida de sódio para despolarização\n.",
      "Sua ativação primária promove a hiperpolarização da fibra muscular esquelética por meio de um processo fisiológico adaptativo.",
      "São estimulados preferencialmente por noradrenalina em condições fisiológicas por meio de um processo fisiológico adaptativo."
    ],
    "correctAnswer": 1,
    "explanation": "Receptores nicotínicos são canais iônicos diretos (ionotrópicos) que permitem a entrada de Na+",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-4",
    "question": "Um paciente diabético de longa data apresenta tontura ao se levantar (hipotensão ortostática) e saciedade precoce (gastroparesia), sugerindo disfunção autonômica\n. Qual divisão do sistema nervoso periférico é responsável pelo controle dessas funções involuntárias e automáticas?",
    "options": [
      "Sistema Nervoso Somático Eferente\n.",
      "Sistema Nervoso Autônomo\n.",
      "Sistema Nervoso Sensorial Consciente\n.",
      "Apenas o Sistema Nervoso Simpático, exclusivamente."
    ],
    "correctAnswer": 1,
    "explanation": "O SNA controla funções involuntárias como pressão arterial e digestão",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-5",
    "question": "Considere um paciente em choque anafilático que apresenta bronconstrição acentuada. Para reverter o quadro, utiliza-se adrenalina. Qual receptor e via de sinalização são o alvo principal para promover a broncodilatação?",
    "options": [
      "Receptor β \n2\n​\n , que ativa a proteína Gs, aumentando o AMPc e estimulando o relaxamento da musculatura lisa\n.",
      "Receptor α \n1\n​\n , que ativa a proteína Gq, aumentando o cálcio intracelular afetando diretamente a dinâmica funcional.",
      "Receptor M \n3\n​\n , que promove a contração das vias aéreas via proteína Gq\n afetando diretamente a dinâmica funcional.",
      "Receptor β \n1\n​\n , que aumenta a frequência cardíaca sem interferir no pulmão afetando diretamente a dinâmica funcional."
    ],
    "correctAnswer": 0,
    "explanation": "Receptores β",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-6",
    "question": "Assinale a alternativa INCORRETA sobre a organização das vias autonômicas:",
    "options": [
      "Todo neurônio pré-ganglionar, tanto do simpático quanto do parassimpático, libera acetilcolina\n.",
      "O neurônio pós-ganglionar do sistema simpático é geralmente longo\n.",
      "No sistema parassimpático, o gânglio localiza-se próximo ou dentro do órgão efetor\n.",
      "O sistema simpático tem origem na região craniossacral da medula espinhal\n."
    ],
    "correctAnswer": 3,
    "explanation": "O sistema simpático é toracolombar (T1-L2); o parassimpático é que é craniossacral",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-7",
    "question": "Um paciente apresenta bradicardia severa. Sabe-se que a acetilcolina reduz a frequência cardíaca atuando em receptores específicos. Qual o receptor e a proteína G envolvida nesse mecanismo?",
    "options": [
      "Receptor M \n3\n​\n  e proteína Gq através de uma alteração no mecanismo de transporte.",
      "Receptor M \n2\n​\n  e proteína Gi, que inibe a adenilato ciclase e reduz o AMPc\n.",
      "Receptor β \n1\n​\n  e proteína Gs através de uma alteração no mecanismo de transporte.",
      "Receptor nicotínico e proteína Gs através de uma alteração no mecanismo de transporte."
    ],
    "correctAnswer": 1,
    "explanation": "M",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-8",
    "question": "Sobre o transporte através da membrana plasmática, um estudante observa que certas substâncias movem-se a favor do gradiente de concentração sem gasto de ATP, mas utilizando proteínas transportadoras\n. Esse processo é denominado:",
    "options": [
      "Difusão simples.",
      "Transporte ativo primário.",
      "Difusão facilitada\n.",
      "Transporte ativo secundário."
    ],
    "correctAnswer": 2,
    "explanation": "Difusão facilitada utiliza proteínas transportadoras a favor do gradiente, sem ATP",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-9",
    "question": "Em uma situação de \"luta ou fuga\", o sistema simpático promove midríase (dilatação da pupila)\n. Esse efeito é mediado pela ativação de:",
    "options": [
      "Receptores α \n1\n​\n , que ativam a proteína Gq e aumentam o cálcio intracelular para contração do músculo radial da íris\n.",
      "Receptores M \n3\n​\n , que promovem a miose bloqueando a via de fluxo iônico.",
      "Receptores β \n2\n​\n , via proteína Gs bloqueando a via de fluxo iônico.",
      "Receptores α \n2\n​\n , que inibem a liberação de noradrenalina bloqueando a via de fluxo iônico."
    ],
    "correctAnswer": 0,
    "explanation": "α",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-10",
    "question": "A bomba de Na+/K+-ATPase é fundamental para a bioeletrogênese. Ela atua expulsando e introduzindo íons na seguinte proporção\n:",
    "options": [
      "2 íons Na+ para fora e 3 íons K+ para dentro.",
      "3 íons Na+ para fora e 2 íons K+ para dentro\n.",
      "3 íons Na+ para dentro e 2 íons K+ para fora.",
      "1 íon Na+ para fora e 1 íon K+ para dentro."
    ],
    "correctAnswer": 1,
    "explanation": "A proporção fixa é de 3 Na+ para fora e 2 K+ para dentro",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-11",
    "question": "Um paciente com doença de Alzheimer apresenta baixos níveis de acetilcolina cerebral. O tratamento visa aumentar a disponibilidade desse neurotransmissor na fenda sináptica\n. Qual enzima é responsável pela degradação da acetilcolina?",
    "options": [
      "Tirosina hidroxilase.",
      "MAO (Monoaminoxidase).",
      "Acetilcolinesterase\n.",
      "COMT (Catecol-O-metiltransferase)."
    ],
    "correctAnswer": 2,
    "explanation": "A acetilcolinesterase degrada a ACh na fenda sináptica",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-12",
    "question": "Assinale a alternativa CORRETA sobre o potencial de ação neuronal\n:",
    "options": [
      "A fase de despolarização é causada pela saída rápida de potássio da célula.",
      "O limiar de excitação deve ser atingido para que o potencial de ação ocorra\n.",
      "A repolarização ocorre devido à entrada de sódio através de canais dependentes de voltagem.",
      "Durante a hiperpolarização, o potencial de membrana torna-se menos negativo que o de repouso."
    ],
    "correctAnswer": 1,
    "explanation": "O potencial de ação é um evento \"tudo ou nada\" que requer atingir o limiar",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-13",
    "question": "Um indivíduo apresenta sudorese excessiva ao realizar uma prova. Embora a sudorese seja uma resposta do sistema simpático, as fibras pós-ganglionares que inervam as glândulas sudoríparas são uma exceção e liberam\n:",
    "options": [
      "Noradrenalina.",
      "Adrenalina.",
      "Acetilcolina\n.",
      "Dopamina."
    ],
    "correctAnswer": 2,
    "explanation": "Glândulas sudoríparas são uma exceção simpática que utiliza fibras colinérgicas",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-14",
    "question": "Sobre os receptores metabotrópicos, assinale a alternativa INCORRETA:",
    "options": [
      "Estão acoplados à proteína G\n seguindo o padrão de resposta sistêmica.",
      "Sua resposta é mais lenta, porém mais duradoura que a dos ionotrópicos\n.",
      "Ativam cascatas de sinalização intracelular através de segundos mensageiros\n.",
      "Funcionam diretamente como canais iônicos de abertura rápida\n."
    ],
    "correctAnswer": 3,
    "explanation": "Receptores metabotrópicos não são canais iônicos diretos; essa é a definição de ionotrópicos",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-15",
    "question": "A síntese das catecolaminas segue uma via metabólica específica. Qual é o precursor inicial nessa via, conforme as notas de aula?",
    "options": [
      "Triptofano.",
      "Tirosina\n.",
      "Colina.",
      "Acetil-CoA."
    ],
    "correctAnswer": 1,
    "explanation": "A síntese começa com o aminoácido Tirosina",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-16",
    "question": "Um paciente ingere acidentalmente uma substância que bloqueia os receptores α \n2\n​\n  adrenérgicos. Fisiologicamente, o receptor α \n2\n​\n  atua como um \"freio\", pois\n:",
    "options": [
      "Estimula a liberação de mais noradrenalina rompendo o balanço hidrostático necessário.",
      "Ativa a proteína Gs para aumentar o AMPc rompendo o balanço hidrostático necessário.",
      "Inibe o receptor α \n1\n​\n  (vasoconstritor), gerando vasodilatação via proteína Gi\n.",
      "Promove a contração do esfíncter ureteral rompendo o balanço hidrostático necessário."
    ],
    "correctAnswer": 2,
    "explanation": "α",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-17",
    "question": "A proteína Gq, quando ativada por um neurotransmissor, estimula a enzima fosfolipase C, gerando quais segundos mensageiros?",
    "options": [
      "AMPc e GMPc através de uma alteração no mecanismo de transporte.",
      "Diacilglicerol (DAG) e Inositol Trifosfato (IP3)\n.",
      "ATP e ADP através de uma alteração no mecanismo de transporte.",
      "Canais de sódio e potássio através de uma alteração no mecanismo de transporte."
    ],
    "correctAnswer": 1,
    "explanation": "Gq ativa a fosfolipase C, que cliva PIP2 em DAG e IP3",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-18",
    "question": "No sistema gastrointestinal, o estímulo parassimpático via receptor M \n3\n​\n  promove\n:",
    "options": [
      "Inibição da digestão e constipação sob influência direta do controle autonômico.",
      "Aumento da motilidade e secreção ácida (via bomba de prótons)\n.",
      "Relaxamento do músculo detrusor sob influência direta do controle autonômico.",
      "Vasoconstrição das artérias mesentéricas sob influência direta do controle autonômico."
    ],
    "correctAnswer": 1,
    "explanation": "O parassimpático (via M",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-19",
    "question": "Um paciente apresenta retenção urinária. Para facilitar a micção, seria necessário estimular qual receptor no músculo detrusor da bexiga?",
    "options": [
      "α \n1\n​\n  (que promove contração do esfíncter)\n bloqueando a via de fluxo iônico.",
      "M \n3\n​\n  (parassimpático, que promove contração do detrusor)\n.",
      "β \n3\n​\n  (que promove relaxamento do detrusor)\n bloqueando a via de fluxo iônico.",
      "M \n2\n​\n  (que reduz a frequência cardíaca) bloqueando a via de fluxo iônico."
    ],
    "correctAnswer": 1,
    "explanation": "M",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-20",
    "question": "O veneno \"Curare\" é conhecido por causar paralisia muscular. Seu mecanismo consiste em\n:",
    "options": [
      "Bloquear a liberação de acetilcolina gerando uma resposta compensatória inadequada.",
      "Competir com a acetilcolina pelos receptores nicotínicos na placa motora, impedindo a despolarização\n.",
      "Inibir a bomba de sódio e potássio gerando uma resposta compensatória inadequada.",
      "Ativar excessivamente os receptores muscarínicos gerando uma resposta compensatória inadequada."
    ],
    "correctAnswer": 1,
    "explanation": "O curare bloqueia o receptor nicotínico, impedindo a contração muscular",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-21",
    "question": "Qual das seguintes proteínas de membrana exerce funções enzimáticas, conforme o esquema da membrana plasmática?",
    "options": [
      "Proteínas integrais\n.",
      "Colesterol mediante regulação homeostática específica.",
      "Proteínas periféricas\n.",
      "Glicocálix mediante regulação homeostática específica."
    ],
    "correctAnswer": 2,
    "explanation": "Proteínas periféricas na membrana plasmática frequentemente atuam como enzimas",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-22",
    "question": "Um paciente em repouso após uma refeição apresenta ativação do sistema parassimpático. Qual nervo craniano é responsável pela maior parte do fluxo eferente parassimpático para as vísceras torácicas e abdominais?",
    "options": [
      "Nervo Facial (VII).",
      "Nervo Glossofaringeo (IX).",
      "Nervo Vago (X)\n.",
      "Nervo Oculomotor (III)."
    ],
    "correctAnswer": 2,
    "explanation": "O nervo vago (X) carrega a maior parte das fibras parassimpáticas para as vísceras",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-23",
    "question": "Sobre a proteína Gi, é correto afirmar que sua ativação leva a\n:",
    "options": [
      "Aumento dos níveis de AMP cíclico por meio de um processo fisiológico adaptativo.",
      "Inibição da adenilato ciclase e diminuição do AMP cíclico\n.",
      "Ativação da fosfolipase C por meio de um processo fisiológico adaptativo.",
      "Abertura direta de canais de cálcio por meio de um processo fisiológico adaptativo."
    ],
    "correctAnswer": 1,
    "explanation": "A proteína Gi é inibitória da adenilato ciclase",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-24",
    "question": "A medula da glândula suprarrenal é considerada um gânglio simpático modificado. Ela secreta principalmente\n:",
    "options": [
      "Acetilcolina seguindo o padrão de resposta sistêmica.",
      "Adrenalina (80%) e Noradrenalina (20%)\n.",
      "Apenas Dopamina seguindo o padrão de resposta sistêmica.",
      "Serotonina seguindo o padrão de resposta sistêmica."
    ],
    "correctAnswer": 1,
    "explanation": "A medula suprarrenal libera majoritariamente adrenalina na corrente sanguínea",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-25",
    "question": "Um paciente apresenta taquicardia em uma situação de estresse. O neurotransmissor noradrenalina está atuando em qual receptor cardíaco para aumentar a frequência e a força de contração?",
    "options": [
      "β \n1\n​\n  adrenérgico, acoplado à proteína Gs\n.",
      "β \n2\n​\n  adrenérgico, promovendo vasodilatação.",
      "M \n2\n​\n  muscarínico, promovendo bradicardia.",
      "α \n1\n​\n  adrenérgico, promovendo vasoconstrição."
    ],
    "correctAnswer": 0,
    "explanation": "No coração, o simpático atua via β",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-26",
    "question": "Assinale a alternativa que correlaciona corretamente o receptor e sua proteína G correspondente, conforme o \"macete\" fornecido no material:",
    "options": [
      "α \n1\n​\n  - Gi; α \n2\n​\n  - Gq; Betas - Gs.",
      "α \n1\n​\n  - Gq; α \n2\n​\n  - Gi; Betas - Gs\n.",
      "α \n1\n​\n  - Gs; α \n2\n​\n  - Gi; Betas - Gq.",
      "Todos os receptores adrenérgicos são acoplados à proteína Gq."
    ],
    "correctAnswer": 1,
    "explanation": "α",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-27",
    "question": "Em relação aos receptores muscarínicos, quais são considerados inibitórios (pares) e acoplados à proteína Gi?",
    "options": [
      "M \n1\n​\n  e M \n3\n​\n .",
      "M \n2\n​\n  e M \n4\n​\n \n.",
      "M \n3\n​\n  e M \n5\n​\n .",
      "Apenas o M \n1\n​\n ."
    ],
    "correctAnswer": 1,
    "explanation": "Receptores muscarínicos pares (M",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-28",
    "question": "A lipólise (quebra de gordura) no tecido adiposo é estimulada pelo sistema simpático através do receptor\n:",
    "options": [
      "α \n1\n​\n .",
      "β \n2\n​\n .",
      "β \n3\n​\n \n.",
      "M \n3\n​\n ."
    ],
    "correctAnswer": 2,
    "explanation": "O receptor β",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-29",
    "question": "Qual a função principal da Bainha de Mielina nos neurônios simpáticos pré-ganglionares?",
    "options": [
      "Retardar o impulso nervoso para permitir a integração ganglionar.",
      "Permitir uma condução rápida do impulso por meio do salto saltatório\n.",
      "Sintetizar neurotransmissores como a adrenalina bloqueando a via de fluxo iônico.",
      "Atuar como receptor ionotrópico para o sódio bloqueando a via de fluxo iônico."
    ],
    "correctAnswer": 1,
    "explanation": "A mielina isola o axônio e permite a condução saltatória rápida",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-30",
    "question": "O sistema nervoso simpático é frequentemente chamado de sistema \"toracolombar\" devido à sua origem na medula espinhal entre os segmentos\n:",
    "options": [
      "C1 e T1.",
      "T1 e L2\n.",
      "L2 e S4.",
      "Tronco encefálico e S2-S4."
    ],
    "correctAnswer": 1,
    "explanation": "A origem das fibras simpáticas é toracolombar (T1 a L2)",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-31",
    "question": "O relaxamento da musculatura lisa vascular (vasodilatação) no músculo esquelético durante o exercício é mediado por receptores\n:",
    "options": [
      "α \n1\n​\n .",
      "β \n2\n​\n \n.",
      "M \n3\n​\n .",
      "α \n2\n​\n ."
    ],
    "correctAnswer": 1,
    "explanation": "Receptores β",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-32",
    "question": "Um paciente apresenta pupilas muito contraídas (miose) após exposição a um agente colinérgico. Qual o mecanismo fisiológico por trás desse sinal?",
    "options": [
      "Ativação de receptores α \n1\n​\n  no músculo radial via sinalização celular local.",
      "Ativação de receptores muscarínicos (M \n3\n​\n ) no músculo esfíncter da pupila\n.",
      "Inibição do sistema parassimpático via sinalização celular local.",
      "Estimulação de receptores β \n1\n​\n  oculares via sinalização celular local."
    ],
    "correctAnswer": 1,
    "explanation": "O estímulo muscarínico M",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-33",
    "question": "No transporte ativo primário, a energia para o movimento de íons contra o gradiente de concentração provém de\n:",
    "options": [
      "Gradiente iônico de sódio.",
      "Hidrólise direta do ATP\n.",
      "Energia cinética das moléculas em movimento.",
      "Proteínas de canal de vazamento."
    ],
    "correctAnswer": 1,
    "explanation": "No transporte ativo primário, a energia vem diretamente da quebra do ATP",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-34",
    "question": "A liberação de neurotransmissores na fenda sináptica é um processo dependente do influxo de qual íon para o terminal pré-sináptico?",
    "options": [
      "Sódio (Na+).",
      "Potássio (K+).",
      "Cálcio (Ca2+)\n.",
      "Cloreto (Cl-)."
    ],
    "correctAnswer": 2,
    "explanation": "O influxo de Ca2+ é o gatilho para a fusão das vesículas sinápticas",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-35",
    "question": "Sobre a homeostase, o Sistema Nervoso Autônomo atua ajustando os sistemas do corpo conforme a necessidade (repouso vs estresse)\n. Qual estrutura central é o principal centro integrador do SNA?",
    "options": [
      "Tálamo.",
      "Hipotálamo\n.",
      "Cerebelo.",
      "Córtex pré-frontal."
    ],
    "correctAnswer": 1,
    "explanation": "O hipotálamo é o centro mestre de controle autonômico",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-36",
    "question": "Um paciente apresenta \"boca seca\" (xerostomia) como efeito colateral de um medicamento. Esse sintoma ocorre provavelmente devido ao bloqueio de receptores:",
    "options": [
      "Adrenérgicos β \n2\n​\n  rompendo o balanço hidrostático necessário.",
      "Muscarínicos (que estimulam a secreção salivar)\n.",
      "Nicotínicos ganglionares rompendo o balanço hidrostático necessário.",
      "Adrenérgicos α \n1\n​\n  rompendo o balanço hidrostático necessário."
    ],
    "correctAnswer": 1,
    "explanation": "O parassimpático estimula a salivação; seu bloqueio causa boca seca",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-37",
    "question": "A proteína Gs (estimulatória) age ativando qual enzima efetora?",
    "options": [
      "Fosfolipase C.",
      "Adenilato ciclase\n.",
      "Acetilcolinesterase.",
      "Tirosina quinase."
    ],
    "correctAnswer": 1,
    "explanation": "A proteína Gs estimula a adenilato ciclase para produzir AMPc",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-38",
    "question": "O receptor GABA é mencionado como o principal neurotransmissor inibitório do SNC. Sua ativação ionotrópica promove a entrada de qual íon na célula, causando hiperpolarização?",
    "options": [
      "Cálcio (Ca2+).",
      "Sódio (Na+).",
      "Cloreto (Cl-)\n.",
      "Potássio (K+)."
    ],
    "correctAnswer": 2,
    "explanation": "O canal de GABA permite a entrada de Cl-, hiperpolarizando a célula",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-39",
    "question": "Assinale a alternativa que descreve uma função do Sistema Nervoso Somático\n:",
    "options": [
      "Controle da frequência cardíaca bloqueando a via de fluxo iônico.",
      "Motricidade voluntária e sensorial consciente\n.",
      "Regulação da digestão bloqueando a via de fluxo iônico.",
      "Controle do diâmetro pupilar bloqueando a via de fluxo iônico."
    ],
    "correctAnswer": 1,
    "explanation": "O sistema somático lida com motricidade voluntária e consciência",
    "theme": "Fisiologia"
  },
  {
    "id": "sna-40",
    "question": "Durante a fase de repolarização do potencial de ação, o que ocorre com os canais iônicos?",
    "options": [
      "Abertura de canais de sódio gerando uma resposta compensatória inadequada.",
      "Fechamento de canais de potássio gerando uma resposta compensatória inadequada.",
      "Fechamento (inativação) dos canais de sódio e abertura dos canais de potássio\n.",
      "Abertura simultânea de canais de cálcio e cloreto.\n\n--------------------------------------------------------------------------------\nGabarito Comentado\nB: O acúmulo de Na+ intracelular reduz o gradiente que move o trocador Na+/Ca2+, resultando em mais cálcio disponível para a contração (inotropismo positivo)\n.\nB: A toxina botulínica cliva proteínas de fusão (SNAREs), impedindo a exocitose da acetilcolina\n.\nB: Receptores nicotínicos são canais iônicos diretos (ionotrópicos) que permitem a entrada de Na+\n.\nB: O SNA controla funções involuntárias como pressão arterial e digestão\n.\nA: Receptores β \n2\n​\n  ativam Gs -> AMPc -> relaxamento muscular e broncodilatação\n.\nD: O sistema simpático é toracolombar (T1-L2); o parassimpático é que é craniossacral\n.\nB: M \n2\n​\n  é acoplado à Gi, que reduz o AMPc no coração, diminuindo a frequência cardíaca\n.\nC: Difusão facilitada utiliza proteínas transportadoras a favor do gradiente, sem ATP\n.\nA: α \n1\n​\n  via Gq aumenta cálcio, promovendo a contração do músculo radial (midríase)\n.\nB: A proporção fixa é de 3 Na+ para fora e 2 K+ para dentro\n.\nC: A acetilcolinesterase degrada a ACh na fenda sináptica\n.\nB: O potencial de ação é um evento \"tudo ou nada\" que requer atingir o limiar\n.\nC: Glândulas sudoríparas são uma exceção simpática que utiliza fibras colinérgicas\n.\nD: Receptores metabotrópicos não são canais iônicos diretos; essa é a definição de ionotrópicos\n.\nB: A síntese começa com o aminoácido Tirosina\n.\nC: α \n2\n​\n  é inibitório (Gi) e atua como autorreceptor ou modulador negativo de α \n1\n​\n \n.\nB: Gq ativa a fosfolipase C, que cliva PIP2 em DAG e IP3\n.\nB: O parassimpático (via M \n3\n​\n ) aumenta as funções digestivas\n.\nB: M \n3\n​\n  promove a contração do músculo detrusor para esvaziamento da bexiga\n.\nB: O curare bloqueia o receptor nicotínico, impedindo a contração muscular\n.\nC: Proteínas periféricas na membrana plasmática frequentemente atuam como enzimas\n.\nC: O nervo vago (X) carrega a maior parte das fibras parassimpáticas para as vísceras\n.\nB: A proteína Gi é inibitória da adenilato ciclase\n.\nB: A medula suprarrenal libera majoritariamente adrenalina na corrente sanguínea\n.\nA: No coração, o simpático atua via β \n1\n​\n  (Gs) para causar taquicardia\n.\nB: α \n1\n​\n  (Gq), α \n2\n​\n  (Gi), e todos os Betas (β \n1\n​\n ,β \n2\n​\n ,β \n3\n​\n ) são Gs\n.\nB: Receptores muscarínicos pares (M \n2\n​\n ,M \n4\n​\n ) são Gi\n.\nC: O receptor β \n3\n​\n  está associado à lipólise e relaxamento do detrusor\n.\nB: A mielina isola o axônio e permite a condução saltatória rápida\n.\nB: A origem das fibras simpáticas é toracolombar (T1 a L2)\n.\nB: Receptores β \n2\n​\n  promovem relaxamento (vasodilatação) no músculo esquelético\n.\nB: O estímulo muscarínico M \n3\n​\n  no olho causa miose (constrição)\n.\nB: No transporte ativo primário, a energia vem diretamente da quebra do ATP\n.\nC: O influxo de Ca2+ é o gatilho para a fusão das vesículas sinápticas\n.\nB: O hipotálamo é o centro mestre de controle autonômico\n.\nB: O parassimpático estimula a salivação; seu bloqueio causa boca seca\n.\nB: A proteína Gs estimula a adenilato ciclase para produzir AMPc\n.\nC: O canal de GABA permite a entrada de Cl-, hiperpolarizando a célula\n.\nB: O sistema somático lida com motricidade voluntária e consciência\n.\nC: A repolarização envolve a inativação dos canais de Na+ e a saída de K+\n."
    ],
    "correctAnswer": 2,
    "explanation": "A repolarização envolve a inativação dos canais de Na+ e a saída de K+",
    "theme": "Fisiologia"
  }
];


export const quizzes: Quiz[] = [
  { id: "coracao", title: "Coração", description: "Anatomia do sistema cardiovascular", emoji: "🫀", category: "Anatomia", questions: coracaoQuestions },
  { id: "torax", title: "Tórax", description: "Mediastino, Pulmões, Pleuras e Vascularização", emoji: "🫁", category: "Anatomia", questions: toraxQuestions },
  { id: "cavidade-oral", title: "Cavidade Oral", description: "Anatomia da boca e glândulas", emoji: "👄", category: "Anatomia", questions: cavidadeOralQuestions },
  { id: "faringe", title: "Faringe", description: "Anatomia da faringe", emoji: "🗣️", category: "Anatomia", questions: faringeQuestions },
  { id: "laringe", title: "Laringe", description: "Anatomia da laringe", emoji: "🎙️", category: "Anatomia", questions: laringeQuestions },
  { id: "tireoide", title: "Tireoide", description: "Anatomia da tireoide", emoji: "🦋", category: "Anatomia", questions: tireoideQuestions },
  { id: "vascularizacao", title: "Vascularização", description: "Vascularização de cabeça e pescoço", emoji: "💉", category: "Anatomia", questions: vascularizacaoQuestions },
  { id: "olho", title: "Olho", description: "Anatomia do sistema visual", emoji: "👁️", category: "Anatomia", questions: olhoQuestions },
  { id: "orelha", title: "Orelha", description: "Anatomia do sistema auditivo", emoji: "👂", category: "Anatomia", questions: orelhaQuestions },
  { id: "fisiologia-cardiaca", title: "Fisiologia Cardíaca", description: "Funcionamento do coração e sistema circulatório", emoji: "⚡", category: "Fisiologia", questions: fisiologiaCardiacaQuestions },
  { id: "hemostasia", title: "Hemostasia e Coagulação", description: "Mecanismos de hemostasia e coagulação sanguínea", emoji: "🩸", category: "Fisiologia", questions: hemostasiaQuestions },
  { id: "fisiologia-muscular", title: "Fisiologia Muscular", description: "Mecanismos de contração e fisiologia do músculo", emoji: "💪", category: "Fisiologia", questions: fisiologiaMuscularQuestions },
  { id: "sna", title: "SNA", description: "Sistema Nervoso Autônomo e Fisiologia de Membrana", emoji: "🧠⚡", category: "Fisiologia", questions: snaQuestions }
];
// Deploy trigger: Sun Apr 12 19:58:05 EDT 2026
