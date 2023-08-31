const modalOpen = document.getElementById('janela-modal')
const buttonClose = document.getElementById('btn-close-modal')

pokemonList.onclick = function () {
    modalOpen.showModal()
}

buttonClose.onclick = function () {
    modalOpen.close()
}

