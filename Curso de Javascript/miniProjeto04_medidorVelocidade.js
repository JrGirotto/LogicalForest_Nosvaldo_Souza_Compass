const velMax = 80
const km_pontos = 5
radar(120)

function radar(velocidade) {
	
	if(velocidade <= velMax)
		console.log('Velocidade Normal');

	else {
		const pontos = Math.floor((velocidade-velMax)/km_pontos)
		if (pontos > 0 && pontos < 12)
			console.log(pontos, 'Pontos. Dirija mais Devagar!');
		
		if (pontos >= 12)
			console.log(pontos, 'Pontos. Carteira Suspensa!');	
	}
}
