export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  totalQuestions: number;
}

export const themes: Theme[] = [
  {
    id: "vascularizacao",
    name: "Vascularização",
    description: "Viscerocrânio e Pescoço",
    icon: "🫀",
    color: "from-red-500 to-red-600",
    totalQuestions: 29,
  },
  {
    id: "coracao",
    name: "Coração",
    description: "Grandes Vasos",
    icon: "❤️",
    color: "from-rose-500 to-rose-600",
    totalQuestions: 40,
  },
  {
    id: "cavidade-oral",
    name: "Cavidade Oral",
    description: "Anatomia Bucal",
    icon: "👄",
    color: "from-pink-500 to-pink-600",
    totalQuestions: 30,
  },
  {
    id: "orelha",
    name: "Orelha",
    description: "Anatomia da Audição",
    icon: "👂",
    color: "from-purple-500 to-purple-600",
    totalQuestions: 20,
  },
  {
    id: "olho",
    name: "Olho",
    description: "Anatomia da Visão",
    icon: "👁️",
    color: "from-blue-500 to-blue-600",
    totalQuestions: 20,
  },
];

export const quizzes: Record<string, Question[]> = {
  vascularizacao: [
    {
      id: 1,
      question: "Qual artéria é responsável pela irrigação do viscerocrânio?",
      options: [
        "Artéria carótida externa",
        "Artéria carótida interna",
        "Artéria subclávia",
        "Artéria axilar",
      ],
      correct: 0,
      explanation:
        "A artéria carótida externa é a principal responsável pela irrigação do viscerocrânio, incluindo face, couro cabeludo e estruturas da boca.",
    },
    {
      id: 2,
      question: "Qual estrutura marca o ponto de divisão da carótida comum?",
      options: [
        "Ângulo da mandíbula",
        "Nível da vértebra C3",
        "Nível do osso hioide",
        "Nível da laringe",
      ],
      correct: 1,
      explanation:
        "A carótida comum se divide em carótida interna e externa aproximadamente no nível da vértebra C3, correspondendo ao ângulo da mandíbula.",
    },
    {
      id: 3,
      question:
        "Qual é a principal veia de drenagem do viscerocrânio e pescoço?",
      options: [
        "Veia jugular anterior",
        "Veia jugular interna",
        "Veia jugular externa",
        "Veia braquiocefálica",
      ],
      correct: 1,
      explanation:
        "A veia jugular interna é a principal veia de drenagem do viscerocrânio, recebendo sangue da maioria das estruturas profundas da cabeça e pescoço.",
    },
    {
      id: 4,
      question: "Qual ramo da carótida externa irriga a glândula parótida?",
      options: [
        "Artéria temporal superficial",
        "Artéria maxilar",
        "Artéria lingual",
        "Artéria facial",
      ],
      correct: 0,
      explanation:
        "A artéria temporal superficial passa através da glândula parótida, sendo uma de suas principais fontes de irrigação.",
    },
    {
      id: 5,
      question:
        "Qual artéria irriga a língua e é ramo da carótida externa?",
      options: [
        "Artéria facial",
        "Artéria lingual",
        "Artéria maxilar",
        "Artéria temporal",
      ],
      correct: 1,
      explanation:
        "A artéria lingual é ramo direto da carótida externa e é a principal responsável pela irrigação da língua.",
    },
    {
      id: 6,
      question: "Qual é a origem da artéria oftálmica?",
      options: [
        "Carótida externa",
        "Carótida interna",
        "Artéria maxilar",
        "Artéria temporal",
      ],
      correct: 1,
      explanation:
        "A artéria oftálmica origina-se da carótida interna e irriga o globo ocular e estruturas orbitárias.",
    },
    {
      id: 7,
      question: "Qual estrutura passa pelo forame jugular?",
      options: [
        "Artéria carótida interna",
        "Veias jugulares internas",
        "Nervo vago",
        "Todas as alternativas anteriores",
      ],
      correct: 3,
      explanation:
        "O forame jugular é uma estrutura importante que permite a passagem de estruturas vasculares e nervosas entre o crânio e o pescoço.",
    },
    {
      id: 8,
      question:
        "Qual artéria é a continuação da carótida interna após penetrar o crânio?",
      options: [
        "Artéria cerebral anterior",
        "Artéria cerebral média",
        "Artéria cerebral posterior",
        "Artéria comunicante anterior",
      ],
      correct: 1,
      explanation:
        "A carótida interna continua como artéria cerebral média após penetrar o crânio, sendo uma das principais artérias cerebrais.",
    },
    {
      id: 9,
      question: "Qual é o principal tributário da veia jugular interna?",
      options: [
        "Veia facial",
        "Veia lingual",
        "Veia temporal superficial",
        "Todas as alternativas anteriores",
      ],
      correct: 3,
      explanation:
        "A veia jugular interna recebe múltiplos tributários, incluindo veias da face, língua e estruturas superficiais do pescoço.",
    },
    {
      id: 10,
      question: "Qual artéria irriga a mandíbula?",
      options: [
        "Artéria alveolar inferior",
        "Artéria alveolar superior",
        "Artéria facial",
        "Artéria lingual",
      ],
      correct: 0,
      explanation:
        "A artéria alveolar inferior, ramo da artéria maxilar, irriga a mandíbula e os dentes inferiores.",
    },
  ],
  coracao: [
    {
      id: 1,
      question: "Qual é a principal artéria que irriga o coração?",
      options: [
        "Artéria pulmonar",
        "Artéria coronária esquerda",
        "Artéria aorta",
        "Veia cava superior",
      ],
      correct: 1,
      explanation:
        "As artérias coronárias, principalmente a artéria coronária esquerda e direita, são responsáveis pela irrigação do miocárdio.",
    },
    {
      id: 2,
      question: "Qual é a origem das artérias coronárias?",
      options: [
        "Artéria pulmonar",
        "Raiz da aorta",
        "Veia cava superior",
        "Artéria subclávia",
      ],
      correct: 1,
      explanation:
        "As artérias coronárias originam-se da raiz da aorta, logo após a saída do ventrículo esquerdo.",
    },
    {
      id: 3,
      question: "Qual câmara cardíaca recebe sangue das veias pulmonares?",
      options: [
        "Ventrículo esquerdo",
        "Ventrículo direito",
        "Átrio esquerdo",
        "Átrio direito",
      ],
      correct: 2,
      explanation:
        "O átrio esquerdo recebe o sangue oxigenado das veias pulmonares vindas dos pulmões.",
    },
    {
      id: 4,
      question: "Qual é a função da válvula mitral?",
      options: [
        "Impedir refluxo de sangue do ventrículo direito para o átrio direito",
        "Impedir refluxo de sangue do ventrículo esquerdo para o átrio esquerdo",
        "Permitir a passagem de sangue da aorta para o ventrículo esquerdo",
        "Permitir a passagem de sangue da artéria pulmonar para o ventrículo direito",
      ],
      correct: 1,
      explanation:
        "A válvula mitral (ou bicúspide) impede o refluxo de sangue do ventrículo esquerdo para o átrio esquerdo durante a contração ventricular.",
    },
    {
      id: 5,
      question: "Qual veia drena o sangue do coração?",
      options: [
        "Veia pulmonar",
        "Seio coronário",
        "Veia cava superior",
        "Veia cava inferior",
      ],
      correct: 1,
      explanation:
        "O seio coronário é o principal vaso de drenagem venosa do coração, recebendo sangue das veias coronárias.",
    },
    {
      id: 6,
      question: "Qual estrutura separa os ventrículos direito e esquerdo?",
      options: [
        "Septo interatrial",
        "Septo interventricular",
        "Parede anterior",
        "Parede posterior",
      ],
      correct: 1,
      explanation:
        "O septo interventricular é a parede muscular que separa os dois ventrículos.",
    },
    {
      id: 7,
      question: "Qual artéria é a continuação da aorta após sair do coração?",
      options: [
        "Artéria coronária",
        "Artéria pulmonar",
        "Aorta ascendente",
        "Aorta descendente",
      ],
      correct: 2,
      explanation:
        "A aorta ascendente é a primeira porção da aorta, saindo do ventrículo esquerdo.",
    },
    {
      id: 8,
      question: "Qual é a função da válvula aórtica?",
      options: [
        "Impedir refluxo de sangue da aorta para o ventrículo esquerdo",
        "Permitir a passagem de sangue do ventrículo esquerdo para a aorta",
        "Impedir refluxo de sangue do ventrículo direito",
        "Permitir a passagem de sangue do átrio esquerdo",
      ],
      correct: 0,
      explanation:
        "A válvula aórtica impede o refluxo de sangue da aorta para o ventrículo esquerdo durante o relaxamento ventricular.",
    },
    {
      id: 9,
      question: "Qual câmara cardíaca recebe sangue da veia cava superior?",
      options: [
        "Ventrículo esquerdo",
        "Ventrículo direito",
        "Átrio esquerdo",
        "Átrio direito",
      ],
      correct: 3,
      explanation:
        "O átrio direito recebe sangue desoxigenado da veia cava superior e inferior.",
    },
    {
      id: 10,
      question:
        "Qual é a principal artéria que irriga a parede anterior do ventrículo esquerdo?",
      options: [
        "Artéria coronária direita",
        "Artéria interventricular anterior",
        "Artéria circunflexa",
        "Artéria marginal",
      ],
      correct: 1,
      explanation:
        "A artéria interventricular anterior (ramo da coronária esquerda) irriga a parede anterior do ventrículo esquerdo.",
    },
  ],
  "cavidade-oral": [
    {
      id: 1,
      question: "Qual é a principal glândula salivar em volume de secreção?",
      options: [
        "Glândula parótida",
        "Glândula submandibular",
        "Glândula sublingual",
        "Glândulas menores",
      ],
      correct: 0,
      explanation:
        "A glândula parótida é a maior glândula salivar e produz aproximadamente 25-30% da saliva total.",
    },
    {
      id: 2,
      question: "Qual estrutura marca o limite anterior da cavidade oral?",
      options: [
        "Palato duro",
        "Lábios",
        "Dentes",
        "Língua",
      ],
      correct: 1,
      explanation:
        "Os lábios marcam o limite anterior da cavidade oral, separando-a do ambiente externo.",
    },
    {
      id: 3,
      question: "Qual é a função do palato mole?",
      options: [
        "Mastigação",
        "Deglutição e fala",
        "Apenas sensibilidade",
        "Apenas proteção",
      ],
      correct: 1,
      explanation:
        "O palato mole é importante para a deglutição, ajudando a fechar a nasofaringe, e para a fala.",
    },
    {
      id: 4,
      question: "Qual músculo é responsável pela elevação da mandíbula?",
      options: [
        "Músculo masseter",
        "Músculo temporal",
        "Músculo pterigóideo medial",
        "Todas as alternativas anteriores",
      ],
      correct: 3,
      explanation:
        "Os músculos masseter, temporal e pterigóideo medial são os principais elevadores da mandíbula.",
    },
    {
      id: 5,
      question: "Qual é o número total de dentes em um adulto?",
      options: [
        "20 dentes",
        "28 dentes",
        "32 dentes",
        "36 dentes",
      ],
      correct: 2,
      explanation:
        "Um adulto possui 32 dentes permanentes, incluindo incisivos, caninos, pré-molares e molares.",
    },
    {
      id: 6,
      question: "Qual estrutura forma o teto da cavidade oral?",
      options: [
        "Palato duro",
        "Palato mole",
        "Ambos",
        "Nenhum dos anteriores",
      ],
      correct: 2,
      explanation:
        "O teto da cavidade oral é formado pelo palato duro (anterior) e palato mole (posterior).",
    },
    {
      id: 7,
      question: "Qual é a origem do nervo trigêmeo (CN V)?",
      options: [
        "Tronco encefálico",
        "Medula espinal",
        "Bulbo raquidiano",
        "Ponte",
      ],
      correct: 0,
      explanation:
        "O nervo trigêmeo origina-se do tronco encefálico e fornece inervação sensorial à cavidade oral.",
    },
    {
      id: 8,
      question: "Qual glândula salivar está localizada sob a língua?",
      options: [
        "Glândula parótida",
        "Glândula submandibular",
        "Glândula sublingual",
        "Glândulas menores",
      ],
      correct: 2,
      explanation:
        "A glândula sublingual está localizada no assoalho da boca, sob a língua.",
    },
    {
      id: 9,
      question: "Qual é a função da língua na cavidade oral?",
      options: [
        "Apenas paladar",
        "Apenas mastigação",
        "Mastigação, deglutição, fala e paladar",
        "Apenas proteção",
      ],
      correct: 2,
      explanation:
        "A língua tem múltiplas funções: participa da mastigação, deglutição, fala e percepção do paladar.",
    },
    {
      id: 10,
      question: "Qual estrutura separa a cavidade oral da cavidade nasal?",
      options: [
        "Palato duro",
        "Palato mole",
        "Septo nasal",
        "Vômer",
      ],
      correct: 0,
      explanation:
        "O palato duro separa a cavidade oral da cavidade nasal, formando uma barreira óssea.",
    },
  ],
  orelha: [
    {
      id: 1,
      question: "Um paciente de 25 anos apresenta uma laceração no terço lateral do meato acústico externo. Qual a constituição anatômica predominante dessa região?",
      options: [
        "Óssea; artéria caroticotimpânica",
        "Cartilagínea; ramos da artéria carótida externa",
        "Fibrosa; artéria timpânica anterior",
        "Membranácea; artéria labiríntica",
      ],
      correct: 1,
      explanation:
        "O terço lateral do meato é cartilagíneo e nutrido por ramos da carótida externa (temporal superficial e auricular posterior).",
    },
    {
      id: 2,
      question: "Durante uma cirurgia de mastoidectomia, qual é a inervação do músculo estapédio?",
      options: [
        "Ramo mandibular do nervo trigêmeo (V3)",
        "Nervo facial (VII par)",
        "Nervo vago (X par)",
        "Nervo acessório (XI par)",
      ],
      correct: 1,
      explanation:
        "O músculo estapédio é suprido pelo nervo facial (VII par) e regula a tensão do estribo.",
    },
    {
      id: 3,
      question: "Em qual osso se localiza a cavidade timpânica?",
      options: [
        "Porção escamosa do osso temporal",
        "Porção petrosa do osso temporal",
        "Porção mastóidea do osso temporal",
        "Osso etmoide",
      ],
      correct: 1,
      explanation:
        "A orelha média fica na porção petrosa do osso temporal e a tuba auditiva a conecta à nasofaringe.",
    },
    {
      id: 4,
      question: "Qual nervo NÃO participa da inervação sensitiva da aurícula?",
      options: [
        "Nervo vago",
        "Nervo auriculotemporal (V3)",
        "Nervo facial",
        "Nervo hipoglosso (XII par)",
      ],
      correct: 3,
      explanation:
        "O hipoglosso é motor para a língua; a aurícula é inervada por V3, VII, X e ramos cervicais (C2/C3).",
    },
    {
      id: 5,
      question: "Sobre a membrana timpânica, qual alternativa é INCORRETA?",
      options: [
        "Possui cerca de 1 cm de diâmetro",
        "É recoberta por pele externamente e por mucosa internamente",
        "Divide o meato acústico externo da cavidade timpânica",
        "É uma estrutura puramente óssea",
      ],
      correct: 3,
      explanation:
        "A membrana timpânica é uma membrana fina e semitransparente, não um osso.",
    },
    {
      id: 6,
      question: "Quais estruturas compõem o labirinto membranáceo?",
      options: [
        "Cóclea e vestíbulo; perilinfa",
        "Ducto coclear, utrículo e sáculo; endolinfa",
        "Canais semicirculares e cóclea; perilinfa",
        "Meato acústico interno e janela oval; cerume",
      ],
      correct: 1,
      explanation:
        "O labirinto membranáceo contém endolinfa e inclui o ducto coclear, utrículo, sáculo e ductos semicirculares.",
    },
    {
      id: 7,
      question: "Qual estrutura é responsável por manter o equilíbrio pressórico entre a orelha média e a atmosfera?",
      options: [
        "Meato acústico externo",
        "Tuba auditiva",
        "Canais semicirculares",
        "Janela redonda",
      ],
      correct: 1,
      explanation:
        "A tuba auditiva mantém o equilíbrio pressórico conectando a orelha média à nasofaringe.",
    },
    {
      id: 8,
      question: "Qual a sequência correta de transmissão do som entre os ossículos?",
      options: [
        "Estribo → Bigorna → Martelo",
        "Martelo → Estribo → Bigorna",
        "Martelo → Bigorna → Estribo",
        "Bigorna → Martelo → Estribo",
      ],
      correct: 2,
      explanation:
        "A ordem é Martelo (no tímpano) → Bigorna → Estribo (na janela oval).",
    },
    {
      id: 9,
      question: "Qual estrutura da orelha interna é especificamente responsável pela audição?",
      options: [
        "Utrículo",
        "Sáculo",
        "Ducto coclear",
        "Ductos semicirculares",
      ],
      correct: 2,
      explanation:
        "O ducto coclear responde pela audição, enquanto utrículo/sáculo/canais pelo equilíbrio.",
    },
    {
      id: 10,
      question: "Qual artéria é responsável pela nutrição da orelha interna?",
      options: [
        "Artéria timpânica posterior",
        "Artéria labiríntica",
        "Artéria maxilar",
        "Artéria meníngea média",
      ],
      correct: 1,
      explanation:
        "A artéria labiríntica é ramo da basilar (formada pelas vertebrais).",
    },
    {
      id: 11,
      question: "Qual é a drenagem venosa da orelha interna?",
      options: [
        "Veia jugular externa",
        "Veia cerebelar anterior, conectando-se aos seios cavernoso e transverso",
        "Veia subclávia",
        "Sem drenagem venosa própria",
      ],
      correct: 1,
      explanation:
        "A drenagem venosa segue esse caminho específico para os seios durais.",
    },
    {
      id: 12,
      question: "Qual função muscular será afetada em paralisia do ramo mandibular do trigêmeo?",
      options: [
        "Contração do músculo estapédio",
        "Tensão do músculo tensor do tímpano",
        "Dilatação da tuba auditiva",
        "Vibração da membrana timpânica",
      ],
      correct: 1,
      explanation:
        "O nervo mandibular (V3) inerva o músculo tensor do tímpano.",
    },
    {
      id: 13,
      question: "Em quais partes se divide a orelha média?",
      options: [
        "Labirinto ósseo e membranoso",
        "Pavilhão auricular e meato acústico",
        "Cavidade timpânica propriamente dita e recesso epitimpânico",
        "Cóclea e vestíbulo",
      ],
      correct: 2,
      explanation:
        "A orelha média divide-se em cavidade timpânica e recesso epitimpânico.",
    },
    {
      id: 14,
      question: "Qual nervo supre o território póstero-inferior do meato acústico externo?",
      options: [
        "Nervo vago (X par)",
        "Nervo auriculotemporal (V3)",
        "Nervo auricular magno (C2-C3)",
        "Nervo occipital menor (C2)",
      ],
      correct: 0,
      explanation:
        "O nervo vago inerva o território póstero-inferior do meato.",
    },
    {
      id: 15,
      question: "Onde se encaixa a base do estribo?",
      options: [
        "Janela redonda",
        "Janela oval (do vestíbulo)",
        "Membrana timpânica secundária",
        "Promontório",
      ],
      correct: 1,
      explanation:
        "A base do estribo se encaixa na janela oval do vestíbulo.",
    },
    {
      id: 16,
      question: "Qual é a função primordial da orelha média?",
      options: [
        "Captar as ondas sonoras",
        "Transformar sinais mecânicos em elétricos",
        "Transformar uma onda sonora de alta em baixa amplitude",
        "Detectar a posição e o movimento da cabeça",
      ],
      correct: 2,
      explanation:
        "Função central de transformar som de alta em baixa amplitude.",
    },
    {
      id: 17,
      question: "Onde estão localizadas as glândulas ceruminosas?",
      options: [
        "Cavidade timpânica",
        "Meato acústico externo",
        "Recesso epitimpânico",
        "Utrículo e sáculo",
      ],
      correct: 1,
      explanation:
        "As glândulas ceruminosas estão presentes no meato acústico externo para produzir cerume.",
    },
    {
      id: 18,
      question: "Qual nervo leva os sinais elétricos da orelha interna ao córtex temporal?",
      options: [
        "Nervo facial (VII)",
        "Nervo trigêmeo (V)",
        "Nervo vestibulococlear (VIII)",
        "Nervo vago (X)",
      ],
      correct: 2,
      explanation:
        "O VIII par (vestibulococlear) leva os estímulos ao córtex temporal.",
    },
    {
      id: 19,
      question: "A orelha externa é constituída por:",
      options: [
        "Martelo, bigorna e estribo",
        "Cóclea e canais semicirculares",
        "Aurícula e meato acústico externo",
        "Tuba auditiva e cavidade timpânica",
      ],
      correct: 2,
      explanation:
        "A orelha externa é composta por aurícula (pavilhão) e meato acústico externo.",
    },
    {
      id: 20,
      question: "Qual é a principal fonte arterial da orelha média?",
      options: [
        "Ramos das artérias carótida externa e carótida interna",
        "Apenas ramos da artéria maxilar",
        "Artéria labiríntica e artéria basilar",
        "Artérias vertebrais e subclávias",
      ],
      correct: 0,
      explanation:
        "A nutrição vem de ramos da carótida externa (maxilar, auricular posterior, etc.) e caroticotimpânicas da carótida interna.",
    },
  ],
  olho: [
    {
      id: 1,
      question: "Quais ossos compõem o assoalho (limite inferior) da cavidade orbital?",
      options: [
        "Frontal e Asa menor do esfenoide",
        "Maxilar, Zigomático e Palatino",
        "Lacrimal, Etmoide e Frontal",
        "Asa maior do esfenoide e Zigomático",
      ],
      correct: 1,
      explanation:
        "Maxilar, zigomático e palatino formam o assoalho orbital.",
    },
    {
      id: 2,
      question: "Qual músculo e qual par craniano são responsáveis pela constrição da pupila?",
      options: [
        "M. dilatador da pupila; fibras simpáticas",
        "M. constritor da pupila; nervo oculomotor (III par)",
        "M. ciliar; nervo troclear (IV par)",
        "M. reto medial; nervo abducente (VI par)",
      ],
      correct: 1,
      explanation:
        "O músculo constritor faz miose via fibras parassimpáticas do III par.",
    },
    {
      id: 3,
      question: "Para onde a lágrima drena após sair do saco lacrimal?",
      options: [
        "Canalículos lacrimais",
        "Pontos lacrimais",
        "Ducto nasolacrimal",
        "Meato nasal médio",
      ],
      correct: 2,
      explanation:
        "A lágrima vai do saco lacrimal para o ducto nasolacrimal (até o nariz).",
    },
    {
      id: 4,
      question: "Qual músculo e nervo estão lesionados na incapacidade de abdução pura do olho?",
      options: [
        "M. reto superior; N. oculomotor",
        "M. reto lateral; N. abducente",
        "M. oblíquo superior; N. troclear",
        "M. reto medial; N. oculomotor",
      ],
      correct: 1,
      explanation:
        "O reto lateral faz abdução e é inervado pelo VI par (abducente).",
    },
    {
      id: 5,
      question: "Qual das seguintes é a túnica vascular (úvea) do olho?",
      options: [
        "Córnea e esclera",
        "Retina",
        "Corioide, corpo ciliar e íris",
        "Cristalino e humor vítreo",
      ],
      correct: 2,
      explanation:
        "A úvea é a camada vascular média: corioide, corpo ciliar e íris.",
    },
    {
      id: 6,
      question: "Qual músculo auxilia no fechamento do olho e qual sua inervação?",
      options: [
        "M. orbicular do olho; nervo facial (VII par)",
        "M. reto superior; nervo oculomotor",
        "M. dilatador da pupila; fibras simpáticas",
        "M. ciliar; nervo trigêmeo",
      ],
      correct: 0,
      explanation:
        "O músculo orbicular fecha o olho e é inervado pelo facial (VII par).",
    },
    {
      id: 7,
      question: "Por qual estrutura passam o nervo óptico e a artéria oftálmica?",
      options: [
        "Fissura orbital superior",
        "Fissura orbital inferior",
        "Canal óptico",
        "Forame supraorbital",
      ],
      correct: 2,
      explanation:
        "O canal óptico é a passagem do nervo óptico e artéria oftálmica.",
    },
    {
      id: 8,
      question: "Em quais câmaras do olho é encontrado o humor aquoso?",
      options: [
        "Apenas na câmara anterior",
        "Câmara anterior e câmara posterior",
        "Câmara postrema",
        "Entre a corioide e a retina",
      ],
      correct: 1,
      explanation:
        "O humor aquoso preenche as câmaras anterior e posterior.",
    },
    {
      id: 9,
      question: "Qual estrutura é considerada a lente do olho?",
      options: [
        "Córnea",
        "Íris",
        "Cristalino",
        "Retina",
      ],
      correct: 2,
      explanation:
        "O cristalino é a lente material que ajusta o foco.",
    },
    {
      id: 10,
      question: "Qual movimento ocular estará comprometido em lesão do nervo troclear?",
      options: [
        "Elevação com adução",
        "Depressão com adução",
        "Abdução",
        "Adução",
      ],
      correct: 1,
      explanation:
        "O oblíquo superior (IV par) faz depressão com adução.",
    },
    {
      id: 11,
      question: "Qual ramo da artéria oftálmica irriga a retina?",
      options: [
        "Artérias ciliares anteriores",
        "Artéria central da retina",
        "Artérias ciliares posteriores curtas",
        "Artéria lacrimal",
      ],
      correct: 1,
      explanation:
        "A artéria central da retina é o ramo vital para a túnica interna.",
    },
    {
      id: 12,
      question: "Qual alternativa é INCORRETA sobre os limites da órbita?",
      options: [
        "O teto é formado pelo osso frontal e asa menor do esfenoide",
        "A parede lateral é formada pelo frontal, zigomático e asa maior do esfenoide",
        "A parede medial é formada pelo frontal, etmoide, lacrimal e maxilar",
        "O assoalho é formado apenas pelo osso etmoide",
      ],
      correct: 3,
      explanation:
        "O assoalho é formado por maxilar, zigomático e palatino, não etmoide.",
    },
    {
      id: 13,
      question: "Qual substância preenche a câmara postrema (ou vítrea)?",
      options: [
        "Humor aquoso",
        "Perilinfa",
        "Humor vítreo",
        "Endolinfa",
      ],
      correct: 2,
      explanation:
        "A câmara postrema (ou vítrea) contém o humor vítreo.",
    },
    {
      id: 14,
      question: "Qual músculo é responsável pela acomodação do cristalino?",
      options: [
        "Músculo esfíncter da pupila",
        "Músculo dilatador da pupila",
        "Músculo ciliar",
        "Músculo reto medial",
      ],
      correct: 2,
      explanation:
        "O músculo ciliar altera a conformação do cristalino para acomodação.",
    },
    {
      id: 15,
      question: "Para qual estrutura venosa intracraniana drena principalmente o olho?",
      options: [
        "Veia jugular interna",
        "Seio cavernoso",
        "Veia basílica",
        "Seio sagital superior",
      ],
      correct: 1,
      explanation:
        "As veias oftálmicas drenam principalmente para o seio cavernoso.",
    },
    {
      id: 16,
      question: "Quais glândulas sebáceas estão localizadas nos tarsos das pálpebras?",
      options: [
        "Glândulas de Moll",
        "Glândulas de Meibomius (tarsais)",
        "Glândulas de Krause",
        "Glândulas de Wolfring",
      ],
      correct: 1,
      explanation:
        "As glândulas de Meibomius são glândulas sebáceas palpebrais/tarsais.",
    },
    {
      id: 17,
      question: "Qual é a função do músculo reto inferior?",
      options: [
        "Elevação com abdução",
        "Depressão com abdução",
        "Adução pura",
        "Fechamento da pálpebra",
      ],
      correct: 1,
      explanation:
        "O reto inferior realiza depressão com abdução.",
    },
    {
      id: 18,
      question: "Qual ramo do nervo trigêmeo é responsável pela sensibilidade orbital superior?",
      options: [
        "Nervo maxilar (V2)",
        "Nervo mandibular (V3)",
        "Nervo oftálmico (V1)",
        "Nervo infraorbital",
      ],
      correct: 2,
      explanation:
        "O ramo V1 (oftálmico) é o responsável pela região orbital.",
    },
    {
      id: 19,
      question: "Quais estruturas compõem a túnica fibrosa do olho?",
      options: [
        "Íris e pupila",
        "Córnea e esclera",
        "Corioide e retina",
        "Cristalino e corpo ciliar",
      ],
      correct: 1,
      explanation:
        "Túnica fibrosa (externa) = córnea + esclera.",
    },
    {
      id: 20,
      question: "Qual par craniano inerva a maioria dos músculos extrínsecos do olho?",
      options: [
        "III - Oculomotor",
        "IV - Troclear",
        "VI - Abducente",
        "VII - Facial",
      ],
      correct: 0,
      explanation:
        "O oculomotor (III) inerva quase todos, exceto o Oblíquo Superior (IV) e Reto Lateral (VI).",
    },
  ],
};
