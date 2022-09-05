# LogicalForest_Nosvaldo_Souza_Compass

## Sprint 4 - Tech 

 **Javascript e Versionamento de Código**

Abaixo segue as Tecnologias utilizadas e os respectivos links dos Projetos realizados:

<br>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40"/>

* [Git e GitHub](https://github.com/JrGirotto/LogicalForest_Nosvaldo_Souza_Compass/blob/main/git-lesson/comandosGit.txt)
  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/> 

* [14 Mini Projetos em JS](https://github.com/JrGirotto/LogicalForest_Nosvaldo_Souza_Compass/tree/main/Curso_de_%20Javascript)

<details closed>
<summary>Códigos JS - Mini Projetos</summary>

<summary>01 - Troca Valores</summary>

~~~javascript
let a = "vermelho";
let b = "azul";
let inverter = a;

a = b;
b = inverter;

console.log (a);
console.log (b);
~~~

<summary>02 - Máximo entre Dois Valores</summary>

~~~javascript
let a = 100;
let b = 40;


function maiorValor() {
	if (a > b){
	console.log (a);
	}
	else {
	console.log(b)	
	}

}

maiorValor(a)
~~~~

<summary>03 - FizzBuzz</summary>

~~~javascript
let entrada = 9

function fizzBuzz() {
	if (!isNaN(entrada)) {
		if(entrada % 3 === 0 && entrada % 5 === 0){
			console.log('FizzBuzz');
		}
		else if(entrada % 3 === 0){
			console.log('Fizz');
		}
		else if(entrada % 5 === 0){
			console.log('Buzz');
		}
		else {
			console.log(entrada);
		}
	} 
	else {
		console.log('Digite um número!')
	}
}
fizzBuzz()
~~~

<summary>04 - Medidor de Velocidade (Radar)</summary>

~~~javascript
let velMax = 20
const km_pontos = 5
radar(60)

function radar(velocidade) {
	
	if(velocidade >= velMax)
		console.log('Velocidade Normal');

	else {
		let pontos = Math.floor((velMax-velocidade)/km_pontos)
		if (pontos > 0 && pontos < 12)
			console.log(pontos, 'Pontos. Dirija mais Devagar!');
		
		if (pontos >= 12)
			console.log(pontos, 'Pontos. Carteira Suspensa!');	
	}
}
~~~

<summary>05 - Par ou Impar</summary>

~~~javascript
numero = 10

function parOuImpar() {
    
	for (var i = 0; i < numero; i++) {
        if ((i % 2) == 0) {
            console.log(i + ' é PAR');
          	}
        else {
			console.log(i + ' é IMPAR');
		}
	}
}	
parOuImpar();
~~~

<summary>06 - Encontre a String</summary>

~~~javascript
const livro = {
	titulo: "Redes Neurais",
	genero: "Tecnologia",
	escritor: "Simon Haykin",
	edicao: 2
}

encontreString(livro)

function encontreString(obj) {
    
	for (i in obj) {
        if (typeof obj[i] === 'string') {
            console.log(i, ":" ,obj[i]);
        }
	}
}	
~~~

<summary>07 - Múltiplos de 3 e 5</summary>

~~~javascript
somar(10);
function somar(limite) { 
	let m3 = 0;
	let m5 = 0;

    for (i = 0;i <= limite;i++) {
		if(i % 3 === 0)
			m3 += i;
		if(i % 5 === 0)
			m5 += i;
	}
	console.log("A soma dos múltiplos de 3 do número",limite, "é",m3);  //18
	console.log("A soma dos múltiplos de 5 do número",limite, "é",m5);  //15
	console.log("A soma dos múltiplos de 3 e 5 do número",limite, "é",m3 + m5); //18+15=33
}	
~~~

<summary>08 - Média Escolar Valores</summary>

~~~javascript
const array = [70,70,80];

//calcularMedia = Math.floor((medias[0]+medias[1]+medias[2]) / 3)
console.log("A média final é",calcularMedia(array),"e a nota é", mediaAluno(array));

function mediaAluno(notas) {
	const mediaFinal = calcularMedia(notas);

	if (mediaFinal < 60) return 'F - Repita todo o estudo!';
	if (mediaFinal < 70) return "D - Assimilou pouco conteúdo!";
	if (mediaFinal < 80) return "C - Faltou dedicação nos estudos!";
	if (mediaFinal < 90) return "B - Precisa Estudar um pouco mais!";
	if (mediaFinal > 90) return "A - Excelente, sua nota é satisfatória!";

	console.log("A média final é",mediaFinal, "e a nota final é", notaFinal)
}

function calcularMedia(array) {
	let soma = 0;
	for (let valor of array) {
		soma += valor;
	}
	return Math.floor(soma / (array.length));
}
~~~

<summary>09 - Asteriscos (Árvore de Natal...)</summary>

~~~javascript
asteriscos(20)

function asteriscos(ii) {
	let asterisco = "#"

	for (var i = 5; i <= ii; i++) {
		asterisco += ' | * | @';
		console.log(asterisco);
			  }
	}
~~~

<summary>10 - Números Primos</summary>

~~~javascript
numerosPrimos(11);


function numerosPrimos(numero) {
  for (let i = 2; i <= numero; i++) {
		let primo = true;

		for (let index = 2; index < i; index++) {
			if (i % index === 0) {
				primo = false;
				break;
        
      	}
      }
	  if (primo) console.log(i + " é um número PRIMO");
	  else {
		console.log(i + " é um número COMPOSTO")
	  }
    }
  }


// for (var divisor = 2; divisor < num; divisor++)
// if (num % divisor == 0) return false;
// return true;
~~~

<summary>11 - Endereço</summary>

~~~javascript
function Endereco(rua, cidade, estado, CEP)  {
	this.rua = rua,
	this.cidade = cidade,
	this.estado = estado,
	this.cep = cep
};
	var meuEndereco = new Endereco('Rua Das Flores', 'Marília', 'SP', 17505-470)


console.log(meuEndereco);
~~~


<summary>12 - Encontre a Igualdade</summary>

~~~javascript
//miniProjeto12_encontreIgualdade

function Endereco(rua, cidade, estado, cep)  {
	this.rua = rua,
	this.cidade = cidade,
	this.estado = estado,
	this.cep = cep
};
	const endereco1 = new Endereco('Rua Das Flores', 'Marília', 'SP', 17505-470)
	const endereco2 = new Endereco('5 St', 'Arkansas', 'CA', 1470)

function EnderecosIguais(endereco1, endereco2) {
	return endereco1.rua === endereco2.rua &&
		endereco1.cidade === endereco2.cidade &&
		endereco1.estado === endereco2.estado &&
		endereco1.cep === endereco2.cep;
	}
console.log(EnderecosIguais(endereco1, endereco2));


function EnderecosMemoriaIguais(endereco1, endereco2) {
	return endereco1 === endereco2;
}
console.log(EnderecosMemoriaIguais(endereco1, endereco2));
~~~

<summary>13 - Postagem - Blog</summary>

~~~javascript
//miniProjeto13_postagemBlog

function Post(title, message, autor, views, live) {
	this.title = title,
	this.message = message,
	this.autor = autor,
	this.views = views,
	this.comments = [{autor, message}], 
	this.live = live
};

var post1 = new Post('Foto', 'Fotografias', 'Jr Girotto', 10, true )
	console.log(post1);
	console.log(post1.comments); //auto declarável?
~~~

<summary>14 - Segurança Virtual </summary>

~~~javascript
//miniProjeto14_segurancaVirtual

function Permissao() {
	DonoDaFesta = document.getElementById('convidado').value;
	NomeConvidado = document.getElementById('nome').value;
	ConvidadosNosvaldo = ['Larissa', 'Patricia', 'Karen', 'Kelly', "Fernanda", "Douglas", "Junia", "Eduardo"]

	if (ConvidadosNosvaldo.includes(NomeConvidado) && (DonoDaFesta.includes("Nosvaldo"))) {
		document.getElementById('Resposta').innerText = "Permitida Entrada! :)"
	} else {	
		document.getElementById('Resposta').innerText = "Entrada Proibida! :("
	}
};
~~~

~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Segurança Virtual - Lista de Convidados</title>
	<script src="./miniProjeto14_segurancaVirtual.js"></script>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css">
   
  </head>
  <body>
	<div class="container">
	  <center>
		<h1><b>Festa VIP</h1>
		<br>
			
		<h2>Bem vindo(a) a festa Sr(a):</h2>
		<input type="text" id="nome" class="form-control" placeholder="Digite seu nome"  autofocus="">
		<br>

		<h2>Quem te convidou?</h2>
		<input type="text" id="convidado" class="form-control" placeholder="Quem te convidou?">
		<br>

		<button class="btn btn-lg btn-primary" onclick="Permissao()">Verificar se posso entrar</button>
		
		<h3><b>Você está autorizado a entrar?</h3>
		<br>
		<label id="Resposta"><font style="color: gray">Pesquisando...</label>

	</div> <!-- /container -->

	  

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  </body>
</html>
~~~

</details>

<br>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" width="40" height="40"/> <img src="https://cdn.cdnlogo.com/logos/c/18/chai.svg" width="40" height="40"/>

* [Mocha e Chai](https://github.com/JrGirotto/LogicalForest_Nosvaldo_Souza_Compass/tree/main/Mocha-Chai)

<img src="https://img2.gratispng.com/20200808/tbl/transparent-il-dogma-del-big-bang-wall-decal-poster-sticker-ar-5f2f08ebb9f078.8841945415969179957616.jpg" width="40" height="40"/> 

* [Koans](https://github.com/JrGirotto/LogicalForest_Nosvaldo_Souza_Compass/tree/main/Koans/javascript-koans-master)


## Créditos

* Agradecimentos a SM Larissa pelas dúvidas sanadas e todo acompanhamento e dedicação no projeto.
* Sites utilizados como referência:

 **_Github.com, Alura.com.br, Underscorejs.org_**
