const thePageBerrind = document.querySelector('body')

const atesomes = document.querySelector('#somes')
const n1 = document.querySelector('#tn1')
const n2 = document.querySelector('#tn2')
const res = document.querySelector('#result')

atesomes.addEventListener('click', () => {
    console.log('foi, correto agrs com seus params')

    let sn1 = Number(n1.value)
    let sn2 = Number(n2.value)
    let soma = sn1 + sn2

    result.innerHTML = `O resultado da soma dos números ${sn1} e ${sn2} é </strong> ${soma} </strong> `



})

const atemult = document.querySelector('#multipli')
atemult.addEventListener('click', () => {
    console.log('Sua multiplicação será realizada neste exato momento!')

    let sn1 = Number(n1.value)
    let sn2 = Number(n2.value)
    let soma = sn1 * sn2

    result.innerHTML = `O resultado da soma dos números ${sn1} e ${sn2} é </strong> ${soma} </strong> `
})

const divider = document.querySelector('#devide')
divider.addEventListener('click', () => {
    console.log('Sua divisão será coompreendida com sucesso!')
    
    let sn1 = Number(n1.value)
    let sn2 = Number(n2.value)
    let soma = sn1 / sn2


    result.innerHTML = `O resultado da soma dos números ${sn1} e ${sn2} é </strong> ${soma} </strong> `
})


const fontss = document.querySelector('.fontJS')
const fonts2 = document.querySelector('#fontsJS')
const forbuttonNightMode = document.querySelector('.fornight')

forbuttonNightMode.addEventListener('click', () => {
    thePageBerrind.style.background = 'white',
    fontss.style.color = 'black'

});

forbuttonNightMode.addEventListener('dblclick', () => {
    thePageBerrind.style.background = '#1C1C1C',
    fontss.style.color = 'white'
});





