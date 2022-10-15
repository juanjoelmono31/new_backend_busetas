import { Router } from 'express'
import * as configVariablesController from '../controllers/config.controller'

const router = Router()

//http://localhost:5000/variables
router.post('/', configVariablesController.creatVariables)

//http://localhost:5000/variables
router.get('/', configVariablesController.findAllVariables)

//http://localhost:5000/variables/id
router.put('/:id', configVariablesController.deleteVariables)

//http://localhost:5000/variables/id
router.delete('/:id', configVariablesController.deleteVariables)

export default router;
