const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

pokemonList.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}