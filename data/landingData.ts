import bioAntes1 from '@/assets/ante-x-depois-img/bio-1.1.png'
import bioDepois1 from '@/assets/ante-x-depois-img/bio-1.2.png'
import bioAntes2 from '@/assets/ante-x-depois-img/bio-2.1.png'
import bioDepois2 from '@/assets/ante-x-depois-img/bio-2.2.png'
import bioAntes3 from '@/assets/ante-x-depois-img/bio-3.1.png'
import bioDepois3 from '@/assets/ante-x-depois-img/bio-3.2.png'

import depoimentoUser from '@/assets/depoimentos/user.png'

// Dados para o carrossel (antes x depois)
export const carrosselData = [
  {
    id: 1,
    imagem_antes_url: bioAntes1.src,
    imagem_depois_url: bioDepois1.src,
    legenda: "Transformação suave e natural com preenchimento labial"
  },
  {
    id: 2,
    imagem_antes_url: bioAntes2.src,
    imagem_depois_url: bioDepois2.src,
    legenda: "Harmonização completa realçando a beleza natural"
  },
  {
    id: 3,
    imagem_antes_url: bioAntes3.src,
    imagem_depois_url: bioDepois3.src,
    legenda: "Resultado equilibrado e sofisticado"
  }
];
// dados para os depoimentos 
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: "Luana M.",
    foto_paciente_url: bioDepois1.src,
    depoimento: "Sempre me incomodou a flacidez no rosto, mas após o tratamento com bioestimulador de colágeno na DamaFace, minha pele ficou muito mais firme e com aspecto rejuvenescido."
  },
  {
    id: 2,
    nome_paciente: 'Tatiane S.',
    foto_paciente_url: depoimentoUser.src,
    depoimento: "Senti que minha pele perdeu elasticidade com o tempo, e o bioestimulador de colágeno devolveu a firmeza e a vitalidade que eu queria. Me sinto muito mais confiante."
  },
  {
    id: 3,
    nome_paciente: "Bruno F.",
    foto_paciente_url: bioDepois3.src,
    depoimento: "O tratamento com bioestimulador de colágeno na DamaFace foi incrível. Minha pele ganhou mais firmeza e vi resultados naturais e progressivos, sem perder minha essência."
  }
];


// Dados para a seção "Por que escolher a DamaFace?"
export const diferenciaisData = [
  {
    id: 1,
    titulo: "Naturalidade e Exclusividade",
    descricao: "Cada procedimento é personalizado para valorizar seus traços únicos — sem exageros, apenas realçando o que há de melhor em você."
  },
  {
    id: 2,
    titulo: "Segurança e Qualidade",
    descricao: "Utilizamos produtos certificados pela ANVISA e aplicamos técnicas avançadas para garantir sua segurança em todas as etapas."
  },
  {
    id: 3,
    titulo: "Experiência Comprovada",
    descricao: "Mais de 8 anos de experiência e 2.500 pacientes satisfeitos atestam nossa credibilidade."
  },
  {
    id: 4,
    titulo: "Acompanhamento Personalizado",
    descricao: "Cuidamos de você antes, durante e depois do procedimento para garantir sua total satisfação."
  }
];

export const faqData = [
  {
    id: 1,
    pergunta: "O tratamento com bioestimulador de colágeno dói?",
    resposta: "O bioestimulador de colágeno é aplicado com agulhas ou cânulas finas, causando apenas um leve desconforto. Utilizamos anestesia local para proporcionar maior conforto durante todo o procedimento."
  },
  {
    id: 2,
    pergunta: "Quanto tempo dura o efeito do bioestimulador de colágeno?",
    resposta: "Os resultados do bioestimulador de colágeno podem durar de 18 a 24 meses, dependendo do tipo de produto utilizado, metabolismo individual e cuidados pós-tratamento."
  },
  {
    id: 3,
    pergunta: "Quando vejo o resultado do bioestimulador de colágeno?",
    resposta: "O resultado do bioestimulador de colágeno é progressivo. A produção de colágeno novo começa nas semanas seguintes ao tratamento, com melhora visível a partir de 30 dias e resultado máximo em até 90 dias."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após o bioestimulador de colágeno?",
    resposta: "A recuperação é rápida. Pode haver um leve inchaço ou pequenos hematomas nos primeiros dias, mas é possível retomar as atividades normais imediatamente, evitando apenas exercícios intensos e exposição solar por 24 horas."
  },
  {
    id: 5,
    pergunta: "O bioestimulador de colágeno é seguro?",
    resposta: "Sim, quando realizado por profissionais experientes e com produtos aprovados pela Anvisa. Na DamaFace seguimos protocolos rigorosos para garantir segurança, eficácia e resultados naturais."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes de realizar o bioestimulador de colágeno?",
    resposta: "Na maioria dos casos, não é necessário realizar exames prévios. Antes do procedimento, fazemos uma avaliação personalizada para entender suas necessidades e indicar o melhor protocolo para você."
  }
];


export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
