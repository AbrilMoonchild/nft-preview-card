import { buttonDisabled } from "./createcard/buttonDisabled.js"
import { createButton } from "./createcard/createButton.js"
import { createCard } from './createcard/createCard.js'
import { mount } from './createcard/mount.js'


const state={
    quantity: 0
}

//crear botones
createButton("Add Card","addCard")
createButton("Remove Card","removeCard")


buttonDisabled(state.quantity)



const addCard=document.querySelector("#addCard")
addCard.addEventListener('click',()=>{
    const card = createCard()
    mount(card)
    state.quantity++
    buttonDisabled(state.quantity)
})

const removeCard=document.querySelector("#removeCard")
removeCard.addEventListener('click',()=>{
    const parent = document.querySelector('#container-cards')
    parent.removeChild(parent.lastElementChild)
    state.quantity--
    buttonDisabled(state.quantity)
})