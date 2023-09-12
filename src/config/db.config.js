import mongoose from "mongoose";

async function connect(){
    try {

        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/livraria")
        return console.log("Conectado ao banco")
        
    } catch (error) {
        console.log(error)
    }
}

export default connect