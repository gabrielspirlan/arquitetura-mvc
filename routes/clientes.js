import Router from 'express'
import controller from '../controllers/clientes.js'
const router = Router()

router.get('/', controller.get)
router.post('/', controller.create)
router.put('/:index', controller.update)
router.delete('/:index', controller.delete)

export default router