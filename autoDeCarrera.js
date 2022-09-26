"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(id, nombre, color, anio, combustible) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.anio = anio;
        this.combustible = combustible;
    }
    Car.prototype.consultarId = function () {
        return this.id;
    };
    Car.prototype.arrancar = function () {
        console.log('inicia su recorrido');
    };
    Car.prototype.acelerar = function () {
    };
    Car.prototype.frenar = function () {
    };
    Car.prototype.consultarCombustible = function () {
        return this.combustible;
    };
    return Car;
}());
exports.Car = Car;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listado) {
        if (listado === void 0) { listado = []; }
        this.listado = listado;
    }
    RegistroAutomotor.prototype.consultarListado = function () {
        return this.listado;
    };
    RegistroAutomotor.prototype.consultarAutomotor = function (id) {
        return this.listado.find(function (auto) { return auto.consultarId() === id; });
    };
    RegistroAutomotor.prototype.borrarAutomotor = function (id) {
        this.listado.filter(function (auto) { return auto.consultarId() !== id; });
    };
    RegistroAutomotor.prototype.actualizarAutomotor = function (car) {
        var indexAuto = this.listado.findIndex(function (auto) { return (auto.consultarId() === car.consultarId()); });
        this.listado[indexAuto] = car;
    };
    RegistroAutomotor.prototype.darDeAltaAutomotor = function (car) {
        this.listado.push(car);
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
//Instanciamos Autos 
var corollaRojo = new Car(0, 'Corolla', 'Rojo', 2020, 20);
var etiosGris = new Car(1, 'Etios', 'Gris', 2018, 20);
//Instancia del Registro Automotor
var registro = new RegistroAutomotor([]);
//Registrar los autos
registro.darDeAltaAutomotor(corollaRojo);
registro.darDeAltaAutomotor(etiosGris);
// Consultar los autos
console.log(registro.consultarListado());
var hiluxNegra = new Car(1, "Hilux", "Negro", 2018, 20);
//Actualizar auto
registro.actualizarAutomotor(hiluxNegra);
//volver a consultar autos para ver el listado actualizado
console.log(registro.consultarListado());
//consultar Auto especifico
console.log(registro.consultarAutomotor(hiluxNegra.consultarId()));
//borrar Auto
console.log(registro.borrarAutomotor(hiluxNegra.consultarId()));
