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
    "correctAnswer": 3,
    "explanation": "A contração ventricular começa no ápice e sobe em direção à base para empurrar o sangue para as artérias",
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
  { id: "intestino", title: "Intestino", description: "Anatomia do sistema digestório", emoji: "🥨", category: "Anatomia", questions: intestinoQuestions },
  { id: "estomago", title: "Estômago", description: "Anatomia do sistema digestório", emoji: "🍕", category: "Anatomia", questions: estomagoQuestions },
  { id: "figado", title: "Fígado", description: "Anatomia do sistema digestório", emoji: "🥩", category: "Anatomia", questions: figadoQuestions },
  { id: "cerebro", title: "Cérebro", description: "Anatomia do sistema nervoso", emoji: "🧠", category: "Anatomia", questions: cerebroQuestions },
  { id: "osso", title: "Osso", description: "Anatomia do sistema esquelético", emoji: "🦴", category: "Anatomia", questions: ossoQuestions },
  { id: "olho", title: "Olho", description: "Anatomia do sistema visual", emoji: "👁️", category: "Anatomia", questions: olhoQuestions },
  { id: "fisiologia-cardiaca", title: "Fisiologia Cardíaca", description: "Funcionamento do coração e sistema circulatório", emoji: "⚡", category: "Fisiologia", questions: fisiologiaCardiacaQuestions },
  { id: "hemostasia", title: "Hemostasia e Coagulação", description: "Mecanismos de hemostasia e coagulação sanguínea", emoji: "🩸", category: "Fisiologia", questions: hemostasiaQuestions },
  { id: "fisiologia-muscular", title: "Fisiologia Muscular", description: "Mecanismos de contração e fisiologia do músculo", emoji: "💪", category: "Fisiologia", questions: fisiologiaMuscularQuestions },
  { id: "sna", title: "SNA", description: "Sistema Nervoso Autônomo e Fisiologia de Membrana", emoji: "🧠⚡", category: "Fisiologia", questions: snaQuestions }
];
