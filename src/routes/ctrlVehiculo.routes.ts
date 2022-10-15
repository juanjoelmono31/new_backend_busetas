import { Router } from 'express'
import * as ctrlVehiculoController from '../controllers/controlVehiculo.controller'

const router = Router()

//http://localhost:5000/control
router.post('/', ctrlVehiculoController.creatCtrlVehiculo)

//http://localhost:5000/control
router.get('/', ctrlVehiculoController.findAllCtrlVehiculos)

//http://localhost:5000/control/id
router.get('/:id', ctrlVehiculoController.findOneCtrlVehiculos)

//http://localhost:5000/control
router.delete('/:id', ctrlVehiculoController.deleteCtrlVehiculos)

router.put('/:id', ctrlVehiculoController.updateOtrosGastos)



export default router;