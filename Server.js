const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")

const routes= require("./routes/ToDoRoute")
require('dotenv').config();

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("connected to MongoDB..!")).catch((err)=>console.log(err))
app.use(routes)

/*mongoose.connect(process.env.MONGO_URI, {
    // ... other options
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Connection error:", err))*/


app.listen(PORT,()=>console.log('Listening on: ${PORT} '))


