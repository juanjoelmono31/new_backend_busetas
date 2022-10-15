import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path';
import conductorRoutes from './routes/conductor.routes'
import vehiculoRoutes from './routes/vehiculo.routes'
import ctrlVehiculoRoutes from './routes/ctrlVehiculo.routes'
import configVariblesRoutes from './routes/configVariables.routes'
import rodamientoRoutes from './routes/rodamiento.routes'


const app = express() 


//Settings 
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))



//routes
app.get('/', (req, res) => {
    res.json({
        message:'Welcome'
    })
})
// Esta carpeta se esta utilizando para almacenar archivos publicos
app.use('/uploads', express.static(path.resolve('uploads')));

app.use('/conductor', conductorRoutes)
app.use('/vehiculo', vehiculoRoutes)
app.use('/control', ctrlVehiculoRoutes)
app.use('/variables', configVariblesRoutes)
app.use('/rodamiento', rodamientoRoutes)

export default app;
