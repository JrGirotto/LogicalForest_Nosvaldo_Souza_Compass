numerosPrimos(11);


function numerosPrimos(numero) {
  for (let i = 2; i <= numero; i++) {
		let primo = true;

		for (let index = 2; index < i; index++) {
			if (i % index === 0) {
				primo = false;
				break;
        
      	}
      }
	  if (primo) console.log(i + " é um número PRIMO");
	  else {
		console.log(i + " é um número COMPOSTO")
	  }
    }
  }


// for (var divisor = 2; divisor < num; divisor++)
// if (num % divisor == 0) return false;
// return true;
