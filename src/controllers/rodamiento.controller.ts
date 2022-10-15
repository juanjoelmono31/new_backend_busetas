import Rodamiento from '../models/Rodamiento';
import {Request, Response} from 'express';

//Crear rodamiento
export async function creatRodamiento(req: Request, res: Response){
    const {numero_buseta, hora, numero_rodamiento, lugar, fecha} = req.body

    const newRodamiento = {
        numero_buseta: numero_buseta, hora: hora, numero_rodamiento: numero_rodamiento,
        lugar: lugar, fecha: fecha
    }

    const rodamiento = new Rodamiento(newRodamiento)
    await rodamiento.save()

    res.json({
        message: true,
        rodamiento
    })
}

//Buscar rodamiento
export async function findAllRodamiento(req: Request, res: Response) {
    const rodamiento = await Rodamiento.find().sort('-createdAt')
    res.json(rodamiento)
}

//Buscar rodamiento por id
export async function findOneRodamiento(req: Request, res: Response){
    const { id } = req.params

    const rodamiento = await Rodamiento.findById(id)

    res.json(rodamiento)
}

//Borrar rodamiento por id 
export async function deleteRodamiento(req: Request, res: Response) {
    const { id } = req.params
    const rodamiento = await Rodamiento.findByIdAndDelete(id)
    return res.json(rodamiento)
 }
