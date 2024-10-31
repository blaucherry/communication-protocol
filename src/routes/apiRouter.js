import { Router } from 'express'
const apiRouter = Router()

apiRouter.post('/signup', (req, res) => {
    const { email, password } = req.body
    console.log(req.body, email, password)
    // generateAsymmetricKeys, save public key in the server and send to client the secret key
    // Generate a hash using the password, save the hash creted with the password, return id of user register
    res.json({ "userID": '1234' }/*, file.pem wit the secret key*/);
})

apiRouter.post('/signin', (req, res) => {
    const { email, password } = req.body

    // Generate a hash using the password, get from the database the stored hashed password, compare both hashes

    res.json({ "userID": '1234' })
})

apiRouter.get('/create/chat', (req, res) => {
    const { email } = req.body
    // Buscar en DB el usuario con email

    res.json({ "recipientUserID": "4321" })
})

apiRouter.get('/request/session', (req, res) => {
    const { recipentUserID } = req.body
    // Search recipent public key in DB using their user ID
    // This wil be received by the sender in order to create a secret with the message
    res.json({ "public-key": "puclic-key" })
})

apiRouter.post('/send/secret', (req, res) => {
    const { secret } = req.body
    // Save in DB the secret between the userID and recipentID
    res.json({ status: "ok" })
})

apiRouter.get('/receive/messages', (req, res) => {
    const { userID, recipentUserID } = req.body
    // Search secret messages stored in DB with userID and recipentUserID

    res.json({ messages: ["", ""] })
})

apiRouter.post('/send/signed/message', (req, res) => {
    const { sign, secret, userID } = req.body
    // Search sender public key in DB using their user ID
    res.json({ "public-key": "puclic-key", sign: sign, secret: secret })
})

export default apiRouter