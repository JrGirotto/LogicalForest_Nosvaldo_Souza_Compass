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
