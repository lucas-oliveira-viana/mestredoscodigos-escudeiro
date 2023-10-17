# Teste para o Evento Mestre dos Códigos da DB1 Global Software

# Respostas das Questões

#### 1. Explique com suas palavras a diferença entre a utilização de var, const e let?
R: var e let são muito parecidos, os dois podem ser modificados. A única diferença entre eles são o escopo, com o var funcionando globalmente e o let apenas dentro de seu bloco declarado. Já o const não pode ser modificado, não pode-se reatribuir um valor à ele.

#### 2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?
R: Arrow Functions possui um contexto léxico, elas possuem o contexto local de onde foi declarado. Diferentemente das funções normais, que possuem um contexto dinâmico, ou seja, possuem o contexto de onde são chamadas.

#### 3. Qual o valor da constante name após a execução da função?
R: "James"

#### 4. Qual o retorno da função event.getTitle()
R: "The event 04/02/2019 will take place on Event Test"

#### 5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?
R: document.getElementById: retorna um elemento passando o Id por parâmetro;
   document.getElementByClass: retorna uma lista de elementos passando sua classe por parâmetro;
   document.querySelectorAll: retorna uma lista de elementos passando qualquer seletor por parâmetro;

#### 6. Como inserir um evento em determinado elemento?
R: Com a função element.addEventListener, passando o tipo do evento e a callback por parâmetro

#### 7. Como remover um evento em determinado elemento?
R: Com a função element.addEventListener, passando o tipo do elemento e a callback por parâmetro

#### 8. Descreva com suas palavras o que é event bubbling?
R: É o disparo de eventos de elementos para seus filhos. ex: ao adicionar o evento click a um elemento, esse click também funcionará nos seus filhos.

#### 9. Descreva qual a diferença nos métodos de declaração de objetos?
R: Para a declaração de objetos em JS, existem os métodos Construtor, em que pode descrever estados e comportamentos de um objeto, sendo esse não unico, podendo ser instanciado de varis formas diferentes com o uso da expressão new, e também Objetos literais, que é uma forma mais dinâmica de criar objetos. Ele é unico, ou seja, independente de armazenar em outras variáveis, ele apontará para o mesmo objeto.

#### 10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente?
R: A principal diferença é que o fetch() é baseado em promises, o que torna essa api mais simples e eficiente nas chamadas assíncronas.
Atualmente, é recomendável o uso do fetch, mas ainda há alguns problemas, como não funcionar no IE, nesse caso é recomendavel o uso de XHR.

#### 11. O que são Promises? Como podemos declarar uma promise em javascript?
R: É um objeto que abrange eventos assíncronos, criando a "promessa" de que um objeto estará ou não disponível no futuro.
Declaramos como: new Promise(/*o que será executado*/ /*callback ->*\function(resolve, reject) { /*conteúdo da callback*/ });

#### 12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?
R: map: retorna um novo Array;
   filter: retorna o mesmo array, mas filtrado;
   every: verifica se todos os elementos do array passa em um determinado teste;

#### 13. Quando utilizar map, reduce ou filter?
R: map: quando quiser retornar um novo array, com base em cada chamada da função callback em cima dos elementos do array;
   filter: quando quiser retornar o mesmo array, mas filtrado com base em cada chamada da função callback em cima dos elementos do array;
   reduce: quando quiser retornar apenas um único valor, acumulando os valores do array utilizando um acumulador e o valor inicial como parametros;

#### 14. Qual o método do Array é mais indicado para remover elementos?
R: O mais ideal é remover com pop() o ultimo elemento do array, mas nem sempre é possível. Por isso deve ser usado o método splice(), para pegar uma determinada parte de um array, removendo as outras.

#### 15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;
R: toString(): Retorna o objeto em que é usado em String;
toUpperCase(): Retorna a string em que é usado em letra maiúscula;
toLowerCase(): Retorna a string em que é usado em letra minuscula;
split(): divide a string em arrays dado uma string como parametro;

#### 16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage
R: Inserir -> localStorage.setItem('Nome', 'Lucas');
Resgatar -> localStorage.getItem('Nome');

Inserir -> sessionStorage.setItem('Nome', 'Lucas');
Resgatar -> sessionStorage.getItem('Nome');

#### 17. Qual a melhor forma para definir um cookie utilizando javascript?
R: utlizando a propriedade document.cookie, que pode ser usada para inserir e obter cookies.
Para definir o cookie, é usado no formato document.cookie = 'chave=valor'.

#### 18. Quais os tipos de Loops existentes em javascript?
R: For in: Itera sobre as propriedades de um objeto;
   For of: Itera sobre as propriedades enumeraveis de um objeto;
   For each: recebe uma função como callback, que é executada em cada elemento do array;

#### 19. Descreva com suas palavras o que é hoisting?
R: É a elevação da prioridade de execução das funções no momento de compilação do código, fazendo-as serem executadas primeiro que as demais propriedades.

#### 20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict"?
R: valor window

#### 21. Quando eu posso utilizar o "Use-strict" no meu código?
R: no topo do codigo e no topo das funções
