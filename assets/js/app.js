let pepsiAzul = document.querySelector('.lataBlue')
let pepsiBlack = document.querySelector('.lataBlack')
let pepsiGreen = document.querySelector('.lataGreen')
let imagemLata = document.querySelector('.imagemLata')

let menuBurgerButton = document.querySelector('.menuBurger')

let imagemPepsi = 'assets/img/PepsiLata'

pepsiAzul.addEventListener('mouseover', ()=>{
    mudarLata('Azul')
})

pepsiBlack.addEventListener('mouseover', ()=>{
    mudarLata('Preta')
})

pepsiGreen.addEventListener('mouseover',()=>{
    mudarLata('Twist')
})

let mudarLata = (color)=>{
    imagemLata.setAttribute('src', `${imagemPepsi}${color}.png`)
}

// Menu click
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let menuBurger = document.querySelector('.menuBurger')
let body = document.querySelector('body')
let html = document.querySelector('html')
let navList = document.querySelector('.navList')

let menuClicked = ()=>{
    overflowCss('hidden')

    //menuBurger.style.marginTop='-15px'
    menuBurger.classList.add('menuOpen')
    navList.classList.add('active')
    line1.classList.add('active')
    line2.classList.add('active')
    line3.classList.add('active')

    // Setar onclick botão
    menuBurgerButton.setAttribute('onclick','closeMenu()')
}

let closeMenu = ()=>{
    overflowCss('auto')

    menuBurger.classList.remove('menuOpen')
    navList.classList.remove('active')
    line1.classList.remove('active')
    line2.classList.remove('active')
    line3.classList.remove('active')

    // Setar onclick botão
    menuBurgerButton.setAttribute('onclick','menuClicked()')
}

let overflowCss = (action)=>{
    if(action=='hidden'){
        body.style.overflowY=action
        html.style.overflowY=action
    }else if(action == 'auto'){
        body.style.overflowY=action
        html.style.overflowY=action
    }
}

let data = new Date()
let ano = data.getFullYear()
let anoSpan = document.querySelector('.ano').innerHTML=ano