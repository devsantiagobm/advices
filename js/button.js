import consultas from "./consultas.js"
export default function button(){
    const button = document.querySelector('.content__button')
    button.addEventListener('click', () => consultas.consultarConsejo())
}