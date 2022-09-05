let velMax = 180
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
