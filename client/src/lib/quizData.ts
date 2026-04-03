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
};
