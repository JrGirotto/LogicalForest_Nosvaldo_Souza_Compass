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
