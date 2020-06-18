# Projeto sobre aula JavaScript
Este projeto tem o objetivo de exibir os comando aprendido em aula, sobre JavaScript.

### Criado por
Elis Pessoa

### Tecnologias utilizadas
- HTML
- Javascript

### Conteúdo aprendido
- Criando variáveis
- Criando alerta normal
- Criando alerta com textos e quebra de linha
- Criando resultado no console
- Criando resultado no console e alert com replace de palavra ou frase
- Criando console/alert com todas as letras maiuscula ou minuscula
- Criando contas com tipo número
- Criando lista e suas ações (array)
- Acrescentando mais um item (Array)
- Tirando o último item (Array)
- Invertendo a ordem na impressão
- Contando quantos itens tem na lista
- Transformando o array da lista em apenas uma string (texto)
- Mostrando o primeiro elemento do array e a primeira letra da lista
- Mostrando a lista separada como desejar, neste caso /
- Criando um dicionário, como se fosse objeto JSon
- Criando uma lista de dicionário
- Criando condições (if/else), prompt de comando
- Criando um laço de repetição com WHILE
- Criando um laço de repetição com FOR
- Criando a data / hora
- Exibindo a data inteira (data, hora, local...)
- Criando Funções no JavaScript
- Funções aritiméticas
- Funções com substituições
- Criando uma função global usando uma variável global
- Munipulando elementos do HTML

### Itens extras que eu mesma criei após o curso
- Exibindo o dia da semana (Segunda até domingo)
- Exibindo o nome do mês (Janeiro a Dezembro)
- Concatenando os dias e meses
- Calculando a média de 4 notas, exibindo em tela

### Exemplo do código criado

```javascript
//**Exibe o dia da semana
var dia = new Array(7);
dia[0] = "Domingo";
dia[1] = "Segunda-feira";
dia[2] = "Terça-feira";
dia[3] = "Quarta-feira";
dia[4] = "Quinta-feira";
dia[5] = "Sexta-feira";
dia[6] = "Sábado";
var exibedia = dia[d.getDay()];
alert(exibedia);

//Função criada após o curso
function calculamedia(){
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var n4 = parseFloat(document.getElementById("nota4").value);
    var resultado = parseFloat(n1+n2+n3+n4)/4

    if(resultado >= 7)
        document.getElementById("textresultado").innerHTML =  "Parabéns, sua média é "+ resultado + "! Aprovado!";    
        //alert("Parabéns, sua média é "+ resultado + "! Aprovado!");
    else
        document.getElementById("textresultado").innerHTML =  "Poxa, não foi desta vez, sua média é " + resultado + "! Reprovado!";
        //alert("Poxa, não foi desta vez, sua média é " + resultado + "! Reprovado!");
```

