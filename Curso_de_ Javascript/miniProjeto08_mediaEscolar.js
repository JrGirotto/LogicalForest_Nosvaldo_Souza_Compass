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

