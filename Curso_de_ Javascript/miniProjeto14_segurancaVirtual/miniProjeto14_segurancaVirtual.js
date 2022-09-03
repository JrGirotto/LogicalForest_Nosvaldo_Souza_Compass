//miniProjeto14_segurancaVirtual

function Permissao() {
	NomeConvidado = document.getElementById('nome').value;
	ConvidadosNosvaldo = ['Larissa', 'Patricia', 'Karen', 'Kelly', "Fernanda", "Douglas"]

	if (ConvidadosNosvaldo.includes(NomeConvidado)) {
		document.getElementById('Resposta').innerText = "Permitida Entrada! :)"
	} else {	
		document.getElementById('Resposta').innerText = "Entrada Proibida! :("
	}
};
