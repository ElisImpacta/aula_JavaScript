/* Criado por: Elis Pessoa
Aula sobre JavaScript*/

//****Criando variáveis
/*var nome = "Elis Pessoa";
var anos = 33;
var frase = "A Flávia é minha esposa"
var n1 = 40;*/

//****Criando alerta normal
//alert("Idade: " + anos); 

//****Criando alerta com textos e quebra de linha
//alert("Nome: " + nome + "\n" + "Idade: " + anos);

//****Criando resultado no console
//console.log("Nome: " + nome + " idade: " + anos);

//****Criando resultado no console e alert com replace de palavra ou frase
//console.log(frase.replace("minha esposa", "lindaaaa"));
//alert(frase.replace("feia", "Lindaaa"));

//****Criando console/alert com todas as letras maiuscula ou minuscula
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.toLowerCase());
//alert(frase.toUpperCase());

//****Criando contas com tipo número
/*alert(anos + n1);
alert(anos * n1);
alert(n1 / anos);*/

//****Criando lista e suas ações (array)
//var lista = ["maça","banana","laranja","abacate"]
//**Acrescentando mais um item
//lista.push("uva");
//**Tirando o último item
//lista.pop();
//**Invertendo a ordem na impressão
//console.log(lista.reverse());
//**Contando quantos itens tem na lista
//console.log(lista.length);
//**Transformando o array da lista em apenas uma string (texto)
//console.log(lista.toString());
//**Mostrando o primeiro elemento do array e a primeira letra da lista */
/*console.log(lista[0]);
console.log(lista.toString()[0]);*/
//**Mostrando alista separado como desejar, neste caso "/"
//console.log(lista.join(" / "));

//****Criando um dicionário, como se fosse objeto JSon */
//var pessoa = {nome: "Elis" , idade: " 33 anos" , altura: "1,70" , gosta:  "Joga volei"};
//Exibe o objeto completo
//console.log(pessoa);
//Exibe apenas um item do dicionário
//console.log(pessoa.nome);

//****Criando uma lista de dicionário */
/*var pessoas = [{nome: "Elis" , idade: " 33 anos" , altura: "1,70" , gosta:  "Joga volei"} , {nome: "Flávia" , idade: " 40 anos" , altura: "1,78" , gosta:  "Barzinho e whisky"}];
console.log(pessoas);*/


//**** Criando condições (if/else), prompt de comando */
/*var idade = prompt("Qual a sua idade?");
//alert(idade);
if (idade >= 18){
    alert("Parabéns, Você pode navegar no site!");
}else{
    alert("Você não pode navegar no site, desculpe!");
};*/

//****Criando um laço de repetição com WHILE */
/*var contador = 0;
while (contador <= 5){
    console.log(contador);
    //contador = contador + 1;
    //contador++;
    alert(contador++);
};*/

//****Criando um laço de repetição com FOR */
/*var contador;
for(contador=0; contador <= 5; contador++){
    alert(contador);
};*/

//**** Criando a data / hora */
//var d = new Date();
//**Exibe a data inteira
//alert(d);
//**Exibe o dia da semana
/*var dia = new Array(7);
dia[0] = "Domingo";
dia[1] = "Segunda-feira";
dia[2] = "Terça-feira";
dia[3] = "Quarta-feira";
dia[4] = "Quinta-feira";
dia[5] = "Sexta-feira";
dia[6] = "Sábado";
var exibedia = dia[d.getDay()];
//alert(exibedia);

//**Exibe o nome do mês
var mes = new Array(12);
mes[0] = "Janeiro";
mes[1] = "Fevereiro";
mes[2] = "Março";
mes[3] = "Abril";
mes[4] = "Maio";
mes[5] = "Junho";
mes[6] = "Julho";
mes[7] = "Agosto";
mes[8] = "Setembro";
mes[9] = "Outubro";
mes[10] = "Novembro";
mes[11] = "Dezembro";
var exibemes = mes[d.getMonth()];
alert(exibemes);
//**Concatena a data inteira 
alert(exibedia + " dia " + d.getDate() + " de " + exibemes + " as " + d.getHours() + ":" + d.getMinutes());*/

//****Criando Funções no JavaScript */
//Funcção de contas
/*function contasoma (n1, n2){
    return n1 + n2;
};
alert(contasoma(33,40));
//Função replace
function substituir(frase, time, novo_time){
    return frase.replace(time, novo_time);
}
alert(substituir("O melhor time é Corintias ", "Corintias", "São Paulo" ));*/

//****Criando uma função global usando uma variável global */
/*var n = 0;
function Validarnum(nun){
    if (nun == 10){
        n = true;
    }else{
        n = false;
    }
    return n;
}
var nun = prompt("Insira o número desejada");
Validarnum(nun);
alert(n);*/

//**** Munipulando elementos do HTML */
/*
function clicou(){
    document.getElementById("textresultado").innerHTML = 
    console.log(document.getElementById("textresultado"));
}*/
function calculamedia(){
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var n4 = parseFloat(document.getElementById("nota4").value);
    var resultado = parseFloat(n1+n2+n3+n4)/4
//console.log(resultado);
    if(resultado >= 7)
        document.getElementById("textresultado").innerHTML =  "Parabéns, sua média é "+ resultado + "! Aprovado!";    
        //alert("Parabéns, sua média é "+ resultado + "! Aprovado!");
    else
        document.getElementById("textresultado").innerHTML =  "Poxa, não foi desta vez, sua média é " + resultado + "! Reprovado!";
        //alert("Poxa, não foi desta vez, sua média é " + resultado + "! Reprovado!");
    
    //document.getElementById("textresultado").innerHTML =  resultado;

}


