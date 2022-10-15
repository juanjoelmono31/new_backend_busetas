import { Router } from 'express'
import * as rodamientoController from '../controllers/rodamiento.controller'

const router = Router()

//http://localhost:3000/rodamiento
router.post('/', rodamientoController.creatRodamiento)

//http://localhost:3000/rodamiento
router.get('/', rodamientoController.findAllRodamiento)

//http://localhost:3000/rodamiento/id
router.get('/:id', rodamientoController.findOneRodamiento)

//http://localhost:3000/rodamiento/id
router.delete('/:id', rodamientoController.deleteRodamiento)

export default router;