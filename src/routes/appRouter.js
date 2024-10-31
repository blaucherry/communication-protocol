import { Router } from 'express'
const appRouter = Router()

appRouter.get('/', (_, res) => res.render('signin', {title: 'Login'}))
appRouter.get('/signup', (_, res) => res.render('signup',{title: 'Registro'}))
appRouter.get('/chat',(_,res)=> res.render('chat',{title: 'Chat'}))

export default appRouter