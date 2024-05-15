import express from 'express'
import { login } from '../controllers/autenticacao.js'
import { validarToken } from '../middlewares/validacao.js'
import { criarHeroi, getHerois, atualizarHeroi, apagarHeroi, getHeroiPeloId} from '../controllers/herois.js'
const router = express.Router()

router.post('/herois' , validarToken, criarHeroi)
router.get('/herois' , validarToken, getHerois)
router.get('/herois/:id' , validarToken, getHeroiPeloId)
router.put('/herois/:id' ,  validarToken, atualizarHeroi)
router.delete('/herois/:id' ,validarToken, apagarHeroi)
router.post('/login', login)

export default router
