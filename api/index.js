import  express  from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import routeAuth from './routes/auth.js'
import routeUsers from './routes/users.js'
import routeHotels from './routes/hotels.js'
import routeRooms from './routes/rooms.js'

const app = express()

dotenv.config()

const connect = async ()=>{
try {
     await mongoose.connect(process.env.MONGO);
        } catch (error) {
            throw error;
        }
};



mongoose.connection.on("disconnected", ()=>{
    console.log('mongo disco :c')
})

app.get("/", (req,res)=>{
    res.send("HOLA AMIGOS")
} )

//middleWares
app.use(express.json())

app.use("/api/auth", routeAuth);
app.use("/api/users", routeUsers);
app.use("/api/hotels", routeHotels);
app.use("/api/rooms", routeRooms);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong !"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800, ()=>{
    connect();
    console.log('connected hh')
})