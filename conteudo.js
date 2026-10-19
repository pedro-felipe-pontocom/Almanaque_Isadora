/* =====================================================================
   CONTEÚDO DO SITE DA ISADORA
   ---------------------------------------------------------------------
   É SÓ AQUI QUE VOCÊ PRECISA MEXER.
   Regras simples:
   - Troque só o que está entre aspas "assim".
   - Não apague as vírgulas no final das linhas.
   - Pra adicionar um item numa lista, copie uma linha inteira
     (com a vírgula) e cole embaixo.
   - Salve o arquivo e recarregue o site (F5) pra ver a mudança.
   - Detalhes no arquivo COMO-EDITAR.md
   ===================================================================== */

window.CONTEUDO = {

  nome: "Isadora",
  silabas: "I·sa·do·ra",       // como aparece no verbete do dicionário
  pronuncia: "/i.za.ˈdɔ.ɾɐ/",  // pronúncia que aparece ao lado
  assinatura: "Pedro",            // seu nome, aparece no fim da carta (deixe "" pra não mostrar)


  /* ---------- CAPA ---------- */
  capa: {
    subtitulo: "Um almanaque feito à mão sobre a pessoa mais especial que eu conheço.",
    notaLua: "Você, sempre 100%.",   // aparece depois de "Hoje a lua está X% iluminada."
  },


  /* ---------- Nº 01 · A PIADA INTERNA ---------- */
  piada: {
    frase1: "Isadora fofa.",
    frase2: "Mas perai, não só fofa.",
    // cada adjetivo tem uma "definição de dicionário" (pode deixar nota: "" se não quiser)
    adjetivos: [
      { palavra: "contagiante",       nota: "que passa alegria pra quem tá perto. não tem vacina." },
      { palavra: "esperta", nota: "que entende tudo rápido. às vezes antes de eu terminar de falar." },
      { palavra: "sincera",   nota: "que fala o que pensa, do jeito mais gentil possível." },
      { palavra: "generosa",    nota: "que divide tudo: o tempo, a música, a atenção." },
      { palavra: "atenciosa",    nota: "que repara nos detalhes. e lembra deles depois." },
    ],
    final: "e simplesmente especial.",
  },


  /* ---------- Nº 02 · COISAS QUE EU ADMIRO ---------- */
  admiro: [
    { titulo: "Sua risada",   texto: "Contagiante. Melhora qualquer dia ruim, até os muito ruins." },
    { titulo: "Sua voz",   texto: "Sua voz é incrível e adorável. É muito bom só ficar te ouvindo." },
    { titulo: "Seu coração",  texto: "Ainda é cedo pra afirmar kkk, mas você parece se importar com tudo e todos. Isso é raro." },
    { titulo: "Seu estilo",   texto: "Você tem um jeito só seu de se vestir, de falar, de ser. Ninguém copia." },
    { titulo: "Sua aunteticidade",    texto: "Você é você em qualquer lugar, isso é raro." },
    { titulo: "Você inteira", texto: "Não dá pra escolher uma coisa só. É tudo." },
  ],


  /* ---------- Nº 03 · MÁQUINA DE ELOGIOS ---------- */
  elogios: [
    "Adoro como você fala de música, dá pra ver que você sente de verdade.",
    "Suas indicações são certeiras.",
    "Você é muito eclética. Vai de MPB a rock sem esforço. Isso é incrivel.",
    "Você é uma enciclopédia musical. Acho isso muito foda.",
    "Você é uma boa pessoa. Eu vejo isso",
    "Seu bom gosto é impecável (afinal, você tá lendo esse site).",
    "Sua voz é tão doce, tão fofa que dá vontade de ficar ouvindo pra sempre.",
    "Você tem o dom de deixar tudo mais divertido.",
    "Se você fosse uma música, ia tocar no repeat sempre.",
    "O universo caprichou quando fez você.",
    "Magnífica é pouco. Mas é um bom começo.",
    "Você é indescritível. Não sei como elogiar mais.",
    "Você faz o mundo ser um lugar melhor só por existir.",
    "Você é simplesmente especial. Ponto final.",
  ],


  /* ---------- Nº 04 · O MEDIDOR ---------- */
  medidor: {
    marcas: ["gosto", "muito", "demais", "absurdamente"],   // escritas no mostrador
    quebrou: "Fora da escala. O aparelho não foi feito pra medir isso.",
  },


  /* ---------- Nº 05 · VALES ----------
     Ela clica em "resgatar" e fica carimbado (fica salvo no navegador dela). */
  vales: [
    "Vale-elogio sincero: Um elogio sincero sobre você",
    "Vale-pergunta livre: Você pergunta qualquer coisa e eu respondo com total sinceridade",
    "Vale-sla: O que você quiser",
    "Vale-desabafo: Eu escuto tudo, sem palpite",
    "Vale-doce: Um doce à sua escolha",
    "Vale-razão: Você ganha uma discussão, sem argumento",
  ],


  /* ---------- Nº 06 · CONSTELAÇÃO ---------- */
  constelacao: {
    instrucao: "Liga as estrelas na ordem, de 1 até o fim.",
    mensagem: "Essa é a tal Contelação Isadora? Já ouviu falar? famosinha, tá?",
  },


  /* ---------- Nº 07 · A CARTA ---------- */
  carta: {
    abertura: "Isadora,",
    paragrafos: [
      "Fiz esse almanaque pra deixar registrado, num cantinho da internet que é só seu, o quanto você é especial.",
      "Só nesse pouco tempo você tem esse jeito de deixar tudo mais leve, mais engraçado e mais bonito. Conversar com você está se tornando uma das melhores partes do meu dia, e eu to adorando demais conhecer quem você é: seu jeito, suas ideias e tudo o que diz respeito a você.",
      "Então espero que você nunca se esqueça de como você é uma pessoa maravilhosa (mesmo sendo grossa kkk). Muitas pessoas tiveram e outras teram muita sorte em te conhecer.",
    ],
    despedida: "Com todo carinho, Pedro",
  },


  /* ---------- PERGUNTA FINAL ---------- */
  final: {
    pergunta: "Você sabe o quanto você é especial?",
    sim: "Sim, eu sei",
    nao: ["Não", "Tem certeza?", "Erro 404", "Nem tenta", "Opção inválida", "Aperta o outro"],
    resposta: "Isso. Nunca esqueça, tá?",
  },
};
