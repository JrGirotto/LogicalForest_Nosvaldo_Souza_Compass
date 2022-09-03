somar(10);
function somar(limite) { 
	let m3 = 0;
	let m5 = 0;

    for (i = 0;i <= limite;i++) {
		if(i % 3 === 0)
			m3 += i;
		if(i % 5 === 0)
			m5 += i;
	}
	console.log("A soma dos múltiplos de 3 do número",limite, "é",m3);  //18
	console.log("A soma dos múltiplos de 5 do número",limite, "é",m5);  //15
	console.log("A soma dos múltiplos de 3 e 5 do número",limite, "é",m3 + m5); //18+15=33
}	

