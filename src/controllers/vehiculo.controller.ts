import Vehiculo from "../models/Vehiculo";
import {Request, Response} from 'express';

//Creacion de conductor 
export async function creatVehiculo(req: Request, res: Response): Promise<Response> {
    const {placa, propietario, modelo, numero, poliza, mantenimiento, taller, rodamiento, netoTotal } = req.body

    const newVehiculo = {
        placa: placa, propietario: propietario, modelo: modelo, numero: numero, 
        mantenimiento: mantenimiento, taller: taller, rodamiento, netoTotal, tarjeta_propiedad: req.file?.path
    }

    const vehiculo = new Vehiculo(newVehiculo)
    await vehiculo.save()

    return res.json({
        message: true,
        vehiculo
    })
}

//Buscar conductor
export async function findAllVehiculos(req: Request, res: Response): Promise<Response> {
    
    const vehiculo = await Vehiculo.find().sort('-createdAt')
    return res.json(vehiculo)
}

//Buscar vehiculo por id
export async function findOneVehiculo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const vehiculo = await Vehiculo.findById(id)

    return res.json(vehiculo)
}

//Borrar conductor por id 
export async function deleteVehiculo(req: Request, res: Response) : Promise<Response>{
    const { id } = req.params
    const vehiculo = await Vehiculo.findByIdAndDelete(id)
    return res.json({
     message: 'Affiliation delete succesfully',
     vehiculo
    })
 }

 //Actulizar campos
 
 export async function updateMantenimiento(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { mantenimiento, taller  } = req.body
    const updatedMantenimiento = await Vehiculo.findByIdAndUpdate(id, {
        mantenimiento,
        taller
    })

    return res.json({
        message: 'Succesfully update',
        updatedMantenimiento
    })
}

export async function updateRodamiento(req: Request, res: Response){
    const { id } = req.params
    const { rodamiento} = req.body
    const updatedRodamiento = await Vehiculo.findByIdAndUpdate(id, {
        rodamiento
    })

    return res.json({
        message: 'Succesfully update',
        updatedRodamiento
    })
}
// update campo valor suma Neto total busetas para valores diarios 

export async function updateNetoTotal(req: Request, res: Response){
    const { id } = req.params
    const { netoTotal} = req.body
    const updateNetoTotal = await Vehiculo.findByIdAndUpdate(id, {
        netoTotal
    })

    return res.json({
        message: 'Succesfully update',
        updateNetoTotal
    })
}

