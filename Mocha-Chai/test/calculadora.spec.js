import assert from "assert"
import chai from "chai"
import Calculadora from "../src/calculadora.js"

const expect = chai.expect

describe('Testes de soma', () => {
	it('Deve somar 4 e 5 resultando em 9', () => {
		let resultado = Calculadora.soma(4, 5)
		expect(resultado).to.be.eq(9)
	})
	it('Deve somar -4 e 5 resultando em 1', () => {
		let resultado = Calculadora.soma(-4, 5)
		expect(resultado).to.be.eq(1)
	})
})

describe('Testes de subtração', () => {
	it('Deve subtrair 4 e 5 resultando em -1', () => {
		let resultado = Calculadora.sub(4, 5)
		expect(resultado).to.be.eq(-1)
	})
	it('Deve somar -4 e 5 resultando em -9', () => {
		let resultado = Calculadora.sub(-4, 5)
		expect(resultado).to.be.eq(-9)
	})
})

describe('Testes de multiplicação', () => {
	it('Deve multiplicar 4 e 5 resultando em 20', () => {
		let resultado = Calculadora.mult(4, 5)
		expect(resultado).to.be.eq(20)
	})
	it('Deve multiplicar -4 e 5 resultando em -20', () => {
		let resultado = Calculadora.mult(-4, 5)
		expect(resultado).to.be.eq(-20)
	})
})

describe('Testes de divisão', () => {
	it('Deve dividir 40 e 5 resultando em 8', () => {
		let resultado = Calculadora.divisao(40, 5)
		expect(resultado).to.be.eq(8)
	})
	it('Deve dividir 140 e 10 resultando em 14', () => {
		let resultado = Calculadora.divisao(140, 10)
		expect(resultado).to.be.eq(14)
	})
})

describe('Testes de exponenciação', () => {
	it('Deve elevar 7 para a base 2 resultando em 49', () => {
		let resultado = Calculadora.expo(7, 2)
		expect(resultado).to.be.eq(49)
	})
	it('Deve extrair a raiz cúbica de 8, resultando em 2', () => {
		let resultado = Calculadora.expo(8, 1/3)
		expect(resultado).to.be.eq(2)
	})
	it('Deve extrair a raiz quadrada de 4, resultando em 2', () => {
		let resultado = Calculadora.expo(4, 0.5)
		expect(resultado).to.be.eq(2)
	})
})









/* describe('Meu Primeiro teste', () => {
	it('Verificar a variável "aux"', () => {
		let aux = 2
		//assert.strictEqual(aux, 2)
		expect(aux).to.be.equals(2).and.to.be.a('number')
		//expect(aux).to.be.a('number')
	})
	it('Verificar outra variável', () => {
		let aux = 'carro'
		//assert.strictEqual(aux, 'carro')
		expect(aux).to.be.equals('carro').and.not.equals('bicicleta')
	})
})

describe('Meu Segundo teste', () => {
	it('Verificar uma DESigualdade', () => {
		let aux = 2
		assert.notStrictEqual(aux, '2')
	})
	it('Verificar outra DESigualdade', () => {
		let aux = 'carro'
		assert.notStrictEqual(aux, 'bicicleta')
	})
})
 */