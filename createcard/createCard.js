export function createCard(){
    const card = document.createElement('div')
    card.className = "nft-card"

    const cardTop = document.createElement('div')
    cardTop.className = "nft-card-top"
    card.appendChild(cardTop)

    //contenido del nft-card-top
    const imgNft = document.createElement('img')
    imgNft.src = "./assets/image-equilibrium.jpg" 
    imgNft.alt="imagen nft"
    cardTop.appendChild(imgNft)

    //nft-card-top_title-description
    const divDescrip = document.createElement('div')
    divDescrip.className = "nft-card-top_title-description"
    cardTop.appendChild(divDescrip)

    const title = document.createElement('p')
    title.textContent = "Equilibrium #3429"
    divDescrip.appendChild(title)

    const descri = document.createElement('p')
    descri.textContent = "Equilibrium collection promotes balance and calm"
    divDescrip.appendChild(descri)

    //nft-card-top_datos-dispo
    const divDispo = document.createElement('div')
    divDispo.className = "nft-card-top_datos-dispo"
    cardTop.appendChild(divDispo)

    const dato1 = document.createElement('span')
    dato1.textContent = "0.041 ETH"
    divDispo.appendChild(dato1)

    const icono1 = document.createElement('img')
    icono1.src = "./assets/icon-ethereum.svg" 
    icono1.alt="icon-ethereum"
    dato1.appendChild(icono1)

    const dato2 = document.createElement('span')
    dato2.textContent = "3 days left"
    divDispo.appendChild(dato2)

    const icono2 = document.createElement('img')
    icono2.src = "./assets/icon-clock.svg" 
    icono2.alt="icon-clock"
    dato2.appendChild(icono2)

    //contenido del nft-card-bottom
    const cardBottom = document.createElement('div')
    cardBottom.className = "nft-card-bottom"
    card.appendChild(cardBottom)

    const div1 = document.createElement('div')
    cardBottom.appendChild(div1)

    const imgPerfil = document.createElement('img')
    imgPerfil.src = "./assets/image-avatar.png" 
    imgPerfil.alt="image-avatar">
    div1.appendChild(imgPerfil)

    const div2 = document.createElement('div')
    div2.textContent = "Create of"
    cardBottom.appendChild(div2)

    const div3 = document.createElement('div')
    div3.textContent = "Jules Wyvern"
    cardBottom.appendChild(div3)


    return card
}