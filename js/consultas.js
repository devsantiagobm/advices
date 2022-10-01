import ui from "./ui.js";

class Consultas{
    consultarConsejo(){
        const url = "https://api.adviceslip.com/advice";

        fetch(url)
        .then(resultado => resultado.json())
        .then(datos => ui.mostrarConsejo(datos))
        .catch(error => ui.error(error))
    }
}

const consultas = new Consultas();
export default consultas;