//menu retrátil
const btMenu = document.getElementById('botao-menu')
const navItens = document.getElementById('nav-itens')
const menuNav = document.querySelector('nav')

let menuAberto = true

btMenu.onclick = (e) =>{
    if(menuAberto){
        menuNav.style.width = '75px'
        menuAberto = false
        navItens.style.display = 'none'
    }else{
        menuNav.style.width = '100%'
        menuAberto = true
        setTimeout(() => navItens.style.display = 'block', 250)
    }
}

//Abrir página de tabela
const mapaHashSection = {
    '#lista': document.querySelector('#section-tabelas'),
}

window.addEventListener('hashchange', () =>{
    limpaSecao()
    mapaHashSection[window.location.hash].style.display = 'block'
})

const secoes = document.querySelectorAll('section')

function limpaSecao(){
    secoes.forEach(secao => secao.style.display = 'none')
}

//Lista Retrátil de Ano
var select = document.getElementById('ano')
const data = new Date()

for(let i=0; i<=30; i++){
    var anos = data.getFullYear()-i
    console.log(anos)
    option = new Option(anos, anos)
    select.add(option)
}