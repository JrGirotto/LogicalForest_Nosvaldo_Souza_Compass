//miniProjeto14_segurancaVirtual

function Permissao() {
	NomeConvidado = document.getElementById('nome').value;
	ConvidadosNosvaldo = ['Patricia', 'Karen', 'Kelly', "Junia", "Fernanda", "Douglas", "Eduardo"]

	if (ConvidadosNosvaldo.includes(NomeConvidado)) {
		document.getElementById('Resposta').innerText = "Permitida Entrada! :)"
	} else {	
		document.getElementById('Resposta').innerText = "Entrada Proibida! :("
	}
};
