export class Car {
    private id: number;
    private nombre: string;
    private color: string;
    private anio: number;
    private combustible: number;

    constructor(id: number, nombre: string, color: string, anio: number, combustible: number) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.anio = anio;
        this.combustible = combustible;

    }

    public consultarId(): number {
        return this.id;
    }

    public arrancar(): void {
        console.log('inicia su recorrido');
    }

    public acelerar(): void {
    }

    public frenar(): void {
    }

    public consultarCombustible(): number {
        return this.combustible;
    }
}

export class RegistroAutomotor {
    private listado: Car[];

    constructor(listado: Car[] = []) {
        this.listado = listado;
    }

    public consultarListado(): Car[] {
        return this.listado;
    }

    public consultarAutomotor(id: number): Car | undefined {
        return this.listado.find(auto => auto.consultarId() === id);
    }
    
    public borrarAutomotor(id: number): void {
        this.listado.filter(auto => auto.consultarId() !== id);
    }
    
    public actualizarAutomotor(car: Car): void {
        const indexAuto = this.listado.findIndex(auto => (auto.consultarId() === car.consultarId()));
        this.listado[indexAuto] = car
    }
    
    public darDeAltaAutomotor(car: Car): void {
        this.listado.push(car);

    }
}


//Instanciamos Autos 
const corollaRojo = new Car(0, 'Corolla', 'Rojo', 2020, 20);
const etiosGris = new Car(1, 'Etios', 'Gris', 2018, 20);

//Instancia del Registro Automotor
const registro = new RegistroAutomotor([]);

//Registrar los autos
registro.darDeAltaAutomotor(corollaRojo);
registro.darDeAltaAutomotor(etiosGris);

// Consultar los autos
console.log(registro.consultarListado());

const hiluxNegra = new Car(1, "Hilux", "Negro", 2018, 20);
//Actualizar auto
registro.actualizarAutomotor(hiluxNegra);
//volver a consultar autos para ver el listado actualizado
console.log(registro.consultarListado());

//consultar Auto especifico
console.log(registro.consultarAutomotor(hiluxNegra.consultarId()));
//borrar Auto
registro.borrarAutomotor(hiluxNegra.consultarId());
