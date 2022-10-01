export default function greeting(){
    const intervalos = [ [0, 11, "morning"], [12, 18, "afternoon"], [19, 23, "evening"] ]
    const horaBox = document.querySelector('.content__greeting')
    const hora = new Date().getHours()
    
    const horaActual = intervalos.find(item => hora >= item[0] && hora <= item[1] )
    horaBox.textContent = `Good ${horaActual[2]}`
}