
const a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const a2 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// for (let i in a1){
//     console.log(`o valor a1[${i}] é de: ${a1[i]}`)
// }

// let pos = a2.indexOf(15)
// if(pos === -1){
//     console.log(`O valor não foi encontrado.`)   

// }
// else{
//     console.log(`O valor está na posição: ${pos}`)
// }

// // let array1 = array0.pop()
// console.log(array0.pop())

// let arrayReceba = []
// arrayReceba.push(a1) /* valor de array0 vai pra array 01 */ 
// arrayReceba.push(a1)
// arrayReceba.push(a2)

/* O QUE É SPLICE */
// a1.splice(0,a1.length) /*splice(elemento-inicial, quantidade-elementos-a-ser-tirado, adicionar-novo-elemento ) */
/*obs: splice altera o próprio array original*/
/* O QUE É SLICE */
// const a2slice = a2.slice(0,6)/*splice(elemento-a-partir-de-ser-tirado, ultimo-elemento-a-ser-tirado)*/
/*obs: slice não altera o Array original*/
// console.log(a1)
// console.log(a2slice)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arrObjs = [
    { id: 1, name: "Matheus" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Maria" },
    { id: 4, name: "Roberta" }
];

const numberObject = {
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
    number5: 5,
}

// console.log(numberObject["number" + 3])

//array de arrays

// const arr = arrObjs.map(function (obj) {

//     return Object.keys(obj).map(function (key) {
//         return obj[key];

//     });
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const digitReductionArray = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6, 7, 8, 9, 1, 2],
    [3, 4, 5, 6, 7, 8, 9, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];
// const i = 0
// const j  = 1
// const  matrix = new Array(10)
// matrix[2] = digitReductionArray[1]
// console.log(matrix)
/*=========================================================================================================*/
// console.log(typeof digitReductionArray)

// function sumDigitLarge(number){
//     let numero
//     if(number > 9){
//         numero = Math.floor(number / 10) + (number % 10) 
//         number = numero
//         if(number > 9){
//           numero = Math.floor(number / 10) + (number % 10)  
//         } else{
//             return numero          
//         }              
//     }
//     console.log(`O número é: ${numero}`)
// }
// sumDigitLarge(98)
/*==========================================================================================================*/
function sumDigitWhile(number) {
    let numberA
    while (number > 9 && number !== 11 && number !== 22) {
        numberA = Math.floor(number / 10) + (number % 10)
        number = numberA

    }
    return numberA
}

let valor = sumDigitWhile(994)
console.log(`${valor}`)

// const dataFunction = (dateCalc) =>{
//     console.log(`Hoje é: ${dateCalc.getDate()}/${dateCalc.getMonth()+1}/${dateCalc.getFullYear()} às ${dateCalc.getHours()}:${dateCalc.getMinutes()}:${dateCalc.getSeconds()} `)
// }

function numberDateRealTime(dataCalc) {
    console.log(`${dataCalc.getDate()}, ${dataCalc.getMonth() + 1}, ${dataCalc.getFullYear()} `)
}
let data = new Date()
numberDateRealTime(data)


// GERAR NUMEROS ALEATORIOS
// const number = 4
// const max = 10
// const min = 1
// const aleatory = Math.floor(Math.random() * (max - min) + min)

let vet0 = [1, 2, 3]
let vet1 = vet0.toString()

console.log(vet1)

/*==========================================================================================================*/
const archivePDF = document.querySelector("#archive-pdf")
const buttonGeneratePDF = document.createElement('input')
buttonGeneratePDF.setAttribute('type', 'button')
buttonGeneratePDF.setAttribute('id', 'create-pdf')
buttonGeneratePDF.setAttribute('value', 'Gerar PDF')
archivePDF.appendChild(buttonGeneratePDF)
buttonGeneratePDF.style.margin = 'auto'
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const buttonReset = document.createElement('input')
buttonReset.setAttribute('type', 'button')
buttonReset.setAttribute('id', 'button-reset')
buttonReset.setAttribute('value', 'Reset')
buttonReset.setAttribute('href', 'container-medium')
archivePDF.appendChild(buttonReset)


function gerarPdf() {
    //Conteúdo do PDF!
    const content = document.querySelector('#container-back')

    // Configuração do arquivo final de pdf
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }

    }

    // Gerar e Baixar o PDF
    html2pdf().set(options).from(content).save();
}

