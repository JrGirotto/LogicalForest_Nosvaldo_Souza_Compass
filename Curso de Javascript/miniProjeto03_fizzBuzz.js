let entrada = 15

function fizzBuzz() {
	if (!isNaN(entrada)) {
		if(entrada % 3 === 0 && entrada % 5 === 0){
			console.log('FizzBuzz');
		}
		else if(entrada % 3 === 0){
			console.log('Fizz');
		}
		else if(entrada % 5 === 0){
			console.log('Buzz');
		}
		else {
			console.log(entrada);
		}
	} 
	else {
		console.log('Digite um número!')
	}
}
fizzBuzz()
