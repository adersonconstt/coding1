console.log ("atividade de Tereza")

"apresentação"
//apresentação
const nome = ("Aderson Constant")
var idade = ("23 anos")
var cidade = ("Recife") 
var país = ("Brasil")
console.log (`Olá meu nome é ${nome} e eu tenho ${idade}, moro na cidade do ${cidade} no ${país}`)
 

//variavel soma
var soma = (550+670)
console.log (`A soma de 550 + 670 é ${soma}`);
//variavel de multiplicação 
var multiplicar = (69 * 80)
console.log (`a multiplicação de 69 * 80 é ${multiplicar}`);
//variavel de divisão 
var dividir = (58 / 90);
console.log(`a divisão de 58 para 90 é ${dividir}`)
//variavel subtração 
var menos = (80 - 10)
console.log (`a subtração de 80 - 10 é ${menos}`)
//calculo da área do triangulo
var base = 200
var altura = 500
var valor = base*altura /2
console.log(`a área do triangulo é ${valor}`)
//calculo de média
var nota1 = (10)
var nota2 = (7,5)
var nota3 = (8)
var nota4 = (7)
var media = (nota1 + nota2 + nota3 + nota4/4)
console.log (`o resultado da média é ${media}`)
//calculo de desconto
var valor = (6000)
var desconto = (20)
var valorfinal = valorfinal = valor-("valor*(desconto/100)")
console.log(`o produto no valor de 6000 com desconto de 20% fica no total de ${valorfinal.toFixed(2)}`)
//imposto de renda 
let salarioBruto = 7000;
let imposto
if (salarioBruto <=2000){imposto = 0} else if(salarioBruto <-7000){imposto = salarioBruto * 0.15% maior}else {imposto = salarioBruto *0.25}
console.log ("o imposto de renda a ser pago é: R$" + imposto.toFixed(2))

//Conversor de moedas

function converterMoeda (valor, taxaCambio){const valorConvertido = valor* taxaCambio}
return (`R$ ${valor} é equivalente a $ $ {valorConvertido.toFixed(2)}`)
const valorEmReais = 100
const taxaCambio = 0.20('1 real = 0.20 dolar americano')
const resultado = converterMoeda(valorEmReais,taxaCambio)
console.log (resultado)

//conversor de celsius para fahrenheit
var temperaturaCelsius = 25
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32
console.log(`${temperaturaCelsius} é equivalente a ${temperaturaFahrenheit.toFixed(2)}`)

//calculadora de IMC
var peso = 70
var alt = 1.75
var imc = peso / (alt*alt)
console.log(" o imc é:" + imc.toFixed(2))

console.log("finish")
    
