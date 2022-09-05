numero = 5

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

