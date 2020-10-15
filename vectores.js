export default class Vectores {
    constructor() {
        this._vector=new Array()
    }

    llenar() {
        let n = 2
        let j = 0
        while (j < 10) {
            if( n % 2 == 0){
            this._vector[j] = n
            n++
            }

            else {
            n++
            j++
            }
        }        
    }

    mostrar() {
        console.log(this._vector)
    }

    girarDerecha() {
        let primero = this._vector[this._vector.length - 1]

        for (let i = this._vector.length - 1; i>0; i--){
            this._vector[i] = this._vector[i-1] 
        }  
        this._vector[0] = primero    
    }

    girarIzquierda() {
        let ultimo = this._vector[0]

        for (let i = 0; i<this._vector.length; i++){
            this._vector[i] = this._vector[i+1] 
        } 
        
        this._vector[this._vector.length -1] = ultimo
    }

    invertir() {
        for(let i = 0, j = this._vector.length-1; i < j; i++, j--){
            [this._vector[i], this._vector[j]] = [this._vector[j], this._vector[i]]
        }
    }   
}

let app = new Vectores()
app.llenar() 
app.mostrar()
app.invertir()
app.mostrar()
