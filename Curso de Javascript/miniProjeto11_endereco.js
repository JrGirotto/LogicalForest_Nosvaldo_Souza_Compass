function Endereco(rua, cidade, estado, CEP)  {
	this.rua = rua,
	this.cidade = cidade,
	this.estado = estado,
	this.cep = cep
};
	var meuEndereco = new Endereco('Rua Das Flores', 'Marília', 'SP', 17505-470)


console.log(meuEndereco);