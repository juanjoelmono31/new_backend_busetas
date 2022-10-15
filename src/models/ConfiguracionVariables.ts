import { Schema, model, Document } from 'mongoose';

const ConfigVariablesSchema = new Schema ({
    valor_pasaje: {
        type: Number
    },

    valor_porcentaje_conductor: {
        type: Number
    },

    valor_liq_conductor: {
        type: Number
    },

    bonificacion: {
        type: Object 
    }
})

export default model('ConfigVariables', ConfigVariablesSchema)