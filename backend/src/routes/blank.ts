import express from 'express'
import controller from '../controllers/blank'

const router = express.Router()

router.get('/', controller.getRequest)
router.post('/', controller.postRequest)

export = router