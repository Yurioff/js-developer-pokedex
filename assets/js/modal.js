const modalOpen = document.querySelector('dialog')
const buttonClose = document.querySelector('dialog button')

pokemonList.onclick = function () {
    modalOpen.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}

