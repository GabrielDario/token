import express from 'express'

const router = express.Router()
import { criarHeroi, getHerois, atualizarHeroi, apagarHeroi, getHeroiPeloId} from '../controllers/herois.js'

router.post('/herois' , criarHeroi)
router.get('/herois' , getHerois)
router.get('/herois/:id' , getHeroiPeloId)
router.put('/herois/:id' , atualizarHeroi)
router.delete('/herois/:id' , apagarHeroi)

export default router
