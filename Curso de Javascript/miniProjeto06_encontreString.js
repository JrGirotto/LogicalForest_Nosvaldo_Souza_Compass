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