import ConfigVariables from '../models/ConfiguracionVariables';
import {Request, Response} from 'express';

//Creacion variables
export async function creatVariables(req: Request, res: Response) {
    const {valor_pasaje, valor_porcentaje_conductor, valor_liq_conductor, bonificacion} = req.body

    const newVariables = {
        valor_pasaje: valor_pasaje, valor_porcentaje_conductor: valor_porcentaje_conductor, 
        valor_liq_conductor: valor_liq_conductor, bonificacion: bonificacion
    }

    const variables = new ConfigVariables(newVariables)
    await variables.save()

    return res.json({
        message: true,
        variables
    })
}

//Buscar variables
export async function findAllVariables(req: Request, res: Response): Promise<Response> {
    
    const variables = await ConfigVariables.find().sort('-createdAt')
    return res.json(variables)
}

//Buscar variables por id
// export async function findOneVariables(req: Request, res: Response): Promise<Response> {
//     const { id } = req.params
//     const variables = await ConfigVariables.findById(id)

//     return res.json(variables)
// }

//Borrar por id 
export async function deleteVariables(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const variables = await ConfigVariables.findByIdAndDelete(id)
    return res.json({
     message: 'Variables delete succesfully',
     variables
    })
 }

 //Actualizar campos
 export async function updateVariables(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { bonificacion  } = req.body
    const updatedvariables = await ConfigVariables.findByIdAndUpdate(id, {
        bonificacion
    })

    return res.json({
        message: 'Succesfully update',
        updatedvariables
    })
}