import Conductor from "../models/Conductor";
import {Request, Response} from 'express';

//Creacion de conductor 
export async function creatConductor(req: Request, res: Response): Promise<Response> {
    const {nombre, numero_celular, cedula, vehiculo, rol } = req.body

    const newConductor = {
        nombre: nombre, numero_celular: numero_celular, cedula: cedula, vehiculo: vehiculo, rol: rol
    }

    const conductor = new Conductor(newConductor)
    await conductor.save()

    return res.json({
        message: true,
        conductor
    })
}

//Buscar conductor
export async function findAllConductor(req: Request, res: Response): Promise<Response> {
    
    const conductor = await Conductor.find().sort('-createdAt')
    return res.json(conductor)
}

//Buscar conductor por cedula
export async function findOneConductor(req: Request, res: Response): Promise<Response> {
    //const { id } = req.params
    console.log('aca', req.params.cedula)
    const conductor = await Conductor.find({cedula: req.params.cedula})

    return res.json({
        message: true,
        conductor
       })
}

//Borrar conductor por id 
export async function deleteConductor(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const conductor = await Conductor.findByIdAndDelete(id)
    return res.json({
     message: 'Affiliation delete succesfully',
     conductor
    })
 }

 //Actualixar computador por id
 export async function updateConductor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { vehiculo  } = req.body
    const updatedConductor = await Conductor.findByIdAndUpdate(id, {
        vehiculo
    })

    return res.json({
        message: 'Succesfully update',
        updatedConductor
    })
}