const reset = () => {
    window.location.reload()
}

buttonGeneratePDF.addEventListener('click', gerarPdf)
buttonReset.addEventListener('click', reset)

/*==========================================================================================================*/





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*  FORMULÁRIOS PARA ESTUDO */
// Remove any non-digit characters from the birthdate string

// birthdate1 = birthdate1.replace(/\D/g, "");
// console.log(birthdate1)
//const namePerson = document.getElementById('name-person').value.toLowerCase().replace(/\s/g, "");
// substring(i,j)
// toLowerCase() => todas as letras minúsculas
// charAt()
//indexOf()
// toString()
//join()
//pop() e shift() eliminar elemento array
// typeof
// const dataFunction = (dateCalc) =>{
//     console.log(`Hoje é: ${dateCalc.getDate()}/${dateCalc.getMonth()+1}/${dateCalc.getFullYear()} às ${dateCalc.getHours()}:${dateCalc.getMinutes()}:${dateCalc.getSeconds()} `)
// }
// let data = new Date()
// dataFunction(data)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* O QUE O JAVASCRIPT É CAPAZ DE FAZER? - CURSO JAVASCRIPT #01 */


/* DIGITAR NO CONSOLE DO NAVEGADOR */
// document.body.style.background = 'black' /*MUDAR A COR DO CORPO DO SITE*/

// document.querySelector('img.lnXdpd').style.filter = 'grayscale(100%)' /*LOGO DO GOOGLE EM  ESALA DE CINZA*/

// document.querySelector('img.lnXdpd').style.visibility  = 'hidden' /*OCULTAR O HPLOGO DO GOOGLE*/

/*SITE DO G1*/
// document.querySelector('span.bstn-hl-title').innerText  = 'Curso em Video de JavaScript é o melhor do youtube!' /*MUDAR O TEXTO DO SITE */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NÚMERO ALEATÓRIO



// Faça um programa onde toda vez que ele rodar, 
// coloca na tela um número aleatório entre 1 e 100
// */
// const max = 100
// const min = 1
// const aleatory = Math.floor(Math.random() * (max - min) + min)

// console.log(aleatory)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// typeof <variavel> : declara o tipo de variavel (number, string, etc)

//===========================
// Number.parseInt(n)          ambos os 3, convertem strings em números
// Number.parseFloat(n)
// Number(n)
//===========================
// String(n)                 convertem números em string
// n.toString()
//===========================
/*
let n1 = 1545.5
console.log(n1)
let n2 = n1.toFixed(2)
console.log(n2)
n2 = n1.toFixed(2).replace('.', ',')
console.log(n2)
n2 = n1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
console.log(n2)
n2 = n1.toLocaleString('en-us', {style: 'currency', currency: 'USD'})
console.log(n2)OU
.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
        
n2 = n1.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})
console.log(n2) OU
.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
*/

/*
=======// SPREAD //=======
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
*/

// function inteirosPositivos(v) {
//     v = v.replace(/\D/g, "") // seleciona tudo q não for dígito e substitui por ""
//     return v;
// } 

/* DOM - DOCUMENT OBJECT MODEL */
/**/


function arcanoCalc(age, letterName) {
    let idade = age
    let quantLetrasNome = letterName
    let quantArcanos = quantLetrasNome - 1
    let arcano = (90 / quantArcanos)
    let arcanoAtual = Math.ceil((idade / arcano))
    console.log(`Seu Arcano Atual é: ${arcanoAtual}, Você possui ${quantArcanos} Arcanos `)
}
// arcanoCalc(43, 23)
///////////////////////////////////////////////////////////////////////////////////////////////////////
// const vetor = [3,4,9,9,2,8,9,8,7,7,9]
// const vetor2 = vetor.toString()
// const obj = {...vetor2}
// // console.log(vetor.indexOf(7)) 
// console.log(obj)
///////////////////////////////////////////////////////////////////////////////////////////////////////
// const namen = 'Edgar Raphael de Sousa'
// const namen2 = {...percorreArray(namen)}
// console.log(namen.charAt(3))
// console.log(namen.indexOf('g'))
// console.log(namen2)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// function percorreArray(array) {
//     let array2 = []
//     for (let i = 0; i < array.length; i++) {
//         array2[i] = array.charAt(i)
//     }
//     return array2
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////
// numberOne = 32
// function positiveNumber(numb) {
//     let n1
//     if (numb >= 0) {
//         n1 = numb
//     } else {
//         n1 = numb * (-1)
//     }
//     console.log(n1)
//     return n1
// }
// positiveNumber(numberOne)
///////////////////////////////////////////////////////////////////////////////////////////////////////
// let numberDecimal  = 0.6
// let numberInteger = Math.round(numberDecimal)
// console.log(Math.round(numberInteger))

