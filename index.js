const questions = [
    {
      pergunta:
        "Qual é a sintaxe correta para se referir a um script externo chamado 'xxx.js'?",
      respostas: [
        "<script href='xxx.js'>",
        "<script name='xxx.js'>",
        "<script src='xxx.js'>"
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve 'Hello World' em uma caixa de alerta?",
      respostas: [
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "alert('Hello World');"
      ],
      correta: 2
    },
    {
      pergunta: "Como você cria uma função em JavaScript?",
      respostas: [
        "function:myFunction()",
        "function = myFunction()",
        "function myFunction()"
      ],
      correta: 2
    },
    {
      pergunta: "Como você chama uma função chamada 'myFunction'?",
      respostas: [
        "call function myFunction()",
        "call myFunction()",
        "myFunction()"
      ],
      correta: 2
    },
    {
      pergunta: "Como escrever uma condição IF em JavaScript?",
      respostas: ["if i = 5 then", "if i == 5 then", "if (i == 5)"],
      correta: 2
    },
    {
      pergunta: "Como um loop WHILE é escrito em JavaScript?",
      respostas: ["while (i <= 10; i++)", "while i = 1 to 10", "while (i <= 10)"],
      correta: 2
    },
    {
      pergunta: "Como um loop FOR é escrito em JavaScript?",
      respostas: [
        "for (i = 0; i <= 5)",
        "for i = 1 to 5",
        "for (i = 0; i <= 5; i++)"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
      respostas: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um objeto em JavaScript?",
      respostas: [
        "var person = {firstName:'John', lastName:'Doe'}",
        "var person = {firstName = 'John', lastName = 'Doe'}",
        "var person = {firstName > 'John', lastName > 'Doe'}"
      ],
      correta: 0
    },
    {
      pergunta: "Como você adiciona um comentário em JavaScript?",
      respostas: [
        "//This is a comment",
        "<!--This is a comment-->",
        "'This is a comment"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  
  const corretas = new Set();
  const totalDePerguntas = questions.length;
  
  //selecionando apenas a tag SPAN
  const mostrarTotal = document.querySelector("#acertos span");
  //textContent altera o conteudo especificado.
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
  
  for (const item of questions) {
    //copiando a TAG por completo
    const quizItem = template.content.cloneNode(true);
  
    //modificando o H3 colocando a pergunta no lugar
    quizItem.querySelector("h3").textContent = item.pergunta;
  
    //Loop para mostrar as respostas
    for (let resposta of item.respostas) {
      //copiando toda a TAG dentro de DL
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
  
      //modificando o conteudo da TAG SPAN
      dt.querySelector("span").textContent = resposta;
  
      //Selecionando os inputs e atribuindo novo paramento para NAME
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + questions.indexOf(item)
      );
  
      //esta realizando o Loop para buscar o indice das respostas.
      dt.querySelector("input").value = item.respostas.indexOf(resposta);
  
      //onchange:sempre que houver um evento, ira chamar a funcao > arrow function "() => {}"
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta; // true identifica apenas a resposta
  
        corretas.delete(item);
        if (estaCorreta) {
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      };
      quizItem.querySelector("dl").appendChild(dt);
    }
    
    //remover a TAG fixa 'RESPOSTA A'
    quizItem.querySelector("dl dt").remove();
    //coloca a pergunta na tela
    quiz.appendChild(quizItem);
  }
  