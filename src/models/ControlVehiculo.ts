import { Schema, model, Document } from 'mongoose';

const ctrlVehiculos = new Schema({
    fecha: {
        type: String
    },

    ruta: {
        type: String
    },

    numero_vueltas: {
        type: Number
    },

    numero_buseta: {
        type: Number
    },

    reg_salida: {
        type: Number
    },

    reg_llegada: {
        type: Number
    },

    otros: {
        type: Object
    },

    acpm: {
        type: Number
    },

    montaje_llantas: {
        type: Number
    },

    total_gastos: {
        type: Number
    },

    neto_total: {
        type: Number
    },

    conductor: {
        type: Object
    },
    
    placa: {
        type: String
    },
    pico_placa: {
        type: Boolean
    },
    
    taller: {
        type: Boolean
    },
    estado: {
        type: String
    },
    bonificacion: {
        type: Number
    },

    otros_gastos: {
        type: Number
    }
})

export default model('CtrlVehiculos', ctrlVehiculos)