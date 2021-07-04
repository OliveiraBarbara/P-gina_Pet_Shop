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