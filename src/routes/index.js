import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('', {title:'Protocolo de comunicacion'}))
router.get('/signin', (req, res) => res.render('signin', {title: 'Login'}))
router.get('/signup', (req, res) => res.render('signup',{title: 'Registro'}))

export default router