import { Router } from 'express'
import * as conductorController from '../controllers/conductor.controller'

const router = Router()

//http://localhost:5000/conductor
router.post('/', conductorController.creatConductor)

//http://localhost:5000/conductor
router.get('/', conductorController.findAllConductor)

//http://localhost:5000/conductor/cedula
router.get('/:cedula', conductorController.findOneConductor)

//http://localhost:5000/conductor/id
router.put('/:id', conductorController.updateConductor)

//http://localhost:5000/conductor/id
router.delete('/:id', conductorController.deleteConductor)

export default router;