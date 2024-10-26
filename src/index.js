import express from 'express'
import {dirname, join}from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from   './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views')  ) //Carpeta de las vistas
app.set('view engine', 'ejs') //Motor de plantilla

app.use(indexRoutes)

app.use(express.static(join(__dirname,'public')))

app.listen(8080)
console.log("Server is listening on port", 8080)

