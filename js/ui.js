class UI{
    mostrarConsejo(datos){
        if(Boolean(datos.message)){
            this.consejoNoEncontrado()
            return;
        }

        this.textoInicial(datos)
    }

    consejoNoEncontrado(){
        alert("Not found!")
    }

    textoInicial(datos){
        const texto = document.querySelector('.content__title')
        const id = document.querySelector('.content__id')
        texto.classList.add('content__title--active')
        id.classList.add('content__id--active')

        setTimeout(() => this.cambiarHTML(datos), 2500);
    }

    cambiarHTML(datos){
        let {slip: {advice}, slip: {id}} = datos  
        const idBox = document.querySelector('.content__id')
        const phraseBox = document.querySelector('.content__title')

        idBox.textContent = `#${id}` 
        phraseBox.textContent = `"${advice}"` 
        this.textoFinal()
    }

    textoFinal(){
        const texto = document.querySelector('.content__title')
        const id = document.querySelector('.content__id')
        texto.classList.add('content__title--desactive')
        id.classList.remove('content__id--active')
        setTimeout(() => {
            texto.classList.remove('content__title--desactive', 'content__title--active')
            

        }, 2000);
    }
}

const ui = new UI();
export default ui;