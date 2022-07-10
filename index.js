import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Conexión exitosa a la BD...');
} catch (error) {
    console.error('Error en la BD:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
 
app.listen(5000, () => console.log('El servidor está corriendo en el puerto 5000'));