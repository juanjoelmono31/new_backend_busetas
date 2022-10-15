import { Router } from 'express'
import * as vehiculoController from '../controllers/vehiculo.controller'
import multer from '../libs/multer'

const router = Router()

//http://localhost:5000/vehiculo
router.post('/',multer.single('tarjeta_propiedad'), vehiculoController.creatVehiculo)

//http://localhost:5000/vehiculo
router.get('/', vehiculoController.findAllVehiculos)

//http://localhost:5000/vehiculo/id
router.get('/:id', vehiculoController.findOneVehiculo)

//http://localhost:5000/vehiculo/id
router.delete('/:id', vehiculoController.deleteVehiculo)

//
router.put('/:id',vehiculoController.updateMantenimiento)

router.put('/rodamiento/:id',vehiculoController.updateRodamiento)

router.put('/netos/:id',vehiculoController.updateNetoTotal)




export default router;