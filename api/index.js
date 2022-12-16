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

app.use("/auth", routeAuth);
app.use("/users", routeUsers);
app.use("/hotels", routeHotels);
app.use("/rooms", routeRooms);

app.listen(8800, ()=>{
    connect();
    console.log('connected hh')
})