let agora = new Date()
console.log(`${agora.getDate()}:${agora.getMonth() + 1}:${agora.getFullYear()}`)
console.log(`${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`)

///////////////////////////////////////////////////////////////////////////////////////////////////////
// IMAGEM DE JAVASCRIPT PARA HTML:
var img = document.createElement('img') // CRIAR UMA TAG DE IMAGEM COM A VARIAVEL 'img'
img.setAttribute('id', 'foto') //INSERIR id="foto"
img.setAttribute('src', './src/foto-bebe-m.png') //INSERIR IMAGEM ATRAVÉS DO ENDEREÇO E NOME DA IMAGEM src='./src/foto-bebe-m.png'
res.appendChild(img) // ENVIAR A IMAGEM PRA A PAGINA HTML, COM A VARIAVEL 'img'

/*
let reset = () => {
    window.location.reload()
}
*/

/*
// RECURSIVIDADE
function fatorial(n) {
    if (n == 1 || n == 0) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }


}

console.log(fatorial(3))
*/

/*
    setTimeout -> Executa uma vez.
    setInterval -> Executa infinitas vezes.
    clearInterval -> Vai parar o setInterval.

    ===> FORMAS DE USAR ESSAS FUNÇÕES:
    
    setInterval(function () { }, 1000)
    setInterval(() => { }, 1000)

    setTimeout(function () { }, 1000)
    setTimeout(() => { }, 1000)

    clearInterval(Valor)

    */

    // ELIMINAR VALORES REPETIDOS EM UM ARRAY
    // let newArray = array.filter(function(este, i) {
    //     return array.indexOf(este) === i;
    //   });
    //   console.log(newArray)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* IMPORTAR E EXPORTAR FUNÇÕES */

// index.js----------------------------------------------------------------->
const sum = require('./sum')
const multi = require('./multi')
const objectsAndFunctions = require('./objectsAndFunctions') //metodo 1

const {sum, multi, person} = require('./objectsAndFunctions') //metodo 2


console.log(objectsAndFunctions.sum(3, 2)) //metodo 1
console.log(objectsAndFunctions.multi(3, 2)) //metodo 1
console.log(objectsAndFunctions.person) //metodo 1

console.log(sum(3, 2)) //metodo 2
console.log(multi(3, 2)) //metodo 2
console.log(person) //metodo 2

// multi.js------------------------------------------------------------------>
function multi(firstNumber, seccondNumber){
    return firstNumber * seccondNumber
}

module.exports = multi

// sum.js--------------------------------------------------------------------->
function sum(firstNumber, seccondNumber){
    return firstNumber + seccondNumber
}

module.exports = sum


// objectsAndFunctions------------------------------------------------------>
function sum(firstNumber, seccondNumber){
    return firstNumber + seccondNumber
}

function multi(firstNumber, seccondNumber){
    return firstNumber * seccondNumber
}

const person = {
    name: "Edgar"
}

module.exports = {sum, multi, person}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let text = getElementsByTagName("p")[0].innerHTML
// let highlightedText = text.replace(/\b(\d+)\b/g, <span class="red">$1</span>)
// document.getElementsByName("p")[0].innerHTML = highlightedText




// CLASSES:-------------------------------------------------------------------->

class Person {
    constructor(name, age, address, tel) {
      this.name = name
      this.age = age
      this.address = address
      this.tel = tel
    }
  
    talk() {
      //English
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old, I live in ${this.address}, and my phone number is: ${this.tel}.`)
      //Portuguese
      console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos, moro em ${this.address} e meu número de telefone é: ${this.tel}.`)
    }
  
  }
  
  const person01 = new Person("Edgar Raphael de Sousa", 41, "Rua bias Fortes, N 350", "(34) 99289-8779")
  person01.talk()
  console.log(person01)
  
  const person02 = new Person("Sandra Rocha Vargas", 53, "Rua Tapajós, N 439", "(34) 98838 9773" )
  person02.talk()
  console.log(person02)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